import calender from "@/common/assets/images/calendar.svg";
import flag from "@/common/assets/images/flag.svg";
import search from "@/common/assets/images/search.svg";
import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import CancelIcon from "@mui/icons-material/Cancel";
import ClearIcon from "@mui/icons-material/Clear";
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
import { SESSION_USER_CHART, SESSION_GRAPH } from "./session.constant";
import { styles } from "./sessions.style";
import useSessions from "./use-seesions.hook";
import filter from "@/common/assets/images/more-filters.svg";

export default function Sessions() {
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

  return (
    <>
      {/* graphs */}
      <Grid container item xs={12} justifyContent="space-between">
        <Grid
          item
          xs={12}
          md={5.85}
          lg={7.5}
          className="border border-radius bg-white engine-usage"
          sx={styles.GridShadow}
        >
          <Box sx={styles.BoxStyling}>
            <Typography sx={styles.SessionHeader}>
              Engines Usage over time
            </Typography>
            <FormControl variant="standard" sx={styles.engineOverTime}>
              <Select
                labelId="demo-simple-select-autowidth-label"
                value={session}
                onChange={SessionHandler}
                className="enginDropdown"
              >
                <MenuItem value="All Engines" sx={styles.SessionText}>
                  All Engines
                </MenuItem>
                <MenuItem value="CHAT GPT" sx={styles.SessionText}>
                  CHAT GPT
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="sessionEchart" sx={styles.sessionUser2}>
            <ReactEcharts option={SESSION_USER_CHART} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={4.4}
          sx={styles.SessionEngine}
          className="border border-radius bg-white"
        >
          <Typography variant="h5" mb={4}>
            Top 5 Active Users
          </Typography>
          {SESSION_GRAPH.map((item: any, i: number) => {
            return (
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
            );
          })}
        </Grid>
      </Grid>
      {/* search */}
      <Box sx={styles.searchBox} className="sesson-search">
        <Typography sx={styles.searchText}>
          Try searching using keywords, session id, engine, user, date range,
          contains issues
        </Typography>
        <Box sx={styles.searchInner} className="session-search-input">
          <Box sx={styles.searchIcon}>
            <Image src={search} alt="" />
          </Box>
          <Autocomplete
            options={allOptions}
            value={searchQuery}
            onChange={handleAutocompleteChange}
            style={{ flexGrow: "1" }}
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
      </Box>
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

        <Button sx={styles.moreSelected}>
          <Image src={filter} alt="" width={15} height={15} />
          More Filters
        </Button>
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
        {/* <Grid container justifyContent="space-between" mt={5}>
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
        </Grid> */}
        <CustomDialog
          thead={"session"}
          openModal={openModal}
          newData={selectedRow}
          setOpenModal={setOpenModal}
        />
      </Box>
    </>
  );
}
