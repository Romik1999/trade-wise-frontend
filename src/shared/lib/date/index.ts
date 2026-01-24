import { format, type Locale } from 'date-fns'
import { ru } from 'date-fns/locale/ru'

export const customRuLocale: Locale = {
  ...ru,
  localize: {
    ...ru.localize,
    day: (value)=> {
      const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
      return days[value]
    }
  },
  options: {
    ...ru.options,
    weekStartsOn: 1
  }
}

export const dayFormatterToLocale = (date: Date)=>{
  return format(date, 'EE', { locale: customRuLocale })

}
