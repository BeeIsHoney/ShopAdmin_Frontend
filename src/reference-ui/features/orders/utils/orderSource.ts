import type { OrderSource } from '../types/order.types';

const ORDER_SOURCE_LABELS: Record<OrderSource, string> = {
  manual: 'Manual',
  direct_topup: 'Direct Top-ups',
  gift_card_voucher: 'GiftCards & Vouchers',
};

export const getOrderSourceLabel = (source: OrderSource): string => ORDER_SOURCE_LABELS[source];
