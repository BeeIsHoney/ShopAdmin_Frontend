import { lockPageScroll } from '../../../shared/utils/pageScrollLock';
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { type CanonicalRechargeOrder } from '../types/order.types';
import { type RechargeListOrder } from '../recharge-list/types/recharge-list.types';

interface ReviewPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: CanonicalRechargeOrder | RechargeListOrder | null;
  mode?: 'view' | 'review' | 'adjust';
  onConfirm?: (orderId: string, amount: string) => void | Promise<void>;
  onCancelOrder?: (orderId: string) => void | Promise<void>;
  onAdjustBalance?: (orderId: string, amount: string, reason: string, type: 'debit' | 'credit') => void | Promise<void>;
}

const formatNumberWithCommas = (val: string | number) => {
  const numericOnly = String(val).replace(/[^0-9]/g, '');
  if (!numericOnly) return '';
  return Number(numericOnly).toLocaleString('en-US');
};

export const ReviewPaymentModal: React.FC<ReviewPaymentModalProps> = ({
  isOpen,
  onClose,
  order,
  mode = 'view',
  onConfirm,
  onCancelOrder,
  onAdjustBalance,
}) => {
  const [submitError,setSubmitError] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [savingAction, setSavingAction] = useState<'approve' | 'reject' | 'credit' | 'debit' | null>(null);
  const actionInFlightRef = React.useRef(false);
  const initializedOrderKeyRef = React.useRef<string | null>(null);

  const currentOrderKey = order ? `${order.id}-${mode}` : null;
  useEffect(() => {
    if (!isOpen || !order) {
      initializedOrderKeyRef.current = null;
      return;
    }
    // Polling can replace the order object. Keep the amount the admin is editing
    // until this dialog closes or switches to a different order/mode.
    if (initializedOrderKeyRef.current === currentOrderKey) return;
    initializedOrderKeyRef.current = currentOrderKey;
    const value = 'amount' in order && typeof order.amount === 'number'
      ? order.amount
      : order.purchaseAmount || '';
    setAmount(formatNumberWithCommas(value));
    setReason('');setSubmitError('');
  }, [currentOrderKey, isOpen, order]);

  const isViewMode = mode === 'view';
  const isAdjustMode = mode === 'adjust';
  const numericAmount = Number(amount.replace(/,/g, ''));
  const isPositiveAmount = Number.isInteger(numericAmount) && numericAmount > 0;
  const isValidAmount = isAdjustMode ? isPositiveAmount : isPositiveAmount && numericAmount <= 1_000_000;

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const unlockScroll = lockPageScroll();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !actionInFlightRef.current) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      unlockScroll();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !order) return null;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, '');
    setAmount(rawVal ? Number(rawVal).toLocaleString('en-US') : '');
  };

  const handleConfirmSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (savingAction || actionInFlightRef.current || !isValidAmount) return;
    setSubmitError('');
    actionInFlightRef.current = true;
    const action = isAdjustMode ? 'credit' : 'approve';
    setSavingAction(action);
    try {
      if (isAdjustMode) {
        if (onAdjustBalance) {
          await onAdjustBalance(order.id, amount.replace(/,/g, ''), reason, 'credit');
        }
      } else if (onConfirm) {
        await onConfirm(order.id, amount.replace(/,/g, ''));
      }
      onClose();
    } catch(error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to save. Please try again.');
    } finally {
      actionInFlightRef.current = false;
      setSavingAction(null);
    }
  };

  const handleDebitClick = async () => {
    if (savingAction || actionInFlightRef.current || !isValidAmount) return;
    setSubmitError('');
    actionInFlightRef.current = true;
    setSavingAction('debit');
    try {
      if (onAdjustBalance) {
        await onAdjustBalance(order.id, amount.replace(/,/g, ''), reason, 'debit');
      }
      onClose();
    } catch(error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to save. Please try again.');
    } finally {
      actionInFlightRef.current = false;
      setSavingAction(null);
    }
  };

  const handleCancelClick = async () => {
    if (savingAction || actionInFlightRef.current) return;
    setSubmitError('');
    actionInFlightRef.current = true;
    setSavingAction('reject');
    try {
      if (onCancelOrder) {
        await onCancelOrder(order.id);
      }
      onClose();
    } catch(error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to save. Please try again.');
    } finally {
      actionInFlightRef.current = false;
      setSavingAction(null);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md transition-all animate-fadeIn select-none"
    >
      <button
        type="button"
        aria-label="Close payment review dialog"
        className="absolute inset-0 cursor-default"
        onClick={() => { if (!savingAction && !actionInFlightRef.current) onClose(); }}
        disabled={Boolean(savingAction)}
      />
      {/* Non-scrollable Modal Dialog Card (Matching Check Recharge Theme) */}
      <div
        className="relative z-10 w-full max-w-[390px] sm:max-w-[400px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.35)] overflow-hidden text-white transition-all transform animate-scaleUp select-text"
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-review-dialog-title"
      >
        {/* Header: "Balance Adjustment" for Adjust mode, or "tx868144" for others */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
          <h3 id="payment-review-dialog-title" className="text-xs sm:text-sm font-bold text-white tracking-tight">
            {isAdjustMode
              ? 'Balance Adjustment'
              : order.publicTransactionId || `tx${String(order.id).replace(/^(?:topup-|#)/, '')}`}
          </h3>
          <button
            type="button"
            onClick={() => { if (!savingAction && !actionInFlightRef.current) onClose(); }}
            disabled={Boolean(savingAction)}
            className="text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitError&&<p role="alert" className="m-3 rounded border border-red-500/30 p-2 text-xs text-red-300">{submitError}</p>}
        {/* Modal Body */}
        {isViewMode ? (
          <div className="w-full flex justify-center items-center overflow-auto p-4 max-h-[80vh] bg-black/60">
            <img
              src={order.receiptUrl || undefined}
              alt={`Receipt for ${order.publicTransactionId || `tx${String(order.id).replace(/^(?:topup-|#)/, '')}`}`}
              referrerPolicy="no-referrer"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        ) : (
          <form onSubmit={handleConfirmSubmit}>
            <div className="p-3.5 sm:p-4 space-y-3">
              {/* Receipt Image: Shown ONLY when NOT in Adjust Balance mode */}
              {!isAdjustMode && (
              <div className="w-full flex justify-center">
                <div className="w-[200px] h-[300px] shrink-0 aspect-[2/3] bg-black/50 border border-white/10 rounded-lg overflow-hidden flex items-center justify-center relative shadow-inner">
                  {order.receiptUrl ? (
                    <img
                      src={order.receiptUrl}
                      alt={`Receipt for ${order.publicTransactionId || `tx${String(order.id).replace(/^(?:topup-|#)/, '')}`}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <p className="text-xs text-white/50 p-3">No payment screenshot submitted.</p>
                  )}
                </div>
              </div>
            )}

            {/* Field 1: Amount (Formatted with comma, no Ks) */}
            <div className="space-y-1">
              <label htmlFor="payment-review-amount" className="block text-xs font-semibold text-white/80">
                Amount
              </label>
              <input
                id="payment-review-amount"
                type="text"
                readOnly={isViewMode}
                value={amount}
                onChange={handleAmountChange}
                placeholder="31,000"
                className={`w-full bg-black/40 border border-white/10 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg outline-none transition-all ${
                  isViewMode
                    ? 'cursor-not-allowed select-none text-white/90 font-medium'
                    : 'focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20'
                }`}
              />
            </div>

            {/* Field 2: Reason (adjust-balance mode only) */}
            {isAdjustMode && (
              <div className="space-y-1">
                <label htmlFor="payment-review-reason" className="block text-xs font-semibold text-white/80">
                  Reason
                </label>
                <input
                  id="payment-review-reason"
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Reason for adjustment..."
                  className="w-full bg-black/40 border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg outline-none transition-all placeholder:text-white/30"
                />
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {!isViewMode && (
            <div className="px-3.5 sm:px-4 py-2.5 border-t border-white/10 bg-white/[0.01]">
              {isAdjustMode ? (
                /* Adjust Balance: Debit & Credit buttons with equal sizes */
                <div className="flex items-center gap-2 w-full">
                  <button
                    type="button"
                    onClick={() => { void handleDebitClick(); }}
                    disabled={Boolean(savingAction) || !isValidAmount}
                    className="flex-1 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {savingAction === 'debit' ? <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" />Saving...</span> : 'Debit'}
                  </button>
                  <button
                    type="submit"
                    disabled={Boolean(savingAction) || !isValidAmount}
                    className="flex-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {savingAction === 'credit' ? <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" />Saving...</span> : 'Credit'}
                  </button>
                </div>
              ) : (
                /* Review Order: Reject & Approve buttons with equal sizes */
                <div className="flex items-center gap-2 w-full">
                  <button
                    type="button"
                    onClick={() => { void handleCancelClick(); }}
                    disabled={Boolean(savingAction)}
                    className="flex-1 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {savingAction === 'reject' ? <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" />Saving...</span> : 'Reject'}
                  </button>
                  <button
                    type="submit"
                    disabled={Boolean(savingAction) || !isValidAmount}
                    className="flex-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {savingAction === 'approve' ? <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" />Saving...</span> : 'Approve'}
                  </button>
                </div>
              )}
            </div>
          )}
        </form>
        )}
      </div>
    </div>
  );
};
