import type { CanonicalOrder, CanonicalOrderStatus } from '../types/order.types';

export type ManualResolutionStatus = Extract<CanonicalOrderStatus, 'Completed' | 'Failed'>;

export const canResolveManualOrder = (order: CanonicalOrder): boolean => {
  if (order.source !== 'manual') return false;
  if (typeof order.canResolveManualOrder === 'boolean') return order.canResolveManualOrder;
  // Compatibility with responses predating the server eligibility flag.
  const source = order.directProviderSource?.toLowerCase();
  if (source === 'manual order') return order.status === 'Pending';
  if (source === 'manual' || source == null) return order.status === 'Processing';
  return false;
};

export const applyManualOrderResolution = (
  order: CanonicalOrder,
  nextStatus: ManualResolutionStatus,
): CanonicalOrder | null => {
  if (!canResolveManualOrder(order)) return null;

  return {
    ...order,
    status: nextStatus,
    canResolveManualOrder: false,
    updatedAt: new Date().toISOString(),
  };
};
