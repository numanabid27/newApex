"use client";

import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import { CustomLineChart } from "@/common/components/custom-line-chart/custom-line-chart.component";
import CancelIcon from "@mui/icons-material/Cancel";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import {
  Box,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
  Autocomplete,
  Tabs,
  Tab,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import ReactEcharts from "echarts-for-react";
import CustomTable from "../../common/components/custom-table/custom-table.component";
import { SESSION_USER_CHART } from "../dashboard/dashboard.constant";
import {
  ACTIVE_USER_DATA,
  ENGINE_NAMES,
  SESSION_EXPLORER_DATA,
  USER_DATA,
} from "./session-explore.constant";
import { styles } from "./session-explore.style";
import useSessionExplore from "./use-session-explore.hook";
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";
import search from "../../common/assets/images/search.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calender from "@/common/assets/images/calendar.svg";
import { useState } from "react";
import Messages from "./components/messages/messages.component";
import Sessions from "./components/sessions/sessions.component";
import Users from "./components/users/users.component";
import Files from "./components/files/files.component";
import { CustomPagination } from "@/common/components/custom-pagination/custom-pagination.component";

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

function SessionExplorer() {
  const {
    engineName,
    setEngineName,
    userName,
    handleChange,
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    dateHandler,
    finalData,
    session,
    SessionHandler,
    handleClearAll,
    setUserName,
    startDate,
    endDate,
    setDateRange,
    handleSearch,
    searchQuery,
    allOptions,
    handleAutocompleteChange,
    value
  } = useSessionExplore();

  const SESSION_EXPLORE_TABLE_HEADER = [
    { id: 1, header: "Time", accessor: "time" },
    {
      id: 2,
      header: "Engine ",
      accessor: "engineType",
      cell: (data: any) => {
        return (
          <Chip
            sx={{
              color: "#344054",
              border: "1px solid #bdbdbd",
              "&:hover": { border: "1px solid #939291" },
              height: "26px",
            }}
            label={data}
            variant="outlined"
          />
        );
      },
    },
    {
      id: 3,
      header: "Violation",
      accessor: "violation",
      cell: (data: any) => {
        return (
          <Chip
            sx={{ color: "#667085", bgcolor: "#FFFFFF !important" }}
            label={
              <>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#344054" }}
                >
                  <span style={{ fontWeight: 600 }}>{data}</span> violations
                </Typography>
              </>
            }
            icon={
              <WarningAmberIcon
                sx={{
                  color: "#F04438 !important",
                  fontSize: "15px",
                }}
              />
            }
          />
        );
      },
    },
    {
      id: 6,
      header: "Violation Category",
      accessor: "violationCat",
      cell: (data: any) => {
        return (
          <Chip
            sx={{
              border: "1px solid #bdbdbd",
              "&:hover": { border: "1px solid #939291" },
              height: "26px",
              color: "#344054",
            }}
            label={data}
            variant="outlined"
          />
        );
      },
    },
    {
      id: 7,
      header: "Mail",
      accessor: "mails",
      cell: (data: any) => {
        return (
          <Typography sx={{ color: "#1570EF", fontSize: "14px" }}>
            {data}
          </Typography>
        );
      },
    },
  ];

  return (
    <Box sx={styles.mainGrid}>
      <Tabs value={value} onChange={handleChange} aria-label="code tabs" sx={styles.tabs}>
        <Tab label="Messages" />
        <Tab label="Sessions" />
        <Tab label="Users" />
        <Tab label="Files" />
        <Tab label="Interfaces" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Messages />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sessions />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Files />
      </TabPanel>
      <TabPanel value={value} index={4}>
          <p>interfaces</p>
      </TabPanel>

    </Box>

    
  );
}

export default SessionExplorer;
