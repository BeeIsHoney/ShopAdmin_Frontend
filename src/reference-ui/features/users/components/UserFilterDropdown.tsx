import { lockPageScroll } from '../../../shared/utils/pageScrollLock';
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { UserFilterState } from '../types/reference-user.types';

interface UserFilterDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filter: UserFilterState) => void;
  initialFilters: UserFilterState;
  title?: string;
}

const PLAN_OPTIONS: { label: string; value: UserFilterState['plan'] }[] = [
  { label: 'All Plans', value: 'all' },
  { label: 'Basic', value: 'Basic' },
];


const SORT_OPTIONS: { label: string; value: UserFilterState['sort'] }[] = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Balance: High to Low', value: 'balance-high' },
  { label: 'Balance: Low to High', value: 'balance-low' },
  { label: 'Username A–Z', value: 'name' },
];

export const UserFilterDropdown: React.FC<UserFilterDropdownProps> = ({
  isOpen,
  onClose,
  onApply,
  initialFilters,
  title = 'User Filters',
}) => {
  const [plan, setPlan] = useState<UserFilterState['plan']>(initialFilters.plan);
  const [showBanned, setShowBanned] = useState<boolean>(initialFilters.showBanned);
  const [sort, setSort] = useState<UserFilterState['sort']>(initialFilters.sort);

  const [activeDropdown, setActiveDropdown] = useState<'plan' | 'sort' | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = {
    plan: useRef<HTMLDivElement>(null),
    sort: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    if (!isOpen) return;
    setPlan(initialFilters.plan);
    setShowBanned(initialFilters.showBanned);
    setSort(initialFilters.sort);
    setActiveDropdown(null);
  }, [isOpen, initialFilters]);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const unlockScroll = lockPageScroll();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      unlockScroll();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Click outside to close inner selects
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (activeDropdown && dropdownRefs[activeDropdown].current && !dropdownRefs[activeDropdown].current?.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    if (isOpen && activeDropdown) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeDropdown]);

  const handleApply = () => {
    onApply({ plan, showBanned, sort });
    onClose();
  };

  const handleReset = () => {
    setPlan('all');
    setShowBanned(false);
    setSort('newest');
    setActiveDropdown(null);
  };

  const renderDropdown = (
    key: 'plan' | 'sort',
    label: string,
    value: string,
    options: { label: string; value: string }[],
    setValue: (val: string) => void
  ) => {
    const isOpen = activeDropdown === key;
    const currentLabel = options.find((o) => o.value === value)?.label || value;

    return (
      <div className={`space-y-1 relative ${isOpen ? 'z-50' : 'z-10'}`} ref={dropdownRefs[key]}>
        <p className="block text-xs sm:text-sm font-medium text-white/70">{label}</p>
        <div className="relative">
          <button
            type="button"
            onClick={() => setActiveDropdown(isOpen ? null : key)}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white flex items-center justify-between shadow-inner hover:border-white/20 focus:border-white/30 transition-colors cursor-pointer"
          >
            <span>{currentLabel}</span>
            <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute top-full left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-lg shadow-[0_16px_40px_rgba(0,0,0,0.95)] flex flex-col max-h-52 overflow-y-auto z-50 p-1.5 space-y-0.5"
              >
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setValue(opt.value);
                      setActiveDropdown(null);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm transition-all cursor-pointer ${
                      value === opt.value
                        ? 'bg-white/15 text-white font-semibold shadow-sm'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-6 sm:pt-10 bg-black/75 backdrop-blur-md transition-all select-none">
          <button type="button" aria-label="Close user filters" className="absolute inset-0 cursor-default" onClick={onClose} />
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: -70, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -70, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[400px] sm:max-w-[480px] bg-[#121212] text-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-white/15 select-text"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-white/10 bg-white/[0.02] rounded-t-2xl">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">{title}</h2>
              <button type="button" onClick={onClose} aria-label="Close dialog" className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-4 sm:p-5 space-y-3 sm:space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {renderDropdown('plan', 'Plan', plan, PLAN_OPTIONS, (value) => setPlan(value as UserFilterState['plan']))}
                {renderDropdown('sort', 'Sort', sort, SORT_OPTIONS, (value) => setSort(value as UserFilterState['sort']))}
                <div className="flex items-center justify-between col-span-1 sm:col-span-2 bg-black/50 border border-white/10 rounded-lg px-3.5 py-2.5">
                  <span className="text-xs sm:text-sm font-medium text-white/70">Ban Users</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={showBanned}
                    onClick={() => setShowBanned(!showBanned)}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${showBanned ? 'bg-amber-500' : 'bg-white/20'}`}
                  >
                    <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${showBanned ? 'translate-x-4.5' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-black/40 border-t border-white/10 flex items-center justify-end gap-2.5 rounded-b-2xl">
              <button type="button" onClick={handleReset} className="mr-auto rounded-lg px-3 py-1.5 text-xs font-medium text-white/55 hover:bg-white/5 hover:text-white cursor-pointer">
                Reset
              </button>
              <button type="button" onClick={handleApply} className="ultimate-3d-btn text-xs sm:text-sm px-5 py-1.5 font-bold cursor-pointer">
                Apply
              </button>
              <button type="button" onClick={onClose} className="glass-effect-btn text-xs sm:text-sm px-4 py-1.5 text-white/80 hover:text-white border border-white/10 hover:border-white/20 cursor-pointer">
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
