import { Box, Stack, Table as MuiTable, TableBody, TableContainer, TableHead } from '@mui/material'
import { Pagination } from '../../pagination/ui/Pagination.tsx'
import { PageSizeSelect } from '../../pageSizeSelect'
import { RowLoading } from './RowLoading.tsx'
import { RowError } from './RowError.tsx'
import { RowData } from './RowData.tsx'
import { RowHeader } from './RowHeader.tsx'
import { useTable } from '../model/useTable.ts'
import type { ITableProps } from '../types/table.types.ts'

export const Table = <T, >({
  items = [],
  columnsConfig,
  pagination,
  isLoading = false,
  maxHeight = 'calc(100vh - 285px)'
}: ITableProps<T>) => {
  const table = useTable<T>(items, columnsConfig)

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: maxHeight }}>
        <MuiTable stickyHeader={true}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup, index) => (
              <RowHeader<T>
                key={`table-header-row-item-${headerGroup.id}-${index}`}
                headerGroup={headerGroup}
              />
            ))}
          </TableHead>

          <TableBody>
            {isLoading ? (
              <RowLoading colSpan={columnsConfig.length} />
            ) : table.getRowModel().rows.length === 0 ? (
              <RowError colSpan={columnsConfig.length} />
            ) : (
              table.getRowModel().rows.map((row, index) => (
                <RowData<T>
                  key={`table-row-item-${row.id}-${index}`}
                  row={row}
                />
              ))
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {pagination && items && (
        <Stack direction="row" sx={{ justifyContent: 'space-between', padding: '16px', borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
          <Pagination
            pagesCount={Math.ceil(pagination?.total / pagination.per_page)}
          />

          <PageSizeSelect />
        </Stack>
      )}
    </Box>
  )
}
