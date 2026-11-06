import {api,send} from '@/lib/client';
import type {AlertItem} from '../../features/content/types/alert.types';
import {imageSource} from '@/lib/shop-catalog';
import {readImageFileAsDataUrl,validatePreviewImageFile} from '../utils/imageFile';
import type {PaymentInfoItem} from '../../features/settings/types/payment.types';
type Account={id:number;paymentMethod:string;displayName:string;accountName:string;accountNumber:string;qrUrl?:string;methodIconUrl?:string;enabled:boolean};
const map=(p:Account):PaymentInfoItem=>({id:String(p.id),paymentMethod:p.paymentMethod,displayName:p.displayName,accountName:p.accountName,phoneNumber:p.accountNumber,qrCodeUrl:p.qrUrl||'',methodIconUrl:p.methodIconUrl||'',isActive:p.enabled,autoDirect:false});
const body=(p:Omit<PaymentInfoItem,'id'>,old?:PaymentInfoItem|null)=>({paymentMethod:p.paymentMethod||old?.paymentMethod||p.displayName.slice(0,64),displayName:p.displayName,accountName:p.accountName,accountNumber:p.phoneNumber,enabled:p.isActive,qrUrl:p.qrCodeUrl===old?.qrCodeUrl?undefined:p.qrCodeUrl||'',methodIconUrl:p.methodIconUrl===old?.methodIconUrl?undefined:p.methodIconUrl||''});
type AlertDraft=Omit<AlertItem,'id'|'createdAt'>;
const alertBody=(value:AlertDraft)=>({title:value.title,message:value.message,type:value.type,
 imageUrl:value.imageStorageReference||value.imageUrl||'',targetUrl:value.targetUrl||'',
 startDate:value.type==='Select Date'?value.startDate:null,endDate:value.type==='Select Date'?value.endDate:null,isActive:value.isActive});
export const adminPanelApi={
 media:{upload:async(file:File)=>{
  const invalid=validatePreviewImageFile(file);if(invalid)throw Error(invalid);
  const saved=await send<{image:string}>('images',{dataUrl:await readImageFileAsDataUrl(file)});
  const url=imageSource(saved.image);if(!url)throw Error('The server did not return a valid image.');
  return {url,reference:saved.image};
 }},
 alerts:{list:()=>api<AlertItem[]>('alerts'),
  create:(value:AlertDraft)=>send<AlertItem>('alerts',alertBody(value)),
  update:(value:AlertItem,_previous?:AlertItem|null)=>send<AlertItem>('alerts/'+value.id,alertBody(value),'PUT'),
  remove:(id:string)=>api<void>('alerts/'+id,{method:'DELETE'})},
 payments:{
 list:async()=> (await api<Account[]>('payment-accounts')).map(map),
 settings:()=>api<{paymentsEnabled:boolean;methodsEnabled:boolean}>('payment-settings'),
 setService:(paymentsEnabled:boolean)=>send<{paymentsEnabled:boolean;methodsEnabled:boolean}>('payment-settings',{paymentsEnabled},'PUT'),
 setMaster:(methodsEnabled:boolean)=>send<{methodsEnabled:boolean}>('payment-settings',{methodsEnabled},'PUT'),
 save:async(p:Omit<PaymentInfoItem,'id'>|PaymentInfoItem,old?:PaymentInfoItem|null)=>send('payment-accounts'+(old?'/'+old.id:''),body(p,old),old?'PUT':'POST'),
 setActive:async(id:string,enabled:boolean)=>{const p=(await api<Account[]>('payment-accounts')).find(v=>String(v.id)===id);if(!p)throw Error('Payment account not found');return send('payment-accounts/'+id,{paymentMethod:p.paymentMethod,displayName:p.displayName,accountName:p.accountName,accountNumber:p.accountNumber,enabled},'PUT');},
 remove:(id:string)=>api('payment-accounts/'+id,{method:'DELETE'})
}};
