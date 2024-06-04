import {
  Autocomplete,
  Box,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import { styles } from "../../session-explore.style";
import useUsers from "./use-users.hook";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import { userStyle } from "./users.style";
import Filters from "../filters/filter.component";
import ReactEcharts from "echarts-for-react";
import {
  SESSION_USER_CHART
} from "../sessions/session.constant";
import { SESSION_GRAPH } from "./session-user.constant";
import Image from "next/image";

export default function Users() {
  const {
    setOpenModal,
    setSelectedRow,
    finalData,
    handleSearch,
    searchQuery,
    allOptions,
    handleAutocompleteChange,
  } = useUsers();
  const SESSION_EXPLORE_TABLE_HEADER = [
    { id: 1, header: "#", accessor: "id" },
    { id: 2, header: "Name", accessor: "name" },
    {
      id: 3,
      header: "Email ",
      accessor: "mails",
    },
    {
      id: 4,
      header: "Department",
      accessor: "department",
    },
    {
      id: 5,
      header: "User risk score ",
      accessor: "riskScore",
      cell: (data: any) => {
        return (
          <Chip
            label={data}
            sx={{
              ...userStyle.severityChip,
              color:
                data === "Medium"
                  ? Colors.darkBrown
                  : data === "Low"
                  ? Colors.textGreen
                  : data === "High"
                  ? Colors.textHigh
                  : "",
              bgcolor:
                data === "Medium"
                  ? Colors.primaryWhite
                  : data === "Low"
                  ? Colors.primaryGreen
                  : data === "High"
                  ? Colors.defaultWhite
                  : "",
              p: 0,
            }}
            icon={
              <CircleIcon
                sx={{
                  fill:
                    data === "Medium"
                      ? `${Colors.orange} !important`
                      : data === "High"
                      ? Colors.circleHigh
                      : data === "Low"
                      ? Colors.circleLow
                      : `${Colors.defaultBrown} !important`,

                  ...userStyle.severityLevel,
                }}
              />
            }
          />
        );
      },
    },
    {
      id: 6,
      header: "Issues",
      accessor: "issues",
      cell: (issuesData: any) => {
        return (
          <Box display="flex" gap="10px">
            <Chip
              label={issuesData[0]}
              sx={{
                ...userStyle.severityChip,
                color: issuesData[0] === "1 Critical" ? Colors.darkBrown : "",
                bgcolor:
                  issuesData[0] === "1 Critical" ? Colors.secondaryWhite : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill:
                      issuesData[0] === "1 Critical"
                        ? `${Colors.darkBrown} !important`
                        : "",
                    ...userStyle.severityLevel,
                  }}
                />
              }
            />
            <Chip
              label={issuesData[1]}
              sx={{
                ...userStyle.severityChip,
                color: issuesData[1] === "2 High" ? Colors.textHigh : "",
                bgcolor: issuesData[1] === "2 High" ? Colors.defaultWhite : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill: issuesData[1] === "2 High" ? Colors.circleHigh : "",

                    ...userStyle.severityLevel,
                  }}
                />
              }
            />
          </Box>
        );
      },
    },
    {
      id: 7,
      header: "Violations",
      accessor: "violation",
      cell: (voilationData: any) => {
        return (
          <Box display="flex" gap="10px">
            <Chip
              label={voilationData[0]}
              sx={{
                ...userStyle.severityChip,
                color:
                  voilationData[0] === "1 Critical" ? Colors.darkBrown : "",
                bgcolor:
                  voilationData[0] === "1 Critical"
                    ? Colors.secondaryWhite
                    : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill:
                      voilationData[0] === "1 Critical"
                        ? `${Colors.darkBrown} !important`
                        : "",
                    ...userStyle.severityLevel,
                  }}
                />
              }
            />
            <Chip
              label={voilationData[1]}
              sx={{
                ...userStyle.severityChip,
                color: voilationData[1] === "2 High" ? Colors.textHigh : "",
                bgcolor:
                  voilationData[1] === "2 High" ? Colors.defaultWhite : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill:
                      voilationData[1] === "2 High" ? Colors.circleHigh : "",

                    ...userStyle.severityLevel,
                  }}
                />
              }
            />
          </Box>
        );
      },
    },
    {
      id: 8,
      header: "Messages",
      accessor: "messages",
    },
    {
      id: 9,
      header: "Sessions",
      accessor: "sessions",
    },
    { id: 10, 
      header: "Usage", 
      accessor: "usage",
      cell: (data: any) => {
        return (
          <Image src={data} alt="" width={100} height={35} />
        )
      }
    },
  ];

  return (
    <>
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
          </Box>
          <Box className="sessionEchart" sx={userStyle.sessionUser}>
            <ReactEcharts option={SESSION_USER_CHART} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={4.4}
          sx={userStyle.SessionEngine}
          className="border border-radius bg-white"
        >
          <Typography variant="h5" mb={4} sx={userStyle.text}>
            Top 5 Active Users
          </Typography>
          {
            SESSION_GRAPH.map((item:any, i:number)=>{
              return(
                <Grid container sx={userStyle.activeUser} key={i.toString()}>
                  <Grid xl={8} xs={7}>
                    <Typography>{item.title}</Typography>
                  </Grid>
                  <Grid xl={4} xs={5}>
                    <Box sx={userStyle.user1}>
                      <Typography>{item.value}</Typography>
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
      <Box sx={styles.searchBox} className="sesson-search">
        <Typography sx={styles.searchText}>
          Try searching using keywords, session id, engine, user, date range,
          contains issues
        </Typography>
        <Box sx={styles.searchInner} className="session-search-input">
          <Box sx={styles.searchIcon}>
            {/* <Image src={search} alt="" /> */}
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

      <Filters />

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
      </Box>
    </>
  );
}
