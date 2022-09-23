import axios from 'axios';
import { FilterData } from '../types';
import { formatDateToServer } from './formatters';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({ baseURL });

export const buildFilterParams = (
  filerData?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    minDate: formatDateToServer(filerData?.dates?.[0]),
    maxDate: formatDateToServer(filerData?.dates?.[1]),
    gender: filerData?.gender,
    ...extraParams
  };
};
