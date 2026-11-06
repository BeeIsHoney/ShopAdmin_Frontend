export type UserStatus = 'Active' | 'Banned';
export interface UserItem {
  displayName?: string;
  id: string;
  username: string;
  telegram?: string;
  email?: string;
  google?: string;
  balance: number;
  status: UserStatus;
  createdAt: string;
  role?: string;
  totalSpent?: number;
  googleId?: string | null;
}
export interface UserFilterState {
  plan: 'all' | 'Basic';
  showBanned: boolean;
  sort: 'newest' | 'oldest' | 'balance-high' | 'balance-low' | 'name';
}
export interface UserRecentIp {
  ip: string;
  deviceName: string;
  browserName: string;
  userAgent?: string | null;
  lastSeenAt?: string | null;
  activeSession: boolean;
  banned: boolean;
  permanentBanAccounts: boolean;
}

export interface UserSecurityInfo {
  userId: string;
  username: string;
  accountBanned: boolean;
  recentIps: UserRecentIp[];
}

export interface IpBanItem {
  id: string;
  ip: string;
  sourceUserId?: string | null;
  reason: string;
  permanentBanAccounts: boolean;
  createdBy: string;
  createdAt?: string | null;
  permanentlyBannedAccounts?: number;
}

export interface CreateIpBanRequest {
  ip: string;
  sourceUserId?: string | null;
  reason?: string;
  permanentBanAccounts?: boolean;
}
