"use client";

import { CustomLineChart } from "@/common/components/custom-line-chart/custom-line-chart.component";
import CustomTopIssues from "@/common/components/custom-top-issues/custom-top-issues.component";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DataFlow from "./components/data-flow/data-flow.component";
import SessionTimeUser from "./components/session-time-user/session-time-user.component";
import WelcomeAlert from "./components/welcome-alert/welcome-alert.component";
import {
  ACTIVE_ENGINE_DATA,
  ISSUES_PER_ENGINE_DATA,
  ISSUES_BY_DEPARTMENT,
  USAGE_BY_DEPARTMENT,
  USAGE_BY_DEPARTMENT2,
  SENSITIVE_DATATYPE_CHART,
  SENSITIVE_DATATYPE_CHART2,
} from "./dashboard.constant";
import { DashboardStyles } from "./dashboard.style";
import useDashboard from "./use-dashboard.hook";
import { AllTopIssues } from "@/common/components/all-top-issues/all-top-issues.component";
import PieChart from "../issues/components/pie-chart/pie-chart.component";
import { SessionTimeStyle } from "./components/session-time-user/session-time-user.style";
import { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styles } from "@/common/styles/global.style";
import Image from "next/image";
import more from "@/common/assets/images/more_vert.svg";

function Dashboard() {
  const { welcomeAlert, setWelcomeAlert } = useDashboard();
  const [session, setSession] = useState<any>("All Models");
  const SessionHandler = (event: any) => {
    setSession(event.target.value as string);
  };
  return (
    <>
      <Grid sx={DashboardStyles.DashboardGrid}>
        {welcomeAlert && <WelcomeAlert setWelcomeAlert={setWelcomeAlert} />}
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={DashboardStyles.DashboardGrid}
        className="justify-between"
      >
        <Grid
          item
          xs={12}
          md={5.85}
          lg={3.5}
          sx={DashboardStyles.DashboardSessionMain}
          className="border border-radius bg-white"
        >
          <SessionTimeUser />
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={4.8}
          sx={DashboardStyles.IssuesEnginesGrid}
          className="border border-radius bg-white"
        >
          <Box sx={SessionTimeStyle.SessionTimeMain}>
            <Box>
              <Typography sx={styles.SessionOverTimeText}>Usage</Typography>
              <Box
                sx={{
                  ...SessionTimeStyle.SessionOverTimeBox,
                  ...SessionTimeStyle.SessionOvertimeBoxComponent,
                }}
              >
                <span style={SessionTimeStyle.Letterspacing}>35.2K</span>{" "}
                <Box>
                  <Typography sx={SessionTimeStyle.SessionTrendingValue}>
                    <TrendingUpIcon sx={SessionTimeStyle.TrendingIcon} /> 23%
                  </Typography>
                  <Typography sx={SessionTimeStyle.increaseSession}>
                    increase users
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <FormControl
                variant="standard"
                sx={SessionTimeStyle.engineOverTime}
              >
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  value={session}
                  onChange={SessionHandler}
                  className="enginDropdown"
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem
                    value="All Models"
                    sx={SessionTimeStyle.SessionText}
                  >
                    All Engines
                  </MenuItem>
                  <MenuItem value="CHAT GPT" sx={SessionTimeStyle.SessionText}>
                    CHAT GPT
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box display="flex" marginTop="7px">
            <PieChart
              chartData={SENSITIVE_DATATYPE_CHART}
              chartLabels={USAGE_BY_DEPARTMENT}
              title="Usage by departments"
              usageDepartment={true}
              lgHeight="165"
              border={true}
            />

            <PieChart
              chartData={SENSITIVE_DATATYPE_CHART2}
              chartLabels={USAGE_BY_DEPARTMENT2}
              title="Usage by departments"
              usageDepartment={true}
              lgHeight="165"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={5.85} lg={3.5}>
          <DataFlow detection={true} />
        </Grid>

        <Grid sx={DashboardStyles.TopIssuesMain} container>
          <Grid item xs={12} md={5.93}>
            <CustomTopIssues
              title="Engines Posture"
              issuesData={ACTIVE_ENGINE_DATA}
              arrowIcon={false}
              pathname="/engines/engine-detail"
              pagination={false}
            />
          </Grid>

          <Grid item xs={12} md={5.93}>
            <Grid
              container
              sx={DashboardStyles.top_rows}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Typography sx={DashboardStyles.topText}>Top Issues</Typography>
              </Grid>
              <Grid item xs={6} sx={DashboardStyles.more_row}>
                <Typography sx={DashboardStyles.topbadge}>
                  All / Posture / Runtime / FinOps
                </Typography>

                <Image src={more} alt="" onClick={() => alert("APEX")} />
              </Grid>
            </Grid>
            <AllTopIssues
              pagination={false}
              paramsFlag={true}
              hideElement={true}
              update={false}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
