import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Box width="60px" display="flex" flexDirection="column">
      <NavLink to="/" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px'
      }}>
        <HomeIcon fontSize="large" />
      </NavLink>
      <NavLink to="/settings" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px'
      }}>
        <SettingsIcon fontSize="large" />
      </NavLink>
      <NavLink to="/login" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px'
      }}>
        login
      </NavLink>
    </Box>
  );
};

export default Sidebar;