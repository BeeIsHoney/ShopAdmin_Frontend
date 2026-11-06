import {NextRequest,NextResponse} from 'next/server';
import {checkOrigin,clearTokens,currentProfile,jsonError,saveShopCode,saveTokens,upstream} from '@/lib/server';
export const runtime='nodejs';export const dynamic='force-dynamic';

export async function POST(req:NextRequest){
 if(!checkOrigin(req))return jsonError('Invalid request origin.',403);
 let body:unknown;try{body=await req.json();}catch{return jsonError('Invalid Telegram login request.');}
 const initData=body&&typeof body==='object'?(body as Record<string,unknown>).initData:undefined;
 if(typeof initData!=='string'||!initData.trim()||initData.length>16384)return jsonError('Open the latest account button in TornadoServiceBot.');
 try{
  const r=await upstream('auth/login/telegram/webapp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({initData})});
  const result=await r.json().catch(()=>({message:'Telegram login failed.'}));
  if(!r.ok)return jsonError(result.message||'Telegram login failed.',r.status,result.code);
  if(result.status==='PENDING'&&result.registered===true&&Number.isSafeInteger(result.telegramId)){
   await clearTokens();
   return NextResponse.json({status:'PENDING',telegramId:result.telegramId,name:result.name},{headers:{'Cache-Control':'no-store'}});
  }
  const code=Array.isArray(result.shops)?result.shops.find((s:unknown)=>!!s&&typeof s==='object'&&typeof (s as {code?:unknown}).code==='string')?.code:undefined;
  if(result.status!=='ACTIVE'||typeof code!=='string'||!/^[a-z0-9-]{3,60}$/.test(code)
      ||typeof result.accessToken!=='string'||typeof result.refreshToken!=='string'
      ||!Number.isFinite(Date.parse(result.accessExpiresAt))||!Number.isFinite(Date.parse(result.refreshExpiresAt)))
   return jsonError('Invalid Telegram login response.',502);
  if(!await currentProfile(result.accessToken,code))return jsonError('This Telegram account cannot access the assigned shop.',403);
  const secure=req.nextUrl.protocol==='https:';await saveTokens(result,secure);await saveShopCode(code,result.refreshExpiresAt,secure);
  return NextResponse.json({status:'ACTIVE'},{headers:{'Cache-Control':'no-store'}});
 }catch{return jsonError('Shop Backend is unavailable. Please try again shortly.',503,'SHOP_BACKEND_UNAVAILABLE');}
}
