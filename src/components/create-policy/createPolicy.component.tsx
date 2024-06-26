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
import CustomizedAccordions from "./component/customizeAccordian/index.component";

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
          {typeof Rows.engines === "object" ? (
            <Box display="flex" gap="5px">
              {
                Rows.engines?.map((item:any, i:number)=>{
                  return(
                    <Box display="flex" gap="5px" key={i.toString()}>
                      <Image src={item.icon} alt="" />
                      <Typography sx={style.engineCell}>{item.text}</Typography>
                    </Box>
                  ) 
                })
              }
            </Box>
            
          ) : (
            <Rows.engines />
          )}
        </TableCell>
        <TableCell>
          {typeof Rows.headerAssets === "string" ? (
            <Box display="flex" alignItems="center" gap="10px">
              {/* {Rows.headerAssets === "File" ? (
                <Image src={file} alt="" />
              ) : Rows.headerAssets === "Message" ? (
                <Image src={msg} alt="" />
              ) : (
                ""
              )} */}
              <Typography sx={style.engineCell}>{Rows.headerAssets}</Typography>
            </Box>
          ) : (
            <Rows.headerAssets />
          )}
        </TableCell>
        <TableCell align="right">
          {typeof Rows.integration === "object" ? (
            <Box display="flex" gap="5px"> 
              {Rows.integration.map((item: any, i: number) => {
                return <Typography key={i.toString()} fontSize="12px" sx={style.integration}>{item}</Typography>;
              })}
            </Box>
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
            <Rows.headerSeverityevel
              title="Set for all"
              img={check}
              severity={severity}
              ltr={false}
            />
          )}
        </TableCell>
      </TableRow>

      {/* nested row */}
      <TableRow>
        <TableCell style={{ padding: "0px" }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table
                size="small"
                aria-label="purchases"
                sx={style.nestedTableRow}
              >
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
                          {historyRow.keyWord && <historyRow.keyWord />}
                          {historyRow.policyName}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Box display="flex" gap="10px">
                          {historyRow.type === "Block" ? (
                            <Image src={block} alt="" />
                          ) : historyRow.type === "Redact" ? (
                            <Image src={redat} alt="" />
                          ) : historyRow.type === "Notify" ? (
                            <Image src={bell} alt="" />
                          ) : (
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
                          {historyRow.integration === "Snyk" && (
                            <Image src={synk} alt="" />
                          )}
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
  const policiesTypes = [
    { id: 1, value: "GDPR", checkedValue: true, enable: true, check: true },
    {
      id: 2,
      value: "Nist Ai RMF",
      checkedValue: true,
      enable: true,
      check: true,
    },
    { id: 3, value: "HIPAA", checkedValue: false, enable: false, check: false },
    {
      id: 4,
      value: "EU AI Act",
      checkedValue: false,
      enable: false,
      check: false,
    },
    {
      id: 5,
      value: "Mitre ATLAS",
      checkedValue: true,
      enable: true,
      check: true,
    },
  ];

  return (
    <Box sx={style.createPolicy}>
      <Grid container justifyContent="space-between" mb={6} mt={4}>
        <Grid sm={4} xs={12} mb={{ sm: 0, xs: 3 }}>
          <Link href="/policies/create-policy" className="addButton">
            <AddIcon />
            New policy
          </Link>
        </Grid>
        <Grid sm={8} xs={12}>
          <Box
            display="flex"
            gap="10px"
            justifyContent={{ sm: "flex-end", xs: "flex-start" }}
          >
            <ButtonComponent title="Import company policy" icon={importImg} />
            <ButtonComponent title="Export" icon={exportImg} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={style.createPolicyGrid}>
        {/* <Grid
          container
          justifyContent="space-between"
          padding="0 28px"
          mb={10}
          flexDirection={{ lg: "row", xs: "column-reverse" }}
        >
          <Grid lg={7} xs={12} className="mutiSelect">
            <Box
              display="flex"
              alignItems={{ sm: "center", xs: "flex-start" }}
              gap={{ sm: "30px", xs: "13px" }}
              className="addField"
              flexDirection={{ sm: "row", xs: "column" }}
            >
              <InputLabel sx={style.label}>Name</InputLabel>
              <TextField
                id="outlined-basic"
                placeholder="Policy name is here"
                variant="outlined"
              />
            </Box>
            <Box
              sx={style.multiSelect}
              className="multiSelectField"
              alignItems={{ sm: "center", xs: "flex-start" }}
              flexDirection={{ sm: "row", xs: "column" }}
            >
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
            lg={4.8}
            xs={12}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-start"
            gap="10px"
            mb={{ lg: 0, xs: 6 }}
            flexDirection={{ md: "row", xs: "column-reverse" }}
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
        </Grid> */}

        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {policiesTypes?.map((item, i) => {
            return (
              <CheckBoxComponent
                id={item?.id}
                key={i.toString()}
                label={item?.value}
                check={item?.check}
                policy={true}
                checkedValue={item?.checkedValue}
                enable={item?.enable}
              />
            );
          })}
        </Box>

        {Rows.map((item: any) => {
          return (
            <Box key={item.id}>
              <CustomizedAccordions
                id={item.id}
                title={item.value}
                component={
                  <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                      <TableHead>
                        <TableRow sx={style.tableRow}>
                          <TableCell></TableCell>
                          <TableCell sx={style.typography}>Type</TableCell>
                          <TableCell sx={style.typography}>Action</TableCell>
                          <TableCell sx={style.typography}>Engines</TableCell>
                          <TableCell sx={style.typography}>Groups</TableCell>
                          <TableCell sx={style.typography}>Tags</TableCell>
                          <TableCell sx={style.typography}>
                            Criticality
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {item?.policiesMainData?.map((Rows: any) => (
                          <Row key={Rows.name} Rows={Rows} />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                }
              />
            </Box>
          );
        })}
      </Box>
      <Box sx={style.desc}>
        <Typography variant="h6">
          This is the description of the policy lorem ipsum dolor sit amet
          consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          et This is the description of the policy lorem ipsum dolor sit amet
          consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          et
        </Typography>
      </Box>
      <Button sx={style.save}>Save</Button>
    </Box>
  );
}
