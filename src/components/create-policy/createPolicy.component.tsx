"use client";

import {
  Box,
  Button,
  Checkbox,
  Chip,
  Collapse,
  FormControlLabel,
  FormGroup,
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
import { actionsAction, assets, POLICIES_CHECKBOX_FILTER } from "./createPolicy.constant";
import CheckBoxComponent from "./component/checkbox.component";
import CustomTabPanel from "./component/policies-tabs.component";
import { CHECK_BOXES, Rows } from "../policies/policies.constant";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import msg from "@/common/assets/images/msg.svg";
import file from "@/common/assets/images/file.svg";
import bell from "@/common/assets/images/bell.svg";
import editIcon from "@/common/assets/images/editIcon.svg";
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
import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import usePolicies from "../policies/use-policies.hook";
import Severity from "./component/severityLevel/severty.component";
import { POLICIES_GPT } from "../policies/components/model-data/components/model-data/modal-data.constants";
import downArrow from "@/common/assets/images/downs.svg";
import gemini from "@/common/assets/images/gemini.svg";
import AddIcon from "@mui/icons-material/Add";
import BasicTabs from "./component/policies-tabs.component";

function Row(props: any) {
  const { Rows, selectedRow, setSelectedRow, finalData, setOpenModal, setAb } =
    props;
  // const { selectedRow, setSelectedRow, finalData } = useFilterPolicy();
  // const { Rows } = props;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (selectedRow?.id) {
      const res = finalData.find((item: any) => item.id === selectedRow?.id);
      setSelectedRow(res);
    }
  }, [selectedRow]);

  const [isOpenSwitch, setIsOpenSwitch] = useState(true);

  const switchChange = (e: any) => {
    setIsOpenSwitch(e.target.checked);
  };

  return (
    <>
      <TableRow
        sx={style.parentRow}
        onClick={() => {
          setOpenModal(true);
          setSelectedRow(Rows);
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={(e: any) => {
              setOpen(!open);
              e.stopPropagation();
            }}
          >
            {Rows.policiesData ? (
              <>{open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}</>
            ) : null}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={style.type}>
          <Box display="flex" gap="21px">
            <Box sx={style.rowLabel}>
              <Box sx={style.rowLabelDot}></Box>
              <Typography sx={style.rowLabelText}>Activated</Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell>
          <Box sx={style.flexcenterY} gap={3}>
            <Typography sx={style.actionText}>{Rows.threat}</Typography>
            {Rows.type &&
              <Box sx={{
                ...style.threatTag,
                color: Rows.type === "Intent" ? '#3B0764' : '#334155',
                backgroundColor: Rows.type === "Intent" ? '#F3E8FF' : '#FEF3C7',
              }}>{Rows.type}</Box>
            }
          </Box>
        </TableCell>
        <TableCell>
          <Typography sx={style.rowGaps}>{Rows.apps}</Typography>
        </TableCell>
        <TableCell>
          <Typography sx={style.rowGaps}>{Rows.groups}</Typography>
        </TableCell>
        <TableCell>
          <Typography sx={style.rowGaps}>{Rows.severity}</Typography>
        </TableCell>
        <TableCell>
          <Typography sx={style.rowGaps}>{Rows.actions}</Typography>
        </TableCell>
        <TableCell>
          <Button>
            <Image width={24} height={24} src={editIcon} alt="Edit icon" />
          </Button>
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
                      <TableCell></TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={style.nestedCell}
                      >
                        <Box display="flex" alignItems="center" gap="16px">
                          {isOpenSwitch && isOpenSwitch ? (
                            <> {<historyRow.component defaultChecked />}</>
                          ) : (
                            <>{<historyRow.component />}</>
                          )}

                          {historyRow.keyWord && <historyRow.keyWord />}
                          {historyRow.policyName}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Typography sx={style.rowGaps}>{historyRow.threat}</Typography>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Typography sx={style.rowGaps}>{historyRow.apps}</Typography>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Typography sx={style.rowGaps}>{historyRow.groups}</Typography>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Typography sx={style.rowGaps}>{historyRow.severity}</Typography>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Typography sx={style.rowGaps}>{historyRow.actions}</Typography>
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

export default function CreatePolicy(id: any) {
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

  const {
    openModal,
    setOpenModal,
    setIsModel,
    isModel,
    isPrompt,
    setIsPrompt,
  } = usePolicies();
  const [ab, setAb] = useState("");
  const [isGenerate, setIsGenerate] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Data Exposure");

  return (
    <>
      <Box sx={style.createPolicy}>
        {/* right search bar and left side filters */}
        <Grid container justifyContent="space-between">
          <Grid sm={8} xs={11.7}>
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
        </Grid>

        <Box sx={style.createPolicyGrid}>
          <Box>
            <FormGroup sx={style.customCheckBoxFlex}>
              {CHECK_BOXES.map((item, index) => (
                <FormControlLabel control={<Checkbox />} label={item} sx={style.customCheckBox} key={index} />
              ))}
            </FormGroup>
          </Box>

          {finalData?.map((item: any, index: Number) => {
            return (

              <>
                <Button sx={{
                  ...style.tabButton,
                  borderBottom: activeTab === item.value ? '1px solid #0F172A; color:#1E293B' : '1px solid #E2E8F0',
                }}
                  onClick={() => {
                    setActiveTab(item.value);
                  }}
                >{item.value}</Button>
              </>

            );
          })}
        </Box>
        <Box>  <TableContainer component={Paper} className="scrollStyle">
          <Table aria-label="collapsible table">
            {activeTab === "Responsible AI usage" ? (
              <TableHead>
                <TableRow sx={style.tableRow}>
                  <TableCell></TableCell>
                  <TableCell sx={style.typography}>Status</TableCell>
                  <TableCell sx={style.typography}>
                    Threat
                  </TableCell>
                  <TableCell sx={style.typography}>
                    Apps
                  </TableCell>
                  <TableCell sx={style.typography}>
                    Groups
                  </TableCell>
                  <TableCell sx={style.typography}>Severity</TableCell>
                  <TableCell sx={style.typography}>
                    Actions
                  </TableCell>
                  <TableCell sx={style.typography}></TableCell>
                </TableRow>
              </TableHead>
            ) : (
              <TableHead>
                <TableRow sx={style.tableRow}>
                  <TableCell></TableCell>
                  <TableCell sx={style.typography}>Status</TableCell>
                  <TableCell sx={style.typography}>
                    Threat
                  </TableCell>
                  <TableCell sx={style.typography}>
                    Apps
                  </TableCell>
                  <TableCell sx={style.typography}>
                    Groups
                  </TableCell>
                  <TableCell sx={style.typography}>Severity</TableCell>
                  <TableCell sx={style.typography}>
                    Actions
                  </TableCell>
                  <TableCell sx={style.typography}></TableCell>
                </TableRow>
              </TableHead>
            )}

            <TableBody>
              {finalData.filter((element: any) => element.value === activeTab)[0]?.policiesMainData?.map((Rows: any) => (
                <Row
                  key={Rows.name}
                  Rows={Rows}
                  selectedRow={selectedRow}
                  setSelectedRow={setSelectedRow}
                  finalData={finalData}
                  setOpenModal={setOpenModal}
                  setAb={setAb}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer></Box>
        <Button sx={style.save}>Save</Button>
      </Box>
      {/* delete policy model */}
      {isModel && (
        <Box sx={style.deleteBackdrop}>
          <Box sx={{ ...style.deleteModel, background: "#fff" }}>
            <Typography variant="h5">Delete Policy</Typography>
            <Typography variant="h6">
              By proceeding, you will permanently lose all data associated with
              this policy. Are you sure you want to permanently delete this
              policy?
            </Typography>
            <Box display="flex" justifyContent="flex-end" gap="10px">
              <Button
                onClick={() => {
                  setIsModel(false);
                }}
                sx={style.cancel}
              >
                Cancel
              </Button>
              <Button sx={style.del}>Yes, delete it</Button>
            </Box>
          </Box>
        </Box>
      )}

      {/* prompt model */}
      {isPrompt && (
        <Box sx={style.deleteBackdrop}>
          <Box
            sx={{ ...style.deleteModel, background: "#F9FAFB" }}
            className="modelMain"
          >
            <Box sx={style.actionBtn}>
              <Severity
                title="Select Engine"
                img={downArrow}
                severity={POLICIES_GPT}
                ltr={true}
              />
              <Button className="testBtn">
                <AddIcon />
                New Test
              </Button>
            </Box>

            <Box sx={style.promptBox}>
              <Typography variant="h6">Prompt</Typography>
              <textarea
                placeholder="What's my email address number?"
                rows={7}
              ></textarea>

              <Box sx={style.bard}>
                <Image src={gemini} alt="" />
                <Box>
                  <Typography color="#374151" pb={1} fontWeight={500}>
                    Your email is
                  </Typography>
                  <Typography color="#D92D20" fontWeight={500}>
                    Jhon_doe@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={style.voilationBox}>
                <Typography variant="h4">
                  <span>1 Violations: </span>
                  PII (email)
                </Typography>
                <Box sx={style.piBox}>
                  <Typography variant="h2">PII</Typography>
                  <Typography color="#374151" pt={2}>
                    Personally identifiable information (PII) is any information
                    connected to a specific individual that can be used to
                    uncover that individuals identity, such as their social
                    security number, full name, email address or phone number.
                  </Typography>
                </Box>
                <Box sx={style.piBox}>
                  <Typography variant="h2">Email</Typography>
                  <Typography color="#374151" pt={2}>
                    Personally identifiable information (PII) is any information
                    connected to a specific individual that can be used to
                    uncover
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent="center" gap="10px">
              <Button className="runTest">Run Test</Button>
              <Button
                className="testBtn"
                onClick={() => {
                  setIsPrompt(false);
                }}
              >
                Stop
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      <CustomDialog
        selectedRow={selectedRow}
        thead={"policy"}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setIsModel={setIsModel}
        setIsPrompt={setIsPrompt}
        createPolicy={true}
        setIsGenerate={setIsGenerate}
        isGenerate={isGenerate}
      />
    </>
  );
}
