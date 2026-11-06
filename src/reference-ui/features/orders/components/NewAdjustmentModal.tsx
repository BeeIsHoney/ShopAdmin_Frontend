import { displayName } from '../../../shared/utils/displayName';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, Search, Loader2 } from 'lucide-react';
import { type AdjustmentType, type WalletAdjustment } from '../types/wallet-adjustment.types';
import type { UserItem } from '../../users/types/user.types';
import { lockPageScroll } from '../../../shared/utils/pageScrollLock';

interface NewAdjustmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (adjustment: Omit<WalletAdjustment, 'id' | 'createdAt'>) => void | Promise<void>;
  users: UserItem[];
}

export const NewAdjustmentModal: React.FC<NewAdjustmentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  users,
}) => {
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [userSearchQuery, setUserSearchQuery] = useState<string>('');
  const [type, setType] = useState<AdjustmentType | ''>('');
  const [amount, setAmount] = useState<string>('');
  const [remark, setRemark] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

  const userDropdownRef = useRef<HTMLDivElement>(null);
  const typeDropdownRef = useRef<HTMLDivElement>(null);

  const selectedUser = users.find(u => u.id === selectedUserId);

  const nameAndIdValue = selectedUser ? `${displayName(selectedUser)} (${selectedUser.id})` : '';

  const emailAndTgValue = useMemo(() => {
    if (!selectedUser) return '';
    const parts: string[] = [];
    if (selectedUser.email) parts.push(selectedUser.email);
    if (selectedUser.telegram) parts.push(selectedUser.telegram);
    return parts.join(' • ');
  }, [selectedUser]);

  const balanceValue = selectedUser ? `${selectedUser.balance.toLocaleString()} Ks` : '';

  const filteredUsers = useMemo(() => {
    const q = userSearchQuery.trim().toLowerCase();
    if (!q) return users;
    return users.filter(u =>
      u.id.toLowerCase().includes(q) ||
      u.username.toLowerCase().includes(q) ||
      displayName(u).toLowerCase().includes(q) ||
      (u.email || '').toLowerCase().includes(q) ||
      (u.telegram || '').toLowerCase().includes(q)
    );
  }, [userSearchQuery, users]);

  const handleClose = React.useCallback(() => {
    if(isSaving)return;
    setSelectedUserId('');
    setUserSearchQuery('');
    setType('');
    setAmount('');
    setRemark('');
    setSubmitError('');
    setIsUserDropdownOpen(false);
    setIsTypeDropdownOpen(false);
    onClose();
  }, [onClose,isSaving]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const unlockScroll = lockPageScroll();
    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  // Handle escape key and click outside dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isUserDropdownOpen) setIsUserDropdownOpen(false);
        else if (isTypeDropdownOpen) setIsTypeDropdownOpen(false);
        else if (isOpen) handleClose();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target as Node)) {
        setIsUserDropdownOpen(false);
      }
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(e.target as Node)) {
        setIsTypeDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isUserDropdownOpen, isTypeDropdownOpen, handleClose]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isSaving) return;

    if (!selectedUserId || !type || !amount || !remark.trim() || !Number.isFinite(Number(amount)) || Number(amount) <= 0) {
      return;
    }

    if (selectedUser && type) {
      setIsSaving(true);
      setSubmitError('');
      try {
        await onSubmit({
          userId: selectedUser.id,
          userName: selectedUser.username,
          displayName: displayName(selectedUser),
          type,
          amount: Number(amount),
          remark: remark.trim(),
        });
        handleClose();
      } catch (error) {
        // Do not close the dialog or silently swallow a failed wallet save.
        // A rejected request must not look like a successful adjustment.
        setSubmitError(error instanceof Error && error.message.trim()
          ? error.message
          : 'Unable to save balance adjustment. Please try again after checking the backend status.');
      } finally {
        setIsSaving(false);
      }
    }
  };

  const labelClass = "block text-[11px] font-medium text-white/70 mb-1";
  const inputClass = "w-full bg-black/40 border border-white/10 focus:border-white/40 focus:ring-1 focus:ring-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-white/30 transition-all outline-none";

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm select-none transition-all overflow-y-auto"
        >
          <button
            type="button"
            aria-label="Close balance adjustment dialog"
            className="absolute inset-0 cursor-default"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-[370px] max-h-[calc(100vh-2rem)] flex flex-col bg-[#0d0d0d] border border-white/10 shadow-2xl rounded-lg overflow-hidden text-white select-text my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="adjustment-dialog-title"
          >
            {/* Header Area */}
            <div className="px-3.5 py-3 border-b border-white/5 flex items-center justify-between">
              <h2 id="adjustment-dialog-title" className="text-sm font-bold text-white tracking-tight">
                Create Balance Adjustment
              </h2>
              <button
                type="button"
                onClick={handleClose}
                className="text-white/40 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Form Container */}
            <form onSubmit={handleSubmit} className="p-3.5 space-y-2.5 overflow-y-auto custom-scrollbar">
              
              {/* User Search / Selection */}
              <div className={`relative ${isUserDropdownOpen ? 'z-50' : 'z-10'}`} ref={userDropdownRef}>
                <label htmlFor="user-search-input" className={labelClass}>
                  User (ID, Name, Email & TG)<span className="text-red-500 ml-0.5">*</span>
                </label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-white/40 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="user-search-input"
                    type="text"
                    required
                    autoComplete="off"
                    value={userSearchQuery}
                    placeholder="Search by ID, Name, Email, or @TG..."
                    onFocus={() => setIsUserDropdownOpen(true)}
                    onChange={(e) => {
                      setUserSearchQuery(e.target.value);
                      setIsUserDropdownOpen(true);
                      if (selectedUserId && e.target.value !== nameAndIdValue) {
                        setSelectedUserId('');
                      }
                    }}
                    className={`${inputClass} pl-8 pr-7.5`}
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => {
                      if (selectedUserId || userSearchQuery) {
                        setSelectedUserId('');
                        setUserSearchQuery('');
                        setIsUserDropdownOpen(true);
                      } else {
                        setIsUserDropdownOpen(!isUserDropdownOpen);
                      }
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 p-0.5 rounded cursor-pointer transition-colors"
                  >
                    {userSearchQuery ? (
                      <X className="w-3 h-3" />
                    ) : (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                </div>
                
                <AnimatePresence>
                  {isUserDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-[#161616] border border-white/10 rounded-lg shadow-xl flex flex-col overflow-hidden max-h-40 overflow-y-auto custom-scrollbar"
                    >
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map(user => (
                          <button
                            key={user.id}
                            type="button"
                            onClick={() => {
                              setSelectedUserId(user.id);
                              setUserSearchQuery(`${displayName(user)} (${user.id})`);
                              setIsUserDropdownOpen(false);
                            }}
                            className={`w-full text-left px-2.5 py-1.5 text-xs hover:bg-white/10 transition-colors flex flex-col gap-0.5 cursor-pointer ${selectedUserId === user.id ? 'bg-white/10' : ''}`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-white/90 text-[11px]">{displayName(user)} ({user.id})</span>
                              {user.telegram && (
                                <span className="text-[10px] text-white/50">{user.telegram}</span>
                              )}
                            </div>
                            <span className="text-[10px] text-white/40">{user.email} • {user.telegram}</span>
                          </button>
                        ))
                      ) : (
                        <div className="px-3 py-2.5 text-center text-xs text-white/40">
                          No users found
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Readonly Summary Info Box */}
              <div className="grid gap-1.5 bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
                <div className="flex items-center justify-between text-xs gap-2">
                  <span className="text-[11px] text-white/50 shrink-0">Name & (ID)</span>
                  <span className="text-[11px] font-medium text-white/90 truncate text-right">
                    {nameAndIdValue || '-'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs gap-2">
                  <span className="text-[11px] text-white/50 shrink-0">Email & TG</span>
                  <span className="text-[11px] text-white/70 truncate text-right">
                    {emailAndTgValue || '-'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs gap-2">
                  <span className="text-[11px] text-white/50 shrink-0">Balance</span>
                  <span className="text-[11px] font-semibold text-white/95 text-right">
                    {balanceValue || '-'}
                  </span>
                </div>
              </div>

              {/* Type & Amount in 2-Column Grid */}
              <div className="grid grid-cols-2 gap-2">
                {/* Type selector */}
                <div className={`relative ${isTypeDropdownOpen ? 'z-50' : 'z-10'}`} ref={typeDropdownRef}>
                  <label htmlFor="type-dropdown-button" className={labelClass}>
                    Type<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <div className="relative">
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      className="opacity-0 absolute inset-0 pointer-events-none w-full h-full"
                      value={type}
                      onChange={() => {}}
                      required
                    />
                    <button
                      id="type-dropdown-button"
                      type="button"
                      onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                      className={`${inputClass} flex items-center justify-between cursor-pointer`}
                    >
                      <span className={`truncate text-xs ${type ? 'text-white font-medium' : 'text-white/30'}`}>
                        {type === 'increase' ? 'Increase' : type === 'decrease' ? 'Decrease' : 'Select'}
                      </span>
                      <ChevronDown className={`w-3 h-3 text-white/40 shrink-0 ml-1 transition-transform ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isTypeDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-[#161616] border border-white/10 rounded-lg shadow-xl flex flex-col overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setType('increase');
                            setIsTypeDropdownOpen(false);
                          }}
                          className={`w-full text-left px-2.5 py-1.5 text-xs hover:bg-white/10 transition-colors cursor-pointer ${type === 'increase' ? 'bg-white/5 text-emerald-400' : 'text-white/90'}`}
                        >
                          Increase
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setType('decrease');
                            setIsTypeDropdownOpen(false);
                          }}
                          className={`w-full text-left px-2.5 py-1.5 text-xs hover:bg-white/10 transition-colors cursor-pointer ${type === 'decrease' ? 'bg-white/5 text-red-400' : 'text-white/90'}`}
                        >
                          Decrease
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Amount */}
                <div>
                  <label htmlFor="adjustment-amount" className={labelClass}>
                    Amount<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    id="adjustment-amount"
                    type="number"
                    required
                    value={amount}
                    placeholder="0"
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Remark */}
              <div>
                <label htmlFor="adjustment-remark" className={labelClass}>
                  Remark <span className="text-white/40 font-normal text-[10px]">(Required)</span>
                </label>
                <input
                  id="adjustment-remark"
                  type="text"
                  required maxLength={300} placeholder="Enter reason"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  className={inputClass}
                />
              </div>

              {submitError && (
                <p role="alert" className="rounded-md border border-red-500/30 bg-red-500/10 px-2.5 py-2 text-xs text-red-300">
                  {submitError}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2.5 border-t border-white/5">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 font-medium text-xs rounded-md active:scale-[0.98] transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-4 py-1.5 bg-white hover:bg-neutral-200 text-black font-semibold text-xs rounded-md active:scale-[0.98] transition-all cursor-pointer shadow-[0_0_12px_rgba(255,255,255,0.12)] hover:shadow-[0_0_18px_rgba(255,255,255,0.2)] border border-white/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSaving ? <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" />Saving...</span> : 'Create'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
