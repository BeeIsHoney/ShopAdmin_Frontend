import {NextRequest,NextResponse} from 'next/server';
import {checkOrigin,jsonError,permitted,shopCode,token,upstream,validQuery} from '@/lib/server';
import {missingCatalogRoute,catalogUpdateMessage} from '@/lib/service-compatibility';
export const runtime='nodejs';export const dynamic='force-dynamic';
type Context={params:Promise<{path:string[]}>};
async function handle(req:NextRequest,ctx:Context){
 if(req.method!=='GET'&&!checkOrigin(req))return jsonError('Invalid request origin.',403);
 const {path:parts}=await ctx.params,path=parts.join('/');if(!permitted(path,req.method))return jsonError('This operation is not available in the shop admin panel.',403);
 if(!validQuery(req.nextUrl.searchParams))return jsonError('Invalid query parameters.');
 const bodyText=req.method!=='GET'?await req.text():undefined;
 try{
  const access=await token(req.nextUrl.protocol==='https:'),code=await shopCode();
  if(!access)return jsonError('Please sign in.',401);
  if(code){
   const route=`shops/${code}/${path}`;
   const headers:Record<string,string>={Authorization:`Bearer ${access}`};
   if(req.headers.get('content-type'))headers['Content-Type']=req.headers.get('content-type')!;
   if(req.headers.get('idempotency-key'))headers['Idempotency-Key']=req.headers.get('idempotency-key')!;
   const r=await upstream(route+req.nextUrl.search,{method:req.method,headers,...(bodyText!==undefined?{body:bodyText}:{})});
   if(r.status===404&&['groups','products'].includes(path)){const body=await r.clone().json().catch(()=>({}));if(missingCatalogRoute(path,r.status,body))return jsonError(catalogUpdateMessage,503,'SHOP_CATALOG_UPDATE_REQUIRED');}
   return new NextResponse(r.status===204?null:await r.arrayBuffer(),{status:r.status,headers:{'Content-Type':r.headers.get('Content-Type')||'application/json','Cache-Control':'no-store'}});
  }
 }catch{
  return jsonError(req.method==='GET'?'Shop Backend connection failed. Please try again shortly.':'Shop Backend connection failed. Unable to confirm the result. Refresh the data before retrying.',503,'SHOP_BACKEND_UNAVAILABLE');
 }
 return jsonError('Please sign in.',401);
}
export {handle as GET,handle as POST,handle as PUT,handle as DELETE};
