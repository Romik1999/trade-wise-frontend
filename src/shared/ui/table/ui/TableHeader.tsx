import { RowHeader } from './RowHeader.tsx'
import { Box } from '@mui/material'
import type { ITableHeaderProps } from '../types/table.types.ts'

export const TableHeader = <T, > ({ table }: ITableHeaderProps<T>) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', position: 'sticky', top: 0, zIndex: 2 }}>
      {table.getHeaderGroups().map((headerGroup, index) => (
        <RowHeader<T>
          key={`table-header-row-item-${headerGroup.id}-${index}`}
          headerGroup={headerGroup}
        />
      ))}
    </Box>
  )
}
