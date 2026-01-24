import { useSearchParams } from 'react-router-dom'
import { format } from 'date-fns'
import { FilterType } from '../consts'
import type React from 'react'

const formatValueForParams = (filterValue: {[x: string]: string}, filterType: FilterType) => {
  switch (filterType) {
    case FilterType.DATE_RANGE: {
      const dataRangeValue = Object.values(filterValue).filter(Boolean)
        .map((value) => value ? format(value, 'dd.MM.yyyy') : null)
      return dataRangeValue.length > 0 ? `: ${dataRangeValue.join('-')}` : undefined
    }
    case FilterType.NUMBER_RANGE: {
      const numberRangeValue = Object.values(filterValue).filter(Boolean)
        .map((value) => value)
      return numberRangeValue.length > 0 ? `: ${numberRangeValue.join('-')}` : undefined
    }
    default:
      return undefined
  }
}

export const useFilterTrigger = (filterValue, setFilterValue, filterType: FilterType) => {
  const renderValue = filterValue ? formatValueForParams(filterValue, filterType) : undefined
  const [searchParams, setSearchParams] = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const onClearFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    Object.keys(filterValue).map((key) => {
      params.delete(key)
    })
    setSearchParams(params, { replace: true })
    setFilterValue()
  }

  return { renderValue, onClearFilter }
}
