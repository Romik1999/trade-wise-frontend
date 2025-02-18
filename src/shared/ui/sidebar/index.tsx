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
            style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemButton>PRODUCTS</ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={PRIVATE_PAGES.COMPONENTS}
            style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemButton>COMPONENTS</ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={PRIVATE_PAGES.SETTINGS}
            style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemButton>SETTINGS</ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
