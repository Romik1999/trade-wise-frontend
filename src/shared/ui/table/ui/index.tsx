import { Box, Stack } from '@mui/material'
import { Pagination } from '../../pagination/ui/Pagination.tsx'
import { PageSizeSelect } from '../../pageSizeSelect'
import { useTable } from '../model/useTable.ts'
import type { ITableProps } from '../types/table.types.ts'
import { TableBody } from './TableBody.tsx'
import { TableHeader } from './TableHeader.tsx'

export const Table = <T, >({
  items = [],
  columnsConfig,
  pagination,
  isLoading = false,
  maxHeight = 'calc(100vh - 285px)'
}: ITableProps<T>) => {
  const { table, tableContainerRef } = useTable<T>(items, columnsConfig)

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box ref={tableContainerRef} sx={{ maxHeight: maxHeight, overflowX: 'auto' }}>
        <Box>
          <TableHeader<T> table={table} />

          <TableBody<T>
            isLoading={isLoading}
            table={table}
            tableContainerRef={tableContainerRef}
            columnsConfigLength={columnsConfig?.length}
          />
        </Box>
      </Box>

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
