'use client';
import Script from 'next/script';
import {useCallback,useEffect,useRef,useState} from 'react';

interface TelegramApp {initData?:string;ready?:()=>void}
type TelegramWindow=Window&{Telegram?:{WebApp?:TelegramApp}};
interface Pending {telegramId:number;name:string}

export default function TelegramAccountPage(){
 const [ready,setReady]=useState(false),[busy,setBusy]=useState(false),[pending,setPending]=useState<Pending|null>(null),[error,setError]=useState('');
 const started=useRef(false),inFlight=useRef(false);
 const login=useCallback(async()=>{
  if(inFlight.current)return;
  const app=(window as TelegramWindow).Telegram?.WebApp;try{app?.ready?.();}catch{}
  const initData=app?.initData?.trim();
  if(!initData){setError('Open the latest My account or Panel Access button in TornadoServiceBot.');return;}
  inFlight.current=true;setBusy(true);setError('');
  try{
   const response=await fetch('/api/telegram/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({initData}),signal:AbortSignal.timeout(20000)});
   const result=await response.json();if(!response.ok)throw Error(result.message||'Telegram login failed.');
   if(result.status==='ACTIVE'){window.location.replace('/');return;}
   if(result.status!=='PENDING'||!Number.isSafeInteger(result.telegramId))throw Error('Invalid Telegram account response.');
   setPending({telegramId:result.telegramId,name:String(result.name||'Telegram user')});
  }catch(e){setError(e instanceof Error?e.message:'Unable to connect.');}
  finally{inFlight.current=false;setBusy(false);}
 },[]);
 useEffect(()=>{if(!ready||started.current)return;started.current=true;void login();},[ready,login]);
 return <><Script src="https://telegram.org/js/telegram-web-app.js" strategy="afterInteractive" onReady={()=>setReady(true)} onError={()=>setError('Unable to load Telegram. Reopen this page from your bot.')}/><main className="owner-login bee-theme"><section className="terminal-card" aria-label="Telegram account"><div className="terminal-body"><h1>TornadoServiceBot</h1>{pending?<><h2>Pending approval</h2><p>{pending.name}</p><p>Your Telegram ID: <code>{pending.telegramId}</code></p><p>Your account is registered. Head Admin must check this ID and assign your shop before owner access is available.</p></>:<p role="status">{busy||!ready?'Checking your Telegram account…':'Sign in from your Admin bot.'}</p>}{error&&<p role="alert" className="form-error">{error}</p>}<button className="btn primary" type="button" disabled={busy||!ready} onClick={()=>void login()}>{busy?'Checking…':'Check approval'}</button></div></section></main></>;
}
