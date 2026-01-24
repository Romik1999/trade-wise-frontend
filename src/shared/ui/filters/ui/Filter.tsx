import { type FC } from 'react'
import { Box } from '@mui/material'
import { FilterPopover } from './FilterPopover.tsx'
import { FilterTrigger } from './FilterTrigger.tsx'
import type { FilterConfig } from '../types'
import { useFilter } from '../model'

export interface IFilterProps {
    filter: FilterConfig;
}

export const Filter: FC<IFilterProps> = ({ filter }) => {
  const { id, open, anchorEl, filterValue, setFilterValue, handleClick, handleClose } = useFilter(filter)
  return (
    <Box>
      <FilterTrigger
        label={filter.title}
        handleClick={handleClick}
        filterType={filter.type}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />

      <FilterPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        filter={filter}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
    </Box>

  )
}
