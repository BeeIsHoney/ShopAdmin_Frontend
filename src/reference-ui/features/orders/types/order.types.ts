export type OrderSource =
  | 'manual'
  | 'direct_topup'
  | 'gift_card_voucher';

export type CanonicalOrderStatus =
  | 'Completed'
  | 'Pending'
  | 'Processing'
  | 'Failed'
  | 'Holding'
  | 'Refunded'
  | 'Cancelled'
  | 'Unknown';

export interface CanonicalOrder {
  id: string;
  publicOrderId?: string;
  status: CanonicalOrderStatus;
  source: OrderSource;
  directProviderSource?: string | null;
  canResolveManualOrder?: boolean;
  username: string;
  uid: string;
  packageName: string;
  price: number;
  quantity: number;
  currency: string;

  // Metadata / Common properties
  createdAt?: string;
  providerFirstAttemptAt?: string | null;
  paymentType?: string;
  transactionRef?: string;

  // Check Orders Detail-only properties (preserves detail fidelity without polluting table views)
  buyerName?: string;
  buyerCode?: string;
  timeAgo?: string;
  duration?: string;
  product?: string;
  gameType?: string;
  serverTag?: string;
  serverId?: string;
  region?: string;
  gameFields?: Array<{ label: string; value: string }>;
  orderInputs?: Array<{ key: string; label: string; value: string }>;
  profit?: number;
  grade?: string;
  discount?: number;
  coins?: number;
  updatedAt?: string;
  userEmail?: string;
  userGoogle?: string;
  userTelegram?: string;
  userRole?: string;
  userBalance?: number;
  userCoins?: number;
  userDiscount?: number;
  userDebt?: number;
  providerHistory?: {
    prov1?: string | number;
    prov2?: string | number;
    prov3?: string | number;
    prov4?: string | number;
    prov5?: string | number;
  };
  providerUsed?: string | null;
  providerApiCost?: number | null;
  pendingReason?: string | null;
  providerAttemptCount?: number;
  lastProviderErrorCode?: string | null;
  lastProviderErrorMessage?: string | null;
  pendingSince?: string | null;
  nextProviderRetryAt?: string | null;
  canCancelHolding?: boolean;
  cancelRefundMode?: 'SAFE' | 'FORCE' | null;

  latestCoinOrders?: Array<{
    id?: string;
    amount: number;
    type: string;
    receiptUrl?: string;
    txnNo?: string;
  }>;
}

export interface CanonicalRechargeOrder {
  // Shared fields (Recharge Orders table & Check Recharge)
  id: string;
  publicTransactionId?: string;
  status: CanonicalOrderStatus;
  username: string;
  amount: number;
  txnNo?: string;

  // Metadata / Shared fields
  currency: string;
  buyerName?: string;
  createdAt?: string;
  processingAt?: string | null;
  processingDurationSeconds?: number | null;
  /** Client-only anchor used to advance the server-authoritative duration between refreshes. */
  processingDurationAnchorMs?: number;
  updatedAt?: string;
  paymentType?: string;
  transactionRef?: string;

  // Check Recharge Detail-only properties (preserves detail fidelity without polluting table views)
  timeAgo?: string;
  duration?: string;
  buyerCode?: string;
  isConfirmed?: boolean;
  isEditable?: boolean;
  actionLabel?: string;
  receiptUrl?: string;
  purchaseAmount?: string | number;
  userEmail?: string;
  userGoogle?: string;
  userTelegram?: string;
  userRole?: string;
  userBalance?: number;
  userCoins?: number;
  userDiscount?: number;
  userDebt?: number;
  latestOrders?: Array<{
    orderId: string;
    status: string;
    price: number | string;
  }>;
}
