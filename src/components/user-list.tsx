'use client';
import {useEffect,useState} from 'react';
import {Box,ChevronLeft,ChevronRight,Filter,Info,Mail,Search,Send,X} from 'lucide-react';
import {api,date,money} from '@/lib/client';
import type {Page} from '@/lib/types';
import {usersApi,type UserDetail} from '@/reference-ui/shared/services/usersApi';
import {EditUserModal} from '@/reference-ui/features/users/components/EditUserModal';
import {UserFilterDropdown} from '@/reference-ui/features/users/components/UserFilterDropdown';
import {UserStatusConfirmModal} from '@/reference-ui/features/users/components/UserStatusConfirmModal';
import type {UserFilterState,UserItem} from '@/reference-ui/features/users/types/reference-user.types';
import {displayName} from '@/reference-ui/shared/utils/displayName';
import {useData,usePanel} from './context';
import {ErrorBox} from './ui';

const initialFilters:UserFilterState={plan:'all',showBanned:false,sort:'newest'};

export function UserList(){
 const {profile,cache,invalidate,notify}=usePanel();
 const [page,setPage]=useState(0),[size,setSize]=useState(10);
 const [query,setQuery]=useState(''),[search,setSearch]=useState('');
 const [filters,setFilters]=useState<UserFilterState>(initialFilters),[filterOpen,setFilterOpen]=useState(false);
 const [selected,setSelected]=useState<string|null>(null),[statusUser,setStatusUser]=useState<UserItem|null>(null);
 useEffect(()=>{const timer=setTimeout(()=>{setSearch(query.trim());setPage(0);},250);return()=>clearTimeout(timer);},[query]);
 const params=new URLSearchParams({page:String(page),size:String(size),q:search,userStatus:filters.showBanned?'BANNED':'ACTIVE',userSort:filters.sort});
 const result=useData(`shop-users:${profile.shop.id}:${params}`,()=>api<Page<UserDetail>>('users?'+params));
 const info=useData(`shop-user:${profile.shop.id}:${selected??'none'}`,()=>selected?usersApi.detail(selected):Promise.resolve(null));
 useEffect(()=>{if(result.data&&page>0&&page>=result.data.totalPages)setPage(Math.max(0,result.data.totalPages-1));},[result.data?.totalPages,page]);
 const rows=result.data?.content??[];
 const openInfo=(user:UserDetail)=>{cache.seed(`shop-user:${profile.shop.id}:${user.id}`,user);setSelected(user.id);};
 const loading=!result.data&&result.loading;
 return <div className="reference-finance-ui reference-users-ui w-full space-y-4" aria-label={`${profile.shop.name} users`}>
  <div className="flex flex-wrap items-center justify-between gap-3">
   <div><h2 className="text-xl font-bold text-white">Users</h2><p className="mt-1 text-xs text-white/45">{profile.shop.name} · {filters.showBanned?'Banned accounts':'Active accounts'}</p></div>
   <div className="flex items-center gap-2.5 flex-1 justify-end">
    <label className="relative flex-1 max-w-80"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"/><input aria-label="Search shop users" value={query} maxLength={100} onChange={e=>setQuery(e.target.value)} placeholder="Search ID, user, email, Telegram…" className="w-full h-[38px] bg-black/40 border border-white/10 rounded-lg pl-9 pr-9 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"/>{query&&<button type="button" aria-label="Clear user search" onClick={()=>setQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/50"><X size={14}/></button>}</label>
    <button type="button" aria-label="Open user filters" aria-expanded={filterOpen} onClick={()=>setFilterOpen(v=>!v)} className="glass-effect-btn h-[38px] w-[38px] flex items-center justify-center"><Filter size={16}/></button>
   </div>
  </div>
  {(result.error||result.refreshError)&&<ErrorBox message={result.error||result.refreshError} retry={invalidate}/>}
  <section className="card-container w-full overflow-hidden" aria-busy={result.loading}>
   <div className="w-full overflow-x-auto custom-scrollbar">
    <table className="w-full text-left text-[11px] md:text-sm whitespace-nowrap">
     <thead className="bg-white/5 text-white/50 border-b border-white/10"><tr>{['ID','User','Balance','Status','Linked','Created at','Action'].map(label=><th key={label} className="px-3 py-2.5 font-medium">{label}</th>)}</tr></thead>
     <tbody className="divide-y divide-white/5 text-white/80">
      {loading?<tr><td colSpan={7} className="p-12 text-center text-white/45" role="status">Loading shop users…</td></tr>:!rows.length?<tr><td colSpan={7} className="h-64"><div className="flex flex-col items-center justify-center gap-3 text-white/40"><Box size={38}/><p>{result.error?'Users unavailable':'Users Not Found'}</p></div></td></tr>:rows.map(user=><tr key={user.id} className="hover:bg-white/[0.04]">
       <td className="px-3 py-2.5 font-mono text-white/45">{user.id}</td>
       <td className="px-3 py-2.5 font-medium text-white/90"><button type="button" className="text-left hover:underline" onClick={()=>openInfo(user)}>{displayName(user)}</button>{user.email&&<small className="block mt-0.5 text-white/40">{user.email}</small>}</td>
       <td className="px-3 py-2.5 font-medium">{money(user.balance)} Ks</td>
       <td className="px-3 py-2.5"><span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-semibold border ${user.status==='Banned'?'border-rose-400/25 bg-rose-400/10 text-rose-300':'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'}`}>{user.status}</span></td>
       <td className="px-3 py-2.5"><div className="flex items-center gap-2"><span title={user.telegram?`Telegram ID: ${user.telegram}`:'Telegram not linked'}><Send size={16} className={user.telegram?'text-emerald-400':'text-white/20'}/></span><span title={user.email||'Email not linked'}><Mail size={16} className={user.email?'text-emerald-400':'text-white/20'}/></span><span title={user.google||'Google not linked'} className={`font-bold text-sm ${user.google?'text-emerald-400':'text-white/20'}`}>G</span></div></td>
       <td className="px-3 py-2.5 text-white/45 font-mono text-xs">{date(user.createdAt)}</td>
       <td className="px-3 py-2.5"><div className="flex items-center gap-1.5"><button type="button" aria-label={`User info for ${displayName(user)}`} onClick={()=>openInfo(user)} className="w-7 h-7 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 flex items-center justify-center"><Info size={16}/></button><button type="button" aria-label={`${user.status==='Banned'?'Unban':'Ban'} ${displayName(user)}`} onClick={()=>setStatusUser(user)} className="min-w-[50px] h-7 px-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-[10px] tracking-wide">{user.status==='Banned'?'UNBAN':'BAN'}</button></div></td>
      </tr>)}
     </tbody>
    </table>
   </div>
   <footer className="flex items-center justify-between gap-3 p-4 border-t border-white/10 bg-black/20">
    <span className="text-xs text-white/40">Total: <b className="text-white/90">{result.data?.totalElements??'—'}</b></span>
    <div className="flex items-center gap-3"><select aria-label="Users per page" value={size} onChange={e=>{setSize(Number(e.target.value));setPage(0);}} className="glass-effect-btn h-7 px-2 text-xs">{[10,25,50,100].map(n=><option key={n} value={n}>{n}</option>)}</select><div className="glass-effect-btn h-7 flex items-center gap-2 px-1"><button type="button" aria-label="Previous users page" disabled={!page||loading} onClick={()=>setPage(p=>p-1)}><ChevronLeft size={16}/></button><span className="w-6 text-xs text-center">{page+1}</span><button type="button" aria-label="Next users page" disabled={!result.data||result.data.last||loading} onClick={()=>setPage(p=>p+1)}><ChevronRight size={16}/></button></div></div>
   </footer>
  </section>
  {selected&&(info.error||info.refreshError)&&<ErrorBox message={info.error||info.refreshError} retry={invalidate}/>}
  <UserFilterDropdown isOpen={filterOpen} onClose={()=>setFilterOpen(false)} initialFilters={filters} onApply={next=>{setFilters(next);setPage(0);}}/>
  <EditUserModal isOpen={selected!==null} onClose={()=>setSelected(null)} user={info.data??null} currentPlan="Basic"/>
  <UserStatusConfirmModal isOpen={statusUser!==null} onClose={()=>setStatusUser(null)} user={statusUser} action={statusUser?.status==='Banned'?'Unban':'Ban'} onConfirm={async user=>{await usersApi.setBanned(user.id,user.status!=='Banned');invalidate();notify(user.status==='Banned'?'User unbanned.':'User banned. Active sessions have been revoked.');}}/>
 </div>;
}
