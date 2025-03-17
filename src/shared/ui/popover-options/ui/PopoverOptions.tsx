import React, { FC } from 'react';
import { IconButton, Menu, Stack } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { usePopoverOptions } from '../model';

export type PopoverOptionsProps = {
  children: React.ReactNode;
  maxHeight?: number;
};

const ITEM_HEIGHT = 24;

const PopoverOptions: FC<PopoverOptionsProps> = ({
  children,
  maxHeight = 15,
}) => {
  const { handleClick, handleClose, open, anchorEl } = usePopoverOptions();

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizRoundedIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * maxHeight,
              maxWidth: '280px',
              width: '100%',
            },
          },
        }}
      >
        <Stack padding="10px" spacing={2}>
          {children}
        </Stack>
      </Menu>
    </div>
  );
};

export default PopoverOptions;
