import { Box } from '@mui/material'
import { flexRender } from '@tanstack/react-table'
import type { IBodyCellProps } from '../types/table.types.ts'

export const BodyCell = <T, > ({ cell }: IBodyCellProps<T>) => {
  const isColumnCanResizing = cell.column.getCanResize()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  //TODO пофиксить типизацию
  const cellStyles = cell.column.columnDef.meta?.cellStyles ?? {}

  return (
    <Box
      key={cell.id}
      sx={{
        width: cell.column.getSize(),
        minWidth: cell.column.columnDef.minSize,
        maxWidth: cell.column.columnDef.maxSize,
        padding: '.782rem 1.25rem',
        display: 'flex',
        flex: isColumnCanResizing ? '1 1 auto' : 'inherit',
        ...cellStyles
      }}
    >
      {flexRender(
        cell.column.columnDef.cell,
        cell.getContext()
      )}
    </Box>
  )
}
