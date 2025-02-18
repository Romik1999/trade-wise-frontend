import React, {FC, ReactNode} from 'react';
import Header from "../../header";
import {Box} from "@mui/material";
import Sidebar from "../../sidebar";

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <Box height="100vh">
            <Header/>
            <Box display="flex" height="calc(100% - 80px)">
                <Sidebar/>
                <Box component="section" display="flex" width="calc(100% - 60px)">
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;