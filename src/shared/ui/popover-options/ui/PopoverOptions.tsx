import React, { FC } from 'react';
import { Box, Button, Popover as MuiPopover } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { usePopoverOptions } from '../model';

export type PopoverOptionsProps = {
  children: React.ReactNode;
};

const PopoverOptions: FC<PopoverOptionsProps> = ({ children }) => {
  const { handleClick, handleClose, open, id, anchorEl } = usePopoverOptions();

  return (
    <div>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick} style={{minWidth: "40px", height: "40px", padding: "5px"}}>
        <MoreHorizRoundedIcon />
      </Button>
      <MuiPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box padding="10px" minWidth={"300px"}>
          {children}
        </Box>
      </MuiPopover>
    </div>
  );
};

export default PopoverOptions;
