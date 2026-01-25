import { RowLoading } from './RowLoading.tsx'
import { RowError } from './RowError.tsx'
import { RowData } from './RowData.tsx'
import { Box } from '@mui/material'
import { useTableBody } from '../model/useTableBody.ts'
import type { ITableBodyProps } from '../types/table.types.ts'

export const TableBody = <T, >({ isLoading, table, tableContainerRef, columnsConfigLength }: ITableBodyProps<T>) => {
  const { rows, rowVirtualizer } = useTableBody(table, tableContainerRef)

  return (
    <Box
      sx={{
        height: `${rowVirtualizer.getTotalSize()}px`,
        position: 'relative'
      }}
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading ? (
        <RowLoading colSpan={columnsConfigLength ?? '1'} />
      ) : rows.length === 0 ? (
        <RowError colSpan={columnsConfigLength ?? '1'} />
      ) : (
        rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
          const row = rows[virtualRow.index]
          return (
            <RowData<T>
              key={`table-row-item-${row.id}-${index}`}
              row={row}
              virtualRow={virtualRow}
              rowVirtualizer={rowVirtualizer}
            />
          )
        })
      )}
    </Box>
  )
}
