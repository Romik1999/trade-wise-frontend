import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import IconButton from '@mui/material/IconButton'
import type { FC } from 'react'

export interface ISidebarToggleProps {
  onToggleSidebar: ()=> void
  isTabletView: boolean
}

export const SidebarToggle:FC<ISidebarToggleProps> = ({ onToggleSidebar, isTabletView }) => {
  if (!isTabletView) {
    return null
  }

  return (
    <IconButton onClick={onToggleSidebar}>
      <MenuRoundedIcon/>
    </IconButton>
  )
}
