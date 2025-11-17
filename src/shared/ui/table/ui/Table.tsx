import { Box, CircularProgress, Pagination, Paper, Stack, Table as MUITable, TableContainer } from '@mui/material'
import { TableHeader } from './TableHeader.tsx'
import { TableBody } from './TableBody.tsx'
import type { ITableProps } from '../model/types.ts'

export const Table = <T, >({
  tableConfig,
  items,
  isItemsLoading = false,
  itemsTotal
}: ITableProps<T>) => {
  return (
    <Stack spacing={2}>
      <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: '0 2px 6px 0 rgba(67, 89, 113, 0.12)', borderRadius: '0.5rem' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
      </Paper>

      <Pagination count={5} defaultPage={1} boundaryCount={2} />
    </Stack>
  )
}
