'use client';
import {useEffect,useMemo,useRef,useState,type FormEvent,type ReactNode} from 'react';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import {ArrowLeft,Check,ChevronDown,Edit2,Filter,Gamepad2,Package as PackageIcon,Plus,Search,Trash2,X} from 'lucide-react';
import {api,send} from '@/lib/client';
import {mmk,packageDraft,productDraft,imageSource,type PackageDraft,type Pricing,type ShopProduct} from '@/lib/shop-catalog';
import {MANUAL_SOURCE,ownerSources,textFields,createOwnerProduct,createManualPackage,saveShopProduct,saveShopPackage,type OwnerManualField} from '@/lib/owner-catalog';
import {useData,usePanel} from './context';
import {Button,ErrorBox,Loading,Empty,Modal,Form} from './ui';
import {ImageField} from './owner-image-field';
import {ListPager,ListStatus} from './list-ui';

const baseField='oc-input';
const clean=(s:string)=>s.trim().toLowerCase();
const listed=(p:ShopProduct)=>p.packages.filter(x=>x.listed!==false);
const initialManualField=():OwnerManualField=>({id:'',label:'',placeholder:'',required:true,type:'Text Input'});
function OwnerHeader({title,back,description}:{title:string;back?:()=>void;description?:string}){return <header className="oc-header"><div>{back&&<button type="button" onClick={back} className="oc-back"><ArrowLeft size={16}/>Back</button>}<h2>{title}</h2>{description&&<p>{description}</p>}</div></header>;}
function Field({label,required,children,hint}:{label:string;required?:boolean;children:ReactNode;hint?:string}){return <label className="oc-field"><span>{label}{required&&<em>*</em>}</span>{children}{hint&&<small>{hint}</small>}</label>;}
function Actions({save='Save',onCancel,busy}:{save?:string;onCancel:()=>void;busy:boolean}){return <div className="oc-submit"><button type="button" className="oc-btn ghost" onClick={onCancel} disabled={busy}>Cancel</button><button type="submit" className="oc-btn primary" disabled={busy}>{busy?'Saving…':save}</button></div>;}
function CatalogSelect({value,onChange,items,placeholder,disabled=false}:{value:string;onChange:(v:string)=>void;items:{value:string;label:string}[];placeholder:string;disabled?:boolean}){
 const [opened,setOpened]=useState(false),[query,setQuery]=useState(''),container=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!opened)return;const onPointer=(e:PointerEvent)=>{if(!container.current?.contains(e.target as Node))setOpened(false);};const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpened(false);};document.addEventListener('pointerdown',onPointer);document.addEventListener('keydown',onKey);return()=>{document.removeEventListener('pointerdown',onPointer);document.removeEventListener('keydown',onKey);};},[opened]);
 const selected=items.find(x=>x.value===value),filtered=items.filter(x=>clean(x.label).includes(clean(query)));
 return <div className="oc-combo" ref={container}><button className={baseField+' oc-combo-trigger'} type="button" disabled={disabled} aria-expanded={opened} onClick={()=>{setQuery('');setOpened(v=>!v);}}><span>{selected?.label||placeholder}</span><ChevronDown size={15}/></button>{opened&&<div className="oc-combo-menu"><input className={baseField} autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search…"/><div role="listbox" className="oc-combo-options">{filtered.map(item=><button key={item.value} type="button" role="option" aria-selected={item.value===value} onClick={()=>{onChange(item.value);setOpened(false);}}><span>{item.label}</span>{item.value===value&&<Check size={15}/>}</button>)}{!filtered.length&&<small>No matches</small>}</div></div>}</div>;
}
function PageToolbar({query,setQuery,openCreate,showFilter,filterOpen}:{query:string;setQuery:(v:string)=>void;openCreate:()=>void;showFilter:()=>void;filterOpen:boolean}){return <div className="oc-toolbar"><div className="oc-search"><Search size={17}/><input className={baseField} placeholder="Search…" value={query} onChange={e=>setQuery(e.target.value)}/>{query&&<button type="button" aria-label="Clear search" onClick={()=>setQuery('')}><X size={14}/></button>}</div><button type="button" className="oc-iconbtn" aria-label="Create new" onClick={openCreate}><Plus size={18}/></button><button type="button" className="oc-iconbtn" aria-label="Filters" aria-expanded={filterOpen} onClick={showFilter}><Filter size={17}/></button></div>;}
function CatalogTable({headers,children}:{headers:string[];children:ReactNode}){return <div className="oc-table-scroll"><table className="oc-table"><thead><tr>{headers.map(v=><th key={v}>{v}</th>)}</tr></thead><tbody>{children}</tbody></table></div>;}
function CatalogName({name,description,image,fallbackImage}:{name:string;description:string;image?:string;fallbackImage?:string}){
 const [failed,setFailed]=useState<string[]>([]);
 const src=[imageSource(image),imageSource(fallbackImage)].find(value=>value&&!failed.includes(value));
 return <div className="oc-item-name"><span className="oc-item-icon" aria-hidden="true">{src?<img key={src} src={src} alt="" width={40} height={40} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={()=>setFailed(values=>values.includes(src)?values:[...values,src])}/>:<Gamepad2 size={20}/>}</span><span className="oc-item-label"><b>{name}</b><small>{description}</small></span></div>;
}
function checkMainError(err:unknown){return err instanceof Error?err.message:'Unable to save. Please retry.';}

export function OwnerProducts(){
 const {invalidate,notify}=usePanel();
 const {data:main,error:mainError}=useData('main-shop-catalog',()=>api<ShopProduct[]>('catalog/games'));
 const {data:mine,error:mineError}=useData('shop-products',()=>api<ShopProduct[]>('products'));
 const [editing,setEditing]=useState<ShopProduct|'new'|null>(null),[query,setQuery]=useState(''),[status,setStatus]=useState('all'),[filters,setFilters]=useState(false),[page,setPage]=useState(0),[size,setSize]=useState(10),[remove,setRemove]=useState<ShopProduct|null>(null);

 const rows=useMemo(()=>[...(mine||[])].filter(p=>clean(p.name).includes(clean(query))&&(status==='all'||(p.active!==false)===(status==='active'))).sort((a,b)=>(a.sortOrder||0)-(b.sortOrder||0)||a.id-b.id),[mine,query,status]);
 const current=Math.min(page,Math.max(0,Math.ceil(rows.length/size)-1));
 if(editing!==null){if(mainError)return <ErrorBox message={mainError} retry={invalidate}/>;if(!main)return <Loading/>;return <OwnerProductForm key={editing==='new'?'new':editing.id} editing={editing==='new'?null:editing} main={main} onBack={()=>setEditing(null)} onSaved={()=>{setEditing(null);invalidate();notify('Product saved.');}}/>;}
 return <div className="oc-screen"><PageToolbar query={query} setQuery={v=>{setQuery(v);setPage(0);}} openCreate={()=>setEditing('new')} showFilter={()=>setFilters(v=>!v)} filterOpen={filters}/>
 {filters&&<div className="oc-filters"><Field label="Status"><select className={baseField} value={status} onChange={e=>{setStatus(e.target.value);setPage(0);}}><option value="all">All statuses</option><option value="active">Active</option><option value="inactive">Inactive</option></select></Field><button className="oc-btn ghost" onClick={()=>{setStatus('all');}}>Reset filters</button></div>}
 {(mainError||mineError)&&<ErrorBox message={mainError||mineError} retry={invalidate}/>}
 <div className="oc-table-card">{!mine?<Loading/>:!rows.length?<Empty title="No shop products" text="Use + to create a product from an available Main source or Manual."/>:<CatalogTable headers={['Name','Source','Packages','Sort','Status','Actions']}>{rows.slice(current*size,(current+1)*size).map(p=><tr key={p.id}><td><CatalogName name={p.name} description={p.category||'Product'} image={p.image||p.imageUrl} fallbackImage={main?.find(x=>x.id===p.id)?.image}/></td><td>{main?.find(x=>x.id===p.id)?.name||'Manual'}</td><td>{listed(p).length}</td><td>{p.sortOrder??0}</td><td><ListStatus active={p.active!==false}/></td><td><div className="oc-row-actions"><Link href={`/product-packages?product=${p.id}`} aria-label={`Packages for ${p.name}`}><PackageIcon size={15}/></Link><button aria-label={`Edit ${p.name}`} onClick={()=>setEditing(p)}><Edit2 size={15}/></button><button className="danger" aria-label={`Delete ${p.name}`} onClick={()=>setRemove(p)}><Trash2 size={15}/></button></div></td></tr>)}</CatalogTable>}<ListPager total={rows.length} page={current} size={size} onPage={setPage} onSize={n=>{setSize(n);setPage(0);}}/></div>
 {remove&&<Modal title="Remove shop product?" description={remove.name} onClose={()=>setRemove(null)}><Form submit="Remove from shop" danger onCancel={()=>setRemove(null)} onSubmit={async()=>{await api(`products/${remove.id}`,{method:'DELETE'});setRemove(null);invalidate();notify('Product removed from this shop.');}}>This does not remove the Main Admin source product or order history.</Form></Modal>}</div>;
}
function OwnerProductForm({editing,main,onBack,onSaved}:{editing:ShopProduct|null;main:ShopProduct[];onBack:()=>void;onSaved:()=>void}){
 const sourceProducts=ownerSources(main),originalSource=editing&&sourceProducts.some(p=>p.id===editing.id)?String(editing.id):editing?.mainName?'unavailable':MANUAL_SOURCE;
 const [source,setSource]=useState(originalSource||MANUAL_SOURCE),[name,setName]=useState(editing?.name||''),[note,setNote]=useState(editing?.note||''),[image,setImage]=useState(editing?.image||''),[active,setActive]=useState(editing?.active!==false),[sortOrder,setSortOrder]=useState(editing?.sortOrder||0),[delivery,setDelivery]=useState(editing?.deliveryEstimate||''),[fields,setFields]=useState<OwnerManualField[]>(()=>editing&&!sourceProducts.some(p=>p.id===editing.id)?(editing.requiredFields||[]).map((f,i)=>({id:f.id||f.key||`field_${i+1}`,label:f.label||f.name||'',placeholder:f.placeholder||'',required:f.required!==false,type:'Text Input'})):[]),[saving,setSaving]=useState(false),[uploading,setUploading]=useState(false),[error,setError]=useState('');
 const groupId=0;
 const selected=sourceProducts.find(p=>String(p.id)===source);
 function changeSource(v:string){setSource(v);const game=sourceProducts.find(p=>String(p.id)===v);if(game){setName(game.name);setFields([]);}else if(!editing){setName('');}}
 async function submit(e:FormEvent){e.preventDefault();if(saving||uploading)return;setSaving(true);setError('');try{
  if(!name.trim())throw Error('Enter a product name.');
  const inputFields=source===MANUAL_SOURCE?textFields(fields):[];
  if(editing){const d=productDraft(editing,groupId,editing.id);d.name=name.trim();d.note=note.trim();d.image=image;d.active=active;d.sortOrder=sortOrder;if(source===MANUAL_SOURCE){await send(`products/${editing.id}`,{...d,groupId:null,inputFields,deliveryEstimate:delivery.trim()||null},'PUT');}else await saveShopProduct(editing.id,d);}
  else await createOwnerProduct({sourceProductId:selected?.id||null,name:name.trim(),groupId,note:note.trim(),image,active,sortOrder,inputFields,deliveryEstimate:delivery.trim()||null});
  onSaved();
 }catch(err){setError(checkMainError(err));}finally{setSaving(false);}}
 const sources=[{value:MANUAL_SOURCE,label:'Manual'},...sourceProducts.map(p=>({value:String(p.id),label:p.name})),...(originalSource==='unavailable'?[{value:'unavailable',label:'Main source unavailable'}]:[])];
 return <div className="oc-editor"><OwnerHeader title={editing?'Edit Product':'Create Product'} back={onBack}/><form onSubmit={submit} className="oc-form">
 <Field label="Name" required><input className={baseField} required maxLength={128} value={name} onChange={e=>setName(e.target.value)} placeholder="Product name"/></Field>
 <Field label="Source" required><CatalogSelect value={source} onChange={changeSource} items={sources} placeholder="Select a source" disabled={!!editing}/>{editing&&<small>Source cannot change for an existing product.</small>}</Field>
 {editing&&<p className="oc-inline-note">Existing product source remains attached to its Main catalog identity.</p>}
 {source===MANUAL_SOURCE&&<div className="oc-manual"><div className="oc-section-heading"><b>User Input Fields</b><button type="button" className="oc-btn" onClick={()=>setFields(v=>[...v,initialManualField()])}><Plus size={14}/>Add Field</button></div>{fields.map((f,i)=><div className="oc-manual-field" key={i}><div className="oc-section-heading"><span>Field {i+1} · Text Input</span><button type="button" aria-label={`Remove field ${i+1}`} onClick={()=>setFields(v=>v.filter((_,k)=>i!==k))}><Trash2 size={14}/></button></div><div className="oc-grid"><Field label="Key" required><input className={baseField} maxLength={60} value={f.id} placeholder="player_id" onChange={e=>setFields(v=>v.map((k,j)=>j===i?{...k,id:e.target.value}:k))}/></Field><Field label="Label" required><input className={baseField} maxLength={80} value={f.label} placeholder="Player ID" onChange={e=>setFields(v=>v.map((k,j)=>j===i?{...k,label:e.target.value}:k))}/></Field></div><Field label="Placeholder"><input className={baseField} value={f.placeholder} maxLength={120} onChange={e=>setFields(v=>v.map((k,j)=>j===i?{...k,placeholder:e.target.value}:k))}/></Field><label className="oc-check"><input type="checkbox" checked={f.required} onChange={e=>setFields(v=>v.map((k,j)=>j===i?{...k,required:e.target.checked}:k))}/>Required field</label></div>)}{!fields.length&&<p className="oc-hint">Manual fields use Text Input only. There is no Select Type, API Validation, or provider field mapping.</p>}</div>}
 <Field label="Estimated Delivery"><input className={baseField} maxLength={120} disabled={source!==MANUAL_SOURCE} value={source===MANUAL_SOURCE?delivery:selected?.deliveryEstimate||''} onChange={e=>setDelivery(e.target.value)} placeholder="e.g. Less than 2 minutes"/></Field>
 <ImageField label="Logo / Image" value={image} onChange={setImage} onBusyChange={setUploading}/>
 <Field label="Important Note"><textarea className={baseField} rows={3} value={note} onChange={e=>setNote(e.target.value)} maxLength={1000}/></Field>
 <div className="oc-grid"><Field label="Status"><select className={baseField} value={active?'On':'Off'} onChange={e=>setActive(e.target.value==='On')}><option>On</option><option>Off</option></select></Field><Field label="Sort Order"><input className={baseField} type="number" min={0} step={1} value={sortOrder} onChange={e=>setSortOrder(Number(e.target.value))}/></Field></div>
 {!editing&&<p className="oc-hint">Products are created separately from Product Packages. The Shop Backend must support standalone product creation to save this form.</p>}
 {error&&<ErrorBox message={error}/>}<Actions onCancel={onBack} busy={saving||uploading} save={editing?'Update Product':'Create Product'}/>
 </form></div>;
}

export function OwnerPackages(){
 const {invalidate,notify}=usePanel(),params=useSearchParams();
 const {data:main,error:mainError}=useData('main-shop-catalog',()=>api<ShopProduct[]>('catalog/games'));
 const {data:mine,error:mineError}=useData('shop-products',()=>api<ShopProduct[]>('products'));
 const {data:pricing,error:pricingError}=useData('shop-pricing',()=>api<Pricing>('pricing'));
 const [editing,setEditing]=useState<{product:ShopProduct;pack:PackageDraft}|'new'|null>(null),[query,setQuery]=useState(''),[selectedProduct,setSelectedProduct]=useState(''),[status,setStatus]=useState('all'),[filters,setFilters]=useState(false),[page,setPage]=useState(0),[size,setSize]=useState(10),[remove,setRemove]=useState<{product:ShopProduct;pack:PackageDraft}|null>(null);
 useEffect(()=>{const p=params.get('product');if(p&&/^\d+$/.test(p)){setSelectedProduct(p);setPage(0);}},[params]);
 const rows=useMemo(()=>((mine||[]).flatMap(product=>listed(product).map(p=>({product,pack:packageDraft(p),source:p})))).filter(r=>clean(r.pack.name).includes(clean(query))&&(!selectedProduct||String(r.product.id)===selectedProduct)&&(status==='all'||r.pack.active===(status==='active'))).sort((a,b)=>(a.pack.sortOrder||0)-(b.pack.sortOrder||0)||a.product.id-b.product.id),[mine,query,selectedProduct,status]);
 const current=Math.min(page,Math.max(0,Math.ceil(rows.length/size)-1));
 if(editing!==null){if(mainError||mineError||pricingError)return <ErrorBox message={mainError||mineError||pricingError} retry={invalidate}/>;if(!main||!mine||!pricing)return <Loading/>;return <OwnerPackageForm key={editing==='new'?'new':`${editing.product.id}-${editing.pack.id}`} editing={editing==='new'?null:editing} main={main} mine={mine} pricing={pricing} initialProductId={selectedProduct} onBack={()=>setEditing(null)} onSaved={()=>{setEditing(null);invalidate();notify('Package saved.');}}/>;}
 return <div className="oc-screen"><PageToolbar query={query} setQuery={v=>{setQuery(v);setPage(0);}} openCreate={()=>setEditing('new')} showFilter={()=>setFilters(x=>!x)} filterOpen={filters}/>
 {filters&&<div className="oc-filters"><Field label="Product Type"><select className={baseField} value={selectedProduct} onChange={e=>{setSelectedProduct(e.target.value);setPage(0);}}><option value="">All products</option>{mine?.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select></Field><Field label="Status"><select className={baseField} value={status} onChange={e=>setStatus(e.target.value)}><option value="all">All statuses</option><option value="active">Active</option><option value="inactive">Inactive</option></select></Field><button type="button" className="oc-btn ghost" onClick={()=>{setSelectedProduct('');setStatus('all');}}>Reset filters</button></div>}
 {(mainError||mineError||pricingError)&&<ErrorBox message={mainError||mineError||pricingError} retry={invalidate}/>}
 <div className="oc-table-card">{!mine?<Loading/>:!rows.length?<Empty title="No shop packages" text="Use + to create a package for one of your Products."/>:<CatalogTable headers={['Name / Product','Selling Price','Discount','Sort','Status','Actions']}>{rows.slice(current*size,(current+1)*size).map(r=><tr key={`${r.product.id}-${r.pack.id}`}><td><CatalogName name={r.pack.name} description={r.product.name} image={r.pack.image} fallbackImage={r.product.image||r.product.imageUrl}/></td><td>{mmk(r.source.price)}</td><td>{r.pack.discountPercent||0}%</td><td>{r.pack.sortOrder||0}</td><td><ListStatus active={r.pack.active}/></td><td><div className="oc-row-actions"><button aria-label={`Edit ${r.pack.name}`} onClick={()=>setEditing({product:r.product,pack:r.pack})}><Edit2 size={15}/></button><button className="danger" aria-label={`Remove ${r.pack.name}`} onClick={()=>setRemove({product:r.product,pack:r.pack})}><Trash2 size={15}/></button></div></td></tr>)}</CatalogTable>}<ListPager total={rows.length} page={current} size={size} onPage={setPage} onSize={n=>{setSize(n);setPage(0);}}/></div>
 {remove&&<Modal title="Remove shop package?" description={remove.pack.name} onClose={()=>setRemove(null)}><Form submit="Remove package" danger onCancel={()=>setRemove(null)} onSubmit={async()=>{await send('packages/bulk',{packageIds:[remove.pack.id],action:'DELETE'});setRemove(null);invalidate();notify('Package removed from this shop.');}}>The Main package will not be deleted.</Form></Modal>}</div>;
}
function OwnerPackageForm({editing,main,mine,pricing,initialProductId,onBack,onSaved}:{editing:{product:ShopProduct;pack:PackageDraft}|null;main:ShopProduct[];mine:ShopProduct[];pricing:Pricing;initialProductId:string;onBack:()=>void;onSaved:()=>void}){
 const [productId,setProductId]=useState(String(editing?.product.id||initialProductId||'')),[sku,setSku]=useState(String(editing?.pack.id||'')),[name,setName]=useState(editing?.pack.name||''),[priceMode,setPriceMode]=useState<PackageDraft['priceMode']>(editing?.pack.priceMode||'AUTO'),[price,setPrice]=useState(String(editing?.pack.sellingPriceMmk||'')),[discount,setDiscount]=useState(String(editing?.pack.discountPercent||0)),[sort,setSort]=useState(String(editing?.pack.sortOrder||0)),[active,setActive]=useState(editing?.pack.active!==false),[note,setNote]=useState(editing?.pack.note||''),[image,setImage]=useState(editing?.pack.image||''),[uploading,setUploading]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState('');
 const product=mine.find(p=>String(p.id)===productId),source=main.find(p=>p.id===product?.id),manual=!!product&&!source&&!product.mainName,available=source?.packages||[],selected=available.find(p=>String(p.id)===sku),already=product?.packages.some(p=>p.id===selected?.id&&p.listed!==false),cost=Number(selected?.costUsd||0);
 const actualPriceMode=manual?'MANUAL':priceMode;
 const base=actualPriceMode==='MANUAL'?Number(price)||0:pricing.usdMmkRate>0?cost*pricing.usdMmkRate*(1+pricing.profitPercent/100):0;
 const unit={EXACT:0,TENS:10,FIFTIES:50,HUNDREDS:100}[pricing.rounding]||0;
 const estimate=actualPriceMode==='AUTO'&&unit?Math.ceil(base/unit)*unit:base;
 const final=estimate*(1-(Number(discount)||0)/100);
 function changeProduct(v:string){setProductId(v);setSku('');setName('');setPriceMode(main.some(p=>String(p.id)===v)?'AUTO':'MANUAL');setPrice('');setDiscount('0');setNote('');setImage('');}
 function changeSku(v:string){setSku(v);const pack=available.find(p=>String(p.id)===v);if(pack){setName(pack.name);const local=product?.packages.find(p=>p.id===pack.id&&p.listed!==false);if(local){setName(local.name);setPriceMode(local.priceMode);setPrice(String(local.sellingPriceMmk??''));setDiscount(String(local.discountPercent||0));setSort(String(local.sortOrder||0));setActive(local.active!==false);setNote(local.note||'');setImage(local.image||'');}else{setPriceMode('AUTO');setPrice('');setDiscount('0');}}}
 async function submit(e:FormEvent){e.preventDefault();if(busy||uploading)return;setError('');setBusy(true);try{
  if(!product)throw Error('Select Product Type.');if(!manual&&!source)throw Error('The selected Head Admin source is unavailable. Refresh your Main catalog.');if(!manual&&!selected)throw Error('Select a package supplied by Head Admin.');
  if(!name.trim())throw Error('Enter a package name.');const percent=Number(discount);if(!Number.isFinite(percent)||percent<0||percent>99.99)throw Error('Discount must be between 0 and 99.99%.');
  if(actualPriceMode==='MANUAL'&&(!Number.isFinite(Number(price))||Number(price)<=0))throw Error('Enter a valid positive MMK price.');
  const draft:PackageDraft={id:selected?.id||editing?.pack.id||0,name:name.trim(),priceMode:actualPriceMode,sellingPriceMmk:actualPriceMode==='MANUAL'?Number(price):null,discountPercent:percent,sortOrder:Number(sort)||0,active,note:note.trim(),image};
  if(manual)await createManualPackage({productId:product.id,name:draft.name,priceMode:draft.priceMode,sellingPriceMmk:draft.sellingPriceMmk,discountPercent:draft.discountPercent,active:draft.active,sortOrder:draft.sortOrder,image:draft.image,note:draft.note},editing?.pack.id);
  else{
   // Source/category are resolved by the chosen Product Type and Head Admin package ID.
   const attached:ShopProduct={...product,packages:source!.packages.map(p=>{const saved=product.packages.find(x=>x.id===p.id&&x.listed!==false);return saved||{...p,listed:false};})};
   if(!attached.packages.some(p=>p.id===draft.id))throw Error('Package no longer belongs to this product.');
   const groupId=0;
   await saveShopPackage(attached,draft,groupId);
  }
  onSaved();
 }catch(err){setError(checkMainError(err));}finally{setBusy(false);}}
 return <div className="oc-editor"><OwnerHeader title={editing?'Edit Product Package':'Create Product Package'} back={onBack}/><form className="oc-form" onSubmit={submit}>
 <Field label="Product Type" required><CatalogSelect value={productId} onChange={changeProduct} placeholder="Select Product" items={mine.map(p=>({value:String(p.id),label:p.name}))}/></Field>
 {product&&!manual&&<Field label="Package" required><CatalogSelect value={sku} onChange={changeSku} placeholder="Select Package" items={available.map(p=>({value:String(p.id),label:p.name}))}/>{!!selected&&<small>{already?'Already added to this shop · editing its settings':'Available from Head Admin catalog'}</small>}{!available.length&&<small>No packages are currently provided for this Product Type.</small>}</Field>}
 {product&&manual&&<p className="oc-info">Manual Product Type: package name is entered directly. No Source or Category selection is needed.</p>}
 <Field label="Name" required><input className={baseField} maxLength={128} required value={name} onChange={e=>setName(e.target.value)} placeholder="Package name"/></Field>
 <div className="oc-grid"><Field label="Price Mode"><select className={baseField} value={manual?'MANUAL':priceMode} disabled={manual} onChange={e=>setPriceMode(e.target.value as PackageDraft['priceMode'])}><option value="AUTO">Automatic MMK</option><option value="MANUAL">Manual MMK</option></select></Field><Field label="Selling Price (MMK)" required={priceMode==='MANUAL'}><input className={baseField} type="number" inputMode="decimal" min="0.01" step="0.01" required={actualPriceMode==='MANUAL'} disabled={actualPriceMode==='AUTO'} value={actualPriceMode==='AUTO'?estimate||'':price} onChange={e=>setPrice(e.target.value)}/></Field></div>
 <div className="oc-grid"><Field label="Discount (%)"><input className={baseField} type="number" inputMode="decimal" step="0.01" min="0" max="99.99" required value={discount} onChange={e=>setDiscount(e.target.value)}/></Field><Field label="Sort Order"><input className={baseField} type="number" min="0" step="1" value={sort} onChange={e=>setSort(e.target.value)}/></Field></div>
 <div className="oc-price"><span>Customer Price</span><strong>{final>0?mmk(final):'Not priced'}</strong><small>{source?`Automatic rates follow the Main catalog cost and your shop pricing settings.`:'Manual package'} </small></div>
 <ImageField label="Package Image" value={image} onChange={setImage} onBusyChange={setUploading}/><Field label="Important Note"><textarea className={baseField} rows={3} value={note} onChange={e=>setNote(e.target.value)} maxLength={1000}/></Field>
 <Field label="Status"><select className={baseField} value={active?'On':'Off'} onChange={e=>setActive(e.target.value==='On')}><option>On</option><option>Off</option></select></Field>
 {error&&<ErrorBox message={error}/>}<Actions save={editing?'Update Package':'Create Package'} onCancel={onBack} busy={busy||uploading}/>
 </form></div>;
}

export function OwnerDiscounts(){
 const {invalidate,notify}=usePanel();
 const {data:mine,error}=useData('shop-products',()=>api<ShopProduct[]>('products'));
 const [query,setQuery]=useState(''),[filters,setFilters]=useState(false),[status,setStatus]=useState('all'),[page,setPage]=useState(0),[size,setSize]=useState(10),[editing,setEditing]=useState<{product:ShopProduct;pack:PackageDraft}| 'new'|null>(null);
 const [chosen,setChosen]=useState(''),[percent,setPercent]=useState('0'),[busy,setBusy]=useState(false),[saveError,setSaveError]=useState('');
 const options=(mine||[]).flatMap(product=>listed(product).map(p=>({product,pack:packageDraft(p)})));
 const rows=options.filter(r=>(r.pack.discountPercent>0)&&(!query||clean(r.pack.name).includes(clean(query))||clean(r.product.name).includes(clean(query)))&&(status==='all'||r.pack.active===(status==='active'))),current=Math.min(page,Math.max(0,Math.ceil(rows.length/size)-1));
 const item=editing==='new'?options.find(r=>`${r.product.id}:${r.pack.id}`===chosen):editing;
 async function save(e:FormEvent){e.preventDefault();if(!item||busy)return;setBusy(true);setSaveError('');try{
  const n=Number(percent);if(!Number.isFinite(n)||n<0||n>99.99)throw Error('Enter a discount from 0 to 99.99%.');
  const groupId=0;
  const d=productDraft(item.product,groupId,item.product.id);const existing=d.packages.find(p=>p.id===item.pack.id);
  if(!existing)throw Error('This package is no longer listed in your shop.');
  existing.discountPercent=n;await saveShopProduct(item.product.id,d);
  setEditing(null);setChosen('');invalidate();notify('Discount updated.');
 }catch(e){setSaveError(checkMainError(e));}finally{setBusy(false);}}
 function edit(row:{product:ShopProduct;pack:PackageDraft}){setEditing(row);setPercent(String(row.pack.discountPercent));setSaveError('');}
 if(editing!==null)return <div className="oc-editor"><OwnerHeader title={editing==='new'?'Create Product Discount':'Edit Product Discount'} back={()=>setEditing(null)}/><form className="oc-form" onSubmit={save}><Field label="Product Package" required><CatalogSelect value={item?`${item.product.id}:${item.pack.id}`:chosen} onChange={setChosen} disabled={editing!=='new'} placeholder="Select a package" items={options.map(r=>({value:`${r.product.id}:${r.pack.id}`,label:`${r.product.name} · ${r.pack.name}`}))}/></Field><Field label="Discount (%)" required><input className={baseField} min="0" max="99.99" step="0.01" type="number" value={percent} onChange={e=>setPercent(e.target.value)} required/></Field><p className="oc-hint">Discount applies to this shop only. Setting 0% removes it. Main catalog prices remain unchanged.</p>{saveError&&<ErrorBox message={saveError}/>}<Actions save="Save Discount" onCancel={()=>setEditing(null)} busy={busy}/></form></div>;
 return <div className="oc-screen"><PageToolbar query={query} setQuery={v=>{setQuery(v);setPage(0);}} openCreate={()=>{setEditing('new');setChosen('');setPercent('0');}} showFilter={()=>setFilters(v=>!v)} filterOpen={filters}/>{filters&&<div className="oc-filters"><Field label="Status"><select className={baseField} value={status} onChange={e=>setStatus(e.target.value)}><option value="all">All</option><option value="active">Active</option><option value="inactive">Inactive</option></select></Field></div>}{error&&<ErrorBox message={error} retry={invalidate}/>}<div className="oc-table-card">{!mine?<Loading/>:!rows.length?<Empty title="No product discounts" text="Use + to apply a discount to an existing shop package."/>:<CatalogTable headers={['Product / Package','Discount','Sort','Status','Actions']}>{rows.slice(current*size,(current+1)*size).map(r=><tr key={`${r.product.id}-${r.pack.id}`}><td><CatalogName name={r.pack.name} description={r.product.name} image={r.pack.image} fallbackImage={r.product.image||r.product.imageUrl}/></td><td>{r.pack.discountPercent}%</td><td>{r.pack.sortOrder}</td><td><ListStatus active={r.pack.active}/></td><td><div className="oc-row-actions"><button aria-label={`Edit discount for ${r.pack.name}`} onClick={()=>edit(r)}><Edit2 size={15}/></button></div></td></tr>)}</CatalogTable>}<ListPager total={rows.length} page={current} size={size} onPage={setPage} onSize={n=>{setPage(0);setSize(n);}}/></div></div>;
}
