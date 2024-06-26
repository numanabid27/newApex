"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AIBOOM_TABLE_DATA } from "../../aiBoom.constant";
import { useAppSelector } from "@/provider/store";
import { styles } from "./style";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import draft from "@/common/assets/images/draft.svg";

export const AiBomView = () => {
  const aiBoomData = useAppSelector((item: any) => item?.aiBoom?.aiBoomData);
  const [filteredData, setFilteredData] = useState<any>();

  useEffect(() => {
    console.log(aiBoomData?.mainData, "aiBoomData");
    console.log(filteredData?.file, "filteredData");
    if (aiBoomData) {
      setFilteredData(aiBoomData);
    }
  }, [aiBoomData]);

  return (
    <>
      <TableContainer sx={{ ...styles.tableContainer, cursor: "pointer" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={styles.cellHeader}>Folder</TableCell>
              <TableCell sx={styles.cellHeader}>Violations</TableCell>
              <TableCell sx={styles.cellHeader}>
                Open source similarity
              </TableCell>
              <TableCell sx={styles.cellHeader}>Open source licenses</TableCell>
              <TableCell align="right" sx={styles.cellHeader}>
                Last commit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box sx={styles.tableCell}>
                  <Image src={draft} width={20} height={20} alt="" />
                  <Typography sx={styles.cellData}>
                    {filteredData?.file?.fileName}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>
                <Box sx={styles.voilation}>
                  <Typography variant="h6">{aiBoomData?.mainData?.voilation[0]}</Typography>
                  <Typography variant="h5">{aiBoomData?.mainData?.voilation[1]}</Typography>
                </Box>
              </TableCell>

              <TableCell>
                <Box sx={styles.voilation}>
                  <Typography variant="h6">{aiBoomData?.mainData?.osSimilarity.label}</Typography>

                </Box>
              </TableCell>

              <TableCell>
                <Box sx={styles.voilation}>
                  <Typography variant="h6">{aiBoomData?.mainData?.osLicience.label}</Typography>

                </Box>
              </TableCell>

              <TableCell align="right">
                <Typography>{aiBoomData?.mainData?.comment}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
