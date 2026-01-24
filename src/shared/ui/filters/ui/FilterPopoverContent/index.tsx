import { type FC } from 'react'
import { Box } from '@mui/material'
import { FilterType } from '../../consts'
import type { FilterConfig } from '../../types'
import { FilterDataRange } from './FilterDataRange.tsx'
import { FilterNumberRange } from './FilterNumberRange.tsx'
import { FilterMultiSelect } from './FilterMultiSelect.tsx'

export interface IFilterPopoverContentProps {
  filter: FilterConfig
  localSelectedValue: any
  setLocalSelectedValue: (value: any) => void
}

export const FilterPopoverContent: FC<IFilterPopoverContentProps> = ({ filter, localSelectedValue, setLocalSelectedValue }) => {
  switch (filter.type) {
    case FilterType.DATE_RANGE:
      return (
        <FilterDataRange
          filter={filter}
          localSelectedValue={localSelectedValue}
          setLocalSelectedValue={setLocalSelectedValue}
        />
      )
    case FilterType.NUMBER_RANGE:
      return (
        <FilterNumberRange
          filter={filter}
          localSelectedValue={localSelectedValue}
          setLocalSelectedValue={setLocalSelectedValue}
        />
      )
    case FilterType.SELECT:
      return (
        <FilterMultiSelect
          filter={filter}
          localSelectedValue={localSelectedValue}
          setLocalSelectedValue={setLocalSelectedValue}
        />
      )
    case FilterType.BOOLEAN:
      return FilterType.BOOLEAN
    case FilterType.AUTOCOMPLETE:
      return FilterType.AUTOCOMPLETE
    default:
      return <Box>Filter popover Content </Box>
  }
}
