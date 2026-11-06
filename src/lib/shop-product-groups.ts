import {api,ApiError,send} from './client';
import type {ShopProduct,ShopPackage} from './shop-catalog';

/** Shop-owned product/package group, distinct from Main's shared /groups catalog. */
export interface ShopProductGroup {
 id:string;
 productId:string;
 name:string;
 title:string;
 description?:string;
 code?:string;
 sortOrder:number;
 selectedPackageIds:string[];
 isActive:boolean;
 productCount?:number;
 packagesCount?:number;
 /** Compatibility-only: group from the Main shared catalog; NEVER writable by Shop. */
 mainManaged?:boolean;
}
export type GroupPayload=Omit<ShopProductGroup,'id'|'mainManaged'>;
export type SharedGroup={id:number;name:string;enabled?:boolean;sortOrder?:number};
export const groupPackageId=(value:number)=>String(value);
export const packageForGroup=(product:ShopProduct)=>product.packages.filter(p=>p.listed!==false);

export function groupMembership(group:ShopProductGroup,product:ShopProduct):boolean {
 return group.productId ? group.productId===String(product.id) : group.name.trim().toLowerCase()===product.name.trim().toLowerCase();
}
export function groupPackageSelection(products:ShopProduct[],productId:string,groups:ShopProductGroup[],editingId?:string){
 const product=products.find(p=>String(p.id)===productId);
 if(!product)return [] as ShopPackage[];
 const occupied=new Set(groups.filter(g=>g.id!==editingId&&groupMembership(g,product)).flatMap(g=>g.selectedPackageIds));
 return packageForGroup(product).filter(p=>!occupied.has(groupPackageId(p.id)));
}
export function checkedGroupPayload(value:GroupPayload,products:ShopProduct[],groups:ShopProductGroup[],editingId?:string):GroupPayload {
 const product=products.find(p=>String(p.id)===value.productId);
 if(!product)throw Error('Choose an available shop product.');
 if(!value.title.trim())throw Error('Package Group title is required.');
 if(!Number.isSafeInteger(value.sortOrder)||value.sortOrder<0)throw Error('Sort Order must be a non-negative integer.');
 const selected=[...new Set(value.selectedPackageIds)];
 const allowed=new Set(groupPackageSelection(products,value.productId,groups,editingId).map(p=>String(p.id)));
 if(selected.some(id=>!allowed.has(id)))throw Error('A package cannot be assigned to multiple Package Groups or another product. Refresh and select again.');
 return {...value,name:product.name,productId:String(product.id),title:value.title.trim(),description:value.description?.trim()||undefined,sortOrder:value.sortOrder,selectedPackageIds:selected,productCount:selected.length,packagesCount:selected.length};
}
export function sharedGroupsAsReadonly(shared:SharedGroup[],products:ShopProduct[]):ShopProductGroup[]{
 return shared.map(g=>{
  const packs=products.flatMap(product=>packageForGroup(product).filter(p=>p.groupId===g.id).map(p=>String(p.id)));
  return {id:`main-${g.id}`,productId:'',name:g.name,title:g.name,description:'Managed by Main Admin',sortOrder:g.sortOrder??g.id,selectedPackageIds:packs,isActive:g.enabled!==false,packagesCount:packs.length,productCount:packs.length,mainManaged:true};
 });
}
export const unsupportedGroupMessage='Update and restart Shop Backend to create Package Groups for this shop.';
export const groupCompatibilityError=(e:unknown)=>e instanceof ApiError&&[404,405,501].includes(e.status);
export async function getProductGroups(products:ShopProduct[]):Promise<{groups:ShopProductGroup[];readOnly:boolean}> {
 try {
  const groups=await api<ShopProductGroup[]>('product-groups');
  if(!Array.isArray(groups))throw Error('Invalid Package Groups response.');
  return {groups,readOnly:false};
 }catch(e){
  if(!groupCompatibilityError(e))throw e;
  throw new Error(unsupportedGroupMessage);
 }
}
export async function createProductGroup(data:GroupPayload){return send<ShopProductGroup>('product-groups',data);}
export async function updateProductGroup(id:string,data:GroupPayload){return send<ShopProductGroup>(`product-groups/${encodeURIComponent(id)}`,data,'PUT');}
export async function deleteProductGroup(id:string){return api<void>(`product-groups/${encodeURIComponent(id)}`,{method:'DELETE'});}
