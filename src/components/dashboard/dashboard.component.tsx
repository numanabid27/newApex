"use client";

import { CustomLineChart } from "@/common/components/custom-line-chart/custom-line-chart.component";
import CustomTopIssues from "@/common/components/custom-top-issues/custom-top-issues.component";
import { Grid } from "@mui/material";
import DataFlow from "./components/data-flow/data-flow.component";
import SessionTimeUser from "./components/session-time-user/session-time-user.component";
import WelcomeAlert from "./components/welcome-alert/welcome-alert.component";
import {
  ACTIVE_ENGINE_DATA,
  ISSUES_PER_ENGINE_DATA,
  ISSUES_BY_DEPARTMENT,
  USAGE_BY_DEPARTMENT,
  SENSITIVE_DATATYPE_CHART,
} from "./dashboard.constant";
import { DashboardStyles } from "./dashboard.style";
import useDashboard from "./use-dashboard.hook";
import { AllTopIssues } from "@/common/components/all-top-issues/all-top-issues.component";
import PieChart from "../issues/components/pie-chart/pie-chart.component";

function Dashboard() {
  const { welcomeAlert, setWelcomeAlert } = useDashboard();

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
          lg={3.88}
          sx={DashboardStyles.DashboardSessionMain}
          className="border border-radius bg-white"
        >
          <SessionTimeUser />
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={3.88}
          sx={DashboardStyles.IssuesEnginesGrid}
          className="border border-radius bg-white"
        >
          <PieChart
            chartData={SENSITIVE_DATATYPE_CHART}
            chartLabels={USAGE_BY_DEPARTMENT}
            title="Usage by departments"
            usageDepartment={true}
            lgHeight="165"
          />
        </Grid>
        <Grid item xs={12} md={5.85} lg={3.88}>
          <DataFlow />
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={5.92}
          sx={{...DashboardStyles.IssuesEnginesGrid , paddingTop:"8px"}}
          className="border border-radius bg-white"
        >
          <CustomLineChart
            title="Issues per Engine"
            chartData={ISSUES_PER_ENGINE_DATA}
            issuesEngine={true}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={5.92}
          sx={DashboardStyles.IssuesEnginesGrid}
          className="border border-radius bg-white"
        >
          <CustomLineChart
            title="Issues by Department"
            chartData={ISSUES_BY_DEPARTMENT}
            dropdown={true}
            issuesEngine={true}
          />
        </Grid>
        <Grid sx={DashboardStyles.TopIssuesMain} container>
          <Grid
            item
            xs={12}
            md={5.93}
          >
            <CustomTopIssues
              title="Engines Overview"
              issuesData={ACTIVE_ENGINE_DATA}
              arrowIcon={false}
              pathname="/engines/engine-detail"
              pagination={false}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={5.93}
            sx={DashboardStyles.EngineManageMain}
            className="border border-radius"
          >
            <AllTopIssues pagination={false} paramsFlag={true} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
