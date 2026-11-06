export interface PaymentInfoItem {
  id: string;
  paymentMethod?: string;
  displayName: string;
  accountName: string;
  phoneNumber: string;
  qrCodeUrl?: string;
  methodIconUrl?: string;
  isActive: boolean;
  autoDirect?: boolean;
}
