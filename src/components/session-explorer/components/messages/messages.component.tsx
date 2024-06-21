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
  EQUALS,
  MESSAGES_GRAPH,
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useWidth from "@/components/issues/components/issue-table/use-width.hook";

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
    isTopic,
    setIsTopic
  } = useSessions();

  const {windowWidth} = useWidth();

  const SESSION_EXPLORE_TABLE_HEADER = [
    {
      id: 1,
      header: "Flagged",
      accessor: "flag",
      cell: (data: any) => {
        return<>
        {
          data ?
          <Image src={data} alt="" width={20} height={20} />
          :
          null
        }
        </>;
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
          <Box display="flex" className="issueTbaleChip">
            {data?.map((item: any, i:number) => {
              return (
                <IconButton key={i.toString()}>
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
                    icon={
                      <>
                        <Image src={item.img} width={20} height={20} alt="" />
                      </>
                    }
                    label={item.title}
                    variant="outlined"
                  />
                </IconButton>
                
              );
            })}
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
              { source: 'ChatGPT 2,000', target: 'Strategy 1,000', value: 1000, lineStyle: { color: '#039855',  offset: [100, -70], emphasis: { lineStyle: { color: '#039855' } } } },
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
            <Box display="flex" flexWrap={{xs:'wrap', sm:'unset'}} gap="10px" sx={styles.filterRow}>
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
              <Box display="flex" gap="10px" flexWrap={{xs:'wrap', sm:'unset'}}>
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
              <Box display="flex" gap="10px" flexWrap={{xs:'wrap', sm:'unset'}}>
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
              <Grid sm={3} xs={12}>
                <Image src={add} alt="" width={windowWidth > 767 ? 40 : 30} height={40} style={{cursor:"pointer"}} />
              </Grid>
              <Grid sm={9} xs={12} display="flex" gap="10px" justifyContent="flex-end" sx={styles.actionSubmit}>
                <Button>Create detection rule</Button>
                <Button>Run query</Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
      {/* graphs */}
      <Grid container justifyContent="space-between" mt={10}>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={7.5}
          className="border border-radius bg-white engine-usage"
          sx={styles.GridShadow}
        >
          <Box className="sessionEchart" sx={styles.sessionUser}>
            <Box sx={styles.shankyFilter}>
              <Box sx={styles.filter1}>
                <Severity
                  title="Topics"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                />
              </Box>
              <Box sx={styles.filter2}>
                <Severity
                  title="Sentiment"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                />
              </Box>
            </Box>
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
          <Grid mb={4} display="flex" alignItems="center">
            <Grid xl={8} xs={7}>
              <Typography variant="h5">Top 5 Weekly Active Users</Typography>
            </Grid>
            <Grid xl={4} xs={5}>
              <Typography className="sessions_state">Messages</Typography>
            </Grid>
          </Grid>
          {
            MESSAGES_GRAPH.map((item:any, i:number)=>{
              return(
                <Grid container sx={styles.activeUser} key={i.toString()}>
                  <Grid xl={8} xs={7}>
                    <Typography sx={styles.typography}>{item.title}</Typography>
                  </Grid>
                  <Grid xl={4} xs={5}>
                    <Box sx={styles.user1}>
                      <Typography sx={styles.typography}>{item.value}</Typography>
                      <ReactEcharts option={item.chart} />
                    </Box>
                  </Grid>
                </Grid>
              )
            })
          }
         


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
          <FormControl fullWidth sx={styles.userFormControl} >
            <InputLabel id="demo-simple-select-label-2" className="interLable" sx={styles.userText}>
              Interface
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={isInterface}
              label="Interface"
              className="session-search-input2"
              onChange={(event) => {
                setIsInterface(event.target.value as string);
              }}
              renderValue={() => isInterface}
              IconComponent={KeyboardArrowDownIcon}
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
              className="session-search-input2"
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
              IconComponent={KeyboardArrowDownIcon}
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
          <FormControl fullWidth sx={styles.userFormControl} >
            <InputLabel id="demo-simple-select-label-222" className="interLable" sx={styles.userText}>
              Topics
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label-222"
              id="demo-simple-select-222"
              value={isTopic}
              label="Topics"
              className="session-search-input222"
              onChange={(event) => {
                setIsTopic(event.target.value as string);
              }}
              renderValue={() => isTopic}
              IconComponent={KeyboardArrowDownIcon}
            >
              {TOPICS.map((item: any) => (
                <MenuItem value={item.name} sx={styles.enginItem} key={item.id}>
                  {item.name}
                  {isTopic === item.name && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setIsTopic("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
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
              className="session-search-input2"
              label="Status"
              onChange={(event) => {
                setIsStatus(event.target.value as string);
              }}
              renderValue={() => isStatus}
              IconComponent={KeyboardArrowDownIcon}
            >
              {STATUS.map((item: any) => (
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

        <Grid item sm={2} xs={12} paddingLeft="0px !important">
          <Button
            sx={styles.moreSelected}
          >
            <Image src={filter} alt="" width={15} height={15} />
            More Filters

          </Button>
        </Grid>

        <Grid sx={{...styles.searchBox, margin: "0 0 0 auto"}} className="sesson-search" sm={3} xs={12}>
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
          rows={finalData}
          column={SESSION_EXPLORE_TABLE_HEADER}
          setOpenModal={setOpenModal}
          isSwitch={false}
          setSelectedRow={setSelectedRow}
          isTableHead={true}
          isPagination={true}
        />
        
        <CustomDialog
          thead={"session"}
          openModal={openModal}
          newData={selectedRow}
          setOpenModal={setOpenModal}
          isMessage={true}
        />
      </Box>
    </Box>
  );
}
