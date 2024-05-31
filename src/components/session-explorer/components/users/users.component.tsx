import React, { useState } from "react";
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
    { id: 10, header: "Usage", accessor: "usage" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(finalData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToDisplay = finalData.slice(startIndex, endIndex);

  return (
    <>
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

      <Box sx={styles.sessionTableRow}>
        <CustomTable
          rows={usersToDisplay}
          column={SESSION_EXPLORE_TABLE_HEADER}
          setOpenModal={setOpenModal}
          isSwitch={false}
          setSelectedRow={setSelectedRow}
          isTableHead={true}
        />

        <Grid container sx={{padding:"20px 0px"}}>
          <Grid lg={5} sm={3} xs={4}>
            <button
              className="prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </Grid>
          <Grid lg={5.5} sm={3} xs={5}>
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
      </Box>
    </>
  );
}
