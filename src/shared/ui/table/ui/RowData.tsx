import { Box } from '@mui/material'
import type { IRowDataProps } from '../types/table.types.ts'
import { BodyCell } from './BodyCell.tsx'

export const RowData = <T, >({ row, virtualRow, rowVirtualizer }: IRowDataProps<T>) => {
  return (
    <Box
      key={virtualRow.key}
      data-index={virtualRow.index}
      ref={rowVirtualizer.measureElement}
      sx={{
        position: 'absolute',
        transform: `translateY(${virtualRow.start}px)`,
        display: 'flex',
        minWidth: '100%',
        '&:hover': {
          backgroundColor: 'rgba(105, 108, 255, 0.08)'
        }
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <BodyCell
          key={cell.id}
          cell={cell}
        />
      ))}
    </Box>
  )
}
