import { type FC } from 'react'
import { Box, Stack, TextField } from '@mui/material'
import type { INumberRangeFilter } from '../../types'

export interface IFilterNumberRangeProps {
    filter: INumberRangeFilter
    localSelectedValue: any
    setLocalSelectedValue: (value: any) => void
}

export const FilterNumberRange: FC<IFilterNumberRangeProps> = ({ filter, localSelectedValue, setLocalSelectedValue }) => {
  const { min, max } = filter.filterKeys

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <TextField
        label="От"
        type="number"
        size="small"
        value={localSelectedValue[min]}
        onChange={(event) => setLocalSelectedValue((prevState) => ({ ...prevState, [min]: event.target.value }))}
      />

      <Box>-</Box>

      <TextField
        label="До"
        type="number"
        size="small"
        value={localSelectedValue[max]}
        onChange={(event) => setLocalSelectedValue((prevState) => ({ ...prevState, [max]: event.target.value }))}
      />
    </Stack>
  )
}
