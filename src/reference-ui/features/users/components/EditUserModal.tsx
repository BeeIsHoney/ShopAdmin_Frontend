import { displayName } from '../../../shared/utils/displayName';

import React from 'react';
import {CustomerSecurity} from '@/components/customer-security';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalBehavior } from '../../../shared/hooks/useModalBehavior';
import { type UserItem } from '../types/reference-user.types';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserItem | null;
  currentPlan: string;
  onSecurityChanged?: () => void;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  useModalBehavior(isOpen, onClose);

  if (!isOpen || !user) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <button type="button" aria-label="Close dialog" className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 8 }}
          className="relative w-full max-w-2xl max-h-[90vh] bg-[#111111] rounded-2xl border border-white/10 shadow-2xl z-10 overflow-hidden flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-user-title"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02] shrink-0">
            <div className="min-w-0">
              <h2 id="edit-user-title" className="text-base font-bold text-white truncate">User Info</h2>
              <p className="text-xs text-white/40 truncate">{displayName(user)} · {user.id}</p>
            </div>
            <button type="button" onClick={onClose} aria-label="Close" className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-5 space-y-5 overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                <p className="text-[10px] uppercase tracking-wider text-white/35">Account</p>
                <p className="mt-1 text-sm font-semibold text-white">{user.role||'USER'} · {user.status}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                <p className="text-[10px] uppercase tracking-wider text-white/35">Balance</p>
                <p className="mt-1 text-sm font-semibold text-white">{user.balance.toLocaleString()} Ks</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="text-[10px] uppercase tracking-wider text-white/35">Linked Accounts</p>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 rounded-lg border border-white/10 bg-black/25 p-3">
                  <div className="flex items-center gap-2 text-white/60 min-w-[100px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 text-white/80"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" fillRule="evenodd" d="M19.777 4.93a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z" clipRule="evenodd" /></svg>
                    <span className="text-xs font-medium">Telegram</span>
                  </div>
                  <div className="text-sm text-white/90 break-all">{user.telegram ? `ID: ${user.telegram}` : 'Not linked'}</div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 rounded-lg border border-white/10 bg-black/25 p-3">
                  <div className="flex items-center gap-2 text-white/60 min-w-[100px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 text-white/80"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" /></svg>
                    <span className="text-xs font-medium">Email</span>
                  </div>
                  <div className="text-sm text-white/90 truncate">{user.email || 'Not linked'}</div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 rounded-lg border border-white/10 bg-black/25 p-3">
                  <div className="flex items-center gap-2 text-white/60 min-w-[100px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 text-white/80"><path d="M0 0h24v24H0z" fill="none" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17.641 6.328A8 8 0 1 0 20 12h-7" /></svg>
                    <span className="text-xs font-medium">Google</span>
                  </div>
                  <div className="text-sm text-white/90 truncate">{user.google || 'Not linked'}</div>
                </div>
              </div>
            </div>

            <CustomerSecurity userId={user.id}/>
            <dl className="grid grid-cols-2 gap-3 text-xs"><div className="rounded-lg border border-white/10 p-3"><dt className="text-white/40">Customer ID</dt><dd className="mt-1 text-white">{user.id}</dd></div><div className="rounded-lg border border-white/10 p-3"><dt className="text-white/40">Total spent</dt><dd className="mt-1 text-white">{Number(user.totalSpent??0).toLocaleString()} Ks</dd></div></dl>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
