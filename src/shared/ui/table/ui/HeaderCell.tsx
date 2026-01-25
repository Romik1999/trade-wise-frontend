import { type JSX } from 'react'
import { Box, TableSortLabel, Typography } from '@mui/material'
import { flexRender } from '@tanstack/react-table'
import { visuallyHidden } from '@mui/utils'
import type { IHeaderCellProps } from '../types/table.types.ts'

export const HeaderCell = <T, >({ header }: IHeaderCellProps<T>): JSX.Element => {
  const canSort = header.column.getCanSort()
  const isColumnCanResizing = header.column.getCanResize()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  //TODO пофиксить типизацию
  const cellStyles = header.column.columnDef.meta?.cellStyles ?? {}

  return (
    <Box
      sx={{
        width: header.column.getSize(),
        minWidth: header.column.columnDef.minSize,
        maxWidth: header.column.columnDef.maxSize,
        fontWeight: 'bold',
        backgroundColor: 'background.paper',
        padding: '.782rem 1.25rem',
        display: 'flex',
        flex: isColumnCanResizing ? '1 1 auto' : 'inherit',
        ...cellStyles
      }}
    >
      {canSort ? (
        <TableSortLabel
          active={header.column.getIsSorted() !== false}
          direction={header.column.getIsSorted() || 'asc'}
          onClick={header.column.getToggleSortingHandler()}
        >
          <Typography sx={{ color: '#384551' }}>
            {flexRender(
              header.column.columnDef.header,
              header.getContext()
            )}
          </Typography>

          {header.column.getIsSorted() ? (
            <span style={visuallyHidden}>
              {header.column.getIsSorted() === 'desc'
                ? 'sorted descending'
                : 'sorted ascending'}
            </span>
          ) : null}
        </TableSortLabel>
      ) : (
        <Typography>
          {flexRender(
            header.column.columnDef.header,
            header.getContext()
          )}
        </Typography>
      )}
    </Box>
  )
}
