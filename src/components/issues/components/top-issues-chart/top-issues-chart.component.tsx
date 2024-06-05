"use client";

import TrendingDownIcon from "@/common/assets/images/trending_down.svg";
import Colors from "@/common/constants/color.constant";
import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import Image from "next/image";
import { TOTAL_ISSUES_CHART } from "../../issues.constant";
import { TopIssuesStyling } from "./top-issue.style";
import CircleIcon from "@mui/icons-material/Circle";
import { AIBOOM_CHART } from "@/components/ai-boom/aiBoom.constant";
import trending from "@/common/assets/images/trendingup.svg";
import currentRate from "@/common/assets/images/current-stock.svg";

function TopIssuesChart({ aiBoom }: any) {
  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={aiBoom ? TopIssuesStyling.TopGridMian1 : TopIssuesStyling.TopGridMian}
      className={aiBoom ? "border-radius" : ""}
    >
      {aiBoom && aiBoom ? (
        <>
          <Typography
            sx={{
              ...TopIssuesStyling.TopHeaderStyling,
              padding: "15px 0px 0px 0px",
            }}
          >
            Amount of code lines written by copilot trend
          </Typography>
          <Grid container className="d-flex">
            <Grid item xl={12} lg={12} md={12} xs={12} textAlign="center">
              <Box
                sx={{ mt: { md: 2, xs: 0 } }}
                display="flex"
                alignItems="center"
                gap="5px"
              >
                <Typography sx={TopIssuesStyling.TopTrendingPercentage2}>
                  <span>
                    <Image
                      src={trending}
                      alt="trending-icon"
                      style={{
                        marginRight: "5px",
                        transform: "translateY(4px)",
                      }}
                    />
                    15.54%
                  </span>
                </Typography>
                <Typography sx={TopIssuesStyling.TopTrendingWeek2}>
                  Since last week
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={12} lg={12} md={12} xs={12}>
              <Box
                sx={
                 
                  TopIssuesStyling.TopIssuesChart2
                }
              >
                <ReactEcharts option={AIBOOM_CHART} />
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Box display="flex" alignItems="center" flexDirection={{sm:'row', xs:'column'}} justifyContent="center" gap="18px">
            <Typography sx={TopIssuesStyling.headerText}>
              Unresolved issues
            </Typography>
            <Box sx={TopIssuesStyling.borders}>
              <Typography sx={TopIssuesStyling.TopIssueTrending}>95</Typography>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Typography sx={TopIssuesStyling.TopTrendingPercentage}>
                  <Image
                    src={currentRate}
                    alt="trending-icon"
                    style={{ marginRight: "5px" }}
                  />
                  90.54%
                </Typography>
                <Typography sx={TopIssuesStyling.TopTrendingWeek}>
                  Since last week
                </Typography>
              </Box>
            </Box>

            <IconButton sx={TopIssuesStyling.iconBtn}>
              <Chip
                label={<Typography sx={TopIssuesStyling.chip}><span>10</span>Critical</Typography>}
                sx={{
                  ...TopIssuesStyling.severityChip,
                  color:"#B42318",
                  bgcolor: "#FEF3F2",
                  p: 0,
                }}
                icon={
                  <CircleIcon
                    sx={{
                      fill:"#F04438",

                      ...TopIssuesStyling.severityLevel,
                    }}
                  />
                }
              />
          </IconButton>

          </Box>

          <Box sx={TopIssuesStyling.TopIssuesChart}>
            <ReactEcharts option={TOTAL_ISSUES_CHART} />
          </Box>
        </>
      )}
    </Grid>
  );
}

export default TopIssuesChart;
