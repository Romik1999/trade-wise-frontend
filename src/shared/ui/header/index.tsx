import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {DateTime} from "luxon";

interface HeaderProps {
    date?: DateTime
}

const Header: FC<HeaderProps> = ({date}) => {
    const shownDate = (date || DateTime.now()).setLocale("ru").toFormat("LLLL yyyy")
    return (
        <Box padding="10px" borderBottom="1px solid grey" height="80px" sx={{backgroundColor: "white"}}>
            {shownDate}
        </Box>
    );
};

export default Header;