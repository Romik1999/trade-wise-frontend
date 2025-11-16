import { type FC } from 'react'
import { Drawer } from '@mui/material'
import { SidebarContent } from './SidebarContent.tsx'

export interface ISidebarProps {
    isOpenSidebar: boolean
    onToggleSidebar: () => void
    isTabletView: boolean
}

export const Sidebar:FC<ISidebarProps> = ({ isOpenSidebar, onToggleSidebar, isTabletView }) => {

  if (isTabletView) {
    return (
      <Drawer
        open={isOpenSidebar}
        onClose={onToggleSidebar}
      >
        <SidebarContent onToggleSidebar={onToggleSidebar} isTabletView={isTabletView}/>
      </Drawer>
    )
  }

  return (
    <SidebarContent onToggleSidebar={onToggleSidebar} isTabletView={isTabletView}/>
  )
}
