import type {Metadata,Viewport} from 'next';
import {Suspense} from 'react';
import Panel from '@/components/panel';
import {AppearanceProvider} from '@/components/appearance';
import {ADMIN_THEME_BOOTSTRAP} from '@/lib/admin-theme';
import './globals.css';
import './recharge.css';
import './mobile.css';
import './owner-ui.css';
import './owner-lists.css';
import './owner-catalog.css';
import './owner-product-groups.css';
import './order-finance.css';
import './website-banners.css';
import './website-settings.css';
import './admin-theme.css';
import './customer-management.css';
export const metadata:Metadata={
 title:'Shop Admin',
 description:'Shop owner workspace for managing game top-up products, packages, MMK pricing, discounts, orders, and transactions.',
 openGraph:{
  title:'Shop Admin',
  description:'Shop owner workspace for managing game top-up products, packages, MMK pricing, discounts, orders, and transactions.'
 }
};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',interactiveWidget:'resizes-content'};
export default function Layout({children}:{children:React.ReactNode}){
 return <html lang="en" data-admin-theme="blue-glass" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:ADMIN_THEME_BOOTSTRAP}}/></head><body><AppearanceProvider><Suspense fallback={<main className="boot">Loading Shop Admin…</main>}><Panel>{children}</Panel></Suspense></AppearanceProvider></body></html>;
}
