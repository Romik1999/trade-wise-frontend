import { AppBar, Box, Toolbar } from '@mui/material'
import { UserPopover } from '../../user-popover'

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: '0 0 0.375rem 0.25rem rgba(161, 172, 184, 0.15)',
        backgroundColor: 'background.paper',
        borderRadius: '0.375rem'
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <UserPopover />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
