'use client';
import {useState} from 'react';
import {LockKeyhole} from 'lucide-react';
import {api,send} from '@/lib/client';
import {SHOP_FEATURES,SHOP_PLANS,type FeatureSet,type ShopSubscription} from '@/lib/shop-features';
import {useData,usePanel} from './context';
import {Button,ErrorBox,Loading,SectionHead} from './ui';
import {PageTitle} from './views';
import {WebsiteBanners} from './website-banners';

export function WebsiteSettings(){
 const {invalidate,notify}=usePanel();
 const {data,error}=useData('website-settings',()=>api<ShopSubscription>('website-settings'));
 const [draft,setDraft]=useState<FeatureSet|null>(null),[saving,setSaving]=useState(false),[failure,setFailure]=useState('');
 const [placement,setPlacement]=useState<'HOME'|'CATALOG'|'PROFILE'>('HOME');
 if(error)return <ErrorBox message={error} retry={invalidate}/>;
 if(!data)return <Loading/>;
 const settings=draft??data.settings;
 return <><PageTitle title="Website Settings" sub="Control the website features allowed by Main Admin."/>
 <section className="card website-settings-card"><SectionHead title={SHOP_PLANS.find(p=>p.id===data.plan)?.label??'Default'} sub={`1 month · Expires ${new Date(data.expiresAt).toLocaleString()}`}/>
 <p className="muted-text">Locked features and subscription renewals are managed by Main Admin.</p>
 <div className="website-feature-grid">{SHOP_FEATURES.map(feature=>{const allowed=data.permissions[feature.id]===true;return <label className={`website-feature${allowed?'':' is-locked'}`} key={feature.id}>
 <span><strong>{feature.label}</strong><small>{allowed?'Available in your shop':'Locked by Main Admin'}</small></span>{!allowed&&<LockKeyhole size={15} aria-hidden/>}<input type="checkbox" aria-label={feature.label} disabled={!allowed||saving} checked={allowed&&settings[feature.id]===true} onChange={event=>setDraft({...settings,[feature.id]:event.target.checked})}/>
 </label>;})}</div>
 {failure&&<ErrorBox message={failure}/>}<div className="form-footer"><Button variant="primary" disabled={saving||!draft} onClick={async()=>{setSaving(true);setFailure('');try{const features=Object.fromEntries(SHOP_FEATURES.map(f=>[f.id,data.permissions[f.id]===true&&settings[f.id]===true]));await send('website-settings',{features},'PUT');setDraft(null);invalidate();notify('Website settings saved.');}catch(error){setFailure((error as Error).message);}finally{setSaving(false);}}}>{saving?'Saving…':'Save website settings'}</Button></div></section>
 <div className="banner-placement-tabs" role="group" aria-label="Banner location">{([{id:'HOME',label:'Home Banner'},{id:'CATALOG',label:'Shop Catalog Banner'},{id:'PROFILE',label:'Profile Banner'}] as const).map(item=><Button key={item.id} variant={placement===item.id?'primary':undefined} aria-pressed={placement===item.id} onClick={()=>setPlacement(item.id)}>{item.label}</Button>)}</div>
 <WebsiteBanners key={placement} placement={placement}/></>;
}
