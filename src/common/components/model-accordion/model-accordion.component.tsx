/*eslint-disable react/no-unescaped-entities */
"use client";
import chat from "@/common/assets/images/chat.svg";
import arrowUp from "@/common/assets/images/cherven-up.svg";
import arrowDown from "@/common/assets/images/down_arrow.svg";
import insights from "@/common/assets/images/insights.svg";
import issuesby from "@/common/assets/images/issuesby.svg";
import link from "@/common/assets/images/link.svg";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SouthIcon from "@mui/icons-material/South";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { styles } from "./model-accordion.style";
import useModalAccordion from "./use-modal-accordion.hook";
import ReactEcharts from "echarts-for-react";
import EastIcon from "@mui/icons-material/East";

function ModelAccordian({ modelData }: any) {
  console.log("openModal", modelData);
  const { expanded, handleChange } = useModalAccordion();
  const [ishide, setIsHide] = useState(false);
  const [isValue, setIsValue] = useState("New");
  console.log("modelData.name", modelData.name);

  const handleClick = () => {
    setIsHide(!ishide);
  };
  const handleList = (itemId: any) => {
    setIsValue(itemId);
  };
  useEffect(() => {
    setIsHide(false);
  }, [isValue]);

  const data = [
    {
      id: 1,
      title: isValue == "New" ? "In progress" : "New",
    },
  ];
  // const [string, setString] = useState([]);
  // const string1 = [];
  // const addstring = (value) => {
  //   setString((prev) => [...prev, value]);
  //   string1.unshift(value);
  //   string1.push(value);

  //   // setString([...string,value])
  // };
  return (
    <Box sx={styles.modelGradient}>
      <Box sx={styles.sideModel}>
        <Typography sx={styles.modelTitle}>{modelData.name}</Typography>

        <Grid container justifyContent="space-between" mt={6} mb={8}>
          <Grid xs={7.5} display="flex" alignItems="center" gap="18px">
            <Box position="relative">
              <Button onClick={handleClick} sx={styles.listBox}>
                {isValue ? (
                  <>{isValue}</>
                ) : (
                  <>
                    {" "}
                    New <KeyboardArrowDownIcon />
                  </>
                )}
              </Button>
              {ishide && (
                <List sx={styles.list}>
                  {data.map((item: any, i: number) => {
                    return (
                      <ListItem
                        key={i.toString()}
                        onClick={() => handleList(item.title)}
                      >
                        {item.title}
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </Box>
            <Button sx={styles.tune}>Tune Policy</Button>
            <Link href="#">
              <Image src={link} alt="" width={20} height={20} />
            </Link>
          </Grid>
          <Grid xs={4} textAlign="right">
            <Button sx={styles.resolved}>Resolve</Button>
          </Grid>
        </Grid>
        <Box>
          {modelData.graph && <ReactEcharts option={modelData.graph} />}
        </Box>
        <Accordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}
          className="shadows"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={styles.accordianBg}
          >
            <Typography sx={styles.title}>
              <Image src={insights} alt="" style={styles.icon} />
              Insights
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.desc}>
            {modelData?.insights?.map((items: any, i: number) => {
              return (
                <Box
                  key={i.toString()}
                  display="flex"
                  gap="24px"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={styles.mainBox}
                >
                  <Box
                    display="flex"
                    gap="10px"
                    alignItems="center"
                    sx={styles.box}
                  >
                    <Image src={items.image} alt="" width={40} height={40} />
                    <Typography>{items.user}</Typography>
                  </Box>
                  <Box sx={styles.box}>
                    <Typography sx={styles.label}>Name</Typography>
                    <Typography variant="h6">{items.name}</Typography>
                  </Box>
                  <Box sx={styles.box}>
                    <Typography sx={styles.label}>Mesages</Typography>
                    <Box display="flex" alignItems="center" gap="11px">
                      <Typography variant="h6">{items.messages[0]}</Typography>
                      <Image src={arrowUp} alt="" width={15} height={15} />
                      <Typography sx={styles.msg}>
                        {items.messages[1]}
                        <span>from org</span>
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={styles.box}>
                    <Typography sx={styles.label}>Sessions</Typography>
                    <Box display="flex" alignItems="center" gap="11px">
                      <Typography variant="h6">{items.messages[0]}</Typography>
                      <Image src={arrowDown} alt="" width={15} height={15} />
                      <Typography sx={styles.msg}>
                        {items.messages[1]}
                        <span>from org</span>
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={styles.box}>
                    <Typography sx={styles.label}>Violations</Typography>
                    <Box display="flex" gap="10px">
                      {items?.vilations?.map((innerItem: any, i: number) => {
                        return (
                          <IconButton sx={styles.iconBtn} key={i.toString()}>
                            <Chip
                              label={innerItem.name}
                              sx={{
                                ...styles.severityChip,
                                color:
                                  innerItem.name === "1 Medium"
                                    ? Colors.brown
                                    : innerItem.name === "1 Critical"
                                    ? Colors.darkBrown
                                    : innerItem.name === "80 Low"
                                    ? Colors.textGreen
                                    : innerItem.name === "2 High"
                                    ? Colors.textHigh
                                    : "",
                                bgcolor:
                                  innerItem.name === "1 Medium"
                                    ? Colors.primaryWhite
                                    : innerItem.name === "1 Critical"
                                    ? Colors.secondaryWhite
                                    : innerItem.name === "80 Low"
                                    ? Colors.primaryGreen
                                    : innerItem.name === "2 High"
                                    ? Colors.defaultWhite
                                    : "",
                                p: 0,
                              }}
                              icon={
                                <CircleIcon
                                  sx={{
                                    fill:
                                      innerItem.name === "1 Medium"
                                        ? `${Colors.orange} !important`
                                        : innerItem.name === "1 Critical"
                                        ? `${Colors.darkBrown} !important`
                                        : innerItem.name === "2 High"
                                        ? Colors.textHight_102
                                        : innerItem.name === "80 Low"
                                        ? Colors.circleLow
                                        : `${Colors.defaultBrown} !important`,

                                    ...styles.severityLevel,
                                  }}
                                />
                              }
                            />
                          </IconButton>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box sx={styles.box}>
                    <Typography sx={styles.label}>Categories</Typography>
                    <Box display="flex">
                      <Typography>{items.categories[0]}</Typography>,
                      <Typography>{items.categories[1]}</Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel3")}
          onChange={handleChange("panel3")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={styles.accordianBg}
          >
            <Typography sx={styles.title}>
              <Image src={chat} alt="" style={styles.icon} />
              Evidence
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.desc}>
            {
              modelData?.name?.includes("Github Copilot collected and sent 3 API keys") ? 
              <>
                 <Grid container alignItems="flex-start" sx={styles.evidance_grid}>
                    <Grid xs={3}>
                      Secrets
                    </Grid>
                    <Grid xs={8} >
                      <Typography variant="h6" pb={2}>OpenAI API key: 7GubVRG******************************vdrRxb</Typography>
                      <Typography variant="h6" pb={2}>OpenAI API key: 7GubVRG******************************vdrRxb</Typography>
                      <Typography variant="h6">OpenAI API key: 7GubVRG******************************vdrRxb</Typography>
                    </Grid>
                  </Grid>
              </>
              :
              <>
                  <Grid container alignItems="center" sx={styles.evidance_grid}>
                    <Grid xs={3}>
                      Email
                    </Grid>
                    <Grid xs={8} display="flex" gap="10px">
                      <Chip label="user@ax.com" />
                      <Chip label="user@ax.com" />
                      <Chip label="user@ax.com" />
                      <Chip label="user@ax.com" />
                      <Chip label="user@ax.com" />
                      <Chip label="user@ax.com" />
                      <Chip label="user@ax.com" />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" sx={styles.evidance_grid}>
                    <Grid xs={3}>Credit Card</Grid>
                    <Grid xs={8} display="flex" gap="10px">
                      <Typography variant="h6">1008-****-****-****-9449</Typography>
                    </Grid>
                  </Grid>
              </>
              
            }
           

            <Grid container alignItems="center" sx={styles.evidance_grid}>
              <Grid xs={12}>Code</Grid>
              <Grid xs={12} sx={styles.code}>
                <pre style={{ margin: "0px", color: "#374151" }}>
                  {`
// Import the package here
import MyPackage from 'my-package';
// You can then use your package within this API route
export default function handler(req, res) {...
                  `}
                </pre>
                <Button
                  sx={{
                    color: "#2E90FA",
                    fontSize: "14px",
                    textTransform: "capitalize",
                  }}
                >
                  Show more...
                </Button>
              </Grid>
              <Button sx={styles.more}>
                Show more Evidence <SouthIcon />
              </Button>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel2")}
          onChange={handleChange("panel2")}
          sx={{ boxShadow: "unset !important" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={styles.accordianBg}
          >
            <Typography sx={styles.title}>
              <Image src={issuesby} alt="" style={styles.icon} />
              Issues Info
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.desc}>
            {
             modelData && modelData?.name?.includes("Github Copilot collected and sent 3 API keys") ? 
              <Box sx={styles.issuesInfoBox}>
                <Typography variant="h6">Violations</Typography>
                <Typography variant="h5">4</Typography>
              </Box>
              :
              modelData && modelData?.name?.includes("Github Copilot suggestion for vulnerable package was approved") ? 
              <Box sx={styles.issuesInfoBox}>
                <Typography variant="h6">Violations</Typography>
                <Typography variant="h5">3</Typography>
              </Box>
              :
              null
            }
            <Box>
              <Grid
                container
                spacing={2}
                sx={{ ...styles.descText, borderBottom: "1px solid #D0D5DD" }}
              >
                <Grid
                  item
                  sm={5}
                  xs={7}
                  sx={styles.margin}
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Typography sx={styles.voilation}>Severity</Typography>
                  <IconButton sx={styles.iconBtn}>
                    <Chip
                      label={modelData.severity}
                      sx={{
                        ...styles.severityChip,
                        color:
                          modelData.severity === "Medium"
                            ? Colors.brown
                            : modelData.severity === "Critical"
                            ? Colors.darkBrown
                            : modelData.severity === "Low"
                            ? Colors.textGreen
                            : modelData.severity === "High"
                            ? Colors.textHigh
                            : "",
                        bgcolor:
                          modelData.severity === "Medium"
                            ? Colors.primaryWhite
                            : modelData.severity === "Critical"
                            ? Colors.secondaryWhite
                            : modelData.severity === "Low"
                            ? Colors.primaryGreen
                            : modelData.severity === "High"
                            ? Colors.defaultWhite
                            : "",
                        p: 0,
                      }}
                      icon={
                        <CircleIcon
                          sx={{
                            fill:
                              modelData.severity === "Medium"
                                ? `${Colors.orange} !important`
                                : modelData.severity === "Critical"
                                ? `${Colors.darkBrown} !important`
                                : modelData.severity === "High"
                                ? Colors.textHight_102
                                : modelData.severity === "Low"
                                ? Colors.circleLow
                                : `${Colors.defaultBrown} !important`,

                            ...styles.severityLevel,
                          }}
                        />
                      }
                    />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  sm={4}
                  xs={4}
                  sx={styles.margin}
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Typography sx={styles.voilation}>Direction</Typography>
                  <Typography sx={styles.appex}>Inbound</Typography>
                </Grid>
                <Grid item sm={3} xs={7} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Last event</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.lastEvent}
                  </Typography>
                </Grid>
                <Grid item sm={5} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Name</Typography>
                  <Typography sx={styles.appex}>{modelData.name}</Typography>
                </Grid>
                <Grid item sm={4} xs={7} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Users</Typography>
                  <Box display="flex" gap="5px">
                    {modelData.users?.map((item: any, i: number) => {
                      const isLastItem = i === modelData.users.length - 1;
                      return (
                        <Typography sx={styles.appex} key={i.toString()}>
                          {item}
                          {!isLastItem && ","}
                        </Typography>
                      );
                    })}
                  </Box>
                </Grid>
                <Grid item sm={3} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Last event</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.lastEvent}
                  </Typography>
                </Grid>
                <Grid item sm={5} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>
                    Violation category
                  </Typography>
                  <Typography sx={styles.appex}>PII, PCI</Typography>
                </Grid>
                <Grid item sm={4} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Source</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.policiesData && modelData.policiesData[0].source}
                  </Typography>
                </Grid>
                <Grid item sm={3} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Session ID</Typography>
                  <Typography
                    sx={styles.appex}
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    Multiple session IDs
                    <Link
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        color: "#2E90FA",
                        textDecoration: "none",
                      }}
                    >
                      Get all
                      <EastIcon style={{ width: "18px" }} />
                    </Link>
                  </Typography>
                </Grid>

                <Grid item sm={5} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Violations</Typography>
                  <Typography
                    sx={styles.appex}
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    17
                    <EastIcon style={{ width: "18px", color: "#2E90FA" }} />
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Engine</Typography>
                  <Typography sx={styles.appex} display="flex" gap="10px">
                    <Chip
                      label="Azure"
                      variant="outlined"
                      sx={{
                        ...styles.severityChip2,
                        color: "#374151",
                        p: 0,
                      }}
                    />
                    <Chip
                      label="ChatGPT"
                      variant="outlined"
                      sx={{
                        ...styles.severityChip2,
                        color: "#374151",
                        p: 0,
                      }}
                    />
                  </Typography>
                </Grid>
                <Grid item sm={3} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Assigned</Typography>
                  <Typography
                    sx={styles.appex}
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    Hadar Amran
                  </Typography>
                </Grid>

                <Grid item sm={5} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Sub-Categories</Typography>
                  <Typography
                    sx={styles.appex}
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    Email, SSN
                    <EastIcon style={{ width: "18px", color: "#2E90FA" }} />
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>First event</Typography>
                  <Typography sx={styles.appex}>
                    Feb 8, 2024, 08:57 PM
                  </Typography>
                </Grid>
                <Grid item sm={3} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Status</Typography>
                  <Typography
                    sx={styles.appex}
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    <IconButton sx={styles.iconBtn}>
                      <Chip
                        label={modelData.status}
                        sx={{
                          ...styles.severityChip,
                          color: Colors.textGreen,
                          bgcolor: Colors.primaryGreen,
                          p: 0,
                        }}
                        icon={
                          <CircleIcon
                            sx={{
                              fill: Colors.circleLow,
                              ...styles.severityLevel,
                            }}
                          />
                        }
                      />
                    </IconButton>
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="h5" sx={styles.tableVoliation}>
                Violations <span>(64)</span>
              </Typography>
              <Box sx={styles.tableBorder}>
                <Table size="small" aria-label="purchases">
                  <TableHead sx={styles.nestedHead}>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Last event</TableCell>
                      <TableCell>Chat</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Violation Type</TableCell>
                      <TableCell>Severity</TableCell>
                      <TableCell>User Email</TableCell>
                      <TableCell>Session ID</TableCell>
                      <TableCell>Model</TableCell>
                      <TableCell>Source</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={styles.nestedBody}>
                    {modelData.policiesData?.map((items: any) => {
                      return (
                        <TableRow key={items.id} sx={styles.nestedTbody}>
                          <TableCell component="th" scope="row">
                            {items.id}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <Typography sx={styles.nestedDate}>
                              {items.date}
                            </Typography>
                          </TableCell>
                          <TableCell>Subject of the chat</TableCell>
                          <TableCell>{items.role}</TableCell>
                          <TableCell>
                            <Chip
                              label={items.voilationType}
                              sx={styles.nestedChip}
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton sx={styles.iconBtn}>
                              <Chip
                                label={items.severity}
                                sx={{
                                  ...styles.severityChip,
                                  color:
                                    items.severity === "Medium"
                                      ? Colors.brown
                                      : items.severity === "Critical"
                                      ? Colors.darkBrown
                                      : items.severity === "Low"
                                      ? Colors.textGreen
                                      : items.severity === "High"
                                      ? Colors.textHigh
                                      : "",
                                  bgcolor:
                                    items.severity === "Medium"
                                      ? Colors.primaryWhite
                                      : items.severity === "Critical"
                                      ? Colors.secondaryWhite
                                      : items.severity === "Low"
                                      ? Colors.primaryGreen
                                      : items.severity === "High"
                                      ? Colors.defaultWhite
                                      : "",
                                  p: 0,
                                }}
                                icon={
                                  <CircleIcon
                                    sx={{
                                      fill:
                                        items.severity === "Medium"
                                          ? `${Colors.orange} !important`
                                          : items.severity === "Critical"
                                          ? `${Colors.darkBrown} !important`
                                          : items.severity === "High"
                                          ? Colors.textHight_102
                                          : items.severity === "Low"
                                          ? Colors.circleLow
                                          : `${Colors.defaultBrown} !important`,

                                      ...styles.severityLevel,
                                    }}
                                  />
                                }
                              />
                            </IconButton>
                          </TableCell>
                          <TableCell sx={{ color: Colors.skyBlue }}>
                            {items.userEmail}
                          </TableCell>
                          <TableCell sx={{ color: Colors.skyBlue }}>
                            {items.sessionId}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={items.model}
                              variant="outlined"
                              sx={styles.modelChip}
                            />
                          </TableCell>
                          <TableCell>{items.source}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
export default ModelAccordian;
