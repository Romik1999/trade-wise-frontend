import { Box, TableBody as MUTableBody, TableCell, TableRow } from '@mui/material'
import type { ITableBodyProps } from '../model/types.ts'

export const TableBody = <T, >({
  tableConfig,
  items
}: ITableBodyProps<T>) => {
  if (!items) {
    return null
  }

  return (
    <MUTableBody>
      {items.map((item, index) => {
        return (
          <TableRow hover key={`table-row-${index}`}>
            {tableConfig.cells.map((cell) => {
              return (
                <TableCell key={cell.columnKey} style={{ width: cell.width }}>
                  <Box>{cell.getContent ? cell.getContent(item) : ''}</Box>
                </TableCell>
              )
            })}
          </TableRow>
        )
      })}
    </MUTableBody>
  )
}
