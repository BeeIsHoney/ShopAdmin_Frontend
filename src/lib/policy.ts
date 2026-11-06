export function permitted(path:string,method:string){
 if(path==='telegram'&&['GET','DELETE'].includes(method))return true;
 if(path==='telegram/link'&&method==='POST')return true;
 if(path.includes('..')||path.includes('\\'))return false;
 if((method==='GET'||method==='PUT')&&path==='website-settings')return true;
 if((method==='GET'||method==='POST')&&path==='banners')return true;
 if((method==='PUT'||method==='DELETE')&&/^banners\/[1-9]\d{0,15}$/.test(path))return true;
 if(method==='GET'&&/^(payment-accounts|payment-settings|payment-images\/[a-f0-9-]{36}|recharges(?:\/[1-9]\d*)?)$/.test(path))return true;
 if(method==='POST'&&/^(payment-accounts|recharges\/[1-9]\d*\/review)$/.test(path))return true;
 if(method==='PUT'&&/^users\/[1-9]\d*\/status$/.test(path))return true;
 if(method==='PUT'&&/^(payment-settings|payment-accounts\/[1-9]\d*)$/.test(path))return true;
 if(method==='DELETE'&&/^payment-accounts\/[1-9]\d*$/.test(path))return true;
 if(method==='GET'&&/^(users(?:\/[1-9]\d{0,15}(?:\/orders)?)?|customers|customer-orders(?:\/[1-9]\d*)?|customer-transactions|balance-adjustments|customer-wallet\/summary)$/.test(path))return true;
 if(method==='POST'&&/^(customers\/[1-9]\d*\/balance-adjustments|customer-orders\/[1-9]\d*\/(?:settle|refund))$/.test(path))return true;
 if(method==='GET')return /^(profile|balance|servers|products|groups|product-groups|catalog-groups|pricing|images\/[a-f0-9-]{36}|transactions|catalog\/games(?:\/[1-9]\d*)?|orders(?:\/[1-9]\d*|\/by-external\/[A-Za-z0-9._:-]{1,100})?)$/.test(path);
 if(method==='PUT')return /^(pricing|(?:products|packages)\/[1-9]\d*|product-groups\/[A-Za-z0-9_-]{1,100})$/.test(path);
 if(method==='DELETE')return /^(?:(?:listings|products)\/[1-9]\d*|product-groups\/[A-Za-z0-9_-]{1,100})$/.test(path);
 return method==='POST'&&/^(listings|images|packages\/bulk|products|packages|product-groups)$/.test(path);
}
export function validQuery(query:URLSearchParams){
 for(const [key,value] of query){
  if(key==='userStatus'&&/^(ALL|ACTIVE|BANNED)$/.test(value))continue;
  if(key==='userSort'&&/^(newest|oldest|balance-high|balance-low|name)$/.test(value))continue;
  if(key==='visible'&&/^(true|false)$/.test(value))continue;
  if(key==='status'&&/^(ALL|AWAITING_PAYMENT|PENDING|APPROVED|REJECTED|EXPIRED|ACTIVE|PROCESSING|SUCCESS|FAILED|REFUNDED|CANCELLED)$/.test(value))continue;
  if((key==='startDate'||key==='endDate')&&/^\d{4}-\d{2}-\d{2}$/.test(value))continue;
  if(key==='q'&&value.length<=100)continue;
  if(key==='page'&&/^\d{1,6}$/.test(value))continue;
  if(key==='size'&&/^\d{1,3}$/.test(value)&&Number(value)>=1&&Number(value)<=100)continue;
  if(key==='providerServerId'&&/^(?:srv_)?[1-9]\d{0,17}$/.test(value))continue;
  return false;
 }return true;
}
