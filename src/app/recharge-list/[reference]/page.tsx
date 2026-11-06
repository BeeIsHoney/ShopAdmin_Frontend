import {FinanceDetail} from '@/components/finance-detail';
export default async function Page({params}:{params:Promise<{reference:string}>}){
 const {reference}=await params;
 return <FinanceDetail key={reference} mode="recharge" reference={reference}/>;
}
