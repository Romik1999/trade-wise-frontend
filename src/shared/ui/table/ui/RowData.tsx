import { TableCell, TableRow } from '@mui/material'
import { flexRender, type Row } from '@tanstack/react-table'

export interface IRowDataProps<T> {
    row: Row<T>
}

export const RowData = <T, >({ row }: IRowDataProps<T>) => {
  return (
    <TableRow key={row.id} hover={true}>
      {row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
          sx={{
            width: cell.column.getSize(),
            minWidth: cell.column.columnDef.minSize,
            maxWidth: cell.column.columnDef.maxSize }}
        >
          {flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          )}
        </TableCell>
      ))}
    </TableRow>
  )
}
