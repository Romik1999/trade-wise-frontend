import React, { FC } from 'react';
import { IconButton, Menu, Stack } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { usePopoverOptions } from '../model';

export type PopoverOptionsProps = {
  children: any;
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
              padding: '0',
              borderRadius: 4,
              fontSize: '14px',
            },
          },
        }}
        sx={{
          ".MuiMenu-list": {
            padding: '0',
          },
          ".MuiMenuItem-root":{
            fontSize: '14px',
          }
        }}
      >
        <Stack padding="5px" spacing={2}>
          {typeof children === 'function' ? children(handleClose) : children}
        </Stack>
      </Menu>
    </div>
  );
};

export default PopoverOptions;
