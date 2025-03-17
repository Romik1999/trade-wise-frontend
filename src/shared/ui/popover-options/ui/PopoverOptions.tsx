import React, { FC } from 'react';
import { Button, Popover as MuiPopover } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { usePopoverOptions } from '../model';

export type PopoverOptionsProps = {
  children: React.ReactNode;
};

const PopoverOptions: FC<PopoverOptionsProps> = ({ children }) => {
  const { handleClick, handleClose, open, id, anchorEl } = usePopoverOptions();

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <MoreHorizRoundedIcon />
      </Button>
      <MuiPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {children}
      </MuiPopover>
    </div>
  );
};

export default PopoverOptions;
