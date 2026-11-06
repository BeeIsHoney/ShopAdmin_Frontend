"use client";
import {Suspense,useState,useEffect} from 'react';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import {Plus,Filter,Pencil,Trash2,Package,X} from 'lucide-react';
import {api} from '@/lib/client';
import type {ShopProduct} from '@/lib/shop-catalog';
import {requestedGroup} from '@/lib/catalog-groups';
import {listedPackages,ownerProducts} from '@/lib/owner-list';
import {useData,usePanel} from './context';
import {Button,SearchBox,Loading,Empty,ErrorBox,Modal,Form} from './ui';
import {ListPager,ListStatus} from './list-ui';
export function ShopProducts(){return <Suspense fallback={<Loading/>}><ProductsList/></Suspense>;}
function ProductsList(){
 const params=useSearchParams(),initial=requestedGroup(params.toString()),{invalidate,notify}=usePanel();
 const {data,error,refreshError}=useData('shop-products',()=>api<ShopProduct[]>('products'));
 const {data:groups,error:groupError}=useData('product-groups',()=>api<{id:number;name:string}[]>('groups'));
 const [query,setQuery]=useState(''),[group,setGroup]=useState(initial),[status,setStatus]=useState('ALL'),[open,setOpen]=useState(false),[page,setPage]=useState(0),[size,setSize]=useState(10),[remove,setRemove]=useState<ShopProduct|null>(null);
 useEffect(()=>{setGroup(initial);setPage(0);},[initial]);
 const rows=ownerProducts(data||[],query,group,status),current=Math.min(page,Math.max(0,Math.ceil(rows.length/size)-1)),count=Number(!!group)+Number(status!=='ALL');
 return <div className="bee-list-screen">
 <div className="bee-list-toolbar"><SearchBox value={query} onChange={v=>{setQuery(v);setPage(0);}} placeholder="Search products…"/><Link href={'/catalog'+(group?'?group='+group:'')} className="bee-square" aria-label="Add product from Main catalog" title="Add product"><Plus size={16}/></Link><button className="bee-square" aria-label="Product filters" aria-expanded={open} onClick={()=>setOpen(!open)}><Filter size={16}/>{count>0&&<i>{count}</i>}</button></div>
 {open&&<div className="bee-filters"><header><b>Filters</b><button className="text-button" onClick={()=>{setGroup('');setStatus('ALL');setPage(0);}}>Reset</button><button className="icon-btn" aria-label="Close filters" onClick={()=>setOpen(false)}><X size={14}/></button></header><label className="field"><span>Main group</span><select value={group} onChange={e=>{setGroup(e.target.value);setPage(0);}}><option value="">All groups</option>{groups?.map(g=><option key={g.id} value={g.id}>{g.name}</option>)}</select></label><label className="field"><span>Status</span><select value={status} onChange={e=>{setStatus(e.target.value);setPage(0);}}><option value="ALL">All statuses</option><option value="ACTIVE">Active</option><option value="INACTIVE">Inactive</option></select></label></div>}
 {(error||refreshError||groupError)&&<ErrorBox message={error||refreshError||groupError} retry={invalidate}/>}
 <section className="bee-list-card">{!data&&!error?<Loading/>:!rows.length?<Empty title="No shop products found" text="Use + to select an existing Main product and packages for this shop."/>:<div className="table-wrap"><table className="bee-table"><thead><tr><th>Name</th><th>Main group</th><th>Packages</th><th>Sort</th><th>Status</th><th>Actions</th></tr></thead><tbody>{rows.slice(current*size,(current+1)*size).map(g=>{const packs=listedPackages(g),names=Array.from(new Set(packs.map(k=>k.groupName).filter(Boolean)));return <tr key={g.id}><td><b>{g.name}</b></td><td>{names.join(', ')||'—'}</td><td>{packs.length}</td><td>{g.sortOrder||0}</td><td><ListStatus active={g.active!==false}/></td><td><div className="bee-actions"><Link href={'/product-packages?game='+g.id}><Package size={14}/>Packages</Link><Link className="edit" href={'/catalog/edit/'+g.id}><Pencil size={14}/>Edit</Link><button className="delete" onClick={()=>setRemove(g)}><Trash2 size={14}/>Delete</button></div></td></tr>;})}</tbody></table></div>}<ListPager total={rows.length} page={current} size={size} onPage={setPage} onSize={n=>{setSize(n);setPage(0);}}/></section>
 {remove&&<Modal title="Remove shop product?" description={remove.name} onClose={()=>setRemove(null)}><Form submit="Remove from shop" danger onCancel={()=>setRemove(null)} onSubmit={async()=>{await api('products/'+remove.id,{method:'DELETE'});setRemove(null);invalidate();notify('Product removed from this shop.');}}><p>This removes your shop listing and its package settings. Main products and order history are preserved.</p></Form></Modal>}
 </div>;
}
