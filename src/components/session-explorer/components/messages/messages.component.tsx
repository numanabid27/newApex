import calender from "@/common/assets/images/calendar.svg";
import flag from "@/common/assets/images/flag.svg";
import search from "@/common/assets/images/search.svg";
import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import ReactEcharts from "echarts-for-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ENGINE_NAMES,
  INTERFACE_NAME,
  STATUS,
  TOPICS,
  USER_DATA,
} from "../../session-explore.constant";
import {
  SESSION_USER_CHART,
  SEVERITY,
  USER_1,
  USER_2,
  USER_3,
  EQUALS,
} from "./message.constant";
import { styles } from "./messages.style";
import useSessions from "./use-message.hook";
import Severity from "@/components/create-policy/component/severityLevel/severty.component";
import downArrow from "@/common/assets/images/downs.svg";
import equal from "@/common/assets/images/equal.svg";
import check from "@/common/assets/images/check.svg";
import { Toggle } from "./toggle/togle.component";
import add from "@/common/assets/images/add-query.svg"
import MultiSelect from "@/components/create-policy/component/multiselect/Mutiselect.component";
import ClearIcon from '@mui/icons-material/Clear';
import del from "@/common/assets/images/delete.svg";
import filter from "@/common/assets/images/more-filters.svg";

export default function Message() {
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
    value,
    setIsInterface,
    isInterface,
    isStatus,
    setIsStatus,
    setTopicName,
    topicName,
    isBuilder,
    setIsBuilder,
  } = useSessions();

  const SESSION_EXPLORE_TABLE_HEADER = [
    {
      id: 1,
      header: "Flagged",
      accessor: "time",
      cell: (data: any) => {
        return <Image src={flag} alt="" width={20} height={20} />;
      },
    },
    {
      id: 2,
      header: "Title",
      accessor: "title",
    },
    {
      id: 3,
      header: "User",
      accessor: "mails",
      cell: (data: any) => {
        return <Typography sx={{ color: "#2E90FA" }}>{data}</Typography>;
      },
    },
    {
      id: 4,
      header: "Last updated",
      accessor: "lastUpdate",
    },
    {
      id: 7,
      header: "Interface",
      accessor: "interface",
    },
    {
      id: 8,
      header: "Engine",
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
    { id: 9, header: "Context", accessor: "context" },
    {
      id: 10,
      header: "Topics",
      accessor: "topics",
      cell: (data: any) => {
        return (
          <Box display="flex" gap="12px">
            {data?.map((item: any, i:number) => {
              return (
                <Chip
                  key={i.toString()}
                  sx={{
                    color: "#1849A9",
                    background: "#D1E9FF",
                    height: "26px",
                    borderRadius: "16px",
                    fontSize: "11.59px",
                    fontWeight: 700,
                    border: "unset",
                  }}
                  label={item}
                  variant="outlined"
                />
              );
            })}
            {/* <Chip
              sx={{
                color: "#1849A9",
                background: "#D1E9FF",
                height: "26px",
                borderRadius: "16px",
                fontSize: "11.59px",
                fontWeight: 700,
                border: "unset",
              }}
              label={data[1]}
              variant="outlined"
            />
            <Chip
              sx={{
                color: "#1849A9",
                background: "#D1E9FF",
                height: "26px",
                borderRadius: "16px",
                fontSize: "11.59px",
                fontWeight: 700,
                border: "unset",
              }}
              label={data[2]}
              variant="outlined"
            />
            <Chip
              sx={{
                color: "#1849A9",
                background: "#D1E9FF",
                height: "26px",
                borderRadius: "16px",
                fontSize: "11.59px",
                fontWeight: 700,
                border: "unset",
              }}
              label={data[3]}
              variant="outlined"
            /> */}
          </Box>
        );
      },
    },
    { id: 11, header: "Session ID", accessor: "sessionId" },
    { id: 12, header: "Status", accessor: "active" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [selectDrawerValue, setSelectedDrawerValue] = useState();

  const totalPages = Math.ceil(finalData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToDisplay = finalData.slice(startIndex, endIndex);

  useEffect(() => {
    if (selectedRow?.id) {
      const res = finalData.find((item: any) => item.id === selectedRow?.id);
      setSelectedDrawerValue(res);
    } else {
      setSelectedDrawerValue(undefined);
    }
  }, [selectedRow, selectDrawerValue]);

  // const options = {
  //   tooltip: {
  //     trigger: 'item',
  //     triggerOn: 'mousemove',
  //   },
    
  //   series: [
  //     {
  //       type: 'sankey',
  //       layout: 'none',
  //       nodeAlign: 'left',
  //       data: [
  //         { name: 'Total prompts', itemStyle: { color: '#037C49' } },
  //         { name: 'R&D', itemStyle: { color: '#2BB877' } },
  //         { name: 'Marketing', itemStyle: { color: '#6CE9A6' } },
  //         { name: 'Code', itemStyle: { color: '#6CE9A6' } },
  //         { name: 'Email', itemStyle: { color: '#039855' } },
  //         { name: 'Legal', itemStyle: { color: '#05603A' } },
  //         { name: 'Positive', itemStyle: { color: '#037C49' } },
  //         { name: 'Negative', itemStyle: { color: '#A6F4C5' } },
  //       ],
  //       links: [
  //         {
  //           source: 'Total prompts',
  //           target: 'R&D',
  //           value: 500,
  //           lineStyle: {
  //             color: {
  //               type: 'linear',
  //               x: 0,
  //               y: 0,
  //               x2: 1,
  //               y2: 0,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: '#027A48', 
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#6CE9A6', 
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         {
  //           source: 'Total prompts',
  //           target: 'Marketing',
  //           value: 500,
  //           lineStyle: {
  //             color: {
  //               type: 'linear',
  //               x: 0,
  //               y: 0,
  //               x2: 1,
  //               y2: 0,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: '#027A48', 
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#6CE9A6', 
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         {
  //           source: 'R&D',
  //           target: 'Code',
  //           value: 400,
  //           lineStyle: {
  //             color: {
  //               type: 'linear',
  //               x: 0,
  //               y: 0,
  //               x2: 1,
  //               y2: 0,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: '#2BB877',
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#6CE9A6',
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         {
  //           source: 'R&D',
  //           target: 'Email',
  //           value: 200,
  //           lineStyle: {
  //             color: {
  //               type: 'linear',
  //               x: 0,
  //               y: 0,
  //               x2: 1,
  //               y2: 0,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: '#2BB877',
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#039855',
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         {
  //           source: 'Marketing',
  //           target: 'Legal',
  //           value: 200,
  //           lineStyle: {
  //             color: {
  //               type: 'linear',
  //               x: 0,
  //               y: 0,
  //               x2: 1,
  //               y2: 0,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: '#6CE9A6',
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#05603A',
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         {
  //           source: 'Code',
  //           target: 'Positive',
  //           value: 900,
  //           lineStyle: {
  //             color: {
  //               type: 'linear',
  //               x: 0,
  //               y: 0,
  //               x2: 1,
  //               y2: 0,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: '#6CE9A6',
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#037C49',
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         {
  //           source: 'Email',
  //           target: 'Positive',
  //           value: 400,
  //           lineStyle: {
  //             color: {
  //               type: 'linear',
  //               x: 0,
  //               y: 0,
  //               x2: 1,
  //               y2: 0,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: '#039855',
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#037C49',
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         {
  //           source: 'Legal',
  //           target: 'Negative',
  //           value: 350,
  //           lineStyle: {
  //             color: {
  //               type: 'linear',
  //               x: 0,
  //               y: 0,
  //               x2: 1,
  //               y2: 0,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: '#05603A',
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#A6F4C5',
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         {
  //           source: 'R&D',
  //           target: 'Legal',
  //           value: 350,
  //           lineStyle: {
  //             color: {
  //               type: 'linear',
  //               x: 0,
  //               y: 0,
  //               x2: 1,
  //               y2: 0,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: '#05603A',
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#A6F4C5',
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //       ],
  //       lineStyle: {
  //         color: 'gradient',
  //         curveness: 0.5,
  //       },
  //       itemStyle: {
  //         borderWidth: 1,
  //       },
  //       label: {
  //         show: true,
  //         color: '#000',
  //         position: 'right',
  //         fontSize: 12,
  //       },
  //       nodeWidth: 20,  
  //       nodeGap: 25,  
  //     },
     
  //   ],
  // };

const a = [];
  
// const options = {
//     tooltip: {
//         trigger: 'item',
//         triggerOn: 'mousemove',
//     },
//     series: [
//         {
//             type: 'sankey',
//             layout: 'none',
//             nodeAlign: 'left',
//             data: [
//                 { name: 'ChatGPT', itemStyle: { color: '#037C49' }, emphasis: { itemStyle: { color: '#037C49' } } },
//                 { name: 'Github Copilot', itemStyle: { color: '#037C49' }, emphasis: { itemStyle: { color: '#037C49' } } },
//                 { name: 'Google Gemini', itemStyle: { color: '#037C49' }, emphasis: { itemStyle: { color: '#037C49' } } },
//                 { name: 'Strategy', itemStyle: { color: '#037C49' }, emphasis: { itemStyle: { color: '#037C49' } } },
//                 { name: 'Revenue', itemStyle: { color: '#037C49' }, emphasis: { itemStyle: { color: '#037C49' } } },
//                 { name: 'Legal', itemStyle: { color: '#037C49' }, emphasis: { itemStyle: { color: '#037C49' } } },
//                 { name: 'Healthcare', itemStyle: { color: '#037C49' }, emphasis: { itemStyle: { color: '#037C49' } } },
//                 { name: 'Positive', itemStyle: { color: '#037C49' }, emphasis: { itemStyle: { color: '#037C49' } } },
//                 { name: 'Negative', itemStyle: { color: '#A6F4C5' }, emphasis: { itemStyle: { color: '#A6F4C5' } } },
//             ],
//             links: [
//                 { source: 'ChatGPT', target: 'Strategy', value: 1000, lineStyle: { color: '#027A48', emphasis: { lineStyle: { color: '#027A48' } } } },
//                 { source: 'ChatGPT', target: 'Legal', value: 1000, lineStyle: { color: '#2BB877', emphasis: { lineStyle: { color: '#2BB877' } } } },
//                 { source: 'ChatGPT', target: 'Revenue', value: 1000, lineStyle: { color: '#2BB877', emphasis: { lineStyle: { color: '#2BB877' } } } },
//                 { source: 'Github Copilot', target: 'Revenue', value: 1000, lineStyle: { color: '#2BB877', emphasis: { lineStyle: { color: '#2BB877' } } } },
//                 { source: 'Google Gemini', target: 'Healthcare', value: 1000, lineStyle: { color: '#2BB877', emphasis: { lineStyle: { color: '#2BB877' } } } },
//                 { source: 'Strategy', target: 'Positive', value: 1000, lineStyle: { color: '#037C49', emphasis: { lineStyle: { color: '#037C49' } } } },
//                 { source: 'Revenue', target: 'Positive', value: 1000, lineStyle: { color: '#037C49', emphasis: { lineStyle: { color: '#037C49' } } } },
//                 { source: 'Legal', target: 'Negative', value: 1000, lineStyle: { color: '#A6F4C5', emphasis: { lineStyle: { color: '#A6F4C5' } } } },
//                 { source: 'Healthcare', target: 'Positive', value: 650, lineStyle: { color: '#037C49', emphasis: { lineStyle: { color: '#037C49' } } } },
//                 { source: 'Healthcare', target: 'Negative', value: 350, lineStyle: { color: '#A6F4C5', emphasis: { lineStyle: { color: '#A6F4C5' } } } },
//             ],
//             lineStyle: {
//                 color: 'gradient',
//                 curveness: 0.5,
//             },
//             itemStyle: {
//                 borderWidth: 1,
//             },
//             label: {
//                 show: true,
//                 color: '#000',
//                 position: 'right',
//                 fontSize: 12,
//             },
//             nodeWidth: 20,
//             nodeGap: 25,
//             layoutIterations: 2,
//         },
//     ],
// };


const options = {
  tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
  },
  series: [
      {
          type: 'sankey',
          layout: 'none',
          nodeAlign: 'left',
          data: [
              { name: 'ChatGPT 2,000', itemStyle: { color: '#039855' }, emphasis: { itemStyle: { color: '#039855' } } },
              { name: 'Github Copilot 2,000', itemStyle: { color: '#039855' }, emphasis: { itemStyle: { color: '#039855' } } },
              { name: 'Google Gemini 2,000', itemStyle: { color: '#039855' }, emphasis: { itemStyle: { color: '#039855' } } },
              { name: 'Strategy 1,000', itemStyle: { color: '#039855' }, emphasis: { itemStyle: { color: '#039855' } } },
              { name: 'Revenue 1,000', itemStyle: { color: '#039855' }, emphasis: { itemStyle: { color: '#039855' } } },
              { name: 'Legal 1,000', itemStyle: { color: '#039855' }, emphasis: { itemStyle: { color: '#039855' } } },
              { name: 'Healthcare 1,000', itemStyle: { color: '#039855' }, emphasis: { itemStyle: { color: '#039855' } } },
              { name: 'Positive 1,650', itemStyle: { color: '#039855' }, emphasis: { itemStyle: { color: '#039855' } } },
              { name: 'Negative 350', itemStyle: { color: '#A6F4C5' }, emphasis: { itemStyle: { color: '#A6F4C5' } } },
          ],
          links: [
              { source: 'ChatGPT 2,000', target: 'Strategy 1,000', value: 1000, lineStyle: { color: '#039855', emphasis: { lineStyle: { color: '#039855' } } } },
              { source: 'ChatGPT 2,000', target: 'Legal 1,000', value: 1000, lineStyle: { color: '#039855', emphasis: { lineStyle: { color: '#039855' } } } },
              { source: 'ChatGPT 2,000', target: 'Revenue 1,000', value: 1000, lineStyle: { color: '#039855', emphasis: { lineStyle: { color: '#039855' } } } },
              { source: 'Github Copilot 2,000', target: 'Revenue 1,000', value: 1000, lineStyle: { color: '#039855', emphasis: { lineStyle: { color: '#039855' } } } },
              { source: 'Google Gemini 2,000', target: 'Healthcare 1,000', value: 1000, lineStyle: { color: '#039855', emphasis: { lineStyle: { color: '#039855' } } } },
              { source: 'Strategy 1,000', target: 'Positive 1,650', value: 1000, lineStyle: { color: '#039855', emphasis: { lineStyle: { color: '#039855' } } } },
              { source: 'Revenue 1,000', target: 'Positive 1,650', value: 1000, lineStyle: { color: '#039855', emphasis: { lineStyle: { color: '#039855' } } } },
              { source: 'Legal 1,000', target: 'Negative 350', value: 1000, lineStyle: { color: '#A6F4C5', emphasis: { lineStyle: { color: '#A6F4C5' } } } },
              { source: 'Healthcare 1,000', target: 'Positive 1,650', value: 650, lineStyle: { color: '#039855', emphasis: { lineStyle: { color: '#039855' } } } },
              { source: 'Healthcare 1,000', target: 'Negative 350', value: 350, lineStyle: { color: '#A6F4C5', emphasis: { lineStyle: { color: '#A6F4C5' } } } },
          ],
          lineStyle: {
              color: 'gradient',
              curveness: 0.5,
          },
          itemStyle: {
              borderWidth: 1,
          },
          label: {
              show: true,
              color: '#000',
              backgroundColor: '#fff',
              borderRadius: 2,
              padding: 3,
              position: 'insideRight',
              fontSize: 12,
          },
          nodeWidth: 20,
          nodeGap: 25,
          layoutIterations: 2,
      },
  ],
};


 
  
  return (
    <Box position="relative" width="100%">
      {/*query builder  */}
      <Box sx={styles.queryBuilder}>
        <Button
          onClick={() => setIsBuilder(true)}
          sx={styles.queryBuilderButton}
        >
          Query Builder
        </Button>
        {isBuilder && (
          <Box sx={styles.queryBuilderSec}>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={styles.header}
            >
              <Typography variant="h6">Query builder</Typography>
              <ClearIcon onClick={() => setIsBuilder(false)} />
            </Box>
            <Box display="flex" gap="10px" sx={styles.filterRow}>
              <Severity
                title="Select Department"
                img={downArrow}
                severity={SEVERITY}
                ltr={true}
              />
              <Severity
                title="Equals"
                img={equal}
                severity={EQUALS}
                ltr={false}
              />
              <MultiSelect />
            </Box>

            <Box sx={styles.filterRow}>
              <Toggle />
            </Box>
            <Box sx={styles.filterRow} display="flex" gap="10px" justifyContent="space-between" alignItems="center">
              <Box display="flex" gap="10px">
                <Severity
                  title="Topic"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                />
                <Severity
                  title="Contains"
                  img={check}
                  severity={SEVERITY}
                  ltr={false}
                />
                <Severity
                  title="Marketing"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                />
              </Box>
              <Box display="flex" gap="7px" sx={styles.delBtns}>
                <ClearIcon />
                <Image src={del} alt="" width={20} height={20} />
              </Box>
            </Box>

            <Box sx={styles.filterRow}>
              <Toggle />
            </Box>

            <Box sx={styles.filterRow} display="flex" gap="10px" justifyContent="space-between" alignItems="center">
              <Box display="flex" gap="10px">
                <Severity
                  title="Sentiment"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                />
                <Severity
                  title="Equals"
                  img={equal}
                  severity={EQUALS}
                  ltr={false}
                />
                <Severity
                  title="Any"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                />
              </Box>
              <Box display="flex" gap="7px" sx={styles.delBtns}>
                <ClearIcon />
                <Image src={del} alt="" width={20} height={20} />
              </Box>

             
            </Box>

            <Grid container pt={3} pb={3} alignItems="center">
              <Grid xs={3}>
                <Image src={add} alt="" width={40} height={40} style={{cursor:"pointer"}} />
              </Grid>
              <Grid xs={9} display="flex" gap="10px" justifyContent="flex-end" sx={styles.actionSubmit}>
                <Button>Create detection rule</Button>
                <Button>Run query</Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
      {/* graphs */}
      <Grid container justifyContent="space-between">
        <Grid
          item
          xs={12}
          md={5.85}
          lg={7.5}
          className="border border-radius bg-white engine-usage"
          sx={styles.GridShadow}
        >
          <Box className="sessionEchart" sx={styles.sessionUser}>
            <ReactEcharts option={options} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={4.3}
          sx={styles.SessionEngine}
          className="border border-radius bg-white"
        >
          <Typography variant="h5" mb={4}>
            Top 5 Weekly Active Users
          </Typography>
          <Grid container sx={styles.activeUser}>
            <Grid xl={8} xs={7}>
              <Typography>John White</Typography>
            </Grid>
            <Grid xl={4} xs={5}>
              <Box sx={styles.user1}>
                <Typography>2K</Typography>
                <ReactEcharts option={USER_1} />
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={styles.activeUser}>
            <Grid xl={8} xs={7}>
              <Typography>George Mayer</Typography>
            </Grid>
            <Grid xl={4} xs={5}>
              <Box sx={styles.user1}>
                <Typography>1.6K</Typography>
                <ReactEcharts option={USER_2} />
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={styles.activeUser}>
            <Grid xl={8} xs={7}>
              <Typography>Cindy Sherman</Typography>
            </Grid>
            <Grid xl={4} xs={5}>
              <Box sx={styles.user1}>
                <Typography>1.1K</Typography>
                <ReactEcharts option={USER_1} />
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={styles.activeUser}>
            <Grid xl={8} xs={7}>
              <Typography>Barbara Kruger</Typography>
            </Grid>
            <Grid xl={4} xs={5}>
              <Box sx={styles.user1}>
                <Typography>0.9K</Typography>
                <ReactEcharts option={USER_2} />
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={styles.activeUser}>
            <Grid xl={8} xs={7}>
              <Typography>Michael Black</Typography>
            </Grid>
            <Grid xl={4} xs={5}>
              <Box sx={styles.user1}>
                <Typography>0.8K</Typography>
                <ReactEcharts option={USER_3} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* search */}
      
      {/* filters */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={styles.session_filters}
      >
        <Grid item sm={2} xs={12} sx={styles.engineFilter}>
          <FormControl fullWidth sx={styles.userFormControl}>
            <InputLabel id="demo-simple-select-label-2" sx={styles.userText}>
              Interface
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={isInterface}
              label="Interface"
              onChange={(event) => {
                setIsInterface(event.target.value as string);
              }}
              renderValue={() => isInterface}
            >
              {INTERFACE_NAME.map((item: any) => (
                <MenuItem value={item.name} sx={styles.enginItem} key={item.id}>
                  {item.name}
                  {isInterface === item.name && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setIsInterface("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2} xs={12} sx={styles.datePicker} className="dateRange">
          <Image src={calender} alt="" />
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update: any) => {
              setDateRange(update);
            }}
            placeholderText="Last updated"
            isClearable={true}
          />
        </Grid>
        <Grid item sm={2} xs={12} sx={styles.engineFilter}>
          <FormControl sx={styles.formControl}>
            <InputLabel sx={styles.engine}>Engine</InputLabel>
            <Select
              sx={styles.sessionEngineFilter}
              multiple
              value={engineName}
              onChange={(e: any) => setEngineName(e.target.value)}
              input={<OutlinedInput label="Engine" />}
              renderValue={(selected) => (
                <Stack gap={1} direction="row" flexWrap="wrap">
                  {selected.map((value: any) => (
                    <Chip
                      sx={styles.chip}
                      key={value}
                      label={value}
                      onDelete={() =>
                        setEngineName(
                          engineName.filter((item: any) => item !== value)
                        )
                      }
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                    />
                  ))}
                </Stack>
              )}
            >
              {ENGINE_NAMES.map((item: any) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={2} xs={12} sx={styles.engineFilter}>
          <FormControl sx={styles.formControl}>
            <InputLabel sx={styles.engine}>Topics</InputLabel>
            <Select
              sx={styles.sessionEngineFilter}
              multiple
              value={topicName}
              onChange={(e: any) => setTopicName(e.target.value)}
              input={<OutlinedInput label="Topics" />}
              renderValue={(selected) => (
                <Stack gap={1} direction="row" flexWrap="wrap">
                  {selected.map((value: any) => (
                    <Chip
                      sx={styles.chip}
                      key={value}
                      label={value}
                      onDelete={() =>
                        setTopicName(
                          topicName.filter((item: any) => item !== value)
                        )
                      }
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                    />
                  ))}
                </Stack>
              )}
            >
              {STATUS.map((item: any) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* <Grid item sm={2} xs={12} sx={styles.user}>
          <FormControl fullWidth sx={styles.userFormControl}>
            <InputLabel id="demo-simple-select-label" sx={styles.userText}>
              User
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userName}
              label="User"
              onChange={handleChange}
              renderValue={() => userName}
            >
              {USER_DATA.map((item: any) => (
                <MenuItem value={item.name} sx={styles.enginItem} key={item.id}>
                  {item.name}
                  {userName === item.name && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setUserName("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid> */}

        <Grid item sm={2} xs={12} sx={styles.user}>
          <FormControl fullWidth sx={styles.userFormControl}>
            <InputLabel id="demo-simple-select-label-3" sx={styles.userText}>
              Status
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label-3"
              id="demo-simple-select-3"
              value={isStatus}
              label="Status"
              onChange={(event) => {
                setIsStatus(event.target.value as string);
              }}
              renderValue={() => isStatus}
            >
              {TOPICS.map((item: any) => (
                <MenuItem value={item.name} sx={styles.enginItem} key={item.id}>
                  {item.name}
                  {isStatus === item.name && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setIsStatus("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Button
            sx={styles.moreSelected}
          >
            <Image src={filter} alt="" width={15} height={15} />
            More Filters

          </Button>

       

        <Grid sx={{...styles.searchBox, margin: "0 0 0 auto"}} className="sesson-search" xs={3}>
          <Box sx={styles.searchInner} className="session-search-input">
            <Box sx={styles.searchIcon}>
              <Image src={search} alt="" />
            </Box>
            <Autocomplete
              options={allOptions}
              value={searchQuery}
              onChange={handleAutocompleteChange}
              style={{ flexGrow: "1", width:"100%" }}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  size="small"
                  type="search"
                  placeholder="Search by session id or free text"
                  sx={styles.searchInput}
                  onChange={handleSearch}
                  value={searchQuery}
                />
              )}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.sessionTableRow}>
        <CustomTable
          rows={usersToDisplay}
          column={SESSION_EXPLORE_TABLE_HEADER}
          setOpenModal={setOpenModal}
          isSwitch={false}
          setSelectedRow={setSelectedRow}
          isTableHead={true}
        />
        <Grid container justifyContent="space-between" mt={5}>
          <Grid lg={5.5} sm={3} xs={4}>
            <button
              className="prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </Grid>
          <Grid lg={5} sm={3} xs={5}>
            <Typography>
              <span className="current">
                {currentPage} Out of {totalPages}
              </span>
            </Typography>
          </Grid>
          <Grid lg={1.5} sm={3} xs={3} textAlign="right">
            <button
              className="next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </Grid>
        </Grid>
        <CustomDialog
          thead={"session"}
          openModal={openModal}
          newData={selectedRow}
          setOpenModal={setOpenModal}
        />
      </Box>
    </Box>
  );
}
