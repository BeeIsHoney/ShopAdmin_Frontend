"use client";
import {useState} from 'react';
import Link from 'next/link';
import {Plus,ArrowRight} from 'lucide-react';
import {api} from '@/lib/client';
import {groupTotals} from '@/lib/catalog-groups';
import type {Product} from '@/lib/types';
import {useData,usePanel} from './context';
import {Empty,ErrorBox,Loading,SearchBox} from './ui';
import {ListPager} from './list-ui';
export function Groups(){
 const {invalidate}=usePanel(),{data:groups,error,refreshError}=useData('product-groups',()=>api<{id:number;name:string}[]>('groups'));
 const {data:products,error:productError}=useData('shop-products',()=>api<Product[]>('products'));
 const [query,setQuery]=useState(''),[page,setPage]=useState(0),[size,setSize]=useState(10);
 const rows=(groups||[]).filter(g=>g.name.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())),current=Math.min(page,Math.max(0,Math.ceil(rows.length/size)-1));
 return <div className="bee-list-screen"><div className="bee-list-toolbar"><SearchBox value={query} onChange={v=>{setQuery(v);setPage(0);}} placeholder="Search groups…"/></div><p className="bee-list-hint">Groups are created by Main Admin. Add your shop products to an available group.</p>
 {(error||refreshError||productError)&&<ErrorBox message={error||refreshError||productError} retry={invalidate}/>}
 <section className="bee-list-card">{!groups&&!error?<Loading/>:!rows.length?<Empty title="No groups found" text="Ask Main Admin to create an active group, or adjust your search."/>:<div className="table-wrap"><table className="bee-table"><thead><tr><th>Group name</th><th>Products</th><th>Packages</th><th>Actions</th></tr></thead><tbody>{rows.slice(current*size,(current+1)*size).map(g=>{const totals=products?groupTotals(products,g.id):null;return <tr key={g.id}><td><b>{g.name}</b></td><td>{totals?.games??'—'}</td><td>{totals?.packages??'—'}</td><td><div className="bee-actions"><Link href={'/catalog?group='+g.id}><Plus size={14}/>Add products</Link><Link className="edit" href={'/products?group='+g.id}>View products<ArrowRight size={14}/></Link></div></td></tr>;})}</tbody></table></div>}<ListPager total={rows.length} page={current} size={size} onPage={setPage} onSize={n=>{setSize(n);setPage(0);}}/></section></div>;
}
