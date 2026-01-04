import { useIngredientsTable } from '../model/useIngredientsTable.ts'
import {
  Box,
  CircularProgress,
  NativeSelect,
  Pagination,
  Paper,
  Stack,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography
} from '@mui/material'
import { ingredientsTableConfig } from '../config/ingredientsTableConfig.tsx'
import { flexRender, getCoreRowModel, type Header, useReactTable } from '@tanstack/react-table'
import InboxIcon from '@mui/icons-material/Inbox'
import PaginationItem from '@mui/material/PaginationItem'
import { Link } from 'react-router'
import { useLocation, useSearchParams } from 'react-router-dom'
import type { JSX } from 'react'
import { visuallyHidden } from '@mui/utils'

export interface ITableHeaderProps<T> {
    header: Header<T, unknown>;
    sortable: boolean;
}

export const TableHeader = <T, >({ header, sortable }: ITableHeaderProps<T>): JSX.Element => {
  const canSort = header.column.getCanSort() && sortable
  const align = (header.column.columnDef.meta as any)?.align || 'left'

  return (
    <TableCell
      align={align}
      sortDirection={header.column.getIsSorted()}
      sx={{
        width: header.column.getSize(),
        minWidth: header.column.columnDef.minSize,
        maxWidth: header.column.columnDef.maxSize,
        fontWeight: 'bold',
        backgroundColor: 'background.paper'
      }}
    >
      {canSort ? (
        <TableSortLabel
          active={header.column.getIsSorted() !== false}
          direction={header.column.getIsSorted() || 'asc'}
          onClick={header.column.getToggleSortingHandler()}
        >
          {flexRender(
            header.column.columnDef.header,
            header.getContext()
          )}

          {header.column.getIsSorted() ? (
            <span style={visuallyHidden}>
              {header.column.getIsSorted() === 'desc'
                ? 'sorted descending'
                : 'sorted ascending'}
            </span>
          ) : null}
        </TableSortLabel>
      ) : (
        flexRender(
          header.column.columnDef.header,
          header.getContext()
        )
      )}
    </TableCell>
  )
}

export const IngredientsTable = () => {
  const { items, isLoading, pagination } = useIngredientsTable()
  const [searchParams, setSearchParams] = useSearchParams()

  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const page = parseInt(query.get('page') || '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10)

  const handlePageSizeChange = (event) => {
    const newSize = event.target.value
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('pageSize', newSize)
    newSearchParams.set('page', '1')
    setSearchParams(newSearchParams)
  }

  const table = useReactTable({
    data: items,
    columns: ingredientsTableConfig,
    getCoreRowModel: getCoreRowModel()
  })

  const createPageUrl = (pageNumber: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams)

    if (pageNumber === 1) {
      newSearchParams.delete('page')
    } else {
      newSearchParams.set('page', pageNumber.toString())
    }

    const queryString = newSearchParams.toString()
    return `/components${queryString ? `?${queryString}` : ''}`
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: '0 2px 6px 0 rgba(67, 89, 113, 0.12)', borderRadius: '0.375rem' }}>
      <Box>
        Filters
      </Box>

      <Box>
        search
        select per page
        export
        add button
      </Box>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 'calc(100vh - 285px)' }}>
          <MuiTable stickyHeader={true}>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHeader
                      key={header.id}
                      header={header}
                      sortable={true}
                    />
                  ))}
                </TableRow>
              ))}
            </TableHead>

            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={1} align="center" sx={{ py: 8 }}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <CircularProgress />
                    </Box>
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={1} align="center" sx={{ py: 8 }}>
                    <InboxIcon sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />

                    <Typography variant="h6" color="text.secondary">
                        Нет данных для отображения
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} hover={true}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </MuiTable>
        </TableContainer>

        <Stack direction="row" sx={{ justifyContent: 'space-between', padding: '16px' }}>
          <NativeSelect
            defaultValue={pageSize ?? 10}
            onChange={handlePageSizeChange}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </NativeSelect>

          {pagination && items && (
            <Pagination
              count={Math.ceil(pagination?.total / pagination.per_page)}
              page={page ?? pagination?.current_page}
              variant="outlined"
              shape="rounded"
              size="large"
              renderItem={(item)=>{
                return (
                  <PaginationItem
                    component={Link}
                    to={createPageUrl(item.page)}
                    {...item}
                  />
                )
              }}
            />
          )}
        </Stack>

      </Paper>
    </Paper>
  )
}
