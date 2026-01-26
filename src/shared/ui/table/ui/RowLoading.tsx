import { Box, CircularProgress } from '@mui/material'

export const RowLoading = () => {
  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      </Box>
    </Box>
  )
}
