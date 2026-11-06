import React from 'react';
import { Loader2, MessageCircle, Info } from 'lucide-react';
import type { CanonicalOrder } from '../../types/order.types';
import { formatCurrency } from '../../../../shared/utils/currency';
import { resolveOrderUidDisplay } from '../../utils/gameOrderHelper';
import { getOrderSourceLabel } from '../../utils/orderSource';
import { canResolveManualOrder, type ManualResolutionStatus } from '../manualOrder';
import { cancelRefundMode, canCancelAndRefundOrder } from '../holdingOrder';

interface OrderListCardProps {
  order: CanonicalOrder;
  onChat?: (order: CanonicalOrder) => void;
  onBan?: (order: CanonicalOrder) => void;
  onInfo?: (order: CanonicalOrder) => void;
  onCopyInfo?: (order: CanonicalOrder) => void;
  onManualStatusChange?: (order: CanonicalOrder, status: ManualResolutionStatus) => void | Promise<void>;
  onHoldingRefund?: (order: CanonicalOrder) => void;
}

export const OrderListCard: React.FC<OrderListCardProps> = React.memo(({
  order,
  onChat,
  onBan,
  onInfo,
  onCopyInfo,
  onManualStatusChange,
  onHoldingRefund,
}) => {
  const [manualAction, setManualAction] = React.useState<ManualResolutionStatus | null>(null);
  const manualActionInFlightRef = React.useRef(false);

  const handleManualStatusChange = async (status: ManualResolutionStatus) => {
    if (manualActionInFlightRef.current || !onManualStatusChange) return;
    manualActionInFlightRef.current = true;
    setManualAction(status);
    try {
      await onManualStatusChange(order, status);
    } finally {
      manualActionInFlightRef.current = false;
      setManualAction(null);
    }
  };

  const getStatusColorClass = () => {
    switch (order.status?.toLowerCase()) {
      case 'completed':
        return 'text-emerald-400';
      case 'processing':
        return 'text-amber-400';
      case 'pending':
      case 'holding':
        return 'text-amber-400';
      case 'refunded':
        return 'text-sky-400';
      case 'failed':
        return 'text-red-500';
      default:
        return 'text-white/80';
    }
  };

  return (
    <div className="w-full bg-black/40 backdrop-blur-xl rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.35)] border border-white/10 overflow-hidden text-white transition-all hover:border-white/20">
      {/* Top Header Row with | divider */}
      <div className="flex items-stretch text-xs sm:text-sm bg-white/[0.02]">
        <div className="w-[42%] sm:w-[38%] p-2.5 sm:p-3 border-r border-white/10 flex flex-col items-center justify-center text-center">
          <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center justify-center gap-1.5">
            {order.publicOrderId || `ord-${order.id.replace(/^(?:order-|store-order-)/, '')}`}
          </h2>
          <p className="text-[10px] sm:text-xs font-medium text-white/50 mt-0.5">
            {order.timeAgo}
          </p>
        </div>

        <div className="w-[58%] sm:w-[62%] p-2.5 sm:p-3 flex items-center justify-center">
          <div className="bg-white/10 text-white border border-white/15 font-bold text-xs sm:text-sm px-3 py-1 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.05)] flex items-center justify-center shrink-0">
            {formatCurrency(order.price)}
          </div>
        </div>
      </div>

      {/* Customer & Actions Row with | divider */}
      <div className="flex items-stretch text-xs sm:text-sm border-t border-white/10 bg-white/[0.01]">
        <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 border-r border-white/10 flex items-center justify-center gap-1.5">
          {/* Green Chat Button */}
          {onChat && (<button
            type="button"
            onClick={() => onChat?.(order)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-center justify-center hover:bg-emerald-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(16,185,129,0.1)] cursor-pointer"
            title="Chat"
            aria-label="Chat"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
          </button>)}

          {/* Amber Info Button */}
          <button
            type="button"
            onClick={() => onInfo?.(order)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 flex items-center justify-center hover:bg-amber-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(245,158,11,0.1)] cursor-pointer"
            title="Info"
            aria-label="View information"
          >
            <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 stroke-[2.5]" />
          </button>

          {/* Red Block / Prohibit Button */}
          {onBan && (<button
            type="button"
            onClick={() => onBan?.(order)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-400 flex items-center justify-center hover:bg-rose-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(244,63,94,0.1)] cursor-pointer"
            title="Block"
            aria-label="Block user"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7"
              />
            </svg>
          </button>)}
        </div>

        <div className="w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 text-left flex items-center">
          <span className="font-bold text-xs sm:text-sm text-white">
            {order.buyerName || order.username}
          </span>
          {order.buyerCode && (
            <span className="font-bold text-[11px] sm:text-xs text-cyan-400 ml-1">
              ( {order.buyerCode} )
            </span>
          )}
        </div>
      </div>

      {/* Table Details */}
      <div className="border-t border-white/10 divide-y divide-white/10 text-white text-xs sm:text-sm">
        {/* Row 1: Copy Info & ID display */}
        <div className="flex items-stretch">
          <div className="w-[42%] sm:w-[38%] py-1 px-2.5 sm:px-3 border-r border-white/10 bg-white/[0.01] flex items-center justify-center">
            {/* From Uiverse.io by vinodjangid07 */}
            <button
              type="button"
              onClick={() => onCopyInfo?.(order)}
              className="Btn"
              title="Copy Order Information"
            >
              <p className="text">Copy Info</p>
              <span className="effect" />
            </button>
          </div>
          <div className="w-[58%] sm:w-[62%] py-1 px-2.5 sm:px-3 font-semibold text-white flex items-center">
            <span className="truncate text-xs sm:text-sm font-mono">{resolveOrderUidDisplay(order)}</span>
          </div>
        </div>

        {/* Row 2: Source */}
        <div className="flex items-stretch">
          <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]">
            Source
          </div>
          <div className="w-[58%] sm:w-[62%] py-1 px-2.5 sm:px-3 font-semibold text-white flex items-center">
            {getOrderSourceLabel(order.source)}
          </div>
        </div>

        {/* Row 3: Quantity */}
        <div className="flex items-stretch">
          <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]">
            Quantity
          </div>
          <div className="w-[58%] sm:w-[62%] py-1 px-2.5 sm:px-3 font-semibold text-white flex items-center">
            {order.quantity}
          </div>
        </div>

        {/* Row 4: Package */}
        <div className="flex items-stretch">
          <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]">
            Package
          </div>
          <div className="w-[58%] sm:w-[62%] py-1 px-2.5 sm:px-3 font-semibold text-white flex items-center">
            {order.packageName}
          </div>
        </div>

        {/* Row 5: Duration */}
        <div className="flex items-stretch">
          <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-rose-400/90 border-r border-white/10 bg-white/[0.01]">
            Duration
          </div>
          <div className="w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 font-semibold text-rose-400 flex items-center">
            {order.duration}
          </div>
        </div>

        {/* Row 6: Status */}
        <div className="flex items-stretch">
          <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]">
            Status
          </div>
          <div className="w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 flex items-center">
            <span className={`font-semibold capitalize ${getStatusColorClass()}`}>
              {order.status?.toLowerCase() === 'pending' ? 'Processing' : order.status}
            </span>
          </div>
        </div>

        {canCancelAndRefundOrder(order) && (
          <div className="flex items-stretch">
            <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01] flex items-center">
              Control
            </div>
            <div className="w-[58%] sm:w-[62%] py-1.5 px-2.5 sm:px-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => onHoldingRefund?.(order)}
                className="border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 px-2.5 py-1 rounded text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                {cancelRefundMode(order) === 'FORCE' ? 'Force Cancel & Refund' : 'Cancel & Refund'}
              </button>
            </div>
          </div>
        )}

        {canResolveManualOrder(order) && (
          <div className="flex items-stretch">
            <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01] flex items-center">
              Control
            </div>
            <div className="w-[58%] sm:w-[62%] py-1.5 px-2.5 sm:px-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => { void handleManualStatusChange('Failed'); }}
                disabled={manualAction !== null}
                className="border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 px-2.5 py-1 rounded text-xs font-bold transition-all active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-1.5"
              >
                {manualAction === 'Failed' && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                {manualAction === 'Failed' ? 'Processing...' : 'Fail'}
              </button>
              <button
                type="button"
                onClick={() => { void handleManualStatusChange('Completed'); }}
                disabled={manualAction !== null}
                className="border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 px-2.5 py-1 rounded text-xs font-bold transition-all active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-1.5"
              >
                {manualAction === 'Completed' && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                {manualAction === 'Completed' ? 'Processing...' : 'Complete'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
