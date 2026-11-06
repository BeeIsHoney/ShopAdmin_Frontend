import {isTelegramChallenge} from '@/lib/telegram-otp';
import {NextRequest,NextResponse} from 'next/server';
import {checkOrigin,clearTokens,currentProfile,jsonError,saveShopCode,saveTokens,shopCode,token,upstream} from '@/lib/server';
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function GET(req:NextRequest){
 try{
  const code=await shopCode();if(!code)return jsonError('Please sign in.',401);
  const access=await token(req.nextUrl.protocol==='https:');
  if(!access)return jsonError('Please sign in.',401);
  const profile=await currentProfile(access,code);
  if(!profile){await clearTokens();return jsonError('Please sign in with your shop owner account.',401);}
  return NextResponse.json(profile,{headers:{'Cache-Control':'no-store'}});
 }catch{return jsonError('Shop Backend is unavailable. Please try again shortly.',503,'SHOP_BACKEND_UNAVAILABLE');}
}
export async function POST(req:NextRequest){
 if(!checkOrigin(req))return jsonError('Invalid request origin.',403);
 let body:unknown;
 try{body=await req.json();}catch{return jsonError('Enter a valid email and password.');}
 if(!body||typeof body!=='object')return jsonError('Email and password are required.');
 const {email,password}=body as Record<string,unknown>;
 if(typeof email!=='string'||typeof password!=='string'||!email.trim()||!password||email.length>254||password.length>72)return jsonError('Email and password are required.');
 try{
  // The Shop Backend validates shop membership before issuing a usable login.
  const r=await upstream('auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:email.trim(),password})});
  const result=await r.json().catch(()=>({message:'Unable to sign in.'}));
  if(!r.ok)return jsonError(result.message||'Unable to sign in.',r.status,result.code);
  if(isTelegramChallenge(result)){await clearTokens();return NextResponse.json(result,{headers:{'Cache-Control':'no-store'}});}
  if(typeof result.accessToken!=='string'||typeof result.refreshToken!=='string'||!Number.isFinite(Date.parse(result.accessExpiresAt))||!Number.isFinite(Date.parse(result.refreshExpiresAt)))return jsonError('Shop Backend returned an invalid login response.',502);
  const code=typeof result.shopCode==='string'?result.shopCode:'';
  if(!/^[a-z0-9-]{3,60}$/.test(code))return jsonError('Shop Backend did not resolve an assigned shop. Update and restart Shop Backend.',502);
  const profile=await currentProfile(result.accessToken,code);
  if(!profile)return jsonError('This owner cannot access the assigned shop.',403);
  const secure=req.nextUrl.protocol==='https:';
  await saveTokens(result,secure);
  await saveShopCode(code,result.refreshExpiresAt,secure);
  return NextResponse.json(profile,{headers:{'Cache-Control':'no-store'}});
 }catch{return jsonError('Shop Backend is unavailable. Please try again shortly.',503,'SHOP_BACKEND_UNAVAILABLE');}
}
export async function DELETE(req:NextRequest){
 if(!checkOrigin(req))return jsonError('Invalid request origin.',403);
 try{const access=await token(req.nextUrl.protocol==='https:');if(access)await upstream('auth/logout',{method:'POST',headers:{Authorization:`Bearer ${access}`}});}catch{}
 await clearTokens();return NextResponse.json({ok:true},{headers:{'Cache-Control':'no-store'}});
}
