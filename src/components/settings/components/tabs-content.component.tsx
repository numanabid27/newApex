import React from "react";
import { Box, Typography } from "@mui/material";
import SiemAndTicketingTab from './siem-and-ticketing.component';

export default function TabsContent(props: { index: number }) {

    const { index } = props;

    switch (index) {
        case 1:
            return (
                <Box>
                    <Typography>Tab 1</Typography>
                </Box>
            )
            break;
        case 2:
            return (
                <Box>
                    <Typography>Tab 2</Typography>
                </Box>
            )
            break;
        case 3:
            return (
                <Box>
                    <Typography>Tab 3</Typography>
                </Box>
            )
            break;
        case 4:
            return (
                <Box>
                    <Typography>Tab 4</Typography>
                </Box>
            )
            break;
        case 5:
            return (
                <Box>
                    <Typography>Tab 5</Typography>
                </Box>
            )
            break;
        case 6:
            return (
                <Box>
                    <SiemAndTicketingTab />
                </Box>
            )
            break;
        case 7:
            return (
                <Box>
                    <Typography>Tab 7</Typography>
                </Box>
            )
            break;

        default:
            break;
    }

}