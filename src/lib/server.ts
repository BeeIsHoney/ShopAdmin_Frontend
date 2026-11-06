import 'server-only';
import {cookies} from 'next/headers';
import {NextRequest,NextResponse} from 'next/server';
import {createHash} from 'node:crypto';
import {BACKEND_URL,MAIN_URL} from './config';
import {sameRequestOrigin,proxyRequestOrigin} from './request-origin';
import type {Profile,Shop} from './types';
export type Pair={accessToken:string;refreshToken:string;accessExpiresAt:string;refreshExpiresAt:string};
export type BeeSession=Profile&{shop:Pick<Shop,'id'|'ownerId'|'name'|'code'|'enabled'|'subscription'>};
// A single universal admin session per browser. The chosen shop is stored only
// after the backend confirms that this owner is assigned to it.
const prefix='shop_admin_universal_';
const validShopCode=(code:unknown):code is string=>typeof code==='string'&&/^[a-z0-9-]{3,60}$/.test(code);
const refreshes=new Map<string,{promise:Promise<Pair|null>;until:number}>();
export const jsonError=(message:string,status=400,code?:string)=>NextResponse.json({message,code},{status,headers:{'Cache-Control':'no-store'}});
export const checkOrigin=(req:NextRequest)=>{
 const target=proxyRequestOrigin(req.nextUrl.origin,req.headers.get('host'),req.headers.get('x-forwarded-proto'),req.headers.get('x-forwarded-host'));
 return sameRequestOrigin(req.headers.get('origin'),target.origin,target.host);
};
export async function upstream(path:string,init:RequestInit={}){
 return fetch(`${BACKEND_URL}/api/${path}`,{...init,cache:'no-store',redirect:'error',signal:init.signal??AbortSignal.timeout(45000)});
}
export async function mainUpstream(path:string,init:RequestInit={}){
 return fetch(`${MAIN_URL}/api/${path}`,{...init,cache:'no-store',redirect:'error',signal:init.signal??AbortSignal.timeout(45000)});
}
export async function saveTokens(pair:Pair,secure:boolean){
 const jar=await cookies();
 for(const [name,value,expiry] of [['access',pair.accessToken,pair.accessExpiresAt],['refresh',pair.refreshToken,pair.refreshExpiresAt]]){
  jar.set(prefix+name,value,{httpOnly:true,sameSite:'lax',secure,path:'/',maxAge:Math.max(0,Math.floor((new Date(expiry).getTime()-Date.now())/1000))});
 }
}
// The code cookie is HTTP-only; every subsequent operation also goes through
// the Shop Backend's owner/shop authorization (StorefrontService.own).
export async function shopCode():Promise<string|null>{
 const code=(await cookies()).get(prefix+'shop')?.value;
 return validShopCode(code)?code:null;
}
export async function saveShopCode(code:string,expiresAt:string,secure:boolean){
 if(!validShopCode(code))throw Error('Invalid shop code.');
 (await cookies()).set(prefix+'shop',code,{httpOnly:true,sameSite:'lax',secure,path:'/',maxAge:Math.max(0,Math.floor((new Date(expiresAt).getTime()-Date.now())/1000))});
}
export async function clearTokens(){const jar=await cookies();for(const k of ['access','refresh','shop'])jar.delete(prefix+k);}

export async function token(secure:boolean){
 if(!await shopCode())return null;
 const jar=await cookies(),access=jar.get(prefix+'access')?.value;
 if(access){try{const p=JSON.parse(Buffer.from(access.split('.')[1],'base64url').toString());if(typeof p.exp==='number'&&Number.isFinite(p.exp)&&p.exp*1000>Date.now()+60000)return access;}catch{}}
 const refresh=jar.get(prefix+'refresh')?.value;if(!refresh)return null;
 const key=createHash('sha256').update(refresh).digest('hex'),now=Date.now();
 for(const [k,v] of refreshes)if(v.until<now)refreshes.delete(k);
 let entry=refreshes.get(key);
 if(!entry){const promise=(async()=>{const r=await upstream('auth/refresh',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({refreshToken:refresh})});if(r.status>=500)throw Error('Shop Backend is unavailable.');return r.ok?await r.json() as Pair:null;})();entry={promise,until:now+30000};refreshes.set(key,entry);}
 const pair=await entry.promise;if(!pair){await clearTokens();return null;}await saveTokens(pair,secure);return pair.accessToken;
}
export async function currentProfile(access:string,code:string|null):Promise<BeeSession|null>{
 if(!validShopCode(code))return null;
 const headers={Authorization:`Bearer ${access}`};
 const [owner,response]=await Promise.all([upstream('auth/me',{headers}),upstream(`shops/${code}/profile`,{headers})]);
 if(owner.status>=500||response.status>=500)throw Error('Shop Backend is unavailable.');
 if(!owner.ok||!response.ok)return null;
 const p=await owner.json() as Profile,s=await response.json();
 if(p.role!=='ADMIN_USER'||!p.enabled||s.ownerId!==p.id||s.shopCode!==code||s.enabled===false)return null;
 return {...p,balance:s.balance,shop:{id:s.shopId,ownerId:s.ownerId,name:s.shopName,code:s.shopCode,enabled:true,subscription:s.subscription}};
}
export {permitted,validQuery} from './policy';
