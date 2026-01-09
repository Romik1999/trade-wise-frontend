import { useIngredientsTable } from '../model/useIngredientsTable.ts'
import {
  Box,
  CircularProgress,
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
import { flexRender, getCoreRowModel, type Header, type SortingState, useReactTable } from '@tanstack/react-table'
import InboxIcon from '@mui/icons-material/Inbox'
import { useSearchParams } from 'react-router-dom'
import { type JSX, useMemo } from 'react'
import { visuallyHidden } from '@mui/utils'
import { PageSizeSelect } from '../../../shared/ui/pageSizeSelect'

import { Pagination } from '../../../shared/ui/pagination/ui/Pagination.tsx'

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

const defaultSortField = 'created_at'
const defaultSortDirection = 'asc'

export const IngredientsTable = () => {
  const { items, isLoading, pagination } = useIngredientsTable()
  const [searchParams, setSearchParams] = useSearchParams()

  const page = parseInt(searchParams.get('page') || '1', 10)
  const sortBy = searchParams.get('sort_by') || defaultSortField
  const sortDirection = searchParams.get('direction') || defaultSortDirection

  const sorting = useMemo<SortingState>(() => {
    return [{
      id: sortBy,
      desc: sortDirection === 'desc'
    }]
  }, [sortBy, sortDirection])

  const table = useReactTable({
    data: items,
    columns: ingredientsTableConfig,
    state: {
      sorting
    },
    onSortingChange: (updater) => {
      const newSorting = typeof updater === 'function'
        ? updater(sorting)
        : updater

      const newSort = newSorting[0]

      if (newSort) {
        const params = new URLSearchParams(searchParams)
        params.set('sort_by', newSort.id)
        params.set('direction', newSort.desc ? 'desc' : 'asc')
        setSearchParams(params, { replace: true })
      } else {
        const params = new URLSearchParams(searchParams)
        params.delete('sort_by')
        params.delete('direction')
        setSearchParams(params, { replace: true })
      }
    },
    enableSorting: true,
    manualSorting: true,
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

        {pagination && items && (
          <Stack direction="row" sx={{ justifyContent: 'space-between', padding: '16px', borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
            <Pagination
              pagesCount={Math.ceil(pagination?.total / pagination.per_page)}
            />

            <PageSizeSelect/>
          </Stack>
        )}
      </Paper>
    </Paper>
  )
}
