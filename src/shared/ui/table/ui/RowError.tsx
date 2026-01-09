import { type FC } from 'react'
import { TableCell, TableRow, Typography } from '@mui/material'

export interface IErrorRowProps {
    colSpan?: number
    errorText?: string
}

export const RowError: FC<IErrorRowProps> = ({ colSpan = 1, errorText = 'Нет данных для отображения' }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">
        <Typography variant="h6" color="text.secondary">
          {errorText}
        </Typography>
      </TableCell>
    </TableRow>
  )
}
