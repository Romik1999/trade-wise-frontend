import { format } from 'date-fns';

export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  date.setUTCHours(date.getUTCHours() + 3);
  return format(date, 'dd.MM.yyyy HH:mm');
}
