'use client';
import { displayName } from '../../shared/utils/displayName';
import { AdminPageSkeleton } from '../../shared/components/FinanceSkeletons';
import {usePanel} from '@/components/context';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Filter, ChevronDown, ChevronLeft, ChevronRight, Box, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OrderFilterDropdown, type FilterState } from './components/OrderFilterDropdown';
import { type WalletAdjustment, type AdjustmentType } from './types/wallet-adjustment.types';
import { NewAdjustmentModal } from './components/NewAdjustmentModal';
import { getDisplayDateRange, isDateWithinDisplayRange } from '../../shared/utils/dateRange';
import { adminPanelApi } from '../../shared/services/financePanelApi';
import type { UserItem } from '../users/types/user.types';

const getTypeBadge = (type: AdjustmentType) => {
  if (type === 'increase') {
    return (
      <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        increase
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
      decrease
    </span>
  );
};

type SortField = 'userId' | 'userName' | 'amount' | 'remark' | 'createdAt';

export const BalanceAdjustmentsView: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadError,setLoadError] = useState('');
  const [retry,setRetry] = useState(0);
  const {refresh,profile,invalidate} = usePanel();

  const [adjustments, setAdjustments] = useState<WalletAdjustment[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortAsc, setSortAsc] = useState(false);
  
  const [filters, setFilters] = useState<FilterState>(() => ({
    paymentType: 'all', // Used for type: increase/decrease/all
    status: 'all',
    ...getDisplayDateRange(),
  }));

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isItemsPerPageOpen, setIsItemsPerPageOpen] = useState(false);
  const itemsPerPageRef = useRef<HTMLDivElement>(null);

  // Click outside to close items-per-page dropdown
  useEffect(() => {
    let active = true;
    setLoadError('');
    Promise.all([adminPanelApi.adjustments.list(), adminPanelApi.users.list()])
      .then(([items, userItems]) => {
        if (!active) return;
        setAdjustments(items);
        setUsers(userItems);
      })
      .catch((error) => {if(active) setLoadError(error instanceof Error ? error.message : 'Unable to load records.');})
      .finally(() => { if (active) setIsLoading(false); });
    const handleClickOutside = (event: MouseEvent) => {
      if (itemsPerPageRef.current && !itemsPerPageRef.current.contains(event.target as Node)) {
        setIsItemsPerPageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      active = false;
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refresh,retry]);

  // Handle adding new adjustment
  const handleAddAdjustment = async (newAdj: Omit<WalletAdjustment, 'id' | 'createdAt'>) => {
    const created = await adminPanelApi.adjustments.create({
      userId: newAdj.userId,
      type: newAdj.type,
      amount: newAdj.amount,
      remark: newAdj.remark,
    }, {shop:profile.shop.code,owner:profile.id});
    setAdjustments((prev) => [created, ...prev]);
    setCurrentPage(1);
    invalidate();
  };

  // Sort toggle handler
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  // Filter & Sort Data
  const filteredData = useMemo(() => {
    const result = adjustments.filter((item) => {
      const lowerQuery = searchTerm.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        item.userId.toLowerCase().includes(lowerQuery) ||
        item.userName.toLowerCase().includes(lowerQuery) ||
        displayName(item).toLowerCase().includes(lowerQuery) ||
        item.type.toLowerCase().includes(lowerQuery) ||
        item.amount.toString().includes(lowerQuery) ||
        (item.remark && item.remark.toLowerCase().includes(lowerQuery)) ||
        item.createdAt.toLowerCase().includes(lowerQuery);

      const matchesType =
        filters.status === 'all' || item.type.toLowerCase() === filters.status.toLowerCase();

      const matchesDate =
        !filters.quickRange ||
        isDateWithinDisplayRange(item.createdAt, filters.startDate, filters.endDate);

      return matchesSearch && matchesType && matchesDate;
    });

    return result.sort((a, b) => {
      let comparison = 0;
      if (sortField === 'userId') {
        comparison = a.userId.localeCompare(b.userId);
      } else if (sortField === 'userName') {
        comparison = displayName(a).localeCompare(displayName(b));
      } else if (sortField === 'amount') {
        comparison = a.amount - b.amount;
      } else if (sortField === 'remark') {
        comparison = (a.remark || '').localeCompare(b.remark || '');
      } else {
        comparison = Date.parse(a.createdAt) - Date.parse(b.createdAt);
      }
      return sortAsc ? comparison : -comparison;
    });
  }, [adjustments, searchTerm, filters, sortField, sortAsc]);

  // Calculation Logic
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage,refresh,retry]);

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
            placeholder="Search adjustments..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full h-[38px] bg-black/40 border border-white/10 rounded-lg text-white/90 pl-9 pr-9 text-sm transition-all placeholder:text-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl focus:outline-none focus:border-white/30"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setCurrentPage(1);
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
          onClick={() => setIsModalOpen(true)}
          aria-label="New adjustment"
          title="New Adjustment"
          className="glass-effect-btn h-[38px] w-[38px] p-0 relative flex items-center justify-center border-white/10 hover:border-white/30 shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl hover:bg-white/10 cursor-pointer text-white/80 hover:text-white transition-all"
        >
          <Plus className="w-4 h-4" />
        </button>

        <button type="button"
          onClick={() => setShowFilter(!showFilter)}
          aria-label="Open balance adjustment filters"
          aria-expanded={showFilter}
          className={`glass-effect-btn h-[38px] w-[38px] p-0 relative flex items-center justify-center border-white/10 hover:border-white/30 shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl ${
            showFilter
              ? 'bg-white/20 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]'
              : 'bg-black/40'
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
          setCurrentPage(1);
        }}
        initialFilters={filters}
        title="Balance Adjustments Filter"
        statusOptions={[
          { label: 'All', value: 'all' },
          { label: 'Increase', value: 'increase' },
          { label: 'Decrease', value: 'decrease' },
        ]}
      />

      {/* Main Content Area */}
      <div className="card-container w-full flex-1 flex flex-col overflow-hidden">
        {/* Responsive Table View */}
        <div className="w-full overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left text-[10px] sm:text-[11px] md:text-sm whitespace-nowrap">
            <thead className="bg-white/5 text-white/50 border-b border-white/10 sticky top-0 z-10 backdrop-blur-md">
              <tr>
                {([
                  { field: 'userId', label: 'ID' },
                  { field: null, label: 'Type' },
                  { field: 'userName', label: 'Username' },
                  { field: 'amount', label: 'Amount' },
                  { field: 'remark', label: 'Remark' },
                  { field: 'createdAt', label: 'Created at' },
                ] as const).map(({ field, label }) => (
                  <th
                    key={label}
                    aria-sort={field && sortField === field ? (sortAsc ? 'ascending' : 'descending') : undefined}
                    className="px-2 py-1.5 font-medium sm:px-2.5 sm:py-2 md:px-4 md:py-2.5"
                  >
                    {field ? (
                      <button
                        type="button"
                        onClick={() => handleSort(field)}
                        className="group flex items-center gap-1 rounded hover:text-white"
                      >
                        {label}
                      </button>
                    ) : label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="h-[500px]">
                    <div className="flex flex-col items-center justify-center h-full text-white/40 space-y-3">
                      <Box className="w-12 h-12 opacity-50" />
                      <p className="text-sm font-medium">Balance Adjustments Not Found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {paginatedData.map((item) => (
                    <tr key={item.id} className="hover:bg-white/5 transition-colors group cursor-default">
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/50 group-hover:text-white/80 transition-colors">
                        {item.userId}
                      </td>
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5">
                        {getTypeBadge(item.type)}
                      </td>
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium text-white/90">
                        {displayName(item)}
                      </td>
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70">
                        {item.amount.toLocaleString()}
                      </td>
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70">
                        {item.remark || '-'}
                      </td>
                      <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70">
                        {item.createdAt}
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
            Total: <span className="text-white/90 font-medium">
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
                          setCurrentPage(1);
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
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`p-1 flex items-center justify-center rounded hover:bg-white/10 transition-colors shrink-0 ${currentPage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : 'text-white/80 hover:text-white'}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Adjustment Modal */}
      <NewAdjustmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddAdjustment}
        users={users}
      />
    </div>
  );
};
