import {api,send} from '@/lib/client';
import type {Page} from '@/lib/types';
import type {UserItem} from '../../features/users/types/reference-user.types';
export type UserDetail=UserItem&{googleId?:string|null;role:string;totalSpent:number};
export type IpBan={id:string;ip:string;reason:string;permanentBanAccounts:boolean;createdAt:string};
export type UserSecurity={userId:string;username:string;accountBanned:boolean;recentIps:{ip:string;lastSeenAt:string;activeSession:boolean;banned:boolean;banId:string|null;permanentBanAccounts:boolean}[]};
export const usersApi={
 security:(id:string)=>api<UserSecurity>(`users/${id}/security`),
 ipBans:()=>api<IpBan[]>('users/ip-bans'),
 banIp:(draft:{ip:string;sourceUserId?:number;reason:string;permanentBanAccounts:boolean})=>send<IpBan>('users/ip-bans',draft),
 unbanIp:(id:string)=>send(`users/ip-bans/${id}`,undefined,'DELETE'),
 detail:(id:string)=>{if(!/^[1-9]\d{0,15}$/.test(id))throw Error('Invalid user.');return api<UserDetail>(`users/${id}`);},
 async list(){const users:UserItem[]=[];for(let page=0;page<1000;page++){const result=await api<Page<UserItem>>(`users?page=${page}&size=100`);if(!Array.isArray(result.content))throw Error('Unable to read shop users.');users.push(...result.content);if(result.last||page+1>=result.totalPages)return users;}throw Error('Too many users to load. Contact Main Admin.');},
 setBanned:(id:string,banned:boolean)=>{if(!/^[1-9]\d*$/.test(id))throw Error('Invalid user.');return send<UserItem>(`users/${id}/status`,{banned},'PUT');}
};
