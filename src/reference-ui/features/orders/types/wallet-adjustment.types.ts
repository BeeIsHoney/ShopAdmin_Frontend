export type AdjustmentType = 'increase' | 'decrease';

export interface WalletAdjustment {
  displayName?: string;
  id: string;
  userId: string;
  userName: string;
  type: AdjustmentType;
  amount: number;
  remark?: string;
  createdAt: string;
}
