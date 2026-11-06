'use client';
import {useEffect,useRef,useState} from 'react';
import {Calculator} from 'lucide-react';
import {api,send} from '@/lib/client';
import {mmk,previewPrice,type Pricing} from '@/lib/shop-catalog';
import {useData,usePanel} from './context';
import {PageTitle} from './views';
import {ErrorBox,Field,Form,Loading} from './ui';
export function PricingSettings(){
 const {invalidate,notify}=usePanel(),{data,error}=useData('shop-pricing',()=>api<Pricing>('pricing'));
 const [draft,setDraft]=useState<Pricing|null>(null),[cost,setCost]=useState(1),init=useRef(false);
 useEffect(()=>{if(data&&!init.current){init.current=true;setDraft(data);}},[data]);
 if(error)return <ErrorBox message={error} retry={invalidate}/>;if(!draft)return <Loading/>;
 const d=draft,patch=(p:Partial<Pricing>)=>setDraft({...d,...p}),preview=previewPrice(cost,d,{priceMode:'AUTO',sellingPriceMmk:null,discountPercent:0});
 return <><PageTitle title="Pricing settings" sub="Set your shop’s MMK selling prices. Your Main purchasing balance remains in USD."/><div className="shop-editor-layout"><section className="card"><Form className="shop-pricing-form" onSubmit={async()=>{await send('pricing',d,'PUT');invalidate();notify('Shop pricing saved. Automatic MMK prices updated.');}}><Field label="USD → MMK rate" hint="MMK amount for 1 USD. Set your own selling rate."><input required type="number" inputMode="decimal" min="0.0001" max="10000000" step="0.0001" value={d.usdMmkRate||''} onChange={e=>patch({usdMmkRate:Number(e.target.value)})}/></Field><Field label="Default profit · %"><input required type="number" inputMode="decimal" min="0" max="10000" step="0.01" value={d.profitPercent} onChange={e=>patch({profitPercent:Number(e.target.value)})}/></Field><Field label="Automatic price rounding"><select value={d.rounding} onChange={e=>patch({rounding:e.target.value as Pricing['rounding']})}><option value="EXACT">Exact · 2 decimal places</option><option value="TENS">Round up to 10 Ks</option><option value="FIFTIES">Round up to 50 Ks</option><option value="HUNDREDS">Round up to 100 Ks</option></select></Field><p className="card-footnote">Auto base = Main USD cost × rate × (1 + profit %). Rounding applies before the package discount. Manual MMK prices are preserved when these settings change.</p></Form></section><section className="card shop-pricing-example"><Calculator size={26}/><h2>Price preview</h2><Field label="Main cost · USD"><input type="number" inputMode="decimal" min="0.0001" step="0.0001" value={cost} onChange={e=>setCost(Number(e.target.value))}/></Field><strong>{mmk(preview.final)}</strong><p className="muted-text">Before package discounts. Saving pricing does not charge your balance.</p></section></div></>;
}
