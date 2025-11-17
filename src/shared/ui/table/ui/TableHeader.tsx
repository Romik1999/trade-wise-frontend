import { TableHead, TableRow } from '@mui/material'
import { TableHeadColumn } from './TableHeadColumn.tsx'
import type { ITableHeaderProps } from '../model/types.ts'

export const TableHeader = <T, >({
  tableConfig
}: ITableHeaderProps<T>) => {
  return (
    <TableHead>
      <TableRow>
        {tableConfig.cells.map((cell) => {
          return <TableHeadColumn key={cell.columnKey} cell={cell} />
        })}
      </TableRow>
    </TableHead>
  )
}
