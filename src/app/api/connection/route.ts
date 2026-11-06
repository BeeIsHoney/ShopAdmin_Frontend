import {NextResponse} from 'next/server';
import {upstream} from '@/lib/server';
import {inspectShopHealth,inspectMainConnection} from '@/lib/service-compatibility';
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function GET(){
 const reply=(body:unknown)=>NextResponse.json(body,{headers:{'Cache-Control':'no-store'}});
 try{
  const health=await upstream('health'),body=await health.json().catch(()=>({}));
  const problem=inspectShopHealth(health.status,body);if(problem)return reply(problem);
  const main=await upstream('health/main'),connection=await main.json().catch(()=>({}));
  return reply(inspectMainConnection(main.status,connection,body.version));
 }catch{return reply({state:'offline',message:'Shop Backend is unavailable. Start Shop Backend on port 8081 and check the connection again.'});}
}
