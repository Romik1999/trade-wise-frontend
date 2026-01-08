import Menu from '@mui/material/Menu'
import React, { type FC, type ReactNode } from 'react'
import { Box } from '@mui/material'
import { usePopover } from '../model'
import { PopoverTrigger } from './PopoverTrigger.tsx'

export interface IPopoverProps {
    children: ReactNode | ((handleClose: () => void) => ReactNode)
    trigger?: ReactNode | ((handleClick: (event: React.MouseEvent<HTMLElement>) => void) => ReactNode)
    maxPopoverWidth?: number | string
}

export const Popover:FC<IPopoverProps> = ({ children, trigger, maxPopoverWidth = '280px' }) => {
  const { handleClick, handleClose, open, anchorEl } = usePopover()

  return (
    <Box>
      <PopoverTrigger trigger={trigger} handleClick={handleClick} open={open}/>

      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{
          paper: {
            style: {
              maxWidth: maxPopoverWidth,
              width: '100%',
              padding: '0',
              borderRadius: '0.375rem',
              boxShadow: '0 0.25rem 0.75rem 0 rgba(34, 48, 62, 0.14)'
            }
          }
        }}
      >
        {typeof children === 'function' ? children(handleClose) : children}
      </Menu>
    </Box>
  )
}
