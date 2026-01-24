import React, { type FC } from 'react'
import { Box, Button, Stack } from '@mui/material'
import type { FilterType } from '../consts'
import CloseIcon from '@mui/icons-material/Close'
import { useFilterTrigger } from '../model/useFilterTrigger.ts'

export interface IFilterTriggerProps {
    label: string
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    filterValue: any
    filterType: FilterType
    setFilterValue?: any
}

export const FilterTrigger: FC<IFilterTriggerProps> = ({ label, handleClick, filterValue, filterType, setFilterValue }) => {
  const { renderValue, onClearFilter } = useFilterTrigger(filterValue, setFilterValue, filterType)

  return (
    <Button
      variant="contained"
      size="small"
      sx={{ textTransform: 'none' }}
      onClick={handleClick}
    >
      <Stack direction="row" spacing="10px" alignItems="center">
        <Stack direction="row" spacing="5px">
          {label}

          {!!renderValue && (
            <>
              {renderValue}
            </>
          )}
        </Stack>

        {!!renderValue && (
          <Box display="flex" onClick={(e)=> onClearFilter(e)}>
            <CloseIcon/>
          </Box>
        )}
      </Stack>
    </Button>
  )
}
