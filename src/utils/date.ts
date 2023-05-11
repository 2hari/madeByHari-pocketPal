import {
  format,
  startOfMonth,
} from 'date-fns';

import { dateFormatStr } from '@/utils/constants';

export const getCurrentMonth = () => {
  const date = new Date();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return `${year}-${month}`;
};

export const getStartDateOfMonth = (currentMonthStr: string) => {
  return format(startOfMonth(new Date(currentMonthStr)), dateFormatStr);
};

export const getTodayDate = () => {
  return format(new Date(), dateFormatStr);
};


