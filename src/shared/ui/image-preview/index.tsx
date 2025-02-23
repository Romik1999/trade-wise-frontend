import React, { FC, useState } from 'react';
import { Box, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '700px',
  width: '100%',
  backgroundColor: 'background.paper',
  boxShadow: 24,
  padding: '15px',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
};

export type ImagePreviewProps = {
  imageUrl: string;
  altText: string;
};

const Image: FC<ImagePreviewProps> = ({ imageUrl, altText }) => {
  return (
    <img
      srcSet={`${imageUrl}`}
      src={`${imageUrl}`}
      alt={altText}
      loading="lazy"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

const ImagePreview: FC<ImagePreviewProps> = ({ imageUrl, altText }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box
        onClick={handleOpen}
        width="50px"
        height="50px"
        style={{ cursor: 'pointer' }}
      >
        <Image imageUrl={imageUrl} altText={altText} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box onClick={handleClose} style={{ cursor: 'pointer' }}>
            <CloseIcon />
          </Box>
          <Image imageUrl={imageUrl} altText={altText} />
        </Box>
      </Modal>
    </div>
  );
};

export default ImagePreview;
