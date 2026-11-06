import type {InputField} from './types';
import type {ShopProduct,PackageDraft,ProductDraft} from './shop-catalog';
import {packageDraft,productDraft,productPayload,packagePayload} from './shop-catalog';
import {api,send,ApiError} from './client';

export const MANUAL_SOURCE='manual';
export const sourceKey=(p:ShopProduct)=>String(p.id);
// Never present upstream server/provider identifiers as Shop Owner product sources.
// Sources are MAIN catalog products, with Manual permanently first.
export function ownerSources(main:ShopProduct[]){
 const ids=new Set<number>();
 return main.filter(p=>{
  if(!Number.isSafeInteger(p.id)||p.id<=0||!p.name?.trim()||ids.has(p.id))return false;
  ids.add(p.id);return true;
 });
}
export type OwnerManualField={id:string;label:string;placeholder:string;required:boolean;type:'Text Input'};
export function textFields(fields:OwnerManualField[]):InputField[]{
 const used=new Set<string>();return fields.map((f,i)=>{
  const label=f.label.trim(),id=f.id.trim()||`field_${i+1}`;
  if(!label||!/^[A-Za-z][A-Za-z0-9_]{0,59}$/.test(id)||used.has(id.toLowerCase()))throw Error('Each manual input field needs a unique letter/number/underscore key (starting with a letter) and label.');
  used.add(id.toLowerCase());return {id,label,placeholder:f.placeholder.trim(),required:f.required,type:'Text Input'};
 });
}
export function listingDraft(g:ShopProduct,groupId:number){return productDraft(g,groupId,g.id);}
export async function saveShopProduct(id:number,d:ProductDraft){
 // Atomic update of shop metadata and package selections, including an empty new product.
 // Never forward provider secrets, hidden Main IDs or API validation config.
 if(!d.name.trim())throw Error('Enter a product name.');
 return send(`products/${id}`,d.packages.length?productPayload(d):{...d,groupId:null,name:d.name.trim(),packages:[]},'PUT');
}
export async function saveShopPackage(g:ShopProduct,p:PackageDraft,groupId:number){
 const d=listingDraft(g,groupId);
 d.packages=[...d.packages.filter(item=>item.id!==p.id),packagePayload(p)];
 return saveShopProduct(g.id,d);
}
export async function createOwnerProduct(value:{sourceProductId:number|null;name:string;groupId:number;note:string;image:string;active:boolean;sortOrder:number;inputFields:InputField[];deliveryEstimate:string|null}){
 // Requires corresponding new Shop Backend owner-product create contract.
 // No fake local success and no accidental Head Admin catalog mutations.
 try{return await send('products',{...value,groupId:null});}catch(e){
  if(e instanceof ApiError&&([405,501].includes(e.status)||e.status===404&&/endpoint not found|no static resource/i.test(e.message)))throw Error('This new standalone Product creation workflow needs the updated Shop Backend POST /shops/{code}/products endpoint. Existing Main products are untouched.');
  throw e;
 }
}
export async function createManualPackage(value:{productId:number;name:string;priceMode:'AUTO'|'MANUAL';sellingPriceMmk:number|null;discountPercent:number;active:boolean;sortOrder:number;image:string;note:string},packageId?:number){
 try{return await send(packageId?`packages/${packageId}`:'packages',value,packageId?'PUT':'POST');}catch(e){
  if(e instanceof ApiError&&([405,501].includes(e.status)||e.status===404&&/endpoint not found|no static resource/i.test(e.message)))throw Error('Manual packages need an updated Shop Backend POST /shops/{code}/packages endpoint.');
  throw e;
 }
}
export async function mainProduct(id:number){return api<ShopProduct>(`catalog/games/${id}`);}
