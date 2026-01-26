import { type FC } from 'react'
import { Box, Typography } from '@mui/material'

export interface IErrorRowProps {
    errorText?: string
}

export const RowError: FC<IErrorRowProps> = ({ errorText = 'Нет данных для отображения' }) => {
  return (
    <Box>
      <Box display="flex" justifyContent="cener">
        <Typography variant="h6" color="text.secondary">
          {errorText}
        </Typography>
      </Box>
    </Box>
  )
}
