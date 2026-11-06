'use client';
import {useEffect,useMemo,useRef,useState,type FormEvent} from 'react';
import {Box,Check,ChevronDown,ChevronLeft,ChevronRight,Edit2,Filter,Plus,Search,Trash2,X} from 'lucide-react';
import {api} from '@/lib/client';
import type {ShopProduct} from '@/lib/shop-catalog';
import {
 checkedGroupPayload,createProductGroup,deleteProductGroup,getProductGroups,
 groupMembership,groupPackageId,groupPackageSelection,packageForGroup,
 unsupportedGroupMessage,updateProductGroup,type ShopProductGroup,
} from '@/lib/shop-product-groups';
import {usePanel} from './context';
import {ErrorBox,Loading} from './ui';

const clean=(s:string)=>s.trim().toLowerCase();
const formInput='oc-input';
type StatusFilter='all'|'active'|'inactive';

function StatusMark({active}:{active:boolean}){
 return <span className={'opg-status '+(active?'on':'off')} title={active?'Active':'Inactive'} aria-label={active?'Active':'Inactive'}>{active?<Check size={14}/>:<X size={14}/>}</span>;
}

function ProductGroupEditor({editing,products,groups,readOnly,onCancel,onSaved}:{editing:ShopProductGroup|null;products:ShopProduct[];groups:ShopProductGroup[];readOnly:boolean;onCancel:()=>void;onSaved:()=>void}){
 const available=useMemo(()=>[...products].sort((a,b)=>a.name.localeCompare(b.name)||a.id-b.id),[products]);
 const original=editing?.productId||String(available[0]?.id||'');
 const [productId,setProductId]=useState(original),[title,setTitle]=useState(editing?.title||''),[description,setDescription]=useState(editing?.description||'');
 const [sortOrder,setSortOrder]=useState(String(editing?.sortOrder??1)),[isActive,setActive]=useState(editing?.isActive!==false);
 const [selected,setSelected]=useState<string[]>(editing?.selectedPackageIds||[]),[packageQuery,setPackageQuery]=useState('');
 const [productQuery,setProductQuery]=useState(''),[showProduct,setShowProduct]=useState(false),[showPackages,setShowPackages]=useState(false);
 const [saving,setSaving]=useState(false),[saveError,setSaveError]=useState('');
 const productDropdown=useRef<HTMLDivElement>(null);
 const picked=available.find(p=>String(p.id)===productId);
 const productPackages= picked?packageForGroup(picked):[];
 const allowed=groupPackageSelection(available,productId,groups,editing?.id);
 const availablePackages=allowed.filter(p=>clean(p.name).includes(clean(packageQuery)));
 useEffect(()=>{
  if(!showProduct)return;
  const close=(e:PointerEvent)=>{if(!productDropdown.current?.contains(e.target as Node))setShowProduct(false);};
  document.addEventListener('pointerdown',close);return()=>document.removeEventListener('pointerdown',close);
 },[showProduct]);
 const selectProduct=(id:string)=>{
  setProductId(id);setSelected([]);setShowProduct(false);setPackageQuery('');
  const product=available.find(p=>String(p.id)===id);
  if(!editing&&product){const orders=groups.filter(g=>groupMembership(g,product)).map(g=>g.sortOrder);setSortOrder(String(orders.length?Math.max(...orders)+1:1));}
 };
 const save=async(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();if(saving)return;setSaveError('');
  if(readOnly){setSaveError(unsupportedGroupMessage);return;}
  setSaving(true);
  try{
   const payload=checkedGroupPayload({
    name:picked?.name||'',productId,title,description,
    code:editing?.code||`${clean(picked?.name||'').replace(/[^a-z0-9]+/g,'-')}-${clean(title).replace(/[^a-z0-9]+/g,'-')}`,
    sortOrder:Number(sortOrder),selectedPackageIds:selected,isActive,productCount:selected.length,packagesCount:selected.length,
   },available,groups,editing?.id);
   if(editing)await updateProductGroup(editing.id,payload);else await createProductGroup(payload);
   onSaved();
  }catch(e){setSaveError(e instanceof Error?e.message:'Unable to save Package Group.');}
  finally{setSaving(false);}
 };
 return <div className="oc-editor opg-editor">
  <button type="button" className="oc-back" onClick={onCancel}>← Back to Package Groups</button>
  <header className="oc-header"><h2>{editing?'Edit Package Group':'Create Package Group'}</h2></header>
  {readOnly&&<div className="oc-inline-note" role="status">{unsupportedGroupMessage}</div>}
  {saveError&&<div className="opg-error" role="alert">{saveError}</div>}
  <form className="oc-form" onSubmit={save}>
   <label className="oc-field"><span>Product<em>*</em></span>
    <div className="oc-combo" ref={productDropdown}>
     <button type="button" className="oc-input oc-combo-trigger" aria-expanded={showProduct} onClick={()=>{setProductQuery('');setShowProduct(v=>!v);}} disabled={!available.length}><span>{picked?.name||'Select a Product'}</span><ChevronDown size={16}/></button>
     {showProduct&&<div className="oc-combo-menu"><input autoFocus className={formInput} placeholder="Search product…" value={productQuery} onChange={e=>setProductQuery(e.target.value)}/><div className="oc-combo-options">{available.filter(p=>clean(p.name).includes(clean(productQuery))).map(p=><button type="button" role="option" aria-selected={productId===String(p.id)} key={p.id} onClick={()=>selectProduct(String(p.id))}><span>{p.name}<small className="opg-option-id">{p.id}</small></span>{productId===String(p.id)&&<Check size={14}/>}</button>)}</div></div>}
    </div>
   </label>
   <label className="oc-field"><span>Title<em>*</em></span><input className={formInput} value={title} required maxLength={150} onChange={e=>setTitle(e.target.value)} placeholder="e.g. UC Top-Up & Royale Pass"/></label>
   <label className="oc-field"><span>Description (Optional)</span><textarea className={formInput} value={description} maxLength={1000} rows={3} onChange={e=>setDescription(e.target.value)} placeholder="Enter package group description or category notes…"/></label>
   <div className="oc-grid">
    <label className="oc-field"><span>Sort Order</span><input type="number" className={formInput} value={sortOrder} min={0} step={1} required onChange={e=>setSortOrder(e.target.value)}/></label>
    <label className="oc-field"><span>Status</span><select className={formInput} value={isActive?'On':'Off'} onChange={e=>setActive(e.target.value==='On')}><option value="On">On</option><option value="Off">Off</option></select></label>
   </div>
   <section className="opg-packages">
    <div className="opg-packages-head"><b>Packages <span>{selected.length} Selected</span></b><button type="button" className="oc-btn" aria-expanded={showPackages} onClick={()=>setShowPackages(v=>!v)}><Plus size={14}/>{showPackages?'Hide Packages':'Add Packages'}</button></div>
    {showPackages&&<div className="opg-package-box">
     <div className="opg-package-controls"><button type="button" onClick={()=>setSelected(allowed.map(p=>groupPackageId(p.id)))}>Select All</button><span>|</span><button type="button" onClick={()=>setSelected([])}>Clear All</button></div>
     {allowed.length>6&&<div className="oc-search opg-package-search"><Search size={14}/><input className={formInput} placeholder="Search packages…" value={packageQuery} onChange={e=>setPackageQuery(e.target.value)}/></div>}
     {!picked?<p className="opg-muted">Choose a Product first.</p>:!productPackages.length?<p className="opg-muted">No packages found for {picked.name}.</p>:!allowed.length?<p className="opg-muted">All packages are already assigned to other groups.</p>:!availablePackages.length?<p className="opg-muted">No matching packages found.</p>:<div className="opg-package-options">{availablePackages.map(p=>{const id=groupPackageId(p.id),checked=selected.includes(id);return <button type="button" key={id} aria-pressed={checked} onClick={()=>setSelected(v=>checked?v.filter(n=>n!==id):[...v,id])}><span className="opg-pkg-name"><span className={'opg-tick '+(checked?'checked':'')}>{checked&&<Check size={12}/>}</span><b>{p.name}</b></span><span>{typeof p.price==='number'?`${p.price.toLocaleString('en-US')} MMK`:'Not priced'}</span></button>;})}</div>}
    </div>}
   </section>
   <div className="opg-form-actions"><button type="submit" className="oc-btn primary" disabled={saving||!available.length||readOnly}>{saving?'Saving…':editing?'Save Changes':'Create Package Group'}</button><button type="button" className="oc-btn ghost" onClick={onCancel} disabled={saving}>Cancel</button></div>
  </form>
 </div>;
}

/** Head Admin Package Group UI adapted to the BeeShop product/package ID and shop-owned permissions. */
export function OwnerProductGroups(){
 const {refresh,invalidate,notify}=usePanel();
 const [groups,setGroups]=useState<ShopProductGroup[]>([]),[products,setProducts]=useState<ShopProduct[]>([]);
 const [readOnly,setReadOnly]=useState(false),[loading,setLoading]=useState(true),[loadError,setLoadError]=useState('');
 const [reload,setReload]=useState(0),[query,setQuery]=useState(''),[productFilter,setProductFilter]=useState('all'),[statusFilter,setStatusFilter]=useState<StatusFilter>('all');
 const [filters,setFilters]=useState(false),[editing,setEditing]=useState<ShopProductGroup|null|undefined>(undefined),[deleting,setDeleting]=useState<ShopProductGroup|null>(null);
 const [page,setPage]=useState(1),[size,setSize]=useState(10),[busy,setBusy]=useState(false),[deleteError,setDeleteError]=useState('');
 useEffect(()=>{
  let alive=true;
  async function load(){setLoading(true);setLoadError('');try{
   const shop=await api<ShopProduct[]>('products');
   const result=await getProductGroups(shop);
   if(alive){setProducts(shop);setGroups(result.groups);setReadOnly(result.readOnly);}
  }catch(e){if(alive)setLoadError(e instanceof Error?e.message:'Unable to load Package Groups.');}
  finally{if(alive)setLoading(false);}}
  void load();return()=>{alive=false;};
 },[reload,refresh]);
 const filtered=useMemo(()=>groups.filter(g=>{
  const q=clean(query),matchesText=!q||[g.name,g.title,g.code||'',g.id].some(v=>clean(v).includes(q));
  const product=products.find(p=>String(p.id)===productFilter);
  const matchesProduct=productFilter==='all'||!!(product&&(groupMembership(g,product)||(g.mainManaged&&packageForGroup(product).some(p=>g.selectedPackageIds.includes(String(p.id))))));
  const matchesStatus=statusFilter==='all'||(g.isActive===(statusFilter==='active'));
  return matchesText&&matchesProduct&&matchesStatus;
 }).sort((a,b)=>productFilter==='all'?(a.name.localeCompare(b.name)||a.sortOrder-b.sortOrder):(a.sortOrder-b.sortOrder||a.title.localeCompare(b.title))),[groups,products,query,productFilter,statusFilter]);
 const maxPage=Math.max(1,Math.ceil(filtered.length/size)),current=Math.min(page,maxPage);
 const visible=filtered.slice((current-1)*size,current*size);
 const saved=()=>{setEditing(undefined);setReload(n=>n+1);invalidate();notify('Package Group saved.');};
 const remove=async()=>{
  if(!deleting||deleting.mainManaged||readOnly)return;
  setBusy(true);setDeleteError('');
  try{await deleteProductGroup(deleting.id);setDeleting(null);setReload(n=>n+1);invalidate();notify('Package Group deleted.');}
  catch(e){setDeleteError(e instanceof Error?e.message:'Unable to delete group.');}
  finally{setBusy(false);}
 };
 if(editing!==undefined)return <ProductGroupEditor key={editing?.id||'create'} editing={editing} products={products} groups={groups} readOnly={readOnly} onCancel={()=>setEditing(undefined)} onSaved={saved}/>;
 return <div className="oc-screen opg-screen">
  <div className="oc-toolbar">
   <div className="oc-search"><Search size={17}/><input className={formInput} value={query} onChange={e=>{setQuery(e.target.value);setPage(1);}} placeholder="Search groups…" aria-label="Search Package Groups"/></div>
   <button type="button" aria-label="Create Package Group" className="oc-iconbtn" title="Create Package Group" onClick={()=>setEditing(null)}><Plus size={18}/></button>
   <button type="button" aria-label="Filter Package Groups" aria-expanded={filters} className="oc-iconbtn" onClick={()=>setFilters(v=>!v)}><Filter size={17}/>{(productFilter!=='all'||statusFilter!=='all')&&<i className="opg-filter-dot"/>}</button>
  </div>
  {filters&&<div className="oc-filters"><label className="oc-field"><span>Product</span><select className={formInput} value={productFilter} onChange={e=>{setProductFilter(e.target.value);setPage(1);}}><option value="all">All Products</option>{products.map(p=><option key={p.id} value={String(p.id)}>{p.name}</option>)}</select></label><label className="oc-field"><span>Status</span><select className={formInput} value={statusFilter} onChange={e=>{setStatusFilter(e.target.value as StatusFilter);setPage(1);}}><option value="all">All Status</option><option value="active">Active</option><option value="inactive">Inactive</option></select></label><button type="button" className="oc-btn ghost" onClick={()=>{setProductFilter('all');setStatusFilter('all');setPage(1);}}>Reset filters</button></div>}
  {readOnly&&<div role="status" className="oc-inline-note">Main Admin shared Package Groups are available for viewing. Creating, editing or deleting shop-owned groups requires the updated Shop Backend API. No Main Admin records can be changed here.</div>}
  {loadError&&<ErrorBox message={loadError} retry={()=>setReload(n=>n+1)}/>}
  <div className="oc-table-card">
   <div className="oc-table-scroll"><table className="oc-table"><thead><tr><th>Product Name</th><th>Title</th><th>Packages</th><th>Sort</th><th className="opg-center">Status</th><th className="opg-right">Actions</th></tr></thead>
    <tbody>{loading?<tr><td colSpan={6}><Loading/></td></tr>:visible.length===0?<tr><td colSpan={6}><div className="opg-empty"><Box size={38}/><span>No package groups found</span></div></td></tr>:visible.map(group=><tr key={group.id}><td><b>{group.name}</b></td><td>{group.title||group.description||group.code||'—'}{group.mainManaged&&<small>Main Admin managed</small>}</td><td>{group.selectedPackageIds?.length??group.packagesCount??group.productCount??0}</td><td>{group.sortOrder}</td><td className="opg-center"><StatusMark active={group.isActive}/></td><td className="opg-right"><div className="opg-row-actions"><button type="button" disabled={!!group.mainManaged} title={group.mainManaged?'Managed by Main Admin':'Edit'} onClick={()=>setEditing(group)}><Edit2 size={14}/>Edit</button><button type="button" className="opg-danger" disabled={!!group.mainManaged} title={group.mainManaged?'Managed by Main Admin':'Delete'} onClick={()=>{setDeleteError('');setDeleting(group);}}><Trash2 size={14}/>Delete</button></div></td></tr>)}</tbody>
   </table></div>
   <div className="opg-pagination"><span>Total: <b>{filtered.length.toLocaleString('en-US')}</b></span><div className="opg-pagination-controls"><label className="opg-size"><span className="sr-only">Rows per page</span><select value={size} onChange={e=>{setSize(Number(e.target.value));setPage(1);}}>{[10,50,100].map(n=><option key={n} value={n}>{n}</option>)}</select><ChevronDown size={13}/></label><div className="opg-pager"><button type="button" aria-label="Previous page" onClick={()=>setPage(Math.max(1,current-1))} disabled={current===1}><ChevronLeft size={16}/></button><span>{current}</span><button type="button" aria-label="Next page" onClick={()=>setPage(Math.min(maxPage,current+1))} disabled={current===maxPage}><ChevronRight size={16}/></button></div></div></div>
  </div>
  {deleting&&<div className="opg-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget&&!busy)setDeleting(null);}}><div className="opg-modal" role="dialog" aria-modal="true" aria-label="Delete Package Group?"><h3>Delete Package Group?</h3><p>Are you sure you want to delete <strong>{deleting.title}</strong>? This action cannot be undone.</p>{deleteError&&<div role="alert" className="opg-error">{deleteError}</div>}<div className="opg-modal-buttons"><button type="button" className="oc-btn ghost" disabled={busy} onClick={()=>setDeleting(null)}>Cancel</button><button type="button" className="oc-btn opg-danger-button" disabled={busy} onClick={()=>void remove()}>{busy?'Deleting…':'Delete'}</button></div></div></div>}
 </div>;
}
