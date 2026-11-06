import type {ShopProduct,ShopPackage} from './shop-catalog.ts';
import {serverLabel} from './shop-catalog.ts';
export type CatalogRow={product:ShopProduct;pack:ShopPackage};
export type CatalogFilters={query:string;game:string;server:string;group:string;status:string;own:boolean};
export function serverColor(id?:string){
 const digits=/^(?:srv_|Server )([1-9]\d*)$/.exec(id||'')?.[1];
 if(!digits)return '#a1a1aa';
 const n=BigInt(digits),palette=[205,285,100,38,345,170,245,15];
 const hue=n<=8n?palette[Number(n)-1]:Number(((n-1n)*13751n+21000n)%36000n)/100;
 return `hsl(${hue} 78% 66%)`;
}
export function catalogRows(products:ShopProduct[],f:CatalogFilters):CatalogRow[]{
 const query=f.query.trim().toLocaleLowerCase();
 return products.flatMap(product=>product.packages.filter(pack=>
  (!f.own||pack.listed!==false)&&(!f.game||String(product.id)===f.game)&&(f.server==='ALL'||pack.providerId===f.server)&&
  (!f.own||!f.group||String(pack.groupId)===f.group)&&
  (f.status==='ALL'||(f.own?(product.active!==false&&pack.active!==false)===(f.status==='ACTIVE'):Boolean(pack.listed)===(f.status==='ADDED')))&&
  (!query||[product.name,product.mainName,pack.name,pack.mainName,serverLabel(pack)].some(v=>v?.toLocaleLowerCase().includes(query)))
 ).map(pack=>({product,pack}))).sort((a,b)=>(a.product.sortOrder||0)-(b.product.sortOrder||0)||(a.pack.sortOrder||0)-(b.pack.sortOrder||0)||a.product.id-b.product.id||a.pack.id-b.pack.id);
}
