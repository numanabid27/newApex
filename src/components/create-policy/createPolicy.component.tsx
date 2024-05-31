"use client";

import { ButtonComponent } from "@/common/components/button/button";
import {
  Box,
  Button,
  Chip,
  Collapse,
  Grid,
  IconButton,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import restore from "@/common/assets/images/restore.svg";
import importImg from "@/common/assets/images/import.svg";
import exportImg from "@/common/assets/images/export.svg";
import { style } from "./createPolicy.style";
import Select from "react-select";
import { OPTIONS } from "./createPolicy.constant";
import CheckBoxComponent from "./component/checkbox.component";
import { Rows } from "../policies/policies.constant";
import usePolicies from "../policies/use-policies.hook";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import msg from "@/common/assets/images/msg.svg";
import file from "@/common/assets/images/file.svg";
import bell from "@/common/assets/images/bell.svg";
import Image from "next/image";
import block from "@/common/assets/images/shield-off.svg";
import redat from "@/common/assets/images/shield-minus.svg";
import synk from "@/common/assets/images/snyk.svg";
import check from "@/common/assets/images/check-check.svg";
import { severity } from "./createPolicy.constant";

function Row(props: { Rows: any }) {
  const { Rows } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={style.parentRow}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={style.type}>
          <Box display="flex" gap="21px">
            {<Rows.component />}
            {Rows.type}
          </Box>
        </TableCell>
        <TableCell>
          {typeof Rows.action === "string" ? (
            <Box display="flex" alignItems="center" gap="10px">
              <Image src={bell} alt="" />
              <Typography sx={style.engineCell}>{Rows.action}</Typography>
            </Box>
          ) : (
            <Rows.action />
          )}
        </TableCell>
        <TableCell>
          {typeof Rows.engines === "string" ? (
            <Typography sx={style.engineCell}>{Rows.engines}</Typography>
          ) : (
            <Rows.engines />
          )}
        </TableCell>
        <TableCell>
          {typeof Rows.headerAssets === "string" ? (
            <Box display="flex" alignItems="center" gap="10px">
              {Rows.headerAssets === "File" ? (
                <Image src={file} alt="" />
              ) : Rows.headerAssets === "Message" ? (
                <Image src={msg} alt="" />
              ) : (
                ""
              )}
              <Typography sx={style.engineCell}>{Rows.headerAssets}</Typography>
            </Box>
          ) : (
            <Rows.headerAssets />
          )}
        </TableCell>
        <TableCell align="right">
          {typeof Rows.integration === "string" ? (
            <Typography>{Rows.integration}</Typography>
          ) : (
            <Rows.integration />
          )}
        </TableCell>
        <TableCell>
          {typeof Rows.headerSeverityevel === "string" ? (
            <IconButton sx={style.iconBtn}>
            <Chip
              label={Rows.headerSeverityevel}
              sx={{
                ...style.severityChip,
                color:
                  Rows.headerSeverityevel === "Medium"
                    ? Colors.brown
                    : Rows.headerSeverityevel === "Critical"
                    ? Colors.darkBrown
                    : Rows.headerSeverityevel === "Low"
                    ? Colors.textGreen
                    : Rows.headerSeverityevel === "High"
                    ? Colors.textHigh
                    : "",
                bgcolor:
                  Rows.headerSeverityevel === "Medium"
                    ? Colors.primaryWhite
                    : Rows.headerSeverityevel === "Critical"
                    ? Colors.secondaryWhite
                    : Rows.headerSeverityevel === "Low"
                    ? Colors.primaryGreen
                    : Rows.headerSeverityevel === "High"
                    ? Colors.defaultWhite
                    : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill:
                      Rows.headerSeverityevel === "Medium"
                        ? `${Colors.orange} !important`
                        : Rows.headerSeverityevel === "Critical"
                        ? `${Colors.darkBrown} !important`
                        : Rows.headerSeverityevel === "High"
                        ? Colors.circleHigh
                        : Rows.headerSeverityevel === "Low"
                        ? Colors.circleLow
                        : `${Colors.defaultBrown} !important`,

                    ...style.severityLevel,
                  }}
                />
              }
            />
            </IconButton>
            ) : (
              <Rows.headerSeverityevel title="Set for all" img={check} severity={severity} ltr={false} />
            )}
          
        </TableCell>
      </TableRow>

      {/* nested row */}
      <TableRow>
        <TableCell style={{ padding:'0px' }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases" sx={style.nestedTableRow}>
                <TableBody sx={style.thBorder}>
                  {Rows.policiesData?.map((historyRow: any) => (
                    <TableRow key={historyRow.date}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={style.nestedCell}
                      >
                        <Box display="flex" alignItems="center" gap="16px">
                          {<historyRow.component defaultChecked />}
                          {
                            historyRow.keyWord 
                            &&
                            <historyRow.keyWord />
                          }
                          {historyRow.policyName}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Box display="flex" gap="10px">
                          {historyRow.type === "Block" ? (
                            <Image src={block} alt="" />
                          ) : historyRow.type === "Redact" ? (
                            <Image src={redat} alt="" />
                          ) : 
                          historyRow.type === "Notify" ? (
                            <Image src={bell} alt="" />
                          ) :
                          (
                            ""
                          )}
                          {historyRow.type}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        {historyRow.engine}
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Box display="flex" gap="10px">
                          {historyRow.assets === "File" ? (
                            <Image src={file} alt="" />
                          ) : historyRow.assets === "Message" ? (
                            <Image src={msg} alt="" />
                          ) : (
                            ""
                          )}
                          {historyRow.assets}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Box display="flex" gap="10px">
                          {historyRow.integration === "Snyk" &&
                            <Image src={synk} alt="" />
                          }
                          {historyRow.integration}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <IconButton sx={style.iconBtn}>
                          <Chip
                            label={historyRow.severityLevel}
                            sx={{
                              ...style.severityChip,
                              color:
                                historyRow.severityLevel === "Medium"
                                  ? Colors.brown
                                  : historyRow.severityLevel === "Critical"
                                  ? Colors.darkBrown
                                  : historyRow.severityLevel === "Low"
                                  ? Colors.textGreen
                                  : historyRow.severityLevel === "High"
                                  ? Colors.textHigh
                                  : "",
                              bgcolor:
                                historyRow.severityLevel === "Medium"
                                  ? Colors.primaryWhite
                                  : historyRow.severityLevel === "Critical"
                                  ? Colors.secondaryWhite
                                  : historyRow.severityLevel === "Low"
                                  ? Colors.primaryGreen
                                  : historyRow.severityLevel === "High"
                                  ? Colors.defaultWhite
                                  : "",
                              p: 0,
                            }}
                            icon={
                              <CircleIcon
                                sx={{
                                  fill:
                                    historyRow.severityLevel === "Medium"
                                      ? `${Colors.orange} !important`
                                      : historyRow.severityLevel === "Critical"
                                      ? `${Colors.darkBrown} !important`
                                      : historyRow.severityLevel === "High"
                                      ? Colors.circleHigh
                                      : historyRow.severityLevel === "Low"
                                      ? Colors.circleLow
                                      : `${Colors.defaultBrown} !important`,

                                  ...style.severityLevel,
                                }}
                              />
                            }
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CreatePolicy() {
  const { openModal, setOpenModal, selectedRow, setSelectedRow } =
    usePolicies();
  const ACCESS_USAGE_HEADER = [
    { id: 1, header: "Policy name", accessor: "policyName" },
    { id: 2, header: "Category", accessor: "category" },
    { id: 3, header: "Engines", accessor: "engine" },
    {
      id: 4,
      header: "Severity Level",
      accessor: "severityLevel",
      cell: (data: any) => {
        return (
          <IconButton sx={style.iconBtn}>
            <Chip
              label={data}
              sx={{
                ...style.severityChip,
                color:
                  data === "Medium"
                    ? Colors.brown
                    : data === "Critical"
                    ? Colors.darkBrown
                    : Colors.defaultBrown,
                bgcolor:
                  data === "Medium"
                    ? Colors.primaryWhite
                    : data === "Critical"
                    ? Colors.secondaryWhite
                    : Colors.defaultWhite,
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    color:
                      data === "Medium"
                        ? `${Colors.orange} !important`
                        : data === "Critical"
                        ? `${Colors.darkBrown} !important`
                        : data === "High"
                        ? `${Colors.orange} !important`
                        : `${Colors.defaultBrown} !important`,
                    ...style.severityLevel,
                  }}
                />
              }
            />
          </IconButton>
        );
      },
    },
    {
      id: 5,
      header: "",
      accessor: "status",
      cell: (data: any) => {
        return (
          <>
            {data ? (
              <IconButton sx={style.iconBtn}>
                <Chip
                  label={data}
                  sx={{
                    ...style.statusChip,
                    color: data === "New" ? Colors.white : Colors.defaultBrown,
                    bgcolor: data === "New" ? Colors.blue : Colors.defaultWhite,
                    p: 0,
                  }}
                />
              </IconButton>
            ) : (
              ""
            )}
          </>
        );
      },
    },
  ];

  const POLICY_TABLE_HEADER = [
    { id: 1, header: "Policy name", accessor: "policyName" },
    { id: 2, header: "Action ", accessor: "type" },
    {
      id: 3,
      header: "Engines",
      accessor: "engine",
      cell: (data: any) => {
        return (
          <IconButton sx={style.engine}>
            <Typography sx={style.chip}>{data}</Typography>
          </IconButton>
        );
      },
    },
    { id: 4, header: "Assets ", accessor: "assets" },
    { id: 5, header: "Assets ", accessor: "integration" },
    {
      id: 6,
      header: "Severity Level",
      accessor: "severityLevel",
      cell: (data: any) => {
        return (
          <IconButton sx={style.iconBtn}>
            <Chip
              label={data}
              sx={{
                ...style.severityChip,
                color:
                  data === "Medium"
                    ? Colors.brown
                    : data === "Critical"
                    ? Colors.darkBrown
                    : data === "Low"
                    ? Colors.textGreen
                    : data === "High"
                    ? Colors.textHigh
                    : "",
                bgcolor:
                  data === "Medium"
                    ? Colors.primaryWhite
                    : data === "Critical"
                    ? Colors.secondaryWhite
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
                        : data === "Critical"
                        ? `${Colors.darkBrown} !important`
                        : data === "High"
                        ? Colors.circleHigh
                        : data === "Low"
                        ? Colors.circleLow
                        : `${Colors.defaultBrown} !important`,

                    ...style.severityLevel,
                  }}
                />
              }
            />
          </IconButton>
        );
      },
    },
    {
      id: 7,
      header: "",
      accessor: "status",
      cell: (data: any) => {
        return (
          <>
            {data ? (
              <IconButton sx={style.iconBtn}>
                <Chip
                  label={data}
                  sx={{
                    ...style.statusChip,
                    color: data === "New" ? Colors.white : Colors.defaultBrown,
                    bgcolor: data === "New" ? Colors.blue : Colors.defaultWhite,
                    p: 0,
                  }}
                />
              </IconButton>
            ) : (
              ""
            )}
          </>
        );
      },
    },
  ];

  const policiesTypes = [
    { id: 1, value: "GDPR", checkedValue: false, enable: true },
    { id: 2, value: "HIPAA", checkedValue: false, enable: true },
    { id: 3, value: "HIPAA", checkedValue: false, enable: true },
  ];

  return (
    <Box sx={style.createPolicy}>
      <Grid container justifyContent="space-between" mb={6} mt={4}>
        <Grid xs={4}>
          <Link href="/policies/create-policy" className="addButton">
            <AddIcon />
            New policy
          </Link>
        </Grid>
        <Grid xs={8}>
          <Box display="flex" gap="10px" justifyContent="flex-end">
            <ButtonComponent title="Restore" icon={restore} />
            <ButtonComponent title="Import" icon={importImg} />
            <ButtonComponent title="Export" icon={exportImg} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={style.createPolicyGrid}>
        <Grid container justifyContent="space-between" padding="0 28px" mb={10}>
          <Grid xs={7} className="mutiSelect">
            <Box
              display="flex"
              alignItems="center"
              gap="30px"
              className="addField"
            >
              <InputLabel sx={style.label}>Name</InputLabel>
              <TextField
                id="outlined-basic"
                placeholder="Policy name is here"
                variant="outlined"
              />
            </Box>
            <Box sx={style.multiSelect}>
              <InputLabel sx={style.label}>Groups</InputLabel>
              <Select
                isMulti
                name="colors"
                defaultValue={[OPTIONS[0], OPTIONS[1]]}
                options={OPTIONS}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Box>
          </Grid>
          <Grid
            xs={4.8}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-start"
            gap="10px"
          >
            {policiesTypes?.map((item, i) => {
              return (
                <CheckBoxComponent
                  key={i.toString()}
                  id={item?.id}
                  label={item?.value}
                  checkedValue={item?.checkedValue}
                  enable={item?.enable}
                />
              );
            })}
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow sx={style.tableRow}>
                <TableCell></TableCell>
                <TableCell sx={style.typography}>Type</TableCell>
                <TableCell sx={style.typography}>Action</TableCell>
                <TableCell sx={style.typography}>Engines</TableCell>
                <TableCell sx={style.typography}>Asset</TableCell>
                <TableCell sx={style.typography}>Integration</TableCell>
                <TableCell sx={style.typography}>Criticality</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Rows.map((Rows: any) => (
                <Row key={Rows.name} Rows={Rows} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
      </Box>
      <Box sx={style.desc}>
        <Typography variant="h6">
          This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et 
        </Typography>
      </Box>
      <Button sx={style.save}>Save</Button>
    </Box>
  );
}
