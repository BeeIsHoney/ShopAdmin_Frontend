'use client';
import {useRef,useState} from 'react';
import {ImagePlus} from 'lucide-react';
import {send} from '@/lib/client';
import {imageSource} from '@/lib/shop-catalog';
import {Button,ErrorBox} from './ui';
export function ImageField({value,onChange,onBusyChange,label='Product image'}:{value:string;onChange:(value:string)=>void;onBusyChange?:(busy:boolean)=>void;label?:string}){
 const [busy,setBusy]=useState(false),[error,setError]=useState('');const file=useRef<HTMLInputElement>(null);
 async function upload(image:File){setError('');if(!['image/png','image/jpeg'].includes(image.type)||image.size>2*1024*1024){setError('Choose a PNG/JPEG up to 2 MB.');return;}setBusy(true);onBusyChange?.(true);try{const dataUrl=await new Promise<string>((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result));r.onerror=reject;r.readAsDataURL(image);});const saved=await send<{image:string}>('images',{dataUrl});onChange(saved.image);}catch(e){setError((e as Error).message);}finally{setBusy(false);onBusyChange?.(false);if(file.current)file.current.value='';}}
 const src=imageSource(value);
 return <div className="shop-image-field"><span className="field-label">{label}</span><div className="shop-image-editor"><div className="shop-image-preview">{src?<img src={src} alt="Shop product preview"/>:<ImagePlus size={30}/>}</div><div className="stack"><input ref={file} type="file" accept="image/png,image/jpeg" aria-label={'Upload '+label.toLowerCase()} disabled={busy} onChange={e=>{const f=e.target.files?.[0];if(f)void upload(f);}}/><small className="muted-text">PNG or JPEG · up to 2 MB · maximum 4096 × 4096</small><input aria-label={label+' URL'} placeholder="Or paste an HTTPS image URL" disabled={busy} value={value.startsWith('shop-image:')?'':value} onChange={e=>onChange(e.target.value)}/>{value&&<Button disabled={busy} onClick={()=>onChange('')}>Remove image</Button>}{busy&&<span role="status">Uploading image…</span>}</div></div>{error&&<ErrorBox message={error}/>}</div>;
}
