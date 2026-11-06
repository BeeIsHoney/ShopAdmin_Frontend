'use client';
import { AdminPageSkeleton } from '../../shared/components/FinanceSkeletons';
import {usePanel} from '@/components/context';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Search, Filter, ChevronDown, ChevronLeft, ChevronRight, Box, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from '../../shared/hooks/financeNavigation';
import { OrderFilterDropdown, type FilterState } from './components/OrderFilterDropdown';
import { formatCurrency } from '../../shared/utils/currency';
import { getDisplayDateRange, toIsoDate } from '../../shared/utils/dateRange';
import type { CanonicalRechargeOrder } from './types/order.types';
import { adminPanelApi } from '../../shared/services/financePanelApi';

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Completed':
      return (
        <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          {status}
        </span>
      );
    case 'Cancelled':
      return (
        <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
          {status}
        </span>
      );
    case 'Processing':
      return (
        <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
          {status}
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-medium bg-white/5 text-white/50 border border-white/10">
          {status}
        </span>
      );
  }
};

export const RechargeOrdersView: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadError,setLoadError] = useState('');
  const [retry,setRetry] = useState(0);
  const {refresh,profile,invalidate} = usePanel();
  const [normalizedOrders, setNormalizedOrders] = useState<CanonicalRechargeOrder[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState<FilterState>(() => ({
    status: 'all',
    ...getDisplayDateRange(),
  }));
  const navigate = useNavigate();

  // Cursor-based server pagination keeps hard reload work bounded even when
  // the historical order tables become large.
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isItemsPerPageOpen, setIsItemsPerPageOpen] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const itemsPerPageRef = useRef<HTMLDivElement>(null);
  const pageCursorsRef = useRef<Array<string | null>>([null]);

  const resetPagination = useCallback(() => {
    pageCursorsRef.current = [null];
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedSearchTerm(searchTerm), 350);
    return () => window.clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    let active = true;
    setLoadError('');
    adminPanelApi.topUps.page({
      size: itemsPerPage,
      cursor: pageCursorsRef.current[currentPage - 1] ?? null,
      search: debouncedSearchTerm.trim(),
      status: filters.status,
      startDate: filters.quickRange ? toIsoDate(filters.startDate) : undefined,
      endDate: filters.quickRange ? toIsoDate(filters.endDate) : undefined,
      includeTerminal: true,
      awaitingPaymentOnly: Boolean(filters.awaitingPaymentOnly),
    })
      .then((page) => {
        if (!active) return;
        setNormalizedOrders(page.items);
        setHasNextPage(page.hasNext);
        setNextCursor(page.nextCursor ?? null);
      })
      .catch((error) => {if(active) setLoadError(error instanceof Error ? error.message : 'Unable to load records.');})
      .finally(() => {
        if (active) setIsLoading(false);
      });
    return () => { active = false; };
  }, [currentPage, debouncedSearchTerm, filters.awaitingPaymentOnly, filters.endDate, filters.quickRange, filters.startDate, filters.status, itemsPerPage,refresh,retry]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemsPerPageRef.current && !itemsPerPageRef.current.contains(event.target as Node)) {
        setIsItemsPerPageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalItems = normalizedOrders.length;
  const paginatedData = normalizedOrders;

  if (isLoading) {
    return <AdminPageSkeleton />;
  }

  return (
    <div className="w-full space-y-3 sm:space-y-4 flex-1 flex flex-col">
      {loadError && <div role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">{loadError}<button type="button" className="ml-3 underline" onClick={()=>setRetry(v=>v+1)}>Try again</button></div>}
      {/* Header Actions & Controls */}
      <div className="flex items-center justify-end gap-2.5 sm:gap-3 w-full">
        <div className="relative flex-1 sm:flex-initial sm:w-64 lg:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 z-10 pointer-events-none" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              resetPagination();
            }}
            className="w-full h-[38px] bg-black/40 border border-white/10 rounded-lg text-white/90 pl-9 pr-9 text-sm transition-all placeholder:text-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl focus:outline-none focus:border-white/30"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                resetPagination();
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => navigate('/recharge-list')}
          className="glass-effect-btn h-[38px] text-xs sm:text-sm px-3 sm:px-4 flex items-center justify-center font-medium whitespace-nowrap shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl hover:bg-white/10 transition-all cursor-pointer"
        >
          Check
        </button>

        <button type="button"
          onClick={() => setShowFilter(!showFilter)}
          aria-label="Open recharge order filters"
          aria-expanded={showFilter}
          className={`glass-effect-btn h-[38px] w-[38px] p-0 relative flex items-center justify-center border-white/10 hover:border-white/30 shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl ${
            showFilter ? 'bg-white/20 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'bg-black/40'
          }`}
        >
          <Filter className="w-4 h-4" />
        </button>
      </div>

      {/* Filter Dropdown */}
      <OrderFilterDropdown
        isOpen={showFilter}
        onClose={() => setShowFilter(false)}
        onApply={(newFilters) => {
          setFilters(newFilters);
          resetPagination();
        }}
        initialFilters={filters}
        title="Recharge Filter"
        showAwaitingPaymentToggle
        statusOptions={[
          { label: 'All', value: 'all' },
          { label: 'Completed', value: 'completed' },
          { label: 'Processing', value: 'processing' },
          { label: 'Cancelled', value: 'cancelled' },
        ]}
      />


      {/* Main Content Area */}
      <div className="card-container w-full flex-1 flex flex-col overflow-hidden">
        {/* Responsive Table View */}
        <div className="w-full overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left text-[10px] sm:text-[11px] md:text-sm whitespace-nowrap">
            <thead className="bg-white/5 text-white/50 border-b border-white/10 sticky top-0 z-10 backdrop-blur-md">
              <tr>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">
                  <div className="flex items-center gap-1">
                    ID
                  </div>
                </th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">
                  Status
                </th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">
                  <div className="flex items-center gap-1">
                    Username
                  </div>
                </th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">
                  <div className="flex items-center gap-1">
                    Amount
                  </div>
                </th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">
                  <div className="flex items-center gap-1">
                    Txn No.
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="h-[500px]">
                    <div className="flex flex-col items-center justify-center h-full text-white/40 space-y-3">
                      <Box className="w-12 h-12 opacity-50" />
                      <p className="text-sm font-medium">Recharge Orders Not Found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {paginatedData.map((order) => (
                    <tr key={order.id} className="hover:bg-white/5 transition-colors group cursor-default">
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/50 group-hover:text-white/80 transition-colors">
                        {order.publicTransactionId || `tx${order.id.replace(/^(?:topup-|#)/, '')}`}
                      </td>
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5">
                        {getStatusBadge(order.status)}
                      </td>
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium text-white/90">{order.buyerName || order.username}</td>
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70">{formatCurrency(order.amount)}</td>
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70">
                        {order.status === 'Processing' ? '-' : (order.txnNo || '-')}
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 sm:p-4 border-t border-white/10 bg-black/20 w-full">
          <div className="text-white/40 text-sm min-w-[80px]">
            Loaded: <span className="text-white/90 font-medium">
              {Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 }).format(totalItems)}
            </span>
          </div>
          
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Rows per page Dropdown */}
            <div className="relative" ref={itemsPerPageRef}>
              <button type="button" 
                onClick={() => setIsItemsPerPageOpen(!isItemsPerPageOpen)}
                className="glass-effect-btn w-[72px] h-7 px-2.5 flex items-center justify-between text-xs"
              >
                <span>{itemsPerPage}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform shrink-0 ${isItemsPerPageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isItemsPerPageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full right-0 mb-2 w-full min-w-[72px] bg-[#161616] border border-white/15 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.9)] overflow-hidden z-50"
                  >
                    {[10, 50, 100].map((num) => (
                      <button type="button"
                        key={num}
                        onClick={() => {
                          setItemsPerPage(num);
                          resetPagination();
                          setIsItemsPerPageOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs transition-colors cursor-pointer ${
                          itemsPerPage === num
                            ? 'bg-white/20 text-white font-bold'
                            : 'text-white/60 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pagination Controls (Grouped inside a single pill) */}
            <div className="glass-effect-btn h-7 flex items-center px-1 gap-1">
              <button type="button" 
                aria-label="Previous page"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`p-1 flex items-center justify-center rounded hover:bg-white/10 transition-colors shrink-0 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'text-white/80 hover:text-white'}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <span className="text-white/90 text-xs text-center select-none font-medium w-8 shrink-0">
                {currentPage}
              </span>

              <button type="button" 
                aria-label="Next page"
                onClick={() => {
                  if (!hasNextPage || !nextCursor) return;
                  pageCursorsRef.current = [
                    ...pageCursorsRef.current.slice(0, currentPage),
                    nextCursor,
                  ];
                  setCurrentPage((page) => page + 1);
                }}
                disabled={!hasNextPage || !nextCursor}
                className={`p-1 flex items-center justify-center rounded hover:bg-white/10 transition-colors shrink-0 ${!hasNextPage || !nextCursor ? 'opacity-50 cursor-not-allowed' : 'text-white/80 hover:text-white'}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
