export type ConnectionState={state:'connected'|'offline'|'setup_required'|'update_required'|'connection_error';message:string;shopVersion?:string;mainApiVersion?:string};
type Body={service?:string;version?:string;features?:{shopGroups?:boolean;shopProducts?:boolean;shopManagement?:boolean};connected?:boolean;code?:string;message?:string;apiVersion?:string;mainApiVersion?:string};
export function inspectShopHealth(status:number,body:Body):ConnectionState|null {
 if(status!==200)return {state:'offline',message:'Start Shop Backend on port 8081, then check the connection again.'};
 const version=body.version||'unknown',parts=/^(\d+)\.(\d+)\.(\d+)/.exec(version);
 const supported=body.service==='ShopServiceBackend'&&(body.features?.shopManagement||parts&&(Number(parts[1])>1||Number(parts[1])===1&&Number(parts[2])>=4));
 if(!supported)return {state:'update_required',shopVersion:version,message:`Shop Backend ${version} does not support shop catalog management. Stop the old 8081 process and clean-build Shop Backend v1.4.0. Keep the existing API Key + Secret.`};
 return null;
}
export function inspectMainConnection(status:number,body:Body,shopVersion?:string):ConnectionState {
 if(status===200&&body.connected===true)return {state:'connected',shopVersion,mainApiVersion:body.mainApiVersion,message:'Main and Shop Backends are connected. Groups and shop products are available.'};
 if(body.code==='MAIN_NOT_CONFIGURED')return {state:'setup_required',shopVersion,message:'Generate a Key + Secret in Main Admin, add both to Shop Backend, then restart it.'};
 if(status===404||body.code==='MAIN_UPDATE_REQUIRED')return {state:'update_required',shopVersion,message:'Main Backend is missing shop catalog management. Stop the old 8080 process, clean-build Main Backend v1.5.0, then restart Shop Backend.'};
 return {state:'connection_error',shopVersion,message:body.message||'Check that Main Backend is running and its service API access is active.'};
}
export function missingCatalogRoute(path:string,status:number,body:{code?:string;message?:string}) {
 return status===404&&['groups','products'].includes(path)&&body.code!=='SHOP_NOT_FOUND'&&!/shop.*not found|owner|not owned/i.test(body.message||'');
}
export const catalogUpdateMessage='Shop catalog endpoints are missing. Stop old services, clean-build Main Backend v1.5.0 and Shop Backend v1.4.0, then restart both. Existing accounts and API credentials remain valid.';
