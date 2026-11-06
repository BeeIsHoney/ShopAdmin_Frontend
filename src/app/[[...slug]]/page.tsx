import {redirect} from 'next/navigation';
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){
 const {slug}=await params;if(slug?.[0]==='register'||slug?.[0]==='shops')redirect('/login');return null;
}
