"use client";

import {
  Box,
  Button,
  Chip,
  Collapse,
  Grid,
  IconButton,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { style } from "./createPolicy.style";
import { POLICIES_CHECKBOX_FILTER } from "./createPolicy.constant";
import CheckBoxComponent from "./component/checkbox.component";
import { Rows } from "../policies/policies.constant";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import msg from "@/common/assets/images/msg.svg";
import file from "@/common/assets/images/file.svg";
import bell from "@/common/assets/images/bell.svg";
import Image from "next/image";
import block from "@/common/assets/images/shield-off.svg";
import redat from "@/common/assets/images/shield-minus.svg";
import check from "@/common/assets/images/check-check.svg";
import { severity } from "./createPolicy.constant";
import CustomizedAccordions from "./component/customizeAccordian/index.component";
import Filters from "../session-explorer/components/filters/filter.component";
import search from "@/common/assets/images/search.svg";
import useFilterPolicy from "./use-createPolicies.hook";
import PolicyFilters from "./component/filters";

function Row(props: any) {
  const { Rows, selectedRow, setSelectedRow, finalData } = props;
  // const { selectedRow, setSelectedRow, finalData } = useFilterPolicy();
  // const { Rows } = props;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (selectedRow?.id) {
      const res = finalData.find((item: any) => item.id === selectedRow?.id);
      setSelectedRow(res);
    }
  }, [selectedRow]);

  return (
    <>
      <TableRow sx={style.parentRow}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {Rows.policiesData ? (
              <>{open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}</>
            ) : null}
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
              {Rows.engines?.map((item: any, i: number) => {
                return (
                  <Box display="flex" gap="5px" key={i.toString()}>
                    <Image src={item.icon} alt="" />
                    <Typography sx={style.engineCell}>{item.text}</Typography>
                  </Box>
                );
              })}
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
                return (
                  <Typography
                    key={i.toString()}
                    fontSize="12px"
                    sx={style.integration}
                  >
                    {item}
                  </Typography>
                );
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
                        <Box display="flex" gap="5px">
                          {historyRow.engine?.map((item: any, i: number) => {
                            return (
                              <Box display="flex" gap="5px" key={item.id}>
                                <Image
                                  src={item.icon}
                                  alt=""
                                  width={17}
                                  height={17}
                                />
                                <Typography
                                  fontSize="14px"
                                  color={`${Colors.primary_101}`}
                                >
                                  {item.text}
                                </Typography>
                              </Box>
                            );
                          })}
                        </Box>
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
                          <Box display="flex" gap="5px">
                            {historyRow.integration.map(
                              (item: any, i: number) => {
                                return (
                                  <Typography
                                    key={i.toString()}
                                    fontSize="12px"
                                    sx={style.integration}
                                  >
                                    {item}
                                  </Typography>
                                );
                              }
                            )}
                          </Box>
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

export default function CreatePolicy(id:any) {

  const {
    selectedRow,
    setSelectedRow,
    finalData,
    engineName,
    setEngineName,
    setActions,
    actions,
    setDateRange,
    setseverity,
    severity,
    isStatus,
    setIsStatus,
    tags,
    setTags,
  } = useFilterPolicy();

  return (
    <>
      <Box sx={style.createPolicy}>
        {/* right search bar and left side filters */}
        <Grid container justifyContent="space-between">
          <Grid xs={8}>
            <PolicyFilters
              users={false}
              policies={true}
              engineName={engineName}
              setEngineName={setEngineName}
              setActions={setActions}
              actions={actions}
              setDateRange={setDateRange}
              setseverity={setseverity}
              severity={severity}
              isStatus={isStatus}
              setIsStatus={setIsStatus}
              setTags={setTags}
              tags={tags}
            />
          </Grid>
          <Grid xs={3.5}>
            <Paper
              component="form"
              sx={{
                p: "3px 9px",
                border: "1px solid #CFD4DC",
                boxShadow: "0px 1px 2px 0px #1018280D",
                borderRadius: "8px",
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <Image src={search} alt="" />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "Search" }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Box sx={style.createPolicyGrid}>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {POLICIES_CHECKBOX_FILTER?.map((item: any, i: number) => {
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

          {finalData?.map((item: any) => {
            return (
              <Box key={item.id}>
                <CustomizedAccordions
                  id={item.id}
                  title={item.value}
                  component={
                    <TableContainer component={Paper}>
                      <Table aria-label="collapsible table">
                        {item.value === "Responsible AI usage" ? (
                          <TableHead>
                            <TableRow sx={style.tableRow}>
                              <TableCell></TableCell>
                              <TableCell sx={style.typography}>Type</TableCell>
                              <TableCell sx={style.typography}>
                                Action
                              </TableCell>
                              <TableCell sx={style.typography}>
                                Engines
                              </TableCell>
                              <TableCell sx={style.typography}>
                                Assets
                              </TableCell>
                              <TableCell sx={style.typography}>Tags</TableCell>
                              <TableCell sx={style.typography}>
                                Criticality
                              </TableCell>
                            </TableRow>
                          </TableHead>
                        ) : (
                          <TableHead>
                            <TableRow sx={style.tableRow}>
                              <TableCell></TableCell>
                              <TableCell sx={style.typography}>Type</TableCell>
                              <TableCell sx={style.typography}>
                                Action
                              </TableCell>
                              <TableCell sx={style.typography}>
                                Engines
                              </TableCell>
                              <TableCell sx={style.typography}>
                                Groups
                              </TableCell>
                              <TableCell sx={style.typography}>Tags</TableCell>
                              <TableCell sx={style.typography}>
                                Criticality
                              </TableCell>
                            </TableRow>
                          </TableHead>
                        )}

                        <TableBody>
                          {item?.policiesMainData?.map((Rows: any) => (
                            <Row
                              key={Rows.name}
                              Rows={Rows}
                              selectedRow={selectedRow}
                              setSelectedRow={setSelectedRow}
                              finalData={finalData}
                            />
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
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et This is the description of the policy lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et
          </Typography>
        </Box>
        <Button sx={style.save}>Save</Button>
      </Box>
    </>
  );
}
