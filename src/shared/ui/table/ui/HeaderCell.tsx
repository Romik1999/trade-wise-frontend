import { type JSX } from 'react'
import { TableCell, TableSortLabel } from '@mui/material'
import { flexRender, type Header } from '@tanstack/react-table'
import { visuallyHidden } from '@mui/utils'

export interface IHeaderCellProps<T> {
    header: Header<T, unknown>;
    sortable: boolean;
}

export const HeaderCell = <T, >({ header, sortable }: IHeaderCellProps<T>): JSX.Element => {
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
