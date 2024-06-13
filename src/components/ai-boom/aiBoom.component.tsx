"use client";

import loader from "@/common/assets/images/loader.svg";
import { CustomLineChart } from "@/common/components/custom-line-chart/custom-line-chart.component";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import {
  AIBOOM_TABLE_DATA,
  SESSION_EXPLORER_DATA,
  SESSION_EXPLORER_DATA2,
  AIBOOM_TABLE_BOX,
  TABS_DATA,
} from "./aiBoom.constant";
import { styles } from "./aiBoom.style";
import { File } from "./components/files/file.component";
import { Folder } from "./components/folder/folder.component";
import useAiboom from "./use-aiBoom.hook";
import TopIssuesChart from "../issues/components/top-issues-chart/top-issues-chart.component";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      sx={{ padding: "0px" }}
      container
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Grid container>{children}</Grid>}
    </Grid>
  );
}

export default function AiBoom() {
  const {
    handleChange,
    value,
    isDetail,
    handleClick,
    isLoading,
    hoveredIndex,
    isClicked,
    setHoveredIndex,
    setIsClicked,
    repo,
    isColor,
    nestTableData,
  } = useAiboom();
  return (
    <Box sx={styles.mainGrid}>
      {/* tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="code tabs"
        sx={styles.tabs}
      >
        <Tab label="Box" />
        <Tab label="Github Copilot" />
        <Tab label="Sharepoint" />
        <Tab label="Notion" />
      </Tabs>

      {/* graphs */}
      <Grid container gap="10px" justifyContent="space-between">
        <Grid
          xs={12}
          md={3.9}
          className="border border-radius bg-white"
          sx={styles.aiEngine}
        >
          <CustomLineChart
            title={
              <>
                <Box display="flex" alignItems="center" gap="5px">
                  <Typography
                    sx={{
                      fontSize: { lg: "42px", sm: "30px" },
                      fontWeight: 600,
                    }}
                  >
                    45%
                  </Typography>{" "}
                  of total code written with Copilot
                </Box>
              </>
            }
            chartData={SESSION_EXPLORER_DATA}
            aiBoom={true}
          />
        </Grid>
        <Grid
          xs={12}
          md={3.9}
          sx={styles.aiEngine}
          className="border border-radius bg-white"
        >
          <CustomLineChart
            title={
              <Box display="flex" alignItems="center" gap="5px">
                <Typography
                  sx={{ fontSize: { lg: "42px", sm: "30px" }, fontWeight: 600 }}
                >
                  65%
                </Typography>{" "}
                of code written in copilot over last month
              </Box>
            }
            chartData={SESSION_EXPLORER_DATA2}
            aiBoom={true}
          />
        </Grid>
        <Grid
          xs={12}
          md={3.9}
          sx={styles.aiEngine}
          className="border border-radius bg-white"
        >
          <TopIssuesChart aiBoom={true} />
        </Grid>
      </Grid>

      {/* tabs content */}
      {/* {
        TABS_DATA.map((items:any, i:any)=>{
          return(
            <TabPanel value={value} index={items.indexes}  key={i.toString()}>
              <Box display="flex" alignItems="center" mt={6} mb={2} gap="7px">
                <Typography sx={styles. font_700}>Repo Name</Typography>
                <Typography sx={styles.repo}>|</Typography>
                <Typography sx={[styles.repo, styles.font_700]}>Branch: <span>Master</span></Typography>
              </Box>
              <AiTableListening />
            </TabPanel>
          )
        })
      } */}
      <TabPanel value={value} index={0}>
        <Box display="flex" alignItems="center" mt={6} mb={2} gap="7px">
          <Typography sx={styles.font_700}>Repo Name</Typography>
          <Typography sx={styles.repo}>|</Typography>
          <Typography sx={[styles.repo, styles.font_700]}>
            Branch: <span>Master</span>
          </Typography>
        </Box>
        <AiBox
          isDetail={isDetail}
          handleClick={handleClick}
          isLoading={isLoading}
          hoveredIndex={hoveredIndex}
          isClicked={isClicked}
          setHoveredIndex={setHoveredIndex}
          setIsClicked={setIsClicked}
          repo={repo}
          isColor={isColor}
          nestTableData={nestTableData}
        />
        {/* {tableData(AIBOOM_TABLE_BOX)} */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box display="flex" alignItems="center" mt={6} mb={2} gap="7px">
          <Typography sx={styles.font_700}>Repo Name</Typography>
          <Typography sx={styles.repo}>|</Typography>
          <Typography sx={[styles.repo, styles.font_700]}>
            Branch: <span>Master</span>
          </Typography>
        </Box>
        <AiTableListening
          isDetail={isDetail}
          handleClick={handleClick}
          isLoading={isLoading}
          hoveredIndex={hoveredIndex}
          isClicked={isClicked}
          setHoveredIndex={setHoveredIndex}
          setIsClicked={setIsClicked}
          repo={repo}
          isColor={isColor}
          nestTableData={nestTableData}
        />
        {/* {tableData(AIBOOM_TABLE_DATA)} */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box display="flex" alignItems="center" mt={6} mb={2} gap="7px">
          <Typography sx={styles.font_700}>Repo Name</Typography>
          <Typography sx={styles.repo}>|</Typography>
          <Typography sx={[styles.repo, styles.font_700]}>
            Branch: <span>Master</span>
          </Typography>
        </Box>
        <AiBox />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box display="flex" alignItems="center" mt={6} mb={2} gap="7px">
          <Typography sx={styles.font_700}>Repo Name</Typography>
          <Typography sx={styles.repo}>|</Typography>
          <Typography sx={[styles.repo, styles.font_700]}>
            Branch: <span>Master</span>
          </Typography>
        </Box>
        <AiTableListening />
      </TabPanel>
    </Box>
  );
}

// BOX
export const AiBox = ({
  isDetail,
  handleClick,
  isLoading,
  hoveredIndex,
  isClicked,
  setHoveredIndex,
  setIsClicked,
  repo,
  isColor,
  nestTableData,
}: any) => {

  return (
    <Grid container gap="10px" mt={4} justifyContent="space-between">
      <Grid xs={12} lg={7.5}>
        <Folder
          data={nestTableData}
          handleClick={handleClick}
          isColor={isColor}
        />
      </Grid>
      <Grid xs={12} lg={4.3}>
        {isLoading ? (
          <Image
            src={loader}
            alt="loader"
            width={100}
            height={100}
            style={{ margin: "0 auto", display: "block" }}
          />
        ) : (
          <File
            isDetail={isDetail}
            hoveredIndex={hoveredIndex}
            isClicked={isClicked}
            setHoveredIndex={setHoveredIndex}
            setIsClicked={setIsClicked}
            repo={repo}
          />
        )}
      </Grid>
    </Grid>
  );
};

// GITHUB
export const AiTableListening = ({
  isDetail,
  handleClick,
  isLoading,
  hoveredIndex,
  isClicked,
  setHoveredIndex,
  setIsClicked,
  repo,
  isColor,
  nestTableData,
}: any) => {
  return (
    <Grid container gap="10px" mt={4} justifyContent="space-between">
      <Grid xs={12} lg={7.5}>
        <Folder
          data={nestTableData}
          handleClick={handleClick}
          isColor={isColor}
        />
      </Grid>
      <Grid xs={12} lg={4.3}>
        {isLoading ? (
          <Image
            src={loader}
            alt="loader"
            width={100}
            height={100}
            style={{ margin: "0 auto", display: "block" }}
          />
        ) : (
          <File
            isDetail={isDetail}
            hoveredIndex={hoveredIndex}
            isClicked={isClicked}
            setHoveredIndex={setHoveredIndex}
            setIsClicked={setIsClicked}
            repo={repo}
          />
        )}
      </Grid>
    </Grid>
  );
};


