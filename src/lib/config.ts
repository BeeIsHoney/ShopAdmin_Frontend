// Set these server-side URLs in .env.local or in the hosting environment.
// Local development still works without an environment file.
// The admin site is shared by every shop created by Head Admin.
// The backend resolves the shop from the authenticated owner email; no shop code is entered at sign-in.
function backendUrl(value: string | undefined, fallback: string, name: string) {
 const configured = value?.trim() || fallback;
 try {
  const url = new URL(configured);
  if (!['http:', 'https:'].includes(url.protocol) || !url.hostname || url.username || url.password || url.search || url.hash) throw new Error();
  return url.toString().replace(/\/+$/, '');
 } catch {
  throw new Error(`${name} must be a valid backend base URL without credentials, query parameters or a fragment.`);
 }
}
export const BACKEND_URL=backendUrl(process.env.SHOP_BACKEND_URL,'http://127.0.0.1:8081','SHOP_BACKEND_URL');
export const MAIN_URL=backendUrl(process.env.MAIN_BACKEND_URL,'http://127.0.0.1:8080','MAIN_BACKEND_URL');
export const PANEL={head:false,role:'ADMIN_USER',title:'Shop Admin',port:3001} as const;
