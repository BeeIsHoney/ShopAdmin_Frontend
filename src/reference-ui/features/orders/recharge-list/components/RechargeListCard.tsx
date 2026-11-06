import React from 'react';
import { MessageCircle, Info } from 'lucide-react';
import { type CanonicalRechargeOrder } from '../../types/order.types';
import { formatCurrency } from '../../../../shared/utils/currency';

interface RechargeListCardProps {
  order: CanonicalRechargeOrder;
  onViewPayment?: (order: CanonicalRechargeOrder) => void;
  onModify?: (order: CanonicalRechargeOrder) => void;
  onChat?: (order: CanonicalRechargeOrder) => void;
  onBan?: (order: CanonicalRechargeOrder) => void;
  onInfo?: (order: CanonicalRechargeOrder) => void;
}

export const RechargeListCard: React.FC<RechargeListCardProps> = React.memo(({
  order,
  onViewPayment,
  onModify,
  onChat,
  onBan,
  onInfo,
}) => {
  const isConfirmed = order.isConfirmed ?? order.status?.toLowerCase() === 'completed';
  const isEditable = order.isEditable ?? true;
  const reviewedAt = order.updatedAt;
  const reviewedAtMs = reviewedAt ? Date.parse(reviewedAt) : Number.NaN;
  const adjustExpiresAtMs = Number.isFinite(reviewedAtMs)
    ? reviewedAtMs + (12 * 60 * 60 * 1000)
    : Number.NaN;
  const [, setAdjustExpiryTick] = React.useState(0);
  const adjustWindowOpen = isConfirmed
    && Number.isFinite(adjustExpiresAtMs)
    && Date.now() < adjustExpiresAtMs;

  React.useEffect(() => {
    if (!isConfirmed || !Number.isFinite(adjustExpiresAtMs)) return;
    const remainingMs = adjustExpiresAtMs - Date.now();
    if (remainingMs <= 0) return;
    const timer = window.setTimeout(() => setAdjustExpiryTick((value) => value + 1), remainingMs);
    return () => window.clearTimeout(timer);
  }, [adjustExpiresAtMs, isConfirmed]);

  const showModifyButton = isConfirmed ? adjustWindowOpen : isEditable;
  const amountValue = 'amount' in order && typeof order.amount === 'number'
    ? order.amount
    : typeof order.purchaseAmount === 'number'
    ? order.purchaseAmount
    : Number(order.purchaseAmount) || 0;

  const getStatusColorClass = () => {
    switch (order.status?.toLowerCase()) {
      case 'completed':
        return 'text-emerald-400';
      case 'processing':
      case 'pending':
        return 'text-amber-400';
      case 'refunded':
        return 'text-sky-400';
      case 'cancelled':
        return 'text-red-500';
      case 'failed':
        return 'text-red-500';
      default:
        return 'text-white/80';
    }
  };

  return (
    <div className="w-full bg-black/40 backdrop-blur-xl rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.35)] border border-white/10 overflow-hidden text-white transition-all hover:border-white/20">
      {/* Top Header Row with seamless | divider */}
      <div className="flex items-stretch text-xs sm:text-sm bg-white/[0.02]">
        {/* Left Header Column */}
        <div className="w-[42%] sm:w-[38%] p-2.5 sm:p-3 border-r border-white/10 flex flex-col items-center justify-center text-center">
          <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center justify-center gap-1">
            {order.publicTransactionId || `tx${order.id.replace(/^(?:topup-|#)/, '')}`}
          </h2>
          <p className="text-[10px] sm:text-xs font-medium text-white/50 mt-0.5">
            {order.timeAgo}
          </p>
        </div>
        {/* Right Header Column */}
        <div className="w-[58%] sm:w-[62%] p-2.5 sm:p-3 flex flex-col items-center justify-center">
          {showModifyButton && (
            <button
              type="button"
              onClick={() => onModify?.(order)}
              className={`w-full text-center text-xs py-1.5 px-3 rounded-lg transition-all cursor-pointer font-semibold ${
                isConfirmed
                  ? 'bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.12)] active:scale-[0.99]'
                  : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)] active:scale-[0.99]'
              }`}
            >
              {isConfirmed ? 'Adjust' : 'Review'}
            </button>
          )}
          {order.status?.toLowerCase() !== 'processing' ? (
            <button
              type="button"
              onClick={() => onViewPayment?.(order)}
              className="text-[10px] sm:text-xs font-medium text-white/50 hover:text-white/80 transition-colors mt-2 underline decoration-white/30 underline-offset-2 cursor-pointer"
            >
              View Payment
            </button>
          ) : (
            <div aria-hidden="true" className="text-[10px] sm:text-xs font-medium mt-2 invisible select-none">
              View Payment
            </div>
          )}
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
        {/* Row 1: Amount */}
        <div className="flex items-stretch">
          <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]">
            Amount
          </div>
          <div className="w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 font-semibold text-white flex items-center">
            {formatCurrency(amountValue)}
          </div>
        </div>

        {/* Row 2: Duration */}
        <div className="flex items-stretch">
          <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-rose-400/90 border-r border-white/10 bg-white/[0.01]">
            Duration
          </div>
          <div className="w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 font-semibold text-rose-400 flex items-center">
            {order.duration || '—'}
          </div>
        </div>

        {/* Row 3: Status */}
        <div className="flex items-stretch">
          <div className="w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]">
            Status
          </div>
          <div className="w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 flex items-center">
            <span className={`font-semibold capitalize ${getStatusColorClass()}`}>
              {order.status?.toLowerCase() === 'pending' ? 'Processing' : (order.status || 'Processing')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
