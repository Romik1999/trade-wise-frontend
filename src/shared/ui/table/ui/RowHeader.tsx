import { TableRow } from '@mui/material'
import type { HeaderGroup } from '@tanstack/react-table'
import { HeaderCell } from './HeaderCell.tsx'

export interface IRowHeaderProps<T> {
    headerGroup: HeaderGroup<T>
}

export const RowHeader = <T, >({ headerGroup }: IRowHeaderProps<T>) => {
  return (
    <TableRow key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <HeaderCell
          key={header.id}
          header={header}
          sortable={true}
        />
      ))}
    </TableRow>
  )
}
