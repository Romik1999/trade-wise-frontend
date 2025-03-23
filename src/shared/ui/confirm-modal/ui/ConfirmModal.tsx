import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  minWidth: '600px',
  minHeight: '250px',
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 3,
};

const closeStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};

export type ConfirmModalProps = {
  customTrigger?: React.ReactNode;
  title?: string;
  description?: string;
  onCancel?: () => void;
  confirmButtonText?: string;
  request?: any;
  onSuccess?: () => void;
};

const ConfirmModal: FC<ConfirmModalProps> = ({
  customTrigger,
  title = 'Open modal',
  description = 'Open modal',
  confirmButtonText = 'Confirm',
  onCancel,
  request,
  onSuccess,
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    onCancel?.();
    setOpen(false);
  };

  const sendResetRequest = async () => {
    setIsLoading(true);

    try {
      const { data } = await request();
      if (data.statusCode === 200) {
        onSuccess?.();
        setOpen(false);
      }
    } catch (err) {
      console.log({ err });
    }

    setIsLoading(false);
  };

  const renderTrigger = customTrigger ?? <Button>Open modal</Button>;

  return (
    <div>
      <Box onClick={handleOpen}>{renderTrigger}</Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} sx={closeStyle}>
              <CloseIcon />
            </IconButton>
            <Stack spacing={2}>
              <Typography variant={'h5'}>{title}</Typography>
              <Typography>{description}</Typography>
            </Stack>
            <Box display="flex" gap="10px">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                loading={isLoading}
                onClick={sendResetRequest}
              >
                {confirmButtonText}
              </Button>
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={handleClose}
              >
                Отмена
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
