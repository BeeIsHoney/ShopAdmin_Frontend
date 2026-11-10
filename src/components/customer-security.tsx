'use client';
import {useState} from 'react';
import {usersApi,type IpBan,type UserSecurity} from '@/reference-ui/shared/services/usersApi';
import {date} from '@/lib/client';
import {useData,usePanel} from './context';

type Draft={ip:string;sourceUserId?:number;reason:string;permanentBanAccounts:boolean};
function BanForm({draft,onCancel,onSaved}:{draft:Draft;onCancel:()=>void;onSaved:()=>void}){
 const [form,setForm]=useState(draft),[busy,setBusy]=useState(false),[error,setError]=useState('');
 return <form className="customer-ip-form" onSubmit={async event=>{event.preventDefault();if(busy)return;setBusy(true);setError('');try{await usersApi.banIp(form);onSaved();}catch(reason){setError((reason as Error).message);}finally{setBusy(false);}}}>
  <label>IP address<input aria-label="IP address to ban" required value={form.ip} maxLength={64} readOnly={draft.sourceUserId!==undefined} onChange={e=>setForm(s=>({...s,ip:e.target.value}))}/></label>
  <label>Reason<input aria-label="IP ban reason" value={form.reason} maxLength={500} onChange={e=>setForm(s=>({...s,reason:e.target.value}))}/></label>
  <label className="customer-ip-check"><input type="checkbox" checked={form.permanentBanAccounts} onChange={e=>setForm(s=>({...s,permanentBanAccounts:e.target.checked}))}/>Also ban customer accounts detected on this IP in this shop</label>
  <p className="customer-security-help">This blocks the IP for this shop and closes its active shop sessions.</p>
  {error&&<p role="alert" className="customer-security-error">{error}</p>}
  <div className="customer-security-actions"><button type="button" onClick={onCancel} disabled={busy}>Cancel</button><button type="submit" disabled={busy} className="danger">{busy?'Saving…':'Confirm IP ban'}</button></div>
 </form>;
}
function Unban({ban,onSaved}:{ban:Pick<IpBan,'id'|'ip'>;onSaved:()=>void}){
 const [confirm,setConfirm]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState('');
 return <span className="customer-ip-unban">{confirm?<><span>Unban {ban.ip}?</span><button disabled={busy} type="button" onClick={async()=>{setBusy(true);try{await usersApi.unbanIp(ban.id);onSaved();setConfirm(false);}catch(reason){setError((reason as Error).message);}finally{setBusy(false);}}}>{busy?'Saving…':'Confirm'}</button><button type="button" disabled={busy} onClick={()=>setConfirm(false)}>Cancel</button></>:<button type="button" aria-label={`Unban IP ${ban.ip}`} onClick={()=>setConfirm(true)}>Unban IP</button>}{error&&<small role="alert" className="customer-security-error">{error}</small>}</span>;
}
export function CustomerSecurity({userId}:{userId:string}){
 const {profile,invalidate}=usePanel();const [draft,setDraft]=useState<Draft|null>(null);
 const data=useData<UserSecurity>(`customer-security:${profile.shop.id}:${userId}`,()=>usersApi.security(userId));
 return <section className="customer-security" aria-label="Customer IP security"><h3>Recent IP addresses</h3><p className="customer-security-help">Activity in {profile.shop.name}</p>
  {(data.error||data.refreshError)&&<p role="alert" className="customer-security-error">{data.error||data.refreshError}<button type="button" onClick={invalidate}>Retry</button></p>}
  {!data.data&&!data.error?<p role="status">Loading IP activity…</p>:data.data&&!data.data.recentIps.length?<p className="customer-security-help">No recorded IP activity yet. An IP is recorded when the customer signs in or uses the website.</p>:data.data?.recentIps.map(item=><div className="customer-ip-row" key={item.ip}><div><strong>{item.ip}</strong><small>{date(item.lastSeenAt)} · {item.activeSession?'Active session':'Previous session'}</small></div>{item.banned&&item.banId?<Unban ban={{id:item.banId,ip:item.ip}} onSaved={invalidate}/>:<button type="button" className="danger" aria-label={`Ban IP ${item.ip}`} onClick={()=>setDraft({ip:item.ip,sourceUserId:Number(userId),reason:'',permanentBanAccounts:false})}>Ban IP</button>}</div>)}
  {draft&&<BanForm key={draft.ip} draft={draft} onCancel={()=>setDraft(null)} onSaved={()=>{setDraft(null);invalidate();}}/>}
 </section>;
}
export function ShopIpBans(){
 const {profile,invalidate}=usePanel();const [adding,setAdding]=useState(false);
 const result=useData<IpBan[]>(`shop-ip-bans:${profile.shop.id}`,()=>usersApi.ipBans());
 return <section className="customer-security customer-ip-blacklist" aria-label="Shop IP blacklist"><div className="customer-ip-heading"><div><h3>IP blacklist</h3><p className="customer-security-help">{profile.shop.name}</p></div><button type="button" onClick={()=>setAdding(v=>!v)}>{adding?'Close':'Add IP ban'}</button></div>
  {adding&&<BanForm draft={{ip:'',reason:'',permanentBanAccounts:false}} onCancel={()=>setAdding(false)} onSaved={()=>{setAdding(false);invalidate();}}/>}
  {(result.error||result.refreshError)&&<p role="alert" className="customer-security-error">{result.error||result.refreshError}<button type="button" onClick={invalidate}>Retry</button></p>}
  {!result.data&&!result.error?<p role="status">Loading IP blacklist…</p>:result.data&&!result.data.length?<p className="customer-security-help">No IP addresses are banned in this shop.</p>:result.data?.map(ban=><div className="customer-ip-row" key={ban.id}><div><strong>{ban.ip}</strong><small>{ban.reason||'IP restricted'} · {date(ban.createdAt)}</small>{ban.permanentBanAccounts&&<small>Account ban enabled</small>}</div><Unban ban={ban} onSaved={invalidate}/></div>)}
 </section>;
}
