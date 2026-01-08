import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale/ru'

export const formatDateTime = (dateString: string): string => {
  if (!dateString) {
    return ''
  }

  try {
    const date = parseISO(dateString)
    return format(date, 'dd.MM.yy HH:mm', { locale: ru })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return dateString
  }
}
