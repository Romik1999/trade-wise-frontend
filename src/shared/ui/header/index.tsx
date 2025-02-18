import React from 'react';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      height="60px"
      sx={{ padding: '10px', borderRadius: '10px', backgroundColor: 'white' }}
    >
      <Box>Logo</Box>
      <Box>User</Box>
    </Box>
  );
};

export default Header;
