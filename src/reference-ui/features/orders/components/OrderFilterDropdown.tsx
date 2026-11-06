import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { lockPageScroll } from '../../../shared/utils/pageScrollLock';
import {
  getDisplayDateRange,
  getQuickDisplayDateRange,
  toDisplayDate,
  toIsoDate,
  type QuickDateRange,
} from '../../../shared/utils/dateRange';

export interface FilterState {
  status: string;
  startDate: string;
  endDate: string;
  quickRange?: string;
  awaitingPaymentOnly?: boolean;
}

interface OrderFilterDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filter: FilterState) => void;
  initialFilters?: FilterState;
  title?: string;
  statusOptions?: { label: string; value: string }[];
  includeAllTime?: boolean;
  showAwaitingPaymentToggle?: boolean;
}

export const OrderFilterDropdown: React.FC<OrderFilterDropdownProps> = ({
  isOpen,
  onClose,
  onApply,
  initialFilters,
  title = 'Recharge Filter',
  statusOptions = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Processing', value: 'processing' },
    { label: 'Failed', value: 'failed' },
  ],
  includeAllTime = false,
  showAwaitingPaymentToggle = false,
}) => {
  const [status, setStatus] = useState(initialFilters?.status || 'all');
  const [startDate, setStartDate] = useState(
    () => initialFilters?.startDate || getDisplayDateRange().startDate,
  );
  const [endDate, setEndDate] = useState(
    () => initialFilters?.endDate || getDisplayDateRange().endDate,
  );
  const [selectedQuickRange, setSelectedQuickRange] = useState<string>(
    initialFilters?.quickRange || (includeAllTime ? 'All Time' : 'Last 30 Days')
  );
  const [awaitingPaymentOnly, setAwaitingPaymentOnly] = useState(
    () => Boolean(initialFilters?.awaitingPaymentOnly),
  );

  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isDateRangeDropdownOpen, setIsDateRangeDropdownOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const statusSelectRef = useRef<HTMLDivElement>(null);
  const dateRangeSelectRef = useRef<HTMLDivElement>(null);

  // Sync state when initialFilters changes or modal opens
  useEffect(() => {
    if (initialFilters) {
      const fallbackRange = getDisplayDateRange();
      // This animated dialog stays mounted, so refresh the draft when it reopens.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus(initialFilters.status || 'all');
      setStartDate(initialFilters.startDate || fallbackRange.startDate);
      setEndDate(initialFilters.endDate || fallbackRange.endDate);
      setSelectedQuickRange(initialFilters.quickRange || (includeAllTime ? 'All Time' : 'Last 30 Days'));
      setAwaitingPaymentOnly(Boolean(initialFilters.awaitingPaymentOnly));
    }
  }, [initialFilters, isOpen, includeAllTime]);

  // Lock background body scroll when modal is open (like Review Order modal)
  useEffect(() => {
    if (!isOpen) return;

    const unlockScroll = lockPageScroll();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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
      if (statusSelectRef.current && !statusSelectRef.current.contains(e.target as Node)) {
        setIsStatusDropdownOpen(false);
      }
      if (dateRangeSelectRef.current && !dateRangeSelectRef.current.contains(e.target as Node)) {
        setIsDateRangeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const dateRangeOptions = includeAllTime
    ? ['All Time', 'Today', 'Last 2 Days', 'Last 7 Days', 'Last 30 Days', 'Select Date'] as const
    : ['Today', 'Last 2 Days', 'Last 7 Days', 'Last 30 Days', 'Select Date'] as const;

  const handleQuickRange = (range: string) => {
    setSelectedQuickRange(range);
    setIsDateRangeDropdownOpen(false);
    
    if (range === 'All Time') return;

    if (range !== 'Select Date') {
      const rangeDates = getQuickDisplayDateRange(range as QuickDateRange);
      setStartDate(rangeDates.startDate);
      setEndDate(rangeDates.endDate);
    }
  };

  const handleApply = () => {
    onApply({
      status,
      startDate,
      endDate,
      quickRange: selectedQuickRange === 'All Time' ? undefined : selectedQuickRange,
      awaitingPaymentOnly: showAwaitingPaymentToggle ? awaitingPaymentOnly : undefined,
    });
    onClose();
  };

  const handleReset = () => {
    const defaultRange = getDisplayDateRange();
    setStatus('all');
    setStartDate(defaultRange.startDate);
    setEndDate(defaultRange.endDate);
    setSelectedQuickRange(includeAllTime ? 'All Time' : 'Last 30 Days');
    setAwaitingPaymentOnly(false);
    setIsStatusDropdownOpen(false);
    setIsDateRangeDropdownOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-6 sm:pt-10 bg-black/75 backdrop-blur-md transition-all select-none"
        >
          <button
            type="button"
            aria-label="Close order filter dialog"
            className="absolute inset-0 cursor-default"
            onClick={onClose}
          />
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: -70, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -70, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[400px] sm:max-w-[430px] bg-[#121212] text-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-white/15 select-text"
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-filter-dialog-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-white/10 bg-white/[0.02] rounded-t-2xl">
              <h2 id="order-filter-dialog-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-4 sm:p-5 space-y-3 sm:space-y-3.5">
              {/* Status */}
              <div className={`space-y-1 relative ${isStatusDropdownOpen ? 'z-50' : 'z-10'}`} ref={statusSelectRef}>
                <p className="block text-xs sm:text-sm font-medium text-white/70">
                  Status
                </p>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsStatusDropdownOpen(!isStatusDropdownOpen);
                    }}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white flex items-center justify-between shadow-inner hover:border-white/20 focus:border-white/30 transition-colors cursor-pointer"
                  >
                    <span>
                      {statusOptions.find((opt) => opt.value === status)?.label || status}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/50 transition-transform ${
                        isStatusDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isStatusDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="absolute top-full left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden max-h-48 overflow-y-auto"
                      >
                        {statusOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setStatus(opt.value);
                              setIsStatusDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3.5 py-1.5 text-xs sm:text-sm transition-colors cursor-pointer ${
                              status === opt.value
                                ? 'bg-white/15 text-white font-bold'
                                : 'text-white/70 hover:bg-white/5 hover:text-white'
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

              {/* Date Range */}
              <div className={`space-y-1 relative ${isDateRangeDropdownOpen ? 'z-50' : 'z-10'}`} ref={dateRangeSelectRef}>
                <p className="block text-xs sm:text-sm font-medium text-white/70">
                  Date Range
                </p>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsDateRangeDropdownOpen(!isDateRangeDropdownOpen);
                      setIsStatusDropdownOpen(false);
                    }}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white flex items-center justify-between shadow-inner hover:border-white/20 focus:border-white/30 transition-colors cursor-pointer"
                  >
                    <span>{selectedQuickRange || 'Select Date'}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/50 transition-transform ${
                        isDateRangeDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isDateRangeDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="absolute top-full left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden max-h-48 overflow-y-auto"
                      >
                        {dateRangeOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleQuickRange(opt)}
                            className={`w-full text-left px-3.5 py-1.5 text-xs sm:text-sm transition-colors cursor-pointer ${
                              selectedQuickRange === opt
                                ? 'bg-white/15 text-white font-bold'
                                : 'text-white/70 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Custom Date Selection (Only visible if 'Select Date' is chosen) */}
              <AnimatePresence>
                {selectedQuickRange === 'Select Date' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="grid grid-cols-2 gap-3 overflow-hidden"
                  >
                    <div className="space-y-1">
                      <label htmlFor="order-filter-start-date" className="block text-xs font-medium text-white/60">
                        Start Date
                      </label>
                      <input
                        id="order-filter-start-date"
                        type="date"
                        value={toIsoDate(startDate)}
                        onChange={(e) => {
                          setStartDate(toDisplayDate(e.target.value));
                        }}
                        onClick={(e) => {
                          try {
                            e.currentTarget.showPicker?.();
                          } catch {}
                        }}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white shadow-inner focus:outline-none focus:border-white/40 hover:border-white/20 transition-colors [color-scheme:dark] cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="order-filter-end-date" className="block text-xs font-medium text-white/60">
                        End Date
                      </label>
                      <input
                        id="order-filter-end-date"
                        type="date"
                        value={toIsoDate(endDate)}
                        onChange={(e) => {
                          setEndDate(toDisplayDate(e.target.value));
                        }}
                        onClick={(e) => {
                          try {
                            e.currentTarget.showPicker?.();
                          } catch {}
                        }}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white shadow-inner focus:outline-none focus:border-white/40 hover:border-white/20 transition-colors [color-scheme:dark] cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {showAwaitingPaymentToggle && (
                <div className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/35 px-3.5 py-2.5">
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-white/70">Awaiting Payment</p>
                    <p className="text-[10px] sm:text-xs text-white/35">ON shows awaiting-payment orders only.</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={awaitingPaymentOnly}
                    aria-label="Show awaiting payment orders only"
                    onClick={() => setAwaitingPaymentOnly((current) => !current)}
                    className={`relative h-6 w-12 shrink-0 rounded-full border transition-colors cursor-pointer ${
                      awaitingPaymentOnly
                        ? 'bg-white/20 border-white/35'
                        : 'bg-black/60 border-white/15'
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                        awaitingPaymentOnly ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                    <span className="sr-only">{awaitingPaymentOnly ? 'On' : 'Off'}</span>
                  </button>
                  <span className="w-7 text-right text-[10px] font-semibold uppercase text-white/50">
                    {awaitingPaymentOnly ? 'On' : 'Off'}
                  </span>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-black/40 border-t border-white/10 flex items-center justify-end gap-2.5 rounded-b-2xl">
              <button
                type="button"
                onClick={handleReset}
                className="mr-auto rounded-lg px-3 py-1.5 text-xs font-medium text-white/55 hover:bg-white/5 hover:text-white"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleApply}
                className="ultimate-3d-btn text-xs sm:text-sm px-5 py-1.5 font-bold cursor-pointer"
              >
                Apply
              </button>
              <button
                type="button"
                onClick={onClose}
                className="glass-effect-btn text-xs sm:text-sm px-4 py-1.5 text-white/80 hover:text-white border border-white/10 hover:border-white/20 cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
