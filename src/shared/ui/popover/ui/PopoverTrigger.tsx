import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import React, { type FC } from 'react'
import type { IPopoverProps } from './Popover.tsx'

export interface IPopoverTriggerProps {
    trigger?: IPopoverProps['trigger']
    open: boolean
    handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const PopoverTrigger: FC<IPopoverTriggerProps> = ({ trigger, open, handleClick }) => {
  return (
    <>
      {trigger ? (
        <>{typeof trigger === 'function' ? trigger(handleClick) : (
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {trigger}
          </IconButton>
        )}</>
      ) : (
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MoreVertIcon />
        </IconButton>
      )}
    </>
  )
}
