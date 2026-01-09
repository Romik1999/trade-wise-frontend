import { type FC } from 'react'
import { Box, CircularProgress, TableCell, TableRow } from '@mui/material'

export interface ILoadingRowProps {
    colSpan?: number
}

export const RowLoading: FC<ILoadingRowProps> = ({ colSpan = 1 }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      </TableCell>
    </TableRow>
  )
}
