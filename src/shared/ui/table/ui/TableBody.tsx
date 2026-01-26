import { RowData } from './RowData.tsx'
import { Box } from '@mui/material'
import { useTableBody } from '../model/useTableBody.ts'
import type { ITableBodyProps } from '../types/table.types.ts'

export const TableBody = <T, >({ table, tableContainerRef }: ITableBodyProps<T>) => {
  const { rows, rowVirtualizer } = useTableBody(table, tableContainerRef)

  return (
    <Box
      sx={{
        height: `${rowVirtualizer.getTotalSize()}px`,
        position: 'relative'
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
        const row = rows[virtualRow.index]
        return (
          <RowData<T>
            key={`table-row-item-${row.id}-${index}`}
            row={row}
            virtualRow={virtualRow}
            rowVirtualizer={rowVirtualizer}
          />
        )
      })}
    </Box>
  )
}
