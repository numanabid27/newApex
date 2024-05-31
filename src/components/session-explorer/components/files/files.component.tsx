import React, { useState } from "react";
import { Autocomplete, Box, Chip, Grid, TextField, Typography } from "@mui/material";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import { styles } from "../../session-explore.style";
import useFiles from "./use-file.hook";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import { FileStyle } from "./file.style";
import Image from "next/image";

export default function Files() {
  const {
    setOpenModal,
    setSelectedRow,
    finalData,
    handleSearch,
    searchQuery,
    allOptions,
    handleAutocompleteChange,
  } = useFiles();
  const SESSION_EXPLORE_TABLE_HEADER = [
    { id: 1, header: "#", accessor: "id" },
    { id: 2, header: "Filename", accessor: "fileName" },
    {
      id: 3,
      header: "File type",
      accessor: "fileType",
      cell: (data: any) => {
        return <Image src={data} alt="" width={28} height={35} />;
      },
    },
    {
      id: 4,
      header: "# interactions",
      accessor: "intraction",
    },
    {
      id: 5,
      header: "# Users",
      accessor: "users",
    },
    {
      id: 6,
      header: "Sensitivity",
      accessor: "sensitivity",
      cell: (data: any) => {
        return (
          <>
            <Chip
              label={data}
              sx={{
                ...FileStyle.severityChip,
                color:
                  data === "Medium"
                    ? Colors.darkBrown
                    : data === "None"
                    ? Colors.textGreen
                    : data === "Confidential"
                    ? Colors.textHigh
                    : data === "Highly Confidential"
                    ? Colors.darkBrown
                    : "",
                bgcolor:
                  data === "Medium"
                    ? Colors.primaryWhite
                    : data === "None"
                    ? Colors.primaryGreen
                    : data === "Confidential"
                    ? Colors.defaultWhite
                    : data === "Highly Confidential"
                    ? Colors.secondaryWhite
                    : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill:
                      data === "Medium"
                        ? `${Colors.orange} !important`
                        : data === "Confidential"
                        ? Colors.circleHigh
                        : data === "None"
                        ? Colors.circleLow
                        : data === "Highly Confidential"
                        ? Colors.darkBrown
                        : `${Colors.defaultBrown} !important`,

                    ...FileStyle.severityLevel,
                  }}
                />
              }
            />
          </>
        );
      },
    },
    {
      id: 7,
      header: "Path",
      accessor: "path",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
