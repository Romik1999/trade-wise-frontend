import { type FC } from 'react'
import { TableRow } from '@mui/material'
import type { HeaderGroup, RowData } from '@tanstack/react-table'
import { HeaderCell } from './HeaderCell.tsx'

export interface IRowHeaderProps {
    headerGroup: HeaderGroup<RowData>
}

export const RowHeader: FC<IRowHeaderProps> = ({ headerGroup }) => {
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
