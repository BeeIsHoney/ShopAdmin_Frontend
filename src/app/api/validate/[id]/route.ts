import {NextRequest,NextResponse} from 'next/server';
import {checkOrigin,currentProfile,jsonError,mainUpstream,shopCode,token} from '@/lib/server';
export const runtime='nodejs';
export async function POST(req:NextRequest,ctx:{params:Promise<{id:string}>}){
 if(!checkOrigin(req))return jsonError('Invalid request origin.',403);
 const {id}=await ctx.params;if(!/^[1-9]\d*$/.test(id))return jsonError('Invalid game.');
 const bodyText=await req.text();
 try{JSON.parse(bodyText);}catch{return jsonError('Invalid player details.');}
 try{
  const access=await token(req.nextUrl.protocol==='https:'),code=await shopCode();
  if(!access||!await currentProfile(access,code))return jsonError('Please sign in.',401);
  const r=await mainUpstream(`owner/games/${id}/check-player`,{method:'POST',headers:{Authorization:`Bearer ${access}`,'Content-Type':'application/json'},body:bodyText});
  return new NextResponse(await r.arrayBuffer(),{status:r.status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
 }catch{return jsonError('Player verification is unavailable. Please try again shortly.',503,'PLAYER_CHECK_UNAVAILABLE');}
}
