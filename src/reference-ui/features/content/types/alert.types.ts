export interface AlertItem {
  id: string;
  title: string;
  message: string;
  type: string;
  imageUrl?: string;
  imageStorageReference?: string;
  targetUrl?: string;
  startDate?: string;
  endDate?: string;
  isActive: boolean;
  createdAt: string;
}
