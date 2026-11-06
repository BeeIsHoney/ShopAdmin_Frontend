import type { NextConfig } from 'next';
const extraDevOrigins=(process.env.FRONTEND_ALLOWED_HOSTS||'').split(',').map(value=>value.trim()).filter(Boolean);
const config: NextConfig = {
  allowedDevOrigins: ['*.trycloudflare.com',...extraDevOrigins,
    '**.run.app',
    '*.run.app',
    '**.google.com',
    '**.googleusercontent.com',
    '**.cloudshell.dev',
    'localhost',
    '127.0.0.1',
    '192.168.*.*',
    '10.*.*.*',
    ...Array.from({length:16},(_,i)=>`172.${i+16}.*.*`)
  ],
  poweredByHeader: false,
  outputFileTracingRoot: process.cwd(),
  experimental: { cpus: 2 },
  async redirects() {
    return ['register','signup','create-shop','shops','auth/register'].map(route=>({
      source:`/${route}/:path*`,destination:'/login',permanent:false
    }));
  },
  async headers() { return [{source: '/(.*)', headers: [
    {key:'X-Content-Type-Options',value:'nosniff'},
    {key:'X-JiaFu-Panel',value:'shop-admin-v1.10.0'},
    {key:'Referrer-Policy',value:'same-origin'}
  ]}]; }
};
export default config;
