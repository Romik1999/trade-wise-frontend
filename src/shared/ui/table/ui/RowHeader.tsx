import { Box } from '@mui/material'
import { HeaderCell } from './HeaderCell.tsx'
import type { IRowHeaderProps } from '../types/table.types.ts'

export const RowHeader = <T, >({ headerGroup }: IRowHeaderProps<T>) => {
  return (
    <Box key={headerGroup.id} sx={{ width: '100%', display: 'flex' }}>
      {headerGroup.headers.map((header) => (
        <HeaderCell
          key={header.id}
          header={header}
        />
      ))}
    </Box>
  )
}
