import {api} from './client';
import {commerceReferenceHash,commerceRequestKey} from './commerce-reference';

/** A lost response must not turn a repeated manual credit into a second credit. */
export async function recordBalanceAdjustment(shop:string,owner:number,customer:number,request:{amount:number;note:string}){
 const body=JSON.stringify(request);
 const hash=await commerceReferenceHash(body);
 const slot=`owner:${shop}:${owner}:customer:${customer}:adjustment:${hash}`;
 let key:string;
 try{key=sessionStorage.getItem(slot)||commerceRequestKey();sessionStorage.setItem(slot,key);}
 catch{throw Error('Allow browser session storage before adjusting a balance.');}
 const result=await api<{id:number}>(`customers/${customer}/balance-adjustments`,{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':key},body});
 if(!Number.isSafeInteger(result?.id)||result.id<1)throw Error('Unable to confirm the adjustment. Refresh transactions before retrying.');
 try{sessionStorage.removeItem(slot);}catch{/* Retaining a confirmed key is safe. */}
 return result;
}
