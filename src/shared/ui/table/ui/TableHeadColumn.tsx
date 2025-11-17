import { Box, TableCell } from '@mui/material'
import type { ITableHeadColumnProps } from '../model/types.ts'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpward'

export const TableHeadColumn = <T, >({
  cell
}: ITableHeadColumnProps<T>) => {
  return (
    <TableCell style={{ width: cell.width }}>
      <Box
        display="flex"
        columnGap="5px"
      >
        {cell.title}

        {cell.enabledMultiSort && cell.title !== '' && (
          <Box display="flex">
            <ArrowUpwardOutlinedIcon />
          </Box>
        )}
      </Box>
    </TableCell>
  )
}
