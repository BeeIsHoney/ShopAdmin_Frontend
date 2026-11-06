'use client';
import './PaymentSettingsView.css';
import {usePanel} from '@/components/context';
import { AdminPageSkeleton } from '../../shared/components/Skeletons';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  Check,
  X,
  FileText,
  Plus,
  QrCode,
  CreditCard,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { PaymentInfoItem } from './types/payment.types';
import { CreatePaymentModal } from './components/CreatePaymentModal';
import { DeleteConfirmModal } from '../../components/DeleteConfirmModal';
import { adminPanelApi } from '../../shared/services/adminPanelApi';

export const PaymentSettingsView: React.FC = () => {
  const {refresh,invalidate}=usePanel();
  const [paymentsEnabled,setPaymentsEnabled]=useState<boolean|null>(null);
  const [servicePending,setServicePending]=useState(false);
  const [settingsLoaded,setSettingsLoaded]=useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const [payments, setPayments] = useState<PaymentInfoItem[]>([]);
  const [methodsEnabled, setMethodsEnabled] = useState(true);
  const [bulkStatusPending, setBulkStatusPending] = useState(false);
  const [bulkStatusError, setBulkStatusError] = useState('');
  const bulkToggleInFlightRef = useRef(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPayment, setEditingPayment] = useState<PaymentInfoItem | null>(null);
  const [paymentToDelete, setPaymentToDelete] = useState<PaymentInfoItem | null>(null);
  const [selectedQrImage, setSelectedQrImage] = useState<string | null>(null);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isItemsPerPageOpen, setIsItemsPerPageOpen] = useState(false);
  const itemsPerPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    adminPanelApi.payments.settings().then(s=>{if(active){setMethodsEnabled(s.methodsEnabled);setPaymentsEnabled(s.paymentsEnabled);setSettingsLoaded(true);}}).catch((e:unknown)=>{if(active)setBulkStatusError(e instanceof Error?e.message:"Unable to load payment settings.");});
    adminPanelApi.payments.list()
      .then((items) => {
        if (active) setPayments(items);
      })
      .catch((error: unknown) => {
        if (active) setBulkStatusError(error instanceof Error ? error.message : 'Unable to load payment methods.');
      })
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
  }, [refresh]);

  // This master switch controls the payment-account records only.
  // Recharge-list service availability remains settings.paymentsEnabled.
  const allPaymentsActive = methodsEnabled;

  const handleToggleAllPayments = async (enabled: boolean) => {
    if (bulkToggleInFlightRef.current) return;
    bulkToggleInFlightRef.current = true;
    setBulkStatusPending(true);
    setBulkStatusError('');
    try {
      const settings = await adminPanelApi.payments.setMaster(enabled);
      setMethodsEnabled(settings.methodsEnabled);invalidate();
    } catch (error) {
      setBulkStatusError(error instanceof Error ? error.message : 'Unable to verify payment statuses. Please refresh.');
    } finally {
      bulkToggleInFlightRef.current = false;
      setBulkStatusPending(false);
    }
  };

  // Filter Data
  const filteredData = useMemo(() => {
    return payments.filter((payment) => {
      const lowerQuery = searchTerm.toLowerCase();
      return (
        !searchTerm ||
        payment.displayName.toLowerCase().includes(lowerQuery) ||
        payment.accountName.toLowerCase().includes(lowerQuery) ||
        payment.phoneNumber.toLowerCase().includes(lowerQuery)
      );
    });
  }, [payments, searchTerm]);

  // Calculation Logic
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  const handleSave = async (paymentData: Omit<PaymentInfoItem, 'id'>) => {
    const value = editingPayment ? { ...editingPayment, ...paymentData } : paymentData;
    await adminPanelApi.payments.save(value, editingPayment);
    setPayments(await adminPanelApi.payments.list());invalidate();
  };

  const handleEdit = (payment: PaymentInfoItem) => {
    setEditingPayment(payment);
    setIsModalOpen(true);
  };

  const confirmDelete = (payment: PaymentInfoItem) => {
    setPaymentToDelete(payment);
  };

  const handleDelete = async () => {
    if (paymentToDelete) {
      await adminPanelApi.payments.remove(paymentToDelete.id);
      setPayments((prev) => prev.filter((item) => item.id !== paymentToDelete.id));
      setPaymentToDelete(null);
    }
  };

  if (isLoading) {
    return <AdminPageSkeleton />;
  }

  return (
    <div className="w-full space-y-3 sm:space-y-4 flex-1 flex flex-col">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/40 px-3 py-2.5">
        <div className="text-xs text-white/70"><b className="text-white/90">Customer recharge</b><p className="mt-1">{paymentsEnabled===null?'Unable to verify recharge availability.':!paymentsEnabled?'Offline — payment accounts are hidden on the customer site.':!methodsEnabled?'Payment methods are disabled. Turn the methods switch on to show active accounts.':payments.some(p=>p.isActive)?'Online — active payment accounts appear on the customer site.':'Online — create or activate a payment account to show it on the customer site.'}</p></div>
        <button type="button" aria-label="Toggle customer recharge service" aria-pressed={paymentsEnabled===true} disabled={!settingsLoaded||servicePending||bulkStatusPending} onClick={async()=>{if(bulkToggleInFlightRef.current||paymentsEnabled===null)return;bulkToggleInFlightRef.current=true;setServicePending(true);setBulkStatusError('');try{const value=await adminPanelApi.payments.setService(!paymentsEnabled);setPaymentsEnabled(value.paymentsEnabled);setMethodsEnabled(value.methodsEnabled);invalidate();}catch(e){setBulkStatusError(e instanceof Error?e.message:'Unable to update recharge availability.');}finally{setServicePending(false);bulkToggleInFlightRef.current=false;}}} className={`glass-effect-btn shrink-0 px-3 py-1.5 text-xs font-semibold ${paymentsEnabled?'text-emerald-400':'text-white/60'}`}>{servicePending?'Saving…':paymentsEnabled===null?'Unavailable':paymentsEnabled?'Online':'Offline'}</button>
      </div>
      {/* Header Actions & Controls (Search Bar and "+" button) */}
      <div className="flex items-center justify-end gap-2.5 sm:gap-3 w-full">
        <div className="relative flex-1 sm:flex-initial sm:w-64 lg:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 z-10 pointer-events-none" />
          <input
            type="text"
            placeholder="Search payment info..."
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
            setEditingPayment(null);
            setIsModalOpen(true);
          }}
          aria-label="New payment info"
          title="New Payment Info"
          className="glass-effect-btn h-[38px] w-[38px] p-0 relative flex items-center justify-center border-white/10 hover:border-white/30 shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl hover:bg-white/10 cursor-pointer text-white/80 hover:text-white transition-all"
        >
          <Plus className="w-4 h-4" />
        </button>

        {/* Global Payment On/Off Toggle */}
        <label
          htmlFor="payment-global-toggle"
          className="relative inline-flex items-center cursor-pointer shrink-0"
        >
          <span className="sr-only">Enable or disable all existing payment methods</span>
          <input
            id="payment-global-toggle"
            type="checkbox"
            checked={allPaymentsActive}
            disabled={bulkStatusPending||servicePending||!settingsLoaded}
            onChange={(e) => { void handleToggleAllPayments(e.target.checked); }}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white peer-checked:after:bg-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white shadow-inner"></div>
        </label>
      </div>

      {bulkStatusError && <p role="alert" className="text-xs text-rose-400">{bulkStatusError}</p>}

      {/* Main Content Area */}
      <div className="card-container w-full flex-1 flex flex-col overflow-hidden">
        {/* Responsive Table View */}
        <div className="payment-accounts-table-scroll w-full overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left text-[10px] sm:text-[11px] md:text-sm whitespace-nowrap">
            <thead className="bg-white/5 text-white/50 border-b border-white/10 sticky top-0 z-10 backdrop-blur-md">
              <tr>
                <th className="px-2.5 py-2 md:px-4 md:py-2.5 font-medium">Method</th>
                <th className="px-2.5 py-2 md:px-4 md:py-2.5 font-medium">Payment Method Name</th>
                <th className="px-2.5 py-2 md:px-4 md:py-2.5 font-medium">
                  <div className="flex items-center gap-1">Account Name</div>
                </th>
                <th className="px-2.5 py-2 md:px-4 md:py-2.5 font-medium">
                  <div className="flex items-center gap-1">Phone / Account No.</div>
                </th>
                <th className="px-2.5 py-2 md:px-4 md:py-2.5 font-medium text-center">QR Code</th>

                <th className="px-2.5 py-2 md:px-4 md:py-2.5 font-medium text-center">Active</th>
                <th className="px-2.5 py-2 md:px-4 md:py-2.5 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={7} className="payment-accounts-empty-cell h-[280px] sm:h-[360px]">
                    <div className="payment-accounts-empty flex flex-col items-center justify-center h-full text-white/40 space-y-4">
                      <FileText className="w-12 h-12 opacity-50" />
                      <p className="text-sm font-medium">No payment info found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {paginatedData.map((payment) => {
                    return (
                      <tr key={payment.id} className="hover:bg-white/5 transition-colors group cursor-default">
                        {/* Method Photo */}
                        <td className="px-2.5 py-2 md:px-4 md:py-2.5">
                          {payment.methodIconUrl ? (
                            <div className="w-10 h-7 sm:w-12 sm:h-8 rounded overflow-hidden border border-white/10 bg-black/40 shrink-0 p-0.5 flex items-center justify-center">
                              <img
                                src={payment.methodIconUrl}
                                alt="Payment Method"
                                className="w-full h-full object-contain"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/receipt-placeholder.svg';
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-10 h-7 sm:w-12 sm:h-8 rounded border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/20 shrink-0">
                              <CreditCard className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </td>

                        {/* Payment Name */}
                        <td className="px-2.5 py-2 md:px-4 md:py-2.5 text-white/90 font-medium max-w-[180px] truncate">
                          {payment.displayName}
                        </td>

                        {/* Account Name */}
                        <td className="px-2.5 py-2 md:px-4 md:py-2.5 text-white/90 font-medium max-w-[220px] truncate">
                          {payment.accountName}
                        </td>

                        {/* Phone Number */}
                        <td className="px-2.5 py-2 md:px-4 md:py-2.5 text-white/90 font-medium">
                          {payment.phoneNumber}
                        </td>

                        {/* QR Code */}
                        <td className="px-2.5 py-2 md:px-4 md:py-2.5 text-center">
                          {payment.qrCodeUrl ? (
                            <button
                              type="button"
                              onClick={() => setSelectedQrImage(payment.qrCodeUrl || null)}
                              title="Click to view full QR Code"
                              className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded border border-white/15 bg-black/50 hover:border-white/40 hover:bg-white/10 transition-all cursor-pointer p-0.5"
                            >
                              <img
                                src={payment.qrCodeUrl}
                                alt="QR Code Thumbnail"
                                className="w-full h-full object-contain rounded-sm"
                                referrerPolicy="no-referrer"
                              />
                            </button>
                          ) : (
                            <span className="text-white/20 text-xs">—</span>
                          )}
                        </td>

                        {/* Auto Direct */}
                        

                        {/* Active Status */}
                        <td className="px-2.5 py-2 md:px-4 md:py-2.5 text-center">
                          <div className="flex justify-center">
                            {payment.isActive && methodsEnabled ? (
                              <div className="w-5 h-5 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-400 bg-emerald-500/10">
                                <Check className="w-3 h-3" strokeWidth={2.5} />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full border border-rose-500/50 flex items-center justify-center text-rose-400 bg-rose-500/10">
                                <X className="w-3 h-3" strokeWidth={2.5} />
                              </div>
                            )}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="px-2.5 py-2 md:px-4 md:py-2.5 text-right">
                          <div className="flex justify-end gap-2.5 sm:gap-3">
                            <button
                              type="button"
                              onClick={() => handleEdit(payment)}
                              className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <Edit className="w-3.5 h-3.5" />
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => confirmDelete(payment)}
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
        <div className="flex items-center justify-between p-4 sm:p-5 border-t border-white/10 bg-black/20 w-full">
          <div className="text-white/40 text-sm min-w-[80px]">
            Total:{' '}
            <span className="text-white/90 font-medium">
              {Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(totalItems)}
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
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'text-white/80 hover:text-white cursor-pointer'
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

      {/* Modals */}
      <CreatePaymentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingPayment(null);
        }}
        onSave={handleSave}
        editingPayment={editingPayment}
      />

      <DeleteConfirmModal
        isOpen={!!paymentToDelete}
        onClose={() => setPaymentToDelete(null)}
        onConfirm={handleDelete}
        title="Delete Payment Info?"
        description="Are you sure you want to delete this payment info? This action cannot be undone."
      />

      {/* QR Code Large Preview Modal */}
      <AnimatePresence>
        {selectedQrImage && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <button
              type="button"
              aria-label="Close QR Modal"
              className="absolute inset-0 cursor-default"
              onClick={() => setSelectedQrImage(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 bg-[#141414] border border-white/20 rounded-xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-w-sm w-full flex flex-col items-center gap-4"
            >
              <div className="flex items-center justify-between w-full border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <QrCode className="w-4 h-4 text-emerald-400" />
                  <span>Payment QR Code</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedQrImage(null)}
                  className="p-1 text-white/40 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white p-3 rounded-lg w-64 h-64 flex items-center justify-center shadow-lg">
                <img
                  src={selectedQrImage}
                  alt="Payment QR Code"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                type="button"
                onClick={() => setSelectedQrImage(null)}
                className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
