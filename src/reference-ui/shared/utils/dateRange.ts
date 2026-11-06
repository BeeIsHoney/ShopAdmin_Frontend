export interface DateRange {
  startDate: string;
  endDate: string;
}

export type QuickDateRange = 'Today' | 'Last 2 Days' | 'Last 7 Days' | 'Last 30 Days';

const pad = (value: number) => String(value).padStart(2, '0');

export const formatDisplayDate = (date: Date): string =>
  `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`;

export const formatIsoDate = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

export const toIsoDate = (displayDate: string): string => {
  if (!displayDate) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(displayDate)) return displayDate;

  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(displayDate);
  return match ? `${match[3]}-${match[1]}-${match[2]}` : '';
};

export const toDisplayDate = (isoDate: string): string => {
  if (!isoDate) return '';
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(isoDate)) return isoDate;

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  return match ? `${match[2]}/${match[3]}/${match[1]}` : '';
};

export const getDisplayDateRange = (daysBack = 30, now = new Date()): DateRange => {
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(end);
  start.setDate(start.getDate() - Math.max(0, daysBack));

  return {
    startDate: formatDisplayDate(start),
    endDate: formatDisplayDate(end),
  };
};

export const getIsoDateRange = (daysBack = 30, now = new Date()): DateRange => {
  const displayRange = getDisplayDateRange(daysBack, now);
  return {
    startDate: toIsoDate(displayRange.startDate),
    endDate: toIsoDate(displayRange.endDate),
  };
};

export const getQuickDisplayDateRange = (
  range: QuickDateRange,
  now = new Date(),
): DateRange => {
  const daysByRange: Record<QuickDateRange, number> = {
    Today: 0,
    'Last 2 Days': 2,
    'Last 7 Days': 7,
    'Last 30 Days': 30,
  };
  return getDisplayDateRange(daysByRange[range], now);
};

export const isDateWithinDisplayRange = (
  value: string | undefined,
  startDate: string,
  endDate: string,
): boolean => {
  if (!value) return false;
  const directIsoValue = /^(\d{4}-\d{2}-\d{2})/.exec(value)?.[1];
  const parsedValue = directIsoValue ? undefined : new Date(value);
  const isoValue = directIsoValue || (
    parsedValue && !Number.isNaN(parsedValue.getTime()) ? formatIsoDate(parsedValue) : undefined
  );
  const isoStart = toIsoDate(startDate);
  const isoEnd = toIsoDate(endDate);
  if (!isoValue || !isoStart || !isoEnd || isoStart > isoEnd) return false;
  return isoValue >= isoStart && isoValue <= isoEnd;
};
