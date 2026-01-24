import { type FC } from 'react'
import { Box, Stack } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import type { IDateRangeFilter } from '../../types'
import { dayFormatterToLocale } from '../../../../lib/date'

export interface IFilterDataRangeProps {
    filter: IDateRangeFilter
    localSelectedValue: any
    setLocalSelectedValue: (value: any) => void
}

export const FilterDataRange: FC<IFilterDataRangeProps> = ({ filter, localSelectedValue, setLocalSelectedValue }) => {
  const { from, to } = filter.filterKeys

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <DatePicker
        label="Начало"
        value={localSelectedValue[from]}
        onChange={(newValue) => setLocalSelectedValue((prevState) => ({ ...prevState, [from]: newValue }))}
        disableFuture={true}
        format="dd.MM.yy"
        openTo="day"
        views={['year', 'month', 'day']}
        slotProps={{
          textField: {
            size: 'small',
            style: {
              maxWidth: '150px'
            }
          }
        }}
        dayOfWeekFormatter={dayFormatterToLocale}
      />

      <Box>-</Box>

      <DatePicker
        label="Окончание"
        value={localSelectedValue[to]}
        onChange={(newValue) => setLocalSelectedValue((prevState) => ({ ...prevState, [to]: newValue }))}
        disablePast={true}
        format="dd.MM.yy"
        openTo="day"
        views={['year', 'month', 'day']}
        slotProps={{
          textField: {
            size: 'small',
            style: {
              maxWidth: '150px'
            }
          }
        }}
        dayOfWeekFormatter={dayFormatterToLocale}
      />
    </Stack>
  )
}
