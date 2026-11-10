# Vercel deployment — Shop Admin

Repository: `BeeIsHoney/ShopAdmin_Frontend` (Next.js 16, shared universal owner panel).

1. Import this repository into Vercel; use the **Next.js** preset and repository root. Use Node.js 22.x or newer compatible with the package engines.
2. Add these **server-side** environment variables:
   - `SHOP_BACKEND_URL=https://tornadoserviceshopbackend-production.up.railway.app`
   - `MAIN_BACKEND_URL=https://tornadoservicemainbackend-production.up.railway.app`
3. Build with `npm run build`. The backend URL variables must not be prefixed with `NEXT_PUBLIC_`.
4. Open the deployed `/login` page and sign in as a Shop Owner (created/approved in Head Admin). Visit `/telegram` to check Admin bot linking/notifications.
5. The Shop Backend's `MAIN_BASE_URL` must target the Main Backend HTTPS origin, and `MAIN_API_KEY`/`MAIN_API_SECRET` must correspond to an **active service client in the Railway Main Backend database**. Old local service-client credentials will not exist in an empty Railway database.
6. The browser calls same-origin Next.js API routes; tokens are in HTTP-only cookies. Telegram bot tokens and database passwords must never be placed in the frontend's environment variables.

The panel intentionally does not accept a shop code on login: the logged-in owner account resolves authorized shops on the backend.
