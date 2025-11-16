import { AppBar, Box, Toolbar } from '@mui/material'
import { UserPopover } from '../../user-popover'
import { SidebarToggle } from '../../sidebar'
import type { FC } from 'react'

export interface IHeaderProps {
    isOpenSidebar: boolean
    onToggleSidebar: () => void
    isTabletView: boolean
}

export const Header:FC<IHeaderProps> = ({ onToggleSidebar, isTabletView }) => {
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
        <SidebarToggle onToggleSidebar={onToggleSidebar} isTabletView={isTabletView} />
        <Box sx={{ flexGrow: 1 }} />
        <UserPopover />
      </Toolbar>
    </AppBar>
  )
}
