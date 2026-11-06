/** Cache lookup only. Reused keys are checked against the full payload by Main. */
export async function commerceReferenceHash(value:string):Promise<string>{
 const bytes=new TextEncoder().encode(value);
 if(crypto.subtle)return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(n=>n.toString(16).padStart(2,'0')).join('');
 // Phone testing over a LAN HTTP address has getRandomValues but no SubtleCrypto.
 let a=2166136261,b=3339675911;
 for(const n of bytes){a=Math.imul(a^n,16777619);b=Math.imul(b^n,2246822519);}
 return `local_${(a>>>0).toString(16)}_${(b>>>0).toString(16)}`;
}
export function commerceRequestKey():string{return Array.from(crypto.getRandomValues(new Uint8Array(16))).map(n=>n.toString(16).padStart(2,'0')).join('');}
