import { Box, CircularProgress, Stack, Table as MUITable, TableContainer } from '@mui/material'
import { TableHeader } from './TableHeader.tsx'
import { TableBody } from './TableBody.tsx'
import type { ITableProps } from '../model/types.ts'
import { Pagination } from './Pagination.tsx'

export const Table = <T, >({
  tableConfig,
  items,
  isItemsLoading = false,
  itemsTotal,
  maxHeight
}: ITableProps<T>) => {
  return (
    <Stack spacing={2}>
      <TableContainer sx={{ maxHeight: maxHeight }}>
        <MUITable stickyHeader aria-label="sticky table">
          <TableHeader tableConfig={tableConfig}/>

          {isItemsLoading ? (
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              minHeight="calc(100% - 100px)"
              position="absolute"
            >
              <CircularProgress size="30px" />
            </Box>
          ) : (
            <TableBody tableConfig={tableConfig} items={items} />
          )}
        </MUITable>
      </TableContainer>

      <Pagination/>
    </Stack>
  )
}
