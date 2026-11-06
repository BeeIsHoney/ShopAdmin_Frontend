'use client';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  Plus,
  X,
  Edit,
  Trash2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Bell,
  ExternalLink,
  ImageIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { AlertItem } from './types/alert.types';
import { CreateAlertModal } from './components/CreateAlertModal';
import { DeleteConfirmModal } from '../../components/DeleteConfirmModal';
import { getSafeNavigationHref } from '../../shared/utils/safeUrl';
import { adminPanelApi } from '../../shared/services/adminPanelApi';
import {usePanel} from '@/components/context';

export const AlertBoxView: React.FC = () => {
  const {refresh,notify}=usePanel();
  const [loading,setLoading]=useState(true);
  const [loadError,setLoadError]=useState('');
  const [retry,setRetry]=useState(0);
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAlert, setEditingAlert] = useState<AlertItem | null>(null);
  const [alertToDelete, setAlertToDelete] = useState<AlertItem | null>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [isItemsPerPageOpen, setIsItemsPerPageOpen] = useState(false);
  const itemsPerPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    setLoadError('');
    adminPanelApi.alerts.list().then((items) => { if (active) setAlerts(items); }).catch(error=>{if(active)setLoadError(error instanceof Error?error.message:'Unable to load alerts.');}).finally(()=>{if(active)setLoading(false);});
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

  // Filtered alerts
  const filteredData = useMemo(() => {
    return alerts.filter((item) => {
      const q = searchTerm.toLowerCase();
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.message.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        (item.targetUrl && item.targetUrl.toLowerCase().includes(q)) ||
        (item.startDate && item.startDate.toLowerCase().includes(q)) ||
        (item.endDate && item.endDate.toLowerCase().includes(q)) ||
        item.createdAt.toLowerCase().includes(q)
      );
    });
  }, [alerts, searchTerm]);

  // Pagination calculations
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  useEffect(()=>{setCurrentPage(page=>Math.min(page,totalPages));},[totalPages]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  const handleSave = async (alertData: Omit<AlertItem, 'id' | 'createdAt'>) => {
    if (editingAlert) {
      const saved = await adminPanelApi.alerts.update({ ...editingAlert, ...alertData }, editingAlert);
      setAlerts((prev) =>
        prev.map((item) =>
          item.id === saved.id ? saved : item
        )
      );
    } else {
      const newAlert = await adminPanelApi.alerts.create(alertData);
      setAlerts((prev) => [newAlert, ...prev]);
    }
    notify('Alert saved.');
  };

  const handleEdit = (alert: AlertItem) => {
    setEditingAlert(alert);
    setIsModalOpen(true);
  };

  const confirmDelete = (alert: AlertItem) => {
    setAlertToDelete(alert);
  };

  const handleDelete = async () => {
    if (alertToDelete) {
      await adminPanelApi.alerts.remove(alertToDelete.id);
      setAlerts((prev) => prev.filter((item) => item.id !== alertToDelete.id));
      setAlertToDelete(null);notify('Alert deleted.');
    }
  };

  return (
    <div className="w-full space-y-3 sm:space-y-4 flex-1 flex flex-col">
      {loadError&&<div role="alert" className="rounded-lg bg-rose-500/10 border border-rose-500/25 p-3 text-sm text-rose-200">{loadError}<button type="button" className="ml-3 underline" onClick={()=>setRetry(value=>value+1)}>Try again</button></div>}
      {/* Header Actions & Controls */}
      <div className="flex items-center justify-end gap-2.5 sm:gap-3 w-full">
        <div className="relative flex-1 sm:flex-initial sm:w-64 lg:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 z-10 pointer-events-none" />
          <input
            type="text"
            placeholder="Search alerts..."
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
          onClick={() => {
            setEditingAlert(null);
            setIsModalOpen(true);
          }}
          aria-label="New alert"
          title="New Alert"
          className="glass-effect-btn h-[38px] w-[38px] p-0 relative flex items-center justify-center border-white/10 hover:border-white/30 shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl hover:bg-white/10 cursor-pointer text-white/80 hover:text-white transition-all"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="card-container w-full flex-1 flex flex-col overflow-hidden">
        {/* Table View */}
        <div className="w-full overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left text-[10px] sm:text-[11px] md:text-sm whitespace-nowrap">
            <thead className="bg-white/5 text-white/50 border-b border-white/10 sticky top-0 z-10 backdrop-blur-md">
              <tr>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">Banner</th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">Title</th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">Message</th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">Display Frequency (Type)</th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">Target URL</th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium">Created at</th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium text-center">Active</th>
                <th className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={8} className="h-[280px] sm:h-[360px]">
                    <div className="flex flex-col items-center justify-center h-full text-white/40 space-y-4">
                      <Bell className="w-12 h-12 opacity-50" />
                      <p className="text-sm font-medium" role={loading?'status':undefined}>{loading?'Loading alerts…':'No alerts found'}</p>
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {paginatedData.map((alert) => {
                    const safeTargetUrl = getSafeNavigationHref(alert.targetUrl);
                    return (
                      <tr key={alert.id} className="hover:bg-white/5 transition-colors group cursor-default">
                        {/* Banner Image */}
                        <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5">
                          {alert.imageUrl ? (
                            <div className="w-12 h-7 sm:w-14 sm:h-8 rounded overflow-hidden border border-white/10 bg-black/40 shrink-0">
                              <img
                                src={alert.imageUrl}
                                alt={alert.title}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.visibility = 'hidden';
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-7 sm:w-14 sm:h-8 rounded border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/20 shrink-0">
                              <ImageIcon className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </td>

                        {/* Title */}
                        <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/90 font-medium max-w-[180px] truncate">
                          {alert.title}
                        </td>

                        {/* Message */}
                        <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70 max-w-[260px] truncate" title={alert.message}>
                          {alert.message}
                        </td>

                        {/* Type / Frequency */}
                        <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/90 font-medium">
                          <div className="flex flex-col gap-0.5">
                            <span className="inline-flex items-center w-fit px-2 py-0.5 rounded-full text-[10px] sm:text-xs bg-white/10 text-white/90 border border-white/10">
                              {alert.type}
                            </span>
                            {alert.type === 'Select Date' && (alert.startDate || alert.endDate) && (
                              <span className="text-[10px] text-white/40 font-normal">
                                {alert.startDate || 'Any'} ~ {alert.endDate || 'Any'}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Target URL */}
                        <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/60 max-w-[160px] truncate">
                          {safeTargetUrl ? (
                            <a
                              href={safeTargetUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-white/70 hover:text-white hover:underline text-[11px]"
                            >
                              <span className="truncate">{alert.targetUrl}</span>
                              <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-60" />
                            </a>
                          ) : (
                            <span className="text-white/20">—</span>
                          )}
                        </td>

                        {/* Created At */}
                        <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70">
                          {alert.createdAt}
                        </td>

                        {/* Active Status */}
                        <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-center">
                          <div className="flex justify-center">
                            {alert.isActive ? (
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-400 bg-emerald-500/10">
                                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
                              </div>
                            ) : (
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-rose-500/50 flex items-center justify-center text-rose-400 bg-rose-500/10">
                                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
                              </div>
                            )}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-right">
                          <div className="flex justify-end gap-2.5 sm:gap-3">
                            <button
                              type="button"
                              onClick={() => handleEdit(alert)}
                              className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <Edit className="w-3.5 h-3.5" />
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => confirmDelete(alert)}
                              className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 sm:p-4 border-t border-white/10 bg-black/20 w-full">
          <div className="text-white/40 text-sm min-w-[80px]">
            Total:{' '}
            <span className="text-white/90 font-medium">
              {Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(
                totalItems
              )}
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Rows per page Dropdown */}
            <div className="relative" ref={itemsPerPageRef}>
              <button
                type="button"
                onClick={() => setIsItemsPerPageOpen(!isItemsPerPageOpen)}
                className="glass-effect-btn w-[72px] h-7 px-2.5 flex items-center justify-between text-xs cursor-pointer"
              >
                <span>{itemsPerPage}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-white/40 transition-transform shrink-0 ${
                    isItemsPerPageOpen ? 'rotate-180' : ''
                  }`}
                />
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
                      <button
                        type="button"
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

            {/* Pagination Controls */}
            <div className="glass-effect-btn h-7 flex items-center px-1 gap-1">
              <button
                type="button"
                aria-label="Previous page"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`p-1 flex items-center justify-center rounded hover:bg-white/10 transition-colors shrink-0 ${
                  currentPage === 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'text-white/80 hover:text-white cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-white/90 text-xs text-center select-none font-medium w-8 shrink-0">
                {currentPage}
              </span>

              <button
                type="button"
                aria-label="Next page"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`p-1 flex items-center justify-center rounded hover:bg-white/10 transition-colors shrink-0 ${
                  currentPage === totalPages || totalPages === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : 'text-white/80 hover:text-white cursor-pointer'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <CreateAlertModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingAlert(null);
        }}
        onSave={handleSave}
        editingAlert={editingAlert}
      />

      <DeleteConfirmModal
        isOpen={!!alertToDelete}
        onClose={() => setAlertToDelete(null)}
        onConfirm={handleDelete}
        title="Delete Alert Box?"
        description="Are you sure you want to delete this alert? This action cannot be undone."
      />
    </div>
  );
};
