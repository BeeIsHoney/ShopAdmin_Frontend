import {NextRequest,NextResponse} from 'next/server';
import {currentProfile,jsonError,mainUpstream,shopCode,token} from '@/lib/server';
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function GET(req:NextRequest){
 try{
  const access=await token(req.nextUrl.protocol==='https:'),code=await shopCode();
  if(!access||!await currentProfile(access,code))return jsonError('Please sign in.',401);
  const r=await mainUpstream('owner/events',{headers:{Authorization:`Bearer ${access}`,Accept:'text/event-stream'},signal:req.signal});
  if(!r.ok)return jsonError('Live updates are unavailable. Automatic refresh will continue.',r.status);
  if(!r.body||!r.headers.get('Content-Type')?.includes('text/event-stream'))return jsonError('Live updates are unavailable. Automatic refresh will continue.',502);
  return new NextResponse(r.body,{headers:{'Content-Type':'text/event-stream','Cache-Control':'no-cache, no-transform','Connection':'keep-alive','X-Accel-Buffering':'no'}});
 }catch{return jsonError('Live updates are unavailable. Automatic refresh will continue.',503);}
}
