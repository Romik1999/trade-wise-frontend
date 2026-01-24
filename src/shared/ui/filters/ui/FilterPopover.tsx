import { type FC } from 'react'
import { Button, Popover, Stack } from '@mui/material'
import { FilterPopoverHeader } from './FilterPopoverHeader.tsx'
import type { FilterConfig } from '../types'
import { useFilterPopover } from '../model'
import { FilterPopoverContent } from './FilterPopoverContent'

export interface IFilterPopoverProps {
    id: string | undefined
    open: boolean
    anchorEl: HTMLButtonElement | null
    handleClose: () => void
    filter: FilterConfig
    filterValue: any
    setFilterValue: (value: any) => void
}

export const FilterPopover: FC<IFilterPopoverProps> = ({
  id,
  open,
  anchorEl,
  handleClose,
  filter,
  filterValue,
  setFilterValue
}) => {

  const { onSave, localSelectedValue, setLocalSelectedValue } = useFilterPopover(filter, handleClose, filterValue, setFilterValue)

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      slotProps={{
        paper: {
          style: {
            borderRadius: '0.375rem',
            minWidth: '300px'
          }
        }
      }}
    >
      <Stack spacing="10px" padding="10px">
        <FilterPopoverHeader title={filter.title} handleClose={handleClose}/>

        <Stack>
          <FilterPopoverContent
            filter={filter}
            localSelectedValue={localSelectedValue}
            setLocalSelectedValue={setLocalSelectedValue}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="small"
            onClick={onSave}
          >
              Применить
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="secondary"
            size="small"
          >
              Отменить
          </Button>
        </Stack>
      </Stack>
    </Popover>
  )
}
