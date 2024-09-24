"use client"

import Sidebar from "@/common/components/sidebar/sidebar";
import { Box, Grid, Typography } from "@mui/material";
import Severity from "../create-policy/component/severityLevel/severty.component";
import downArrow from "@/common/assets/images/downs.svg";
import { STATUS, TYPE } from "./settings.constant";
import { SettingsStyle } from "./settings.style";
import AccessibleTabs from "./components/tabs.component";

const SettingsView = () => {
    return (
        <Grid container>
            <Grid item>
                <Sidebar />
            </Grid>
            <Grid item sx={SettingsStyle.ContentWrapper}>
                <Box>
                    <Typography
                        variant="h1"
                        sx={SettingsStyle.MainHeading}>
                        Integrations
                    </Typography>

                    <Grid
                        container
                        sx={SettingsStyle.SelectorWraper}>
                        <Grid item>
                            <Severity
                                title="Type"
                                img={downArrow}
                                severity={TYPE}
                                ltr={true}
                            />
                        </Grid>
                        <Grid item ml={3}>
                            <Severity
                                title="Status"
                                img={downArrow}
                                severity={STATUS}
                                ltr={true}
                            />
                        </Grid>
                    </Grid>

                    <AccessibleTabs />
                </Box>
            </Grid>
        </Grid>
    );
}

export default SettingsView;