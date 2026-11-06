'use client';
import React, { useEffect } from 'react';
import { Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { lockPageScroll } from '../../../shared/utils/pageScrollLock';
import type {UserItem} from '../types/reference-user.types';
import {displayName} from '../../../shared/utils/displayName';

interface UserStatusConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (user: UserItem) => void | Promise<void>;
  user: UserItem | null;
  action: 'Ban' | 'Unban';
}

export const UserStatusConfirmModal: React.FC<UserStatusConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  user,
  action,
}) => {
  const targetName=displayName(user);
  const isBan=action==='Ban';
  const closeRef=React.useRef(onClose);
  useEffect(()=>{closeRef.current=onClose;},[onClose]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const submitInFlightRef = React.useRef(false);
  const [submitError, setSubmitError] = React.useState('');

  useEffect(() => {
    if (isOpen) return;
    let active = true;
    submitInFlightRef.current = false;
    queueMicrotask(() => {
      if (!active) return;
      setIsSubmitting(false);
      setSubmitError('');
    });
    return () => { active = false; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const unlockScroll = lockPageScroll();
    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !submitInFlightRef.current) {
        closeRef.current();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleConfirm = async () => {
    if (!user || submitInFlightRef.current) return;
    submitInFlightRef.current = true;
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await onConfirm(user);
      onClose();
    } catch {
      setSubmitError(`Unable to ${action.toLowerCase()} this user. Please try again.`);
    } finally {
      submitInFlightRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && user && (
        <div className="user-status-overlay fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-all select-none">
          <button
            type="button"
            aria-label="Close confirmation dialog"
            className="absolute inset-0 cursor-default"
            onClick={() => { if (!submitInFlightRef.current) onClose(); }}
            disabled={isSubmitting}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="user-status-dialog relative z-10 w-full max-w-[360px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden text-white select-text"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ban-dialog-title"
            aria-busy={isSubmitting}
          >
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10 bg-white/[0.02]">
              <h3 id="ban-dialog-title" className="text-xs sm:text-sm font-bold text-white tracking-tight">
                အတည်ပြုရန်
              </h3>
              <button
                type="button"
                onClick={() => { if (!submitInFlightRef.current) onClose(); }}
                disabled={isSubmitting}
                className="text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 sm:p-5">
              <p className="text-xs sm:text-sm font-semibold text-white/90">
                {isBan?'Ban မှာသေချာလား?':'Unban မှာသေချာလား?'}
              </p>
              {targetName && (
                <p className="text-[11px] sm:text-xs text-white/50 mt-1">
                  User: <span className="text-white/80 font-medium">{targetName}</span>
                </p>
              )}
              {submitError && <p role="alert" className="text-[11px] sm:text-xs text-rose-300 mt-2">{submitError}</p>}
            </div>

            <div className="flex items-center justify-end gap-2.5 px-4 sm:px-5 py-3 border-t border-white/10 bg-white/[0.01]">
              <button
                type="button"
                onClick={() => { if (!submitInFlightRef.current) onClose(); }}
                disabled={isSubmitting}
                className="w-20 sm:w-[88px] h-8 sm:h-[34px] bg-white/5 hover:bg-white/10 text-white/70 border border-white/10 active:scale-[0.99] font-semibold text-xs sm:text-sm rounded-lg transition-all cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => { void handleConfirm(); }}
                disabled={isSubmitting}
                className="min-w-20 sm:min-w-[88px] h-8 sm:h-[34px] ultimate-3d-btn !py-0 font-bold text-xs sm:text-sm rounded-lg active:scale-[0.99] cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                {isSubmitting ? 'Saving...' : 'OK'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
