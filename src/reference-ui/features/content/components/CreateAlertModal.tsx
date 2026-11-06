/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState, useRef } from 'react';
import { X, Upload, Calendar, Link as LinkIcon, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { AlertItem } from '../types/alert.types';
import { PREVIEW_IMAGE_ACCEPT, validatePreviewImageFile } from '../../../shared/utils/imageFile';
import { adminPanelApi } from '../../../shared/services/adminPanelApi';
import {getSafeNavigationHref} from '../../../shared/utils/safeUrl';
import { useModalBehavior } from '../../../shared/hooks/useModalBehavior';

interface CreateAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (alert: Omit<AlertItem, 'id' | 'createdAt'>) => void | Promise<void>;
  editingAlert?: AlertItem | null;
}

const ALERT_TYPE_OPTIONS = [
  { value: 'Always', label: 'Always' },
  { value: 'Hourly', label: 'Hourly' },
  { value: 'Daily', label: 'Daily' },
  { value: 'Weekly', label: 'Weekly' },
  { value: 'Monthly', label: 'Monthly' },
  { value: 'Select Date', label: 'Select Date' },
];

export const CreateAlertModal: React.FC<CreateAlertModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingAlert,
}) => {
  const [title, setTitle] = useState(editingAlert?.title || '');
  const [message, setMessage] = useState(editingAlert?.message || '');
  const [type, setType] = useState(editingAlert?.type || '');
  const [startDate, setStartDate] = useState(editingAlert?.startDate || '');
  const [endDate, setEndDate] = useState(editingAlert?.endDate || '');
  const [imageUrl, setImageUrl] = useState(editingAlert?.imageUrl || '');
  const [imageStorageReference, setImageStorageReference] = useState<string | undefined>(editingAlert?.imageStorageReference);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(editingAlert?.imageUrl || '');
  const [targetUrl, setTargetUrl] = useState(editingAlert?.targetUrl || '');
  const [isActive, setIsActive] = useState<boolean>(editingAlert ? editingAlert.isActive : true);
  const [isSaving, setIsSaving] = useState(false);
  const [imageError, setImageError] = useState('');
  const [saveError, setSaveError] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose=()=>{if(!isSaving)onClose();};
  useModalBehavior(isOpen, handleClose);

  useEffect(() => {
    if (!isOpen) return;
    setImageError('');
    setSaveError('');
    if (editingAlert) {
      setTitle(editingAlert.title);
      setMessage(editingAlert.message);
      setType(editingAlert.type || '');
      setStartDate(editingAlert.startDate || '');
      setEndDate(editingAlert.endDate || '');
      setImageUrl(editingAlert.imageUrl || '');
      setImageStorageReference(editingAlert.imageStorageReference);
      setSelectedImageFile(null);
      setImagePreviewUrl(editingAlert.imageUrl || '');
      setTargetUrl(editingAlert.targetUrl || '');
      setIsActive(editingAlert.isActive);
    } else {
      setTitle('');
      setMessage('');
      setType('');
      setStartDate('');
      setEndDate('');
      setImageUrl('');
      setImageStorageReference(undefined);
      setSelectedImageFile(null);
      setImagePreviewUrl('');
      setTargetUrl('');
      setIsActive(true);
    }
  }, [isOpen, editingAlert]);

  useEffect(() => {
    return () => {
      if (imagePreviewUrl.startsWith('blob:')) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSaveError('');
    const validationError = validatePreviewImageFile(file);
    if (validationError) {
      setImageError(validationError);
      e.target.value = '';
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setSelectedImageFile(file);
    setImagePreviewUrl(objectUrl);
    setImageUrl('');
    setImageStorageReference(undefined);
    setImageError('');
    e.target.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;
    if ((!title.trim() && !message.trim() && !imageUrl.trim() && !selectedImageFile) || !type.trim()) return;
    if (type === 'Select Date' && (!startDate || !endDate || endDate<startDate)) {setSaveError('Choose a valid start and end date.');return;}
    if (targetUrl.trim()&&!getSafeNavigationHref(targetUrl)) {setSaveError('Use an internal path or HTTPS target URL.');return;}

    setSaveError('');
    setIsSaving(true);
    try {
      let finalImageUrl = imageUrl.trim();
      let finalImageStorageReference = imageStorageReference;

      if (selectedImageFile) {
        const uploaded = await adminPanelApi.media.upload(selectedImageFile);
        finalImageUrl = uploaded.url;
        finalImageStorageReference = uploaded.reference;
      }

      await onSave({
        title: title.trim(),
        message: message.trim(),
        type: type.trim(),
        startDate: type === 'Select Date' ? startDate : undefined,
        endDate: type === 'Select Date' ? endDate : undefined,
        imageUrl: finalImageUrl,
        imageStorageReference: finalImageStorageReference,
        targetUrl: finalImageUrl ? targetUrl.trim() : '',
        isActive,
      });
      onClose();
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Could not save the alert.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md transition-all select-none">
        <button
          type="button"
          aria-label="Close modal backdrop"
          className="absolute inset-0 cursor-default"
          onClick={handleClose}
        />
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          className="relative z-10 w-full max-w-[520px] bg-[#121212] text-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-white/15 select-text overflow-hidden flex flex-col max-h-[90vh]"
          role="dialog"
          aria-modal="true"
          aria-label={editingAlert ? 'Edit Alert Box' : 'New Alert Box'}
          aria-busy={isSaving}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {editingAlert ? 'Edit Alert Box' : 'New Alert Box'}
            </h2>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close alert editor"
              className="p-1.5 text-white/40 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto custom-scrollbar flex-1">
            {/* Title */}
            <div className="space-y-1.5">
              <label htmlFor="alert-title-input" className="block text-xs font-medium text-white/70">
                Title <span className="text-white/40 text-[11px] font-normal">(Optional)</span>
              </label>
              <input
                id="alert-title-input"
                maxLength={160}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Promotion Notice"
                className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-white/30 shadow-inner focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="alert-message-input" className="block text-xs font-medium text-white/70">
                Description <span className="text-white/40 text-[11px] font-normal">(Optional)</span>
              </label>
              <textarea
                id="alert-message-input"
                maxLength={5000}
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter alert details / message..."
                className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-white/30 shadow-inner focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            {/* Type */}
            <div className="space-y-1.5">
              <label htmlFor="alert-type-select" className="block text-xs font-medium text-white/70">
                Type <span className="text-red-500">*</span>
              </label>
              <select
                id="alert-type-select"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs shadow-inner focus:outline-none focus:border-white/30 transition-colors cursor-pointer ${
                  type ? 'text-white' : 'text-white/40'
                }`}
              >
                <option value="" disabled className="bg-[#181818] text-white/40">
                  Select an option
                </option>
                {ALERT_TYPE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#181818] text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* If Type is "Select Date" */}
            {type === 'Select Date' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-3 bg-white/[0.03] border border-white/10 rounded-lg space-y-3"
              >
                <div className="flex items-center gap-1.5 text-xs font-medium text-amber-400/90">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Date Range (သတ်မှတ်ထားသော ရက်အတွင်းပြသရန်)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="alert-start-date" className="block text-[11px] text-white/60">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="alert-start-date"
                      type="date"
                      required
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-md px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-white/30 [color-scheme:dark]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="alert-end-date" className="block text-[11px] text-white/60">
                      End Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="alert-end-date"
                      type="date"
                      required
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-md px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-white/30 [color-scheme:dark]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Image (Optional / Banner) */}
            <div className="space-y-1.5 pt-1">
              <div className="block text-xs font-medium text-white/70">
                Image <span className="text-white/40 text-[11px] font-normal">(Optional)</span>
              </div>

              {(imagePreviewUrl || imageUrl) ? (
                <div className="relative rounded-lg overflow-hidden border border-white/15 bg-black/40 flex items-center justify-center group mb-2">
                  <img
                    src={imagePreviewUrl || imageUrl}
                    alt="Alert Preview"
                    className="mx-auto block h-auto max-h-[60vh] max-w-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.visibility = 'hidden';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 text-xs bg-white/20 hover:bg-white/30 text-white rounded-md backdrop-blur-md transition-colors cursor-pointer"
                    >
                      Change
                    </button>
                    <button
                      type="button"
                      onClick={() => { setImageUrl(''); setImagePreviewUrl(''); setSelectedImageFile(null); setImageStorageReference(undefined); setTargetUrl(''); setImageError(''); setSaveError(''); }}
                      className="px-3 py-1.5 text-xs bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded-md backdrop-blur-md transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border border-dashed border-white/20 hover:border-white/40 rounded-lg p-3.5 flex flex-col items-center justify-center gap-1.5 text-white/50 hover:text-white/80 cursor-pointer bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                >
                  <Upload className="w-5 h-5 text-white/40" />
                  <span className="text-xs">Click to upload alert banner image</span>
                </button>
              )}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageFileChange}
                accept={PREVIEW_IMAGE_ACCEPT}
                className="hidden"
              />

              <p className="text-[11px] text-white/40">JPG or PNG, up to 2 MB.</p>
              {imageError && <p className="text-[11px] text-rose-400">{imageError}</p>}
              {selectedImageFile && (
                <p className="text-[11px] text-emerald-400/80">
                  Selected: {selectedImageFile.name}. It will upload when you save.
                </p>
              )}

            </div>

            {/* Target URL (Optional) */}
            <div className="space-y-1.5">
              <label htmlFor="alert-target-url" className="block text-xs font-medium text-white/70">
                Action / Target URL <span className="text-white/40 text-[11px] font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <LinkIcon className="w-3.5 h-3.5 text-white/30 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="alert-target-url"
                  maxLength={2048}
                  type="text"
                  value={targetUrl}
                  disabled={!imageUrl.trim() && !selectedImageFile}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder={(imageUrl.trim() || selectedImageFile) ? "e.g., https://jiafugamestore.com/promo" : "Add an image to enable its target URL"}
                  className="w-full bg-black/50 border border-white/10 rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder:text-white/30 shadow-inner focus:outline-none focus:border-white/30 transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                />
              </div>
            </div>

            {/* Active Switch */}
            <div className="flex items-center justify-between py-2 border-t border-white/5">
              <label htmlFor="alert-active-toggle" className="text-xs font-medium text-white/70 cursor-pointer">
                Active Status
              </label>
              <label htmlFor="alert-active-toggle" className="relative inline-flex items-center cursor-pointer">
                <input
                  id="alert-active-toggle"
                  type="checkbox"
                  checked={isActive}
                  aria-label="Active Status"
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>

            {saveError && (
              <div className="rounded-lg border border-rose-500/20 bg-rose-500/10 px-3 py-2 text-[11px] text-rose-300">
                {saveError}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={handleClose}
                className="glass-effect-btn px-4 py-2 text-xs text-white/70 hover:text-white border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving || (!title.trim() && !message.trim() && !imageUrl.trim() && !selectedImageFile)}
                className="px-5 py-2 text-xs font-semibold bg-white text-black hover:bg-white/90 rounded-lg shadow transition-all cursor-pointer disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30"
              >
                {isSaving ? <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" />Saving...</span> : (editingAlert ? 'Save Changes' : 'Create Alert')}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
