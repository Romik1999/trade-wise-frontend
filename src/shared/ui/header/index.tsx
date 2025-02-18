import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { PRIVATE_PAGES } from '../../../app/routes';

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      height="60px"
      sx={{ padding: '10px', borderRadius: '10px', backgroundColor: 'white' }}
    >
      <NavLink to={PRIVATE_PAGES.HOME}>Logo</NavLink>
      <Box>User</Box>
    </Box>
  );
};

export default Header;
