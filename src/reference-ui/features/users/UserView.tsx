'use client';
import { displayName } from '../../shared/utils/displayName';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Box, ChevronDown, ChevronLeft, ChevronRight, Filter, Search, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { EditUserModal } from './components/EditUserModal';
import { UserFilterDropdown } from './components/UserFilterDropdown';
import { UserStatusConfirmModal } from './components/UserStatusConfirmModal';
import {useData,usePanel} from '@/components/context';
import {usersApi} from '../../shared/services/usersApi';
import {AdminPageSkeleton} from '../../shared/components/FinanceSkeletons';
import type { UserFilterState, UserItem } from './types/reference-user.types';


const DEFAULT_FILTERS: UserFilterState = { plan: 'all', showBanned: false, sort: 'newest' };

const formatUserDate = (dateStr: string) => {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

export const UserView: React.FC = () => {
  const {profile,invalidate}=usePanel();
  const {data:users=[],error,refreshError,loading}=useData(`reference-users:${profile.shop.id}`,()=>usersApi.list());
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState<UserFilterState>(DEFAULT_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isItemsPerPageOpen, setIsItemsPerPageOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserItem | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [statusModalUser, setStatusModalUser] = useState<UserItem | null>(null);
  const [statusModalAction, setStatusModalAction] = useState<'Ban' | 'Unban'>('Ban');
  const itemsPerPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOutside = (event: MouseEvent) => {
      if (itemsPerPageRef.current && !itemsPerPageRef.current.contains(event.target as Node)) setIsItemsPerPageOpen(false);
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  const filteredData = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    const data = users.filter((user) => {
      const plan = 'Basic';
      const matchesSearch = !normalized || [user.id, displayName(user), user.username, user.telegram, user.email, user.google].some((value) => value?.toLowerCase().includes(normalized));
      const matchesPlan = filters.plan === 'all' || plan === filters.plan;
      const matchesStatus = filters.showBanned ? user.status === 'Banned' : user.status === 'Active';
      return matchesSearch && matchesPlan && matchesStatus;
    });
    return data.sort((a, b) => {
      if (filters.sort === 'balance-high') return b.balance - a.balance;
      if (filters.sort === 'balance-low') return a.balance - b.balance;
      if (filters.sort === 'name') return displayName(a).localeCompare(displayName(b));
      const aDate = Date.parse(a.createdAt); const bDate = Date.parse(b.createdAt);
      return filters.sort === 'oldest' ? aDate - bDate : bDate - aDate;
    });
  }, [filters, searchTerm, users]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedData = filteredData.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage);

  if(loading&&!users.length&&!error)return <AdminPageSkeleton/>;
  return <div className="w-full space-y-3 sm:space-y-4 flex-1 flex flex-col">
    {(error||refreshError)&&<p role="alert" className="rounded-lg border border-rose-500/25 bg-rose-500/10 p-3 text-xs text-rose-200">{error||refreshError}<button type="button" onClick={invalidate} className="ml-3 underline">Try again</button></p>}
    <div className="flex items-center justify-between gap-2.5 sm:gap-3 w-full">
      <h1 className="hidden md:block text-xl sm:text-2xl font-bold text-white tracking-tight">Users</h1>
      <div className="flex items-center justify-end gap-2.5 sm:gap-3 flex-1">
        <div className="relative flex-1 sm:flex-initial sm:w-64 lg:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 z-10 pointer-events-none" />
          <input
            type="text"
            placeholder="Search ID, user, email, Telegram..."
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
          onClick={() => setShowFilter((value) => !value)}
          aria-label="Open user filters"
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
    </div>

    <UserFilterDropdown
        isOpen={showFilter}
        onClose={() => setShowFilter(false)}
        initialFilters={filters}
        onApply={(nextFilters) => {
          setFilters(nextFilters);
          setCurrentPage(1);
        }}
      />

    <div className="card-container w-full flex-1 flex flex-col overflow-hidden">
      <div className="w-full overflow-x-auto custom-scrollbar flex-1">
        <table className="w-full text-left text-[10px] sm:text-[11px] md:text-sm whitespace-nowrap">
          <thead className="bg-white/5 text-white/50 border-b border-white/10 sticky top-0 z-10 backdrop-blur-md">
            <tr>
              <th className="px-3 py-2.5 font-medium">ID</th>
              <th className="px-3 py-2.5 font-medium">User</th>
              <th className="px-3 py-2.5 font-medium text-right">Balance</th>
              <th className="px-3 py-2.5 font-medium">Plan</th>
              <th className="px-3 py-2.5 font-medium text-center">Linked</th>
              <th className="px-3 py-2.5 font-medium text-right">Created at</th>
              <th className="px-3 py-2.5 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-white/80">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={7} className="h-[420px]">
                  <div className="flex flex-col items-center justify-center h-full text-white/40 gap-3">
                    <Box className="w-11 h-11 opacity-50"/>
                    <p className="text-sm font-medium">Users Not Found</p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.map((user) => {
                const plan = 'Basic';
                return (
                  <tr key={user.id} className="hover:bg-white/[0.04] transition-colors">
                    <td className="px-3 py-2.5 text-white/45 font-mono">{user.id}</td>
                    <td className="px-3 py-2.5 font-medium text-white/90">{displayName(user)}</td>
                    <td className="px-3 py-2.5 text-right text-white/90 font-medium">{user.balance.toLocaleString()}</td>
                    <td className="px-3 py-2.5"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 bg-white/5 text-white/70">{plan}</span></td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center justify-center gap-1.5">
                        <span title={user.telegram ? `@${user.telegram}` : 'Telegram not linked'} className="inline-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${user.telegram ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-white/20'}`}><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" fillRule="evenodd" d="M19.777 4.93a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z" clipRule="evenodd" /></svg>
                        </span>
                        <span title={user.email || 'Email not linked'} className="inline-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${user.email ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-white/20'}`}><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" /></svg>
                        </span>
                        <span title={user.google || 'Google not linked'} className="inline-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${user.google ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-white/20'}`}><path d="M0 0h24v24H0z" fill="none" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17.641 6.328A8 8 0 1 0 20 12h-7" /></svg>
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right text-white/45 font-mono">{formatUserDate(user.createdAt)}</td>
                    <td className="px-3 py-2.5 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button type="button" onClick={()=>{setSelectedUser(user);setIsEditModalOpen(true)}} className="w-7 h-7 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 flex items-center justify-center hover:bg-amber-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(245,158,11,0.1)] cursor-pointer" title="User Info"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-400 stroke-[2.5]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></button>
                        <button
                          type="button"
                          onClick={() => {
                            setStatusModalUser(user);
                            setStatusModalAction(user.status === 'Banned' ? 'Unban' : 'Ban');
                          }}
                          className={`w-[50px] h-7 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold flex items-center justify-center transition-all active:scale-95 shadow-[0_0_10px_rgba(225,29,72,0.3)] cursor-pointer ${
                            user.status === 'Banned' ? 'text-[10px] tracking-tight' : 'text-xs tracking-wider'
                          }`}
                        >
                          {user.status === 'Banned' ? 'UNBAN' : 'BAN'}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 sm:p-4 border-t border-white/10 bg-black/20 w-full">
        <div className="text-white/40 text-sm min-w-[80px]">
          Total: <span className="text-white/90 font-medium">
            {Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 }).format(filteredData.length)}
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
              onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
              disabled={safePage === 1}
              className={`p-1 flex items-center justify-center rounded hover:bg-white/10 transition-colors shrink-0 ${safePage === 1 ? 'opacity-50 cursor-not-allowed' : 'text-white/80 hover:text-white'}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <span className="text-white/90 text-xs text-center select-none font-medium w-8 shrink-0">
              {safePage}
            </span>
            
            <button type="button" 
              aria-label="Next page"
              onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages || totalPages === 0}
              className={`p-1 flex items-center justify-center rounded hover:bg-white/10 transition-colors shrink-0 ${safePage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : 'text-white/80 hover:text-white'}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <EditUserModal
      isOpen={isEditModalOpen}
      onClose={() => setIsEditModalOpen(false)}
      user={selectedUser}
      currentPlan={'Basic'}
      onSecurityChanged={invalidate}
    />
    <UserStatusConfirmModal
      isOpen={Boolean(statusModalUser)}
      onClose={() => setStatusModalUser(null)}
      user={statusModalUser}
      action={statusModalAction}
      onConfirm={async (user) => {
        await usersApi.setBanned(user.id,user.status !== 'Banned');
        invalidate();

      }}
    />
  </div>;
};
