import type { CanonicalOrder } from '../types/order.types';

export type CancelRefundMode = 'SAFE' | 'FORCE';

export const isHoldingOrder = (order: CanonicalOrder): boolean =>
  order.status === 'Holding' ||
  (order.status === 'Pending' && order.pendingReason === 'PROVIDER_BALANCE');

export const cancelRefundMode = (order?: CanonicalOrder | null): CancelRefundMode | null => {
  if (!order) return null;
  return order.cancelRefundMode === 'SAFE' || order.cancelRefundMode === 'FORCE'
    ? order.cancelRefundMode
    : (isHoldingOrder(order) && order.canCancelHolding === true ? 'SAFE' : null);
};

export const canCancelAndRefundOrder = (order: CanonicalOrder): boolean =>
  cancelRefundMode(order) !== null;

export const canRefundHoldingOrder = (order: CanonicalOrder): boolean =>
  isHoldingOrder(order) && cancelRefundMode(order) === 'SAFE';

export const holdingReasonLabel = (order: CanonicalOrder): string => {
  if (order.pendingReason === 'PROVIDER_BALANCE') return 'Provider balance insufficient';
  if (order.pendingReason === 'PROVIDER_RETRY') return 'Temporary provider retry';
  if (order.pendingReason === 'PROVIDER_RECONCILIATION') return 'Provider reconciliation required';
  return order.pendingReason || 'Not available';
};
