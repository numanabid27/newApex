"use client";

import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
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
import { IColumn, IRowData } from "./custom-table.interface";
import { styles } from "./customTable.style";
import Colors from "@/common/constants/color.constant";
import Image from "next/image";
import EmptyTable from "@/common/assets/images/EmptyTable.svg";

/**
 * Take in rows columns and conditional props to handle table
 * @param {rows, column, setOpenModal, isSwitch, isTableHead, setSelectedRow, isPolicy, isTableDate } props rows and columns of table
 * @returns table component
 */

function CustomTable({
  rows,
  column,
  setOpenModal,
  isSwitch,
  isTableHead,
  setSelectedRow,
  isPolicy,
  isTableDate,
}: any) {
  const handlePolicyClick = (row: any) => {
    if (
      row.policyName !== "Known Prompt Injections" &&
      row.policyName !== "Model Theft"
    ) {
      setOpenModal(true);
      setSelectedRow(row);
    }
  };
  return (
    <Box sx={isPolicy ? styles.tableSec1 : styles.tableSec}>
      <TableContainer
        sx={{ ...styles.tableSecInner } }
        className={!isPolicy ? "tables" : ""}
      >
        <Table sx={styles.table} size="medium" width="100%">
          {isTableHead && (
            <TableHead>
              <TableRow>
                {isSwitch && (
                  <TableCell
                    sx={styles.switchCell}
                    padding="checkbox"
                  ></TableCell>
                )}
                {column.map((headCell: IColumn) => (
                  <TableCell
                    sx={{ ...styles.headcell }}
                    key={headCell.id}
                    align={"left"}
                  >
                    {headCell.header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody sx={isPolicy && { ...styles.policyTable }}>
            {rows.length > 0 &&
              rows.map((row: IRowData) => (
                <TableRow
                  hover
                  key={row.id}
                  sx={{
                    ...styles.tableRow,
                    background: row.status === "New" ? "#EFF8FF" : "none",
                  }}
                >
                  {isSwitch && (
                    <TableCell padding="checkbox" sx={styles.tableCheckBox}>
                      <CustomSwitch
                        defaultChecked={
                          row.policyName === "Suspicious Prompt" ? false : true
                        }
                      />
                    </TableCell>
                  )}
                  {column.map((columns: IColumn) => {
                    return (
                      <TableCell
                        onClick={() => handlePolicyClick(row)}
                        className={isTableDate && { ...styles.issueTableCell }}
                        color="primary"
                        sx={{
                          ...styles.column,
                          color: Colors.primary,
                        }}
                        align={"left"}
                        key={columns.id}
                      >
                        {columns.cell
                          ? columns.cell(row[columns.accessor])
                          : row[columns.accessor] ?? "--"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            {rows.length === 0 && (
              <TableRow sx={styles.visibleRow}>
                <TableCell colSpan={9} align="center">
                  <Box sx={styles.tableBox}>
                    <Image src={EmptyTable} alt="" />
                    <Typography sx={styles.noRecord}>
                      No Record to Display
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default CustomTable;
