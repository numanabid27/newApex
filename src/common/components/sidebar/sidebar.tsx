import { Box, Grid, List,Link, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { SidebarStyle } from "./sidebar.style";
import generalIcon from '@/common/assets/images/generals.svg';
import contactIcon from '@/common/assets/images/contact.svg';
import sparklesIcon from '@/common/assets/images/sparkles.svg';
import unplugIcon from '@/common/assets/images/unplug.svg';
import databaseIcon from '@/common/assets/images/database-zap.svg';
import bellIcon from '@/common/assets/images/bell-dot.svg';
import Image from "next/image";

const Sidebar = () => {

    const sidebarLinks = [
        {
            icon: generalIcon,
            url: "#",
            text: "General"
        },
        {
            icon: contactIcon,
            url: "#",
            text: "Users & Groups"
        },
        {
            icon: sparklesIcon,
            url: "#",
            text: "Engines"
        },
        {
            icon: unplugIcon,
            url: "#",
            text: "Integrations"
        },
        {
            icon: databaseIcon,
            url: "#",
            text: "Data management"
        },
        {
            icon: bellIcon,
            url: "#",
            text: "Notifications"
        },


    ];
    return (
        <Box
            sx={SidebarStyle.SidebarWraper}>

            <Typography
                variant="h2"
                sx={SidebarStyle.Heading}
            >
                Settings
            </Typography>
            <List>
                {sidebarLinks.map((item) => (
                    <ListItem disablePadding>
                        <Link sx={SidebarStyle.TabItem} href={item.url}>
                            <Grid container alignItems="center">
                                <Grid item xs={2}>
                                    <ListItemIcon>
                                        <Image src={item.icon} alt="Icon" width={20} height={20} />
                                    </ListItemIcon>
                                </Grid>
                                <Grid item xs={10}>
                                    <ListItemText sx={SidebarStyle.ItemText} primary={item.text} />
                                </Grid>
                            </Grid>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Sidebar;