import type { FilterConfig } from '../types'
import { FilterType } from '../consts'
import { formatISO } from 'date-fns'

export const getDefaultValue = (filter: FilterConfig, searchPrams?: URLSearchParams) => {
  switch (filter.type) {
    case FilterType.DATE_RANGE:
    {
      const { from, to } = filter.filterKeys
      return {
        [from]: searchPrams?.get(from) ?? null,
        [to]: searchPrams?.get(to) ?? null
      }
    }
    case FilterType.NUMBER_RANGE:
    {
      const { min, max } = filter.filterKeys
      return {
        [min]: searchPrams?.get(min) ?? null,
        [max]: searchPrams?.get(max) ?? null
      }
    }
    default:
      return undefined
  }
}

export const formatValueForParams = (key: string, value: string | string[], filterType: FilterType) => {
  switch (filterType) {
    case FilterType.DATE_RANGE:
      return { [key]: formatISO(value, { representation: 'date' }) }
    default:
      return { [key]: String(value) }
  }
}
