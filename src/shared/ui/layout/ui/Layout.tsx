import React, { FC, ReactNode } from 'react';
import Header from '../../header';
import { Box } from '@mui/material';
import Sidebar from '../../sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      height="100vh"
      sx={{ backgroundColor: 'rgba(27, 89, 248, 0.1)' }}
      padding="10px"
      gap="10px"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Box display="flex" height="calc(100% - 80px)" gap="10px">
        <Sidebar />
        <Box width="calc(100% - 300px)" sx={{ padding: '10px', borderRadius: '10px', backgroundColor: "white" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
