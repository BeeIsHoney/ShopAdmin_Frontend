import type {ShopProduct} from './shop-catalog.ts';
export function listedPackages(product:ShopProduct){return product.packages.filter(p=>p.listed!==false);}
export function ownerProducts(products:ShopProduct[],query:string,group:string,status:string){const q=query.trim().toLocaleLowerCase();return products.filter(g=>listedPackages(g).length&&(!q||[g.name,g.mainName].some(v=>v?.toLocaleLowerCase().includes(q)))&&(!group||listedPackages(g).some(p=>String(p.groupId)===group))&&(status==='ALL'||(g.active!==false)===(status==='ACTIVE'))).sort((a,b)=>(a.sortOrder||0)-(b.sortOrder||0)||a.id-b.id);}
