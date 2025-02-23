import React from 'react';
import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PRIVATE_PAGES } from '../../../app/routes';

const Sidebar = () => {
  return (
    <Box
      width="300px"
      sx={{ padding: '10px', borderRadius: '10px', backgroundColor: 'white' }}
    >
      <List>
        <ListItem disablePadding>
          <NavLink
            to={PRIVATE_PAGES.PRODUCTS}
            style={({ isActive }) => ({
              width: '100%',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: isActive ? 'rgba(27, 89, 248, 0.1)' : 'transparent',
              borderRadius: '10px',
            })}
          >
            <ListItemButton>PRODUCTS</ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={PRIVATE_PAGES.COMPONENTS}
            style={({ isActive }) => ({
              width: '100%',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: isActive ? 'rgba(27, 89, 248, 0.1)' : 'transparent',
              borderRadius: '10px',
            })}
          >
            <ListItemButton>COMPONENTS</ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={PRIVATE_PAGES.SETTINGS}
            style={({ isActive }) => ({
              width: '100%',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: isActive ? 'rgba(27, 89, 248, 0.1)' : 'transparent',
              borderRadius: '10px',
            })}
          >
            <ListItemButton>SETTINGS</ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
