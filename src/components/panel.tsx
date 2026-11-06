'use client';
import {TelegramLoginOtp} from './telegram-login-otp';
import {isTelegramChallenge,type TelegramChallenge} from '@/lib/telegram-otp';
import {useState,useEffect,useCallback,useRef,type ReactNode} from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {usePathname,useRouter} from 'next/navigation';
import {LayoutDashboard,Package,ShoppingBag,ArrowLeftRight,Settings,LogOut,Menu,X,RefreshCw,ChevronDown,ArrowRight,Eye,EyeOff,ShieldCheck,Wallet,Plug,Plus,FolderOpen,Mail,LockKeyhole,UserRound} from 'lucide-react';
import type {BeeSession} from '@/lib/server';
import {money} from '@/lib/client';
import {PanelProvider,usePanel,useRealtime} from './context';
import {Button,Field,ErrorBox,Loading} from './ui';
import {Overview,Transactions,Connection,Account} from './views';

const OwnerProducts=dynamic(()=>import('./owner-catalog').then(m=>m.OwnerProducts),{loading:()=> <Loading/>});
const OwnerPackages=dynamic(()=>import('./owner-catalog').then(m=>m.OwnerPackages),{loading:()=> <Loading/>});
const OwnerDiscounts=dynamic(()=>import('./owner-catalog').then(m=>m.OwnerDiscounts),{loading:()=> <Loading/>});
const OwnerProductGroups=dynamic(()=>import('./owner-product-groups').then(m=>m.OwnerProductGroups),{loading:()=> <Loading/>});
const PaymentSettingsView=dynamic(()=>import('@/reference-ui/features/settings/PaymentSettingsView').then(m=>m.PaymentSettingsView),{loading:()=> <Loading/>});
const ProductOrdersView=dynamic(()=>import('@/reference-ui/features/orders/ProductOrdersView').then(m=>m.ProductOrdersView),{loading:()=> <Loading/>});
const RechargeOrdersView=dynamic(()=>import('@/reference-ui/features/orders/RechargeOrdersView').then(m=>m.RechargeOrdersView),{loading:()=> <Loading/>});
const BalanceAdjustmentsView=dynamic(()=>import('@/reference-ui/features/orders/BalanceAdjustmentsView').then(m=>m.BalanceAdjustmentsView),{loading:()=> <Loading/>});

import {PricingSettings} from './pricing';
import {UserList} from './user-list';
import {Appearance} from './appearance';
import {WebsiteSettings} from './website-settings';

import type {ConnectionState} from '@/lib/service-compatibility';

export function Brand({name='Shop Admin'}:{name?:string}){return <div className="brand"><b title={name}>{name}<span className="brand-dot">.</span></b><small>OWNER DASHBOARD</small></div>;}
export default function Panel({children}:{children:ReactNode}){
 const path=usePathname();
 if(path==='/telegram')return <>{children}</>;
 return <AuthenticatedPanel>{children}</AuthenticatedPanel>;
}
function AuthenticatedPanel({children}:{children:ReactNode}){
 const [profile,setProfile]=useState<BeeSession|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState('');const router=useRouter();
 const load=useCallback(async()=>{try{const r=await fetch('/api/session',{cache:'no-store'});if(r.ok){setProfile(await r.json());setError('');}else{setProfile(null);if(r.status!==401)setError((await r.json()).message||'Unable to load your session.');}}catch{setProfile(null);setError('Shop Backend is unavailable. Please try again shortly.');}finally{setLoading(false);}},[]);
 useEffect(()=>{void load();const expired=()=>{setProfile(null);router.replace('/login');};window.addEventListener('jiafu:expired',expired);return()=>window.removeEventListener('jiafu:expired',expired);},[load,router]);
 if(loading)return <main className="boot bee-theme"><Brand/><Loading/></main>;
 if(!profile)return <Login initialError={error} onLogin={p=>{setProfile(p);router.replace('/');}}/>;
 return <PanelProvider profile={profile} onLogout={()=>{setProfile(null);router.replace('/login');}}><Shell>{children}</Shell></PanelProvider>;
}
function Login({initialError,onLogin}:{initialError:string;onLogin:(p:BeeSession)=>void}){
 const [otp,setOtp]=useState<TelegramChallenge|null>(null);
 const [connection,setConnection]=useState<ConnectionState|null>(null),[checking,setChecking]=useState(false),[error,setError]=useState(initialError),[busy,setBusy]=useState(false),[show,setShow]=useState(false);
 const check=useCallback(async()=>{setChecking(true);try{const r=await fetch('/api/connection',{cache:'no-store'});if(!r.ok)throw Error('Connection check failed.');setConnection(await r.json());}catch{setConnection({state:'offline',message:'Unable to reach Shop Backend. Please check the backend connection.'});}finally{setChecking(false);}},[]);
 useEffect(()=>{void check();},[check]);
 return <main className="owner-login bee-theme"><div className="owner-login-brand"><Brand/></div><section className="terminal-card" aria-label={'Shop admin sign in'}><div className="terminal-browser"><div className="browser-dots" aria-hidden="true"><i/><i/><i/></div><div className="browser-address"><LockKeyhole size={11}/>shop / admin</div></div><div className="terminal-body"><div className="terminal-heading"><p><b>&gt;</b> admin.login()</p><span><ShieldCheck size={13}/> Shop owner access</span></div>{otp?<TelegramLoginOtp challenge={otp} onVerified={onLogin} onBack={()=>setOtp(null)}/>:<><p className="login-description">Sign in with your registered owner email and password. Your shop opens automatically.</p>
 <div className={`setup-status ${connection?.state==='connected'?'connected':''}`}><div><span className={`live-dot ${connection?.state==='connected'?'':'muted'}`}/><b>{checking?'Checking connection…':connection?.state==='connected'?'Shop service connected':'Shop service unavailable'}</b><button type="button" onClick={()=>void check()} aria-label="Check shop connection" disabled={checking}><RefreshCw size={13} className={checking?'spin':''}/></button></div>{connection?.message&&<p>{connection.message}</p>}</div>
 <form aria-busy={busy} onSubmit={async e=>{e.preventDefault();if(busy)return;setBusy(true);setError('');const f=new FormData(e.currentTarget);try{
 const r=await fetch('/api/session',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:String(f.get('email')).trim(),password:String(f.get('password'))})});const data=await r.json();if(!r.ok)throw Error(data.message||'Unable to sign in.');if(isTelegramChallenge(data)){setOtp(data);return;}onLogin(data);
 }catch(err){setError((err as Error).message);}finally{setBusy(false);}}}>
 <Field label="Admin email / Gmail"><div className="login-input"><Mail size={15}/><input required type="email" name="email" autoComplete="username" placeholder="you@gmail.com" maxLength={254} disabled={busy}/></div></Field><Field label="Password"><div className="login-input password-field"><LockKeyhole size={15}/><input required name="password" type={show?'text':'password'} maxLength={72} autoComplete="current-password" placeholder="Enter your password" disabled={busy}/><button type="button" aria-label={show?'Hide password':'Show password'} aria-pressed={show} onClick={()=>setShow(!show)}>{show?<EyeOff size={16}/>:<Eye size={16}/>}</button></div></Field>
 {error&&<ErrorBox message={error}/>}<Button type="submit" variant="primary" className="login-submit" disabled={busy}>{busy?'Authenticating…':'Sign in to dashboard'}<ArrowRight size={15}/></Button></form><p className="login-help">Use the email and password assigned to your shop by Main Admin.</p></>}</div></section><span className="owner-login-footer">Shop Admin · All shops · v1.10.0</span></main>;
}
const navigation=[
 {id:'',label:'Dashboard',icon:LayoutDashboard},
 {id:'products',label:'Products',icon:Package},
 {id:'product-packages',label:'Product Packages',icon:Package},
 {id:'product-groups',label:'Package Group',icon:FolderOpen},
 {id:'product-discounts',label:'Product Discounts',icon:Settings},
 {id:'pricing',label:'MMK pricing',icon:Settings},
 {id:'product-order',label:'Product Orders',icon:ShoppingBag},
 {id:'recharge-order',label:'Recharge Orders',icon:Wallet},
 {id:'balance-adjust',label:'Balance Adjustments',icon:ArrowLeftRight},
 {id:'website-settings',label:'Website Settings',icon:Settings},
 {id:'payment-settings',label:'Payment Accounts',icon:Wallet},
 {id:'recharge-list',label:'Recharge List',icon:Wallet},
 {id:'order-list',label:'Order List',icon:ShoppingBag},
 {id:'recharge-orders',label:'Recharge Orders',icon:ArrowLeftRight},
 {id:'users',label:'User List',icon:UserRound},
 {id:'transactions',label:'Owner Transactions',icon:ArrowLeftRight},
 {id:'connection',label:'Service status',icon:Plug},
 {id:'appearance',label:'Appearance',icon:Settings},
 {id:'account',label:'My account',icon:UserRound}
];
const sections=[
 {id:'products',label:'Products',icon:Package,items:['products','product-packages','product-groups','product-discounts']},
 {id:'finance',label:'Orders & Finance',icon:ShoppingBag,items:['product-order','recharge-order','order-list','recharge-list','balance-adjust']},
 {id:'users',label:'User Management',icon:UserRound,items:['users']},
 {id:'activity',label:'Other Activity',icon:ArrowLeftRight,items:['transactions']},
 {id:'settings',label:'Settings',icon:Settings,items:['website-settings','payment-settings','pricing','connection','appearance','account']}
];
function Shell({children}:{children:ReactNode}){
 const {profile,invalidate,logout}=usePanel(),pathname=usePathname(),section=pathname.split('/')[1]||'';
 const [menu,setMenu]=useState(false),[expanded,setExpanded]=useState<Record<string,boolean>>({products:true,finance:true,users:true,activity:false,settings:false}),[profileOpen,setProfileOpen]=useState(false);
 const drawer=useRef<HTMLElement>(null),menuButton=useRef<HTMLButtonElement>(null),profileMenu=useRef<HTMLDivElement>(null);const realtime=useRealtime(invalidate);const active=navigation.find(n=>n.id===section);
 useEffect(()=>{setMenu(false);setProfileOpen(false);const group=sections.find(g=>g.items.includes(section));if(group)setExpanded(s=>({...s,[group.id]:true}));},[pathname,section]);
 useEffect(()=>{if(!menu)return;const before=document.activeElement as HTMLElement|null,overflow=document.body.style.overflow;document.body.style.overflow='hidden';const links=()=>Array.from(drawer.current?.querySelectorAll<HTMLElement>('a[href],button:not(:disabled)')||[]);links()[0]?.focus();const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenu(false);if(e.key==='Tab'){const list=links(),first=list[0],last=list.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}};window.addEventListener('keydown',key);return()=>{document.body.style.overflow=overflow;window.removeEventListener('keydown',key);(before||menuButton.current)?.focus();};},[menu]);
 useEffect(()=>{if(!profileOpen)return;const close=(e:MouseEvent)=>{if(!profileMenu.current?.contains(e.target as Node))setProfileOpen(false);};const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setProfileOpen(false);};document.addEventListener('mousedown',close);window.addEventListener('keydown',key);return()=>{document.removeEventListener('mousedown',close);window.removeEventListener('keydown',key);};},[profileOpen]);
 let view:ReactNode;switch(section){case '':case 'login':view=<Overview/>;break;case 'products':view=<OwnerProducts/>;break;case 'product-packages':view=<OwnerPackages/>;break;case 'product-groups':view=<OwnerProductGroups/>;break;case 'product-discounts':case 'discounts':view=profile.shop.subscription?.permissions.specialOffers?<OwnerDiscounts/>:<div className="notice">Special Offers is locked by Main Admin.</div>;break;case 'groups':view=<OwnerProductGroups/>;break;case 'catalog':view=<OwnerProducts/>;break;case 'order-finance':case 'product-orders':case 'product-order':view=<div className="reference-finance-ui"><ProductOrdersView/></div>;break;case 'recharge-order':case 'recharge-orders':view=<div className="reference-finance-ui"><RechargeOrdersView/></div>;break;case 'balance-adjustments':case 'balance-adjust':view=<div className="reference-finance-ui"><BalanceAdjustmentsView/></div>;break;case 'payment-settings':view=<div className="reference-payment-ui"><PaymentSettingsView/></div>;break;case 'recharge-list':case 'order-list':view=null;break;case 'pricing':view=<PricingSettings/>;break;case 'users':view=<UserList/>;break;case 'transactions':view=<Transactions/>;break;case 'connection':view=<Connection/>;break;case 'website-banners':case 'website-settings':view=<WebsiteSettings/>;break;case 'appearance':view=<Appearance/>;break;case 'account':view=<Account/>;break;default:view=<div className="empty"><h1>Page not found</h1><Link href="/">Return to dashboard</Link></div>;}
 if(section==='order-list'||section==='recharge-list')return <>{children}</>;
 return <div className="workspace bee-theme owner-workspace">{menu&&<button className="sidebar-scrim" aria-label="Close navigation" onClick={()=>setMenu(false)}/>}<aside id="owner-navigation" ref={drawer} aria-label="Shop owner navigation" className={`sidebar ${menu?'open':''}`}><div className="sidebar-brand"><Link href="/" aria-label={profile.shop.name+' dashboard'} onClick={()=>setMenu(false)}><Brand name={profile.shop.name}/></Link><button className="icon-btn mobile-only" onClick={()=>setMenu(false)} aria-label="Close menu"><X size={19}/></button></div><nav aria-label="Primary"><Link href="/" onClick={()=>setMenu(false)} className={!section?'active':''} aria-current={!section?'page':undefined}><LayoutDashboard size={16}/><span>Dashboard</span></Link>{sections.map(group=><div className="owner-nav-section" key={group.id}><button className="owner-nav-heading" aria-controls={'nav-'+group.id} aria-expanded={expanded[group.id]} onClick={()=>setExpanded(s=>({...s,[group.id]:!s[group.id]}))}><group.icon size={16}/><span>{group.label}</span><ChevronDown size={14} className={expanded[group.id]?'':'collapsed'}/></button>{expanded[group.id]&&<div className="owner-nav-children" id={'nav-'+group.id}>{navigation.filter(n=>group.items.includes(n.id)).map(n=><Link key={n.id} href={`/${n.id}`} onClick={()=>setMenu(false)} className={section===n.id?'active':''} aria-current={section===n.id?'page':undefined}><span>{n.label}</span></Link>)}</div>}</div>)}</nav><div className="sidebar-bottom"><div className="connection-box"><span className={`live-dot ${realtime==='live'?'':'muted'}`}/><div><b>{realtime==='live'?'Live updates connected':realtime==='paused'?'Updates paused':'Automatic updates active'}</b><small>{profile.shop.code} · Owner workspace</small></div></div></div></aside>
 <div className="main-column"><header className="topbar"><div className="owner-page-heading"><button ref={menuButton} className="icon-btn mobile-only" aria-label="Open navigation" aria-expanded={menu} aria-controls="owner-navigation" onClick={()=>setMenu(true)}><Menu size={20}/></button><h1>{active?.label||'Dashboard'}</h1></div><div className="topbar-right"><Link href="/transactions" className="balance-pill" aria-label={'Owner balance '+money(profile.balance)+' USD'}><Wallet size={14}/><b>${money(profile.balance)}</b><span>USD</span></Link><button className="icon-btn" aria-label="Refresh data" onClick={invalidate}><RefreshCw size={16}/></button><div className="owner-profile" ref={profileMenu}><button className="avatar small" aria-label="Open profile menu" aria-expanded={profileOpen} aria-controls="owner-profile-menu" onClick={()=>setProfileOpen(!profileOpen)}>{profile.userName[0].toUpperCase()}</button>{profileOpen&&<div id="owner-profile-menu" className="owner-profile-menu"><div><b>{profile.userName}</b><small>{profile.email}</small></div><Link href="/account"><UserRound size={14}/>My account</Link><button onClick={()=>void logout()}><LogOut size={14}/>Sign out</button></div>}</div></div></header><main id="main-content" className="page-content">{view}{children}</main><footer className="page-footer"><span>© {new Date().getFullYear()} {profile.shop.name}</span><span>{profile.shop.code} · v1.10.0</span></footer></div></div>;
}
