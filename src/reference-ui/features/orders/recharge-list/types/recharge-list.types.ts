export interface RechargeListOrder {
  id: string;
  publicTransactionId?: string;
  timeAgo: string;
  buyerName: string;
  buyerCode: string;
  purchaseAmount: string | number;
  paymentType: string;
  duration: string;
  isConfirmed?: boolean;
  isEditable?: boolean;
  actionLabel?: string;
  receiptUrl?: string;
  txnNo?: string;
  status?: string;
  username?: string;
  userEmail?: string;
  userGoogle?: string;
  userTelegram?: string;
  userRole?: string;
  userBalance?: number;
  userCoins?: number;
  userDiscount?: number;
  userDebt?: number;
  createdAt?: string;
  processingAt?: string | null;
  processingDurationSeconds?: number | null;
  updatedAt?: string;
  latestOrders?: Array<{
    orderId: string;
    status: string;
    price: number | string;
  }>;
}

