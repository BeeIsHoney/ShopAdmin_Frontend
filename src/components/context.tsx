'use client';
import {createContext,useContext,useCallback,useEffect,useRef,useState,useSyncExternalStore,type ReactNode} from 'react';
import {QueryCache} from '@/lib/query-cache';
import type {BeeSession} from '@/lib/server';
const Context=createContext<{profile:BeeSession;cache:QueryCache;refresh:number;invalidate:()=>void;notify:(text:string)=>void;logout:()=>Promise<void>}>({} as never);
export const usePanel=()=>useContext(Context);
export function PanelProvider({profile,children,onLogout}:{profile:BeeSession;children:ReactNode;onLogout:()=>void}){
 const [current,setCurrent]=useState(profile),[cache]=useState(()=>new QueryCache()),[refresh,setRefresh]=useState(0),[message,setMessage]=useState('');const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const invalidate=useCallback(()=>{cache.invalidate();setRefresh(n=>n+1);},[cache]);
 const notify=useCallback((text:string)=>{setMessage(text);if(timer.current)clearTimeout(timer.current);timer.current=setTimeout(()=>setMessage(''),4500);},[]);
 useEffect(()=>()=>{cache.clear();if(timer.current)clearTimeout(timer.current);},[cache]);
 useEffect(()=>{if(!refresh)return;let active=true;fetch('/api/session',{cache:'no-store'}).then(async r=>{if(!active)return;if(r.ok)setCurrent(await r.json());else if(r.status===401)window.dispatchEvent(new Event('jiafu:expired'));}).catch(()=>{});return()=>{active=false;};},[refresh]);
 async function logout(){cache.clear();try{await fetch('/api/session',{method:'DELETE'});}finally{onLogout();}}
 return <Context.Provider value={{profile:current,cache,refresh,invalidate,notify,logout}}>{children}{message&&<div className="toast" role="status">{message}<button aria-label="Dismiss notification" onClick={()=>setMessage('')}>×</button></div>}</Context.Provider>;
}
export function useData<T>(key:string,loader:()=>Promise<T>){
 const {refresh,cache}=usePanel(),ref=useRef(loader);ref.current=loader;
 const subscribe=useCallback((notify:()=>void)=>cache.subscribe(key,notify),[cache,key]);const get=useCallback(()=>cache.get<T>(key),[cache,key]);
 const snapshot=useSyncExternalStore(subscribe,get,get);
 useEffect(()=>{void cache.load(key,()=>ref.current());},[cache,key,refresh]);
 return {data:snapshot.data,error:snapshot.data===undefined?snapshot.error:'',loading:snapshot.loading,refreshError:snapshot.data===undefined?'':snapshot.error};
}
export function useRealtime(invalidate:()=>void){
 const [state,setState]=useState<'connecting'|'live'|'polling'|'paused'>('connecting');
 useEffect(()=>{
  let source:EventSource|null=null,poll:ReturnType<typeof setInterval>|null=null,debounce:ReturnType<typeof setTimeout>|null=null;
  function changed(){if(debounce)clearTimeout(debounce);debounce=setTimeout(invalidate,350);}
  function connect(){source?.close();if(poll){clearInterval(poll);poll=null;}if(document.hidden){setState('paused');return;}
   setState('connecting');source=new EventSource('/api/events');source.addEventListener('connected',()=>{setState('live');changed();if(poll){clearInterval(poll);poll=null;}});
   source.addEventListener('change',changed);source.onerror=()=>{setState('polling');if(!poll)poll=setInterval(()=>{if(!document.hidden)invalidate();},15000);};
  }
  function visible(){connect();if(!document.hidden)invalidate();}
  document.addEventListener('visibilitychange',visible);connect();
  return()=>{source?.close();if(poll)clearInterval(poll);if(debounce)clearTimeout(debounce);document.removeEventListener('visibilitychange',visible);};
 },[invalidate]);return state;
}
