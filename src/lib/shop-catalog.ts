import type {Product,Package} from './types';
export type Pricing={usdMmkRate:number;profitPercent:number;rounding:'EXACT'|'TENS'|'FIFTIES'|'HUNDREDS'};
export type ShopPackage=Package&{mainName:string;costUsd:number;priceConfigured:boolean;priceMode:'AUTO'|'MANUAL';sellingPriceMmk:number|null;discountPercent:number;sortOrder:number;note?:string;image?:string;serverName?:string};
export type ShopProduct=Omit<Product,'packages'>&{mainName:string;groupId?:number;sortOrder:number;packages:ShopPackage[]};
export type PackageDraft={id:number;name:string;priceMode:'AUTO'|'MANUAL';sellingPriceMmk:number|null;discountPercent:number;active:boolean;sortOrder:number;note:string;image:string};
export type ProductDraft={name:string;note:string;image:string;active:boolean;sortOrder:number;groupId:number;packages:PackageDraft[]};
export const mmk=(value:number|string|null|undefined)=>value==null?'Not priced':`${Number(value).toLocaleString('en-US',{maximumFractionDigits:2})} Ks`;
export function serverLabel(pack:Pick<ShopPackage,'providerId'|'serverName'>){return /^Server [1-9]\d*$/.test(pack.serverName||'')?pack.serverName!:/^srv_[1-9]\d*$/.test(pack.providerId||'')?'Server '+pack.providerId!.slice(4):'Server';}
export function imageSource(value?:string){if(!value)return '';if(/^shop-image:[a-f0-9-]{36}$/.test(value))return '/api/backend/images/'+value.slice(11);try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password?value:'';}catch{return '';}}
export function previewPrice(cost:number,settings:Pricing,p:Pick<PackageDraft,'priceMode'|'sellingPriceMmk'|'discountPercent'>){
 let base=p.priceMode==='MANUAL'?p.sellingPriceMmk:settings.usdMmkRate>0?cost*settings.usdMmkRate*(1+settings.profitPercent/100):null;
 if(base==null||!Number.isFinite(base)||base<=0)return {base:null,final:null};
 const unit={EXACT:0,TENS:10,FIFTIES:50,HUNDREDS:100}[settings.rounding];if(p.priceMode==='AUTO'&&unit)base=Math.ceil(Number(base.toFixed(6))/unit)*unit;
 base=Math.round((base+Number.EPSILON)*100)/100;return {base,final:Math.round((base*(1-p.discountPercent/100)+Number.EPSILON)*100)/100};
}
export function packageDraft(p:ShopPackage):PackageDraft{return {id:p.id,name:p.name,priceMode:p.priceMode||'AUTO',sellingPriceMmk:p.priceMode==='MANUAL'?p.sellingPriceMmk:null,discountPercent:Number(p.discountPercent||0),active:p.active!==false,sortOrder:p.sortOrder||0,note:p.note||'',image:p.image||''};}
const object=(value:unknown):value is Record<string,unknown>=>value!==null&&typeof value==='object'&&!Array.isArray(value);
const positiveId=(value:unknown)=>typeof value==='number'&&Number.isSafeInteger(value)&&value>0;
export function readShopProduct(raw:unknown,expectedId?:number):ShopProduct{
 const invalid=()=>new Error('Invalid product data from Main Backend. Update Main Backend to v1.5.1, then refresh this product.');
 // Older Main releases returned a one-element array for this single-product route.
 const value=Array.isArray(raw)?raw.length===1?raw[0]:null:raw;
 if(!object(value)||!positiveId(value.id)||expectedId!==undefined&&value.id!==expectedId||typeof value.name!=='string'||!value.name.trim()||!Array.isArray(value.packages))throw invalid();
 if(value.requiredFields!==undefined&&value.requiredFields!==null&&!Array.isArray(value.requiredFields))throw invalid();
 for(const key of ['image','note'])if(value[key]!=null&&typeof value[key]!=='string')throw invalid();
 const ids=new Set<number>();
 for(const p of value.packages){
  if(!object(p)||!positiveId(p.id)||ids.has(p.id as number)||typeof p.name!=='string'||typeof p.costUsd!=='number'||!Number.isFinite(p.costUsd)||p.costUsd<0||p.currency!=='MMK'||p.price!==null&&(typeof p.price!=='number'||!Number.isFinite(p.price)||p.price<0))throw invalid();
  ids.add(p.id as number);
 }
 return value as unknown as ShopProduct;
}
export function productDraft(raw:unknown,groupId=0,expectedId?:number):ProductDraft{const g=readShopProduct(raw,expectedId);return {name:g.name,note:g.note||'',image:g.image||'',active:g.active!==false,sortOrder:g.sortOrder||0,groupId:groupId||g.groupId||g.packages.find(p=>p.listed&&p.groupId)?.groupId||0,packages:g.packages.filter(p=>p.listed).map(packageDraft)};}
export function productPayload(d:ProductDraft){
 if(!d.name.trim()||!d.packages.length)throw Error('Enter a product name and select at least one package.');
 if(new Set(d.packages.map(p=>p.id)).size!==d.packages.length)throw Error('Select each Main package only once.');
 return {...d,groupId:null,name:d.name.trim(),packages:d.packages.map(packagePayload)};
}
export function packagePayload(p:PackageDraft){
 if(!p.name.trim()||!Number.isFinite(p.discountPercent)||p.discountPercent<0||p.discountPercent>99.99)throw Error('Check package names and discount percentages.');
 if(p.priceMode==='MANUAL'&&(!p.sellingPriceMmk||p.sellingPriceMmk<=0))throw Error('Enter a manual MMK price greater than zero.');
 return {...p,name:p.name.trim(),sellingPriceMmk:p.priceMode==='MANUAL'?p.sellingPriceMmk:null};
}
