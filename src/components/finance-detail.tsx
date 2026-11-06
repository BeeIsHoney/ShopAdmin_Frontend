'use client';

import Link from 'next/link';
import {useEffect,useRef,useState,type ReactNode} from 'react';
import {ArrowLeft,Loader2} from 'lucide-react';
import {Modal} from './ui';
import {api,send} from '@/lib/client';
import {useData,usePanel} from './context';
import {ReviewPaymentModal} from '@/reference-ui/features/orders/components/ReviewPaymentModal';
import {UserStatusConfirmModal} from '@/reference-ui/features/users/components/UserStatusConfirmModal';
import {usersApi} from '@/reference-ui/shared/services/usersApi';
import {businessTime,orderItem,rechargeItem,type OrderRow,type RechargeRow} from '@/reference-ui/shared/services/financePanelApi';
import {formatCurrency} from '@/reference-ui/shared/utils/currency';
import type {Page} from '@/lib/types';

type Mode='orders'|'recharge';

export function financeDetailId(mode:Mode,value:string){
 const id=value.replace(mode==='orders'?/^ord-/:/^topup-/,'');
 return /^[1-9]\d{0,15}$/.test(id)?id:null;
}

function DetailRow({label,children,mono=false}:{label:string;children:ReactNode;mono?:boolean}){
 return <tr className="finance-detail-row"><th scope="row">{label}</th><td className={mono?'finance-detail-mono':undefined}>{children}</td></tr>;
}

function inputLabel(key:string){
 const token=key.toLowerCase().replace(/[^a-z0-9]/g,'');
 if(['playerid','userid','uid','id'].includes(token))return 'Player ID';
 if(['serverid','zoneid','server','zone'].includes(token))return 'Server ID';
 if(['charname','charactername'].includes(token))return 'Character Name';
 return key.replace(/([a-z])([A-Z])/g,'$1 $2').replace(/[_-]+/g,' ').replace(/^./,letter=>letter.toUpperCase());
}

export function FinanceDetail({mode,reference}:{mode:Mode;reference:string}){
 const {profile,invalidate,notify}=usePanel();
 const id=financeDetailId(mode,reference);
 const recharge=mode==='recharge';
 const back=recharge?'/recharge-list':'/order-list';
 const endpoint=recharge?'recharges':'customer-orders';
 const [paymentOpen,setPaymentOpen]=useState(false);
 const [banOpen,setBanOpen]=useState(false);
 const [action,setAction]=useState<'SUCCESS'|'REFUND'|null>(null);
 const [actionError,setActionError]=useState('');
 const [refundOpen,setRefundOpen]=useState(false);
 const actionRef=useRef(false);
 const result=useData<OrderRow|RechargeRow|null>(`finance-detail:${profile.shop.id}:${mode}:${id}`,()=>id?api(`${endpoint}/${id}`):Promise.resolve(null));
 const record=result.data;
 const customerId=record?.customerId;
 const user=useData(`finance-detail-user:${profile.shop.id}:${customerId??'pending'}`,()=>customerId?usersApi.detail(String(customerId)):Promise.resolve(null));
 const customer=user.data;
 const recent=useData(`finance-customer-orders:${profile.shop.id}:${customerId??'pending'}`,()=>customerId?api<Page<OrderRow>>(`users/${customerId}/orders?size=5`):Promise.resolve(null));
 const title=record?(recharge?(record as RechargeRow).publicTransactionId:(record as OrderRow).publicOrderId||`ord-${id}`):'Order information';
 const order=record&&!recharge?record as OrderRow:null;
 const topup=record&&recharge?record as RechargeRow:null;
 const status=record?(order?orderItem(order).status:rechargeItem(topup!).status):'';
 const statusClass=status==='Completed'?'completed':status==='Refunded'?'refunded':status==='Processing'||status==='Pending'?'processing':'failed';
 const displayName=customer?.displayName||customer?.username||order?.customerName||topup?.buyerName||'—';
 const userName=customer?.username&&customer.username!==displayName?`${displayName} (${customer.username})`:displayName;
 const updated=order?.updatedAt||topup?.reviewedAt||topup?.submittedAt||record?.createdAt;
 const inputs=Object.entries(order?.inputs||{}).filter(([,value])=>value!=null&&String(value).trim()!=='');
 const inputLabels=new Set(inputs.map(([key])=>inputLabel(key)));
 const canRefund=!!order&&!order.refunded&&['PENDING','PROCESSING'].includes(order.status)
  &&(order.canRefund===true||order.manual);

 useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[mode,reference]);


 async function settle(next:'SUCCESS'|'REFUND'){
  if(!order||actionRef.current)return;
  actionRef.current=true;setAction(next);setActionError('');
  try{if(next==='REFUND'){await send(`customer-orders/${order.id}/refund`,{});setRefundOpen(false);notify('Order refunded. Customer wallet credited.');}else{await send(`customer-orders/${order.id}/settle`,{action:next});notify('Order updated.');}invalidate();}
  catch(error){setActionError(error instanceof Error?error.message:'Unable to update the order.');}
  finally{actionRef.current=false;setAction(null);}
 }

 const backLink=<Link className="finance-detail-back" href={back}><ArrowLeft size={17}/><span>Back</span></Link>;

 return <main className="reference-finance-ui finance-detail-page" aria-label={recharge?'Recharge details':'Product order details'}>
  <div className="finance-detail-content">
   {!id||result.error||(!result.loading&&record===null)?<section className="finance-detail-card"><header className="finance-detail-header"><h1>Order information</h1>{backLink}</header><p role="alert" className="finance-detail-notice">{result.error||'Order not found.'}{result.error&&<button type="button" onClick={invalidate}>Try again</button>}</p></section>:!record?<section className="finance-detail-card"><header className="finance-detail-header"><h1>Order information</h1>{backLink}</header><p className="finance-detail-notice" role="status">Loading order details…</p></section>:<>
    {result.refreshError&&<p className="finance-detail-notice" role="alert">{result.refreshError}<button type="button" onClick={invalidate}>Try again</button></p>}
    <div className="finance-detail-layout"><div className="finance-detail-column"><section className="finance-detail-card" aria-labelledby="finance-order-title">
     <header className="finance-detail-header"><h1 id="finance-order-title">{title}</h1>{backLink}</header>
     <table className="finance-detail-table" aria-label="Order information"><tbody>
      {order&&<><DetailRow label="Name">{order.packageName}</DetailRow><DetailRow label="Product">{order.gameName}</DetailRow></>}
      <DetailRow label="Status"><span className={`finance-detail-status ${statusClass}`}>{status}</span></DetailRow>
      {order?<>
       <DetailRow label="Source">{order.manual?'Manual Order':'Direct Top-up'}</DetailRow>
       <DetailRow label="Quantity">{order.quantity}</DetailRow>
       <DetailRow label="Price">{formatCurrency(Number(order.unitPrice))}</DetailRow>
       <DetailRow label="Total">{formatCurrency(Number(order.sellPrice))}</DetailRow>
       {order.playerId&&!inputLabels.has('Player ID')&&<DetailRow label="Player ID" mono>{order.playerId}</DetailRow>}
       {order.serverId&&!inputLabels.has('Server ID')&&<DetailRow label="Server ID" mono>{order.serverId}</DetailRow>}
       {inputs.map(([key,value])=><DetailRow key={key} label={inputLabel(key)} mono>{String(value)}</DetailRow>)}
       {(canRefund||(order.manual&&!order.refunded&&['PENDING','PROCESSING'].includes(order.status)))&&<DetailRow label="Control"><div className="finance-detail-controls">{order.manual&&<button type="button" disabled={!!action} onClick={()=>void settle('SUCCESS')}>{action==='SUCCESS'?<Loader2 size={16} className="animate-spin"/>:null}Mark delivered</button>}{canRefund&&<button type="button" className="danger" disabled={!!action} onClick={()=>{setActionError('');setRefundOpen(true);}}>Refund</button>}</div></DetailRow>}
      </>:<>
       <DetailRow label="Amount">{formatCurrency(Number(topup!.amount))}</DetailRow>
       <DetailRow label="Txn No." mono>{topup!.publicTransactionId}</DetailRow>
       <DetailRow label="Payment"><button type="button" className="finance-detail-payment" onClick={()=>setPaymentOpen(true)}>View Payment</button></DetailRow>
       {topup!.adminNote&&<DetailRow label="Note">{topup!.adminNote}</DetailRow>}
      </>}
     </tbody></table>
     <footer className="finance-detail-timestamps">Created: {businessTime(record.createdAt)}<span aria-hidden="true"> | </span>Updated: {businessTime(updated)}</footer>
     {actionError&&<p className="finance-detail-notice" role="alert">{actionError}</p>}
    </section></div><div className="finance-detail-column">

    <section className="finance-detail-card" aria-labelledby="finance-user-title" aria-busy={user.loading}>
     <header className="finance-detail-header"><h2 id="finance-user-title">User</h2><button type="button" className={`finance-detail-ban ${customer?.status==='Banned'?'is-banned':''}`} disabled={!customer} onClick={()=>setBanOpen(true)}>{customer?.status==='Banned'?'UNBAN':'BAN'}</button></header>
     {(user.error||user.refreshError)&&<p className="finance-detail-notice" role="alert">{user.error||user.refreshError}<button type="button" onClick={invalidate}>Try again</button></p>}
     <table className="finance-detail-table" aria-label="User information"><tbody>
      <DetailRow label="Customer ID" mono>{customerId}</DetailRow>
      <DetailRow label="Name">{userName}</DetailRow>
      <DetailRow label="Email" mono>{customer?.email||topup?.email||'Not linked'}</DetailRow>
      <DetailRow label="Google" mono>{customer?customer.googleId||customer.google||'Not linked':user.loading?'Loading…':'—'}</DetailRow>
      <DetailRow label="Telegram" mono>{customer?customer.telegram||'Not linked':user.loading?'Loading…':'—'}</DetailRow>
      <DetailRow label="Role">{customer?.role||'—'}</DetailRow>
      <DetailRow label="Balance">{customer?formatCurrency(Number(customer.balance)):user.loading?'Loading…':'—'}</DetailRow>
      {customer&&<><DetailRow label="Status">{customer.status}</DetailRow><DetailRow label="Total Spent">{formatCurrency(Number(customer.totalSpent))}</DetailRow></>}
     </tbody></table>
    </section>
    <section className="finance-detail-card" aria-labelledby="finance-recent-title"><header className="finance-detail-header"><h2 id="finance-recent-title">Latest Orders History</h2></header>
     {(recent.error||recent.refreshError)&&<p role="alert" className="finance-detail-notice">{recent.error||recent.refreshError}<button type="button" onClick={invalidate}>Try again</button></p>}
     {!recent.data&&!recent.error?<p className="finance-detail-notice" role="status">Loading recent orders…</p>:recent.data&&!recent.data.content.length?<p className="finance-detail-notice">No recent orders are available.</p>:recent.data&&<div className="overflow-x-auto"><table className="finance-recent-table"><thead><tr><th>Order ID</th><th>Status</th><th>Price</th></tr></thead><tbody>{recent.data.content.map(item=><tr key={item.id}><td><Link href={`/order-list/ord-${item.id}`}>{item.publicOrderId||`ord-${item.id}`}</Link></td><td>{orderItem(item).status}</td><td>{formatCurrency(Number(item.sellPrice))}</td></tr>)}</tbody></table></div>}
    </section></div></div>
   </>}
  </div>
  {refundOpen&&order&&<Modal title={`Refund ${order.publicOrderId||`ord-${order.id}`}?`} onClose={()=>{if(!actionRef.current)setRefundOpen(false);}}>
   <p className="finance-refund-copy">Refund <strong>{formatCurrency(Number(order.sellPrice))}</strong> to this customer's wallet and stop this order?</p>
   {actionError&&<p className="finance-detail-notice" role="alert">{actionError}</p>}
   <div className="finance-detail-controls finance-refund-actions"><button type="button" disabled={!!action} onClick={()=>setRefundOpen(false)}>Cancel</button><button type="button" className="danger" disabled={!!action||!canRefund} onClick={()=>void settle('REFUND')}>{action==='REFUND'?<Loader2 size={16} className="animate-spin"/>:null}Confirm refund</button></div>
  </Modal>}
  <ReviewPaymentModal isOpen={paymentOpen&&!!topup} onClose={()=>setPaymentOpen(false)} order={topup?rechargeItem(topup):null} mode="view"/>
  <UserStatusConfirmModal isOpen={banOpen&&!!customer} onClose={()=>setBanOpen(false)} user={customer??null} action={customer?.status==='Banned'?'Unban':'Ban'} onConfirm={async selected=>{await usersApi.setBanned(selected.id,selected.status!=='Banned');invalidate();notify(selected.status==='Banned'?'User unbanned.':'User banned.');}}/>
 </main>;
}
