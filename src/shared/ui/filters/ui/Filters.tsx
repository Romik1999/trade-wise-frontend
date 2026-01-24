import { type FC } from 'react'
import { Stack } from '@mui/material'
import { Filter } from './Filter.tsx'
import type { FilterConfig } from '../types'

export interface IFiltersProps {
    filterConfig: FilterConfig[]
}

export const Filters: FC<IFiltersProps> = ({ filterConfig }) => {
  return (
    <Stack spacing="10px" padding="16px">
      <Stack direction="row" gap="10px" flexWrap="wrap">
        {filterConfig.map((filterConfigItem, index) => {
          return (
            <Filter key={`filter-item-${filterConfigItem.id}-${index}`} filter={filterConfigItem} />
          )
        })}
      </Stack>
    </Stack>
  )
}
