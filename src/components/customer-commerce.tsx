'use client';
import Link from 'next/link';
import {useState} from 'react';
import {api,send,date,money} from '@/lib/client';
import type {Page} from '@/lib/types';
import {recordBalanceAdjustment} from '@/lib/customer-commerce';
import {useData,usePanel} from './context';
import {PageTitle} from './views';
import {Badge,Button,Detail,Empty,ErrorBox,Field,Form,Loading,Modal,Pager,SearchBox,val} from './ui';

type Customer={id:number;email:string;userName:string;displayName:string;balance:number;totalSpent:number;enabled:boolean;createdAt:string};
type Order={id:number;publicOrderId:string;customerId:number;gameName:string;packageName:string;quantity:number;sellPrice:number;status:string;manual:boolean;refunded:boolean;playerId?:string;serverId?:string;inputs:Record<string,string>;createdAt:string;purchaseId?:number};
type Transaction={id:number;publicTransactionId:string;customerId:number;publicOrderId?:string;type:string;amount:number;beforeBalance:number;afterBalance:number;note?:string;createdAt:string};
export function CustomerCommerce({mode}:{mode:'customers'|'customer-orders'|'customer-transactions'}){
 const {profile,invalidate,notify}=usePanel();const [page,setPage]=useState(0),[query,setQuery]=useState('');
 const {data,error}=useData(`${mode}/${page}`,()=>api<Page<Customer|Order|Transaction>>(`${mode}?page=${page}&size=30`));
 const [selected,setSelected]=useState<Customer|null>(null),[order,setOrder]=useState<Order|null>(null);
 const rows=(data?.content||[]).filter(v=>JSON.stringify(v).toLowerCase().includes(query.toLowerCase()));
 const title=mode==='customers'?'Customers':mode==='customer-orders'?'Customer orders':'Customer transactions';
 return <>{mode==='customer-orders'&&<div className="commerce-nav"><Link className="selected" href="/customer-orders">Order List</Link><Link href="/recharge-list">Recharge List</Link><Link href="/recharge-orders">Recharge Orders</Link></div>}<PageTitle title={title} sub="Your shop’s customer wallet and orders · MMK"/>
 <section className="card"><div className="toolbar"><SearchBox value={query} onChange={setQuery} placeholder="Search this page…"/></div>
 {error?<ErrorBox message={error} retry={invalidate}/>:!data?<Loading/>:!rows.length?<Empty title="No records yet"/>:mode==='customer-orders'?<div className="recharge-grid">{rows.map(item=>{const o=item as Order;return <article key={o.id} className="recharge-card"><header><div><b>{o.publicOrderId}</b><small>{date(o.createdAt)}</small></div><div><Button onClick={()=>setOrder(o)}>{o.manual?'Review order':'View order'}</Button></div></header><div className="recharge-person"><b>Customer #{o.customerId}</b><small>{o.manual?'Manual':'Automatic'}</small></div><dl><div><dt>Product</dt><dd>{o.gameName}<small className="order-card-package">{o.packageName} × {o.quantity}</small></dd></div><div><dt>Amount</dt><dd>{money(o.sellPrice)} MMK</dd></div><div><dt>Player / Server</dt><dd>{o.playerId||'—'} / {o.serverId||'—'}</dd></div><div><dt>Status</dt><dd><Badge value={o.status}/></dd></div></dl></article>;})}</div>:<div className="table-wrap"><table>
 <thead><tr>{(mode==='customers'?['Customer','Email','Balance · MMK','Spent · MMK','Status','Actions']:['Reference / Order','Customer','Type','Change · MMK','Before · MMK','After · MMK','Recorded']).map(h=><th key={h}>{h}</th>)}</tr></thead>
 <tbody>{rows.map(item=>{
 if(mode==='customers'){const c=item as Customer;return <tr key={c.id}><td><b>{c.displayName||c.userName}</b><small>#{c.id}</small></td><td>{c.email}</td><td>{money(c.balance)}</td><td>{money(c.totalSpent)}</td><td><Badge value={c.enabled}/></td><td><Button onClick={()=>setSelected(c)}>Adjust balance</Button></td></tr>;}

 const t=item as Transaction;return <tr key={t.id}><td><b>{t.publicTransactionId}</b><small>{t.publicOrderId}</small></td><td>#{t.customerId}</td><td>{t.type.replaceAll('_',' ')}<small>{t.note}</small></td><td className={t.amount>=0?'positive':'negative'}>{t.amount>0?'+':''}{money(t.amount)}</td><td>{money(t.beforeBalance)}</td><td>{money(t.afterBalance)}</td><td>{date(t.createdAt)}</td></tr>;
 })}</tbody></table></div>}
 {data&&<Pager page={page} totalPages={data.totalPages} total={data.totalElements} onChange={setPage}/>}</section>
 {selected&&<Modal title="Adjust customer balance" description={`${selected.displayName||selected.userName} · #${selected.id} · MMK`} onClose={()=>setSelected(null)}>
 <p className="muted-text">Current balance: {money(selected.balance)} MMK</p>
 <Form submit="Record adjustment" onCancel={()=>setSelected(null)} onSubmit={async f=>{
  const amount=Number(val(f,'amount'))*(val(f,'movement')==='DEBIT'?-1:1),note=val(f,'note').trim();
  if(!Number.isFinite(amount)||Number(val(f,'amount'))<=0||!note)throw Error('Enter a positive amount and a reason.');
  await recordBalanceAdjustment(profile.shop.code,profile.id,selected.id,{amount,note});
  setSelected(null);invalidate();notify('Customer balance updated.');
 }}><Field label="Movement"><select name="movement"><option value="CREDIT">Credit</option><option value="DEBIT">Debit</option></select></Field>
 <Field label="Amount · MMK"><input name="amount" type="number" min="0.01" step="0.01" required/></Field>
 <Field label="Reason"><input name="note" required maxLength={300} placeholder="Payment received / correction reference"/></Field></Form></Modal>}
 {order&&<Modal title={order.publicOrderId} onClose={()=>setOrder(null)}><dl className="details-grid">
 <Detail label="Customer">#{order.customerId}</Detail><Detail label="Status"><Badge value={order.status}/></Detail><Detail label="Product">{order.gameName}</Detail><Detail label="Package">{order.packageName} × {order.quantity}</Detail><Detail label="Amount">{money(order.sellPrice)} MMK</Detail><Detail label="Player ID">{order.playerId||'—'}</Detail><Detail label="Server ID">{order.serverId||'—'}</Detail>
 {Object.entries(order.inputs||{}).map(([k,v])=><Detail key={k} label={k}>{v}</Detail>)}</dl>
 {order.manual&&!order.refunded&&!['SUCCESS','FAILED','REFUNDED'].includes(order.status)&&<Form submit="Settle order" onSubmit={async f=>{await send(`customer-orders/${order.id}/settle`,{action:val(f,'action')});setOrder(null);invalidate();notify('Order settled.');}}>
 <Field label="Action"><select name="action"><option value="SUCCESS">Mark delivered</option><option value="REFUND">Refund MMK balance</option></select></Field></Form>}
 </Modal>}</>;
}
