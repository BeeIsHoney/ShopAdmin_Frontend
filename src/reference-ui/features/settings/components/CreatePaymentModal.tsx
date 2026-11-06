'use client';
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Upload, QrCode, CreditCard, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './CreatePaymentModal.css';
import type { PaymentInfoItem } from '../types/payment.types';
import { PREVIEW_IMAGE_ACCEPT, readImageFileAsDataUrl, validatePreviewImageFile } from '../../../shared/utils/imageFile';
import { useModalBehavior } from '../../../shared/hooks/useModalBehavior';

interface CreatePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (payment: Omit<PaymentInfoItem, 'id'>) => void | Promise<void>;
  editingPayment?: PaymentInfoItem | null;
}

export const CreatePaymentModal: React.FC<CreatePaymentModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingPayment,
}) => {
  const [displayName, setDisplayName] = useState(editingPayment?.displayName || '');
  const [accountName, setAccountName] = useState(editingPayment?.accountName || '');
  const [phoneNumber, setPhoneNumber] = useState(editingPayment?.phoneNumber || '');
  const [qrCodeUrl, setQrCodeUrl] = useState(editingPayment?.qrCodeUrl || '');
  const [methodIconUrl, setMethodIconUrl] = useState(editingPayment?.methodIconUrl || '');
  const [isActive, setIsActive] = useState<boolean>(editingPayment ? editingPayment.isActive : true);
  const [autoDirect, setAutoDirect] = useState<boolean>(editingPayment?.autoDirect === true);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const qrFileInputRef = useRef<HTMLInputElement>(null);
  const methodIconFileInputRef = useRef<HTMLInputElement>(null);

  useModalBehavior(isOpen, onClose);

  useEffect(() => {
    if (!isOpen) return;
    setErrorMessage('');
    if (editingPayment) {
      setDisplayName(editingPayment.displayName);
      setAccountName(editingPayment.accountName);
      setPhoneNumber(editingPayment.phoneNumber);
      setQrCodeUrl(editingPayment.qrCodeUrl || '');
      setMethodIconUrl(editingPayment.methodIconUrl || '');
      setIsActive(editingPayment.isActive);
      setAutoDirect(editingPayment.autoDirect === true);
    } else {
      setDisplayName('');
      setAccountName('');
      setPhoneNumber('');
      setQrCodeUrl('');
      setMethodIconUrl('');
      setIsActive(true);
      setAutoDirect(false);
    }
  }, [isOpen, editingPayment]);

  const handleQrFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setErrorMessage('');
    const validationError = validatePreviewImageFile(file);
    if (validationError) {
      setErrorMessage(validationError);
      e.target.value = '';
      return;
    }
    try {
      setQrCodeUrl(await readImageFileAsDataUrl(file));
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Could not read the selected QR code image.');
    } finally {
      e.target.value = '';
    }
  };

  const handleMethodIconFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setErrorMessage('');
    const validationError = validatePreviewImageFile(file);
    if (validationError) {
      setErrorMessage(validationError);
      e.target.value = '';
      return;
    }
    try {
      setMethodIconUrl(await readImageFileAsDataUrl(file));
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Could not read the selected payment method image.');
    } finally {
      e.target.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;
    if (!displayName.trim() || !accountName.trim() || !phoneNumber.trim()) {
      return;
    }

    setErrorMessage('');
    setIsSaving(true);
    try {
      await onSave({
        displayName: displayName.trim(),
        accountName: accountName.trim(),
        phoneNumber: phoneNumber.trim(),
        qrCodeUrl: qrCodeUrl.trim(),
        methodIconUrl: methodIconUrl.trim(),
        isActive,
        autoDirect,
      });
      onClose();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Could not save the payment image. Please try again.',
      );
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen || typeof document === 'undefined') return null;

  // Keep the editor outside the dashboard's global form/theme and stacking styles.
  return createPortal(
    <AnimatePresence>
      <div className="payment-editor-backdrop">
        <button
          type="button"
          aria-label="Close modal backdrop"
          className="payment-editor-scrim"
          onClick={onClose}
          tabIndex={-1}
        />
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          className="payment-editor"
          role="dialog"
          aria-modal="true"
          aria-labelledby="payment-editor-title"
        >
          <div className="payment-editor-header">
            <h2 id="payment-editor-title">
              {editingPayment ? 'Edit Payment Info' : 'New Payment Info'}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close payment editor"
              className="payment-editor-close"
            >
              <X size={16} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="payment-editor-form">
            <div className="payment-editor-field">
              <label htmlFor="payment-display-name">
                Payment Method Name <span className="payment-editor-hint">(Shown to users)</span> <span className="payment-editor-required">*</span>
              </label>
              <input
                id="payment-display-name"
                type="text"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. KBZPay, Wave Money"
                className="payment-editor-input"
              />
            </div>

            <div className="payment-editor-field">
              <label htmlFor="payment-account-name">
                Payment Account Name <span className="payment-editor-hint">(Phone registered name)</span> <span className="payment-editor-required">*</span>
              </label>
              <input
                id="payment-account-name"
                type="text"
                required
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                placeholder="e.g. Aung Aung"
                className="payment-editor-input"
              />
            </div>

            <div className="payment-editor-field">
              <label htmlFor="payment-phone-number">
                Payment Phone / Account Number <span className="payment-editor-required">*</span>
              </label>
              <input
                id="payment-phone-number"
                type="text"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g. 09xxxxxxxxx"
                className="payment-editor-input"
              />
            </div>

            <div className="payment-editor-image-section">
              <div className="payment-editor-section-label">
                <QrCode size={14} />
                <span>QR Code (Optional)</span>
              </div>
              {qrCodeUrl ? (
                <div className="payment-editor-preview payment-editor-qr-preview">
                  <img
                    src={qrCodeUrl}
                    alt="QR Code Preview"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/receipt-placeholder.svg';
                    }}
                  />
                  <div className="payment-editor-image-actions payment-editor-qr-actions">
                    <button type="button" onClick={() => qrFileInputRef.current?.click()}>Change</button>
                    <button type="button" className="payment-editor-remove" onClick={() => setQrCodeUrl('')}>Remove</button>
                  </div>
                </div>
              ) : (
                <button type="button" onClick={() => qrFileInputRef.current?.click()} className="payment-editor-upload">
                  <Upload size={16} />
                  <span>Click to upload QR code photo</span>
                </button>
              )}
              <input
                type="file"
                ref={qrFileInputRef}
                onChange={handleQrFileChange}
                accept={PREVIEW_IMAGE_ACCEPT}
                aria-label="Upload QR code photo"
                className="payment-editor-file-input"
              />
            </div>

            <div className="payment-editor-image-section">
              <div className="payment-editor-section-label">
                <CreditCard size={14} />
                <span>Payment Method Photo / Logo <span className="payment-editor-hint">(Optional)</span></span>
              </div>
              {methodIconUrl ? (
                <div className="payment-editor-preview payment-editor-logo-preview">
                  <img
                    src={methodIconUrl}
                    alt="Payment Method Preview"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/receipt-placeholder.svg';
                    }}
                  />
                  <div className="payment-editor-image-actions">
                    <button type="button" onClick={() => methodIconFileInputRef.current?.click()}>Change</button>
                    <button type="button" className="payment-editor-remove" onClick={() => setMethodIconUrl('')}>Remove</button>
                  </div>
                </div>
              ) : (
                <button type="button" onClick={() => methodIconFileInputRef.current?.click()} className="payment-editor-upload">
                  <Upload size={16} />
                  <span>Click to upload Payment Method photo / logo</span>
                </button>
              )}
              <input
                type="file"
                ref={methodIconFileInputRef}
                onChange={handleMethodIconFileChange}
                accept={PREVIEW_IMAGE_ACCEPT}
                aria-label="Upload payment method photo or logo"
                className="payment-editor-file-input"
              />
            </div>

            <div className="payment-editor-status">
              <label htmlFor="payment-active-toggle">Active Status</label>
              <label htmlFor="payment-active-toggle" className="payment-editor-toggle">
                <input
                  id="payment-active-toggle"
                  type="checkbox"
                  checked={isActive}
                  aria-label="Active Status"
                  onChange={(e) => setIsActive(e.target.checked)}
                />
                <span aria-hidden="true" />
              </label>
            </div>

            {errorMessage && <div role="alert" className="payment-editor-error">{errorMessage}</div>}

            <div className="payment-editor-actions">
              <button type="button" onClick={onClose} className="payment-editor-cancel">Cancel</button>
              <button type="submit" disabled={isSaving} className="payment-editor-submit">
                {isSaving
                  ? <span className="payment-editor-saving"><Loader2 size={16} />Saving...</span>
                  : (editingPayment ? 'Save Changes' : 'Create Payment')}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body,
  );
};
