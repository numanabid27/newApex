import React from "react";
import { styles } from "./allTop-issues.style";
import { Box, Typography, Grid, Chip, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import language from "@/common/assets/images/language.svg";
import keys from "@/common/assets/images/key_off.svg";
import danger from "@/common/assets/images/danger.svg";
import hand from "@/common/assets/images/hand.svg";
import searching from "@/common/assets/images/searching.svg";
import { FirstComponent } from "./components/firstComponent";
import { SecondComponent } from "./components/secondComponent";
import { ThirdComponent } from "./components/thirdComponent";
import { FourthComponent } from "./components/fourthComponent";
import { FifthComponent } from "./components/fifthComponent";
import { SixthComponent } from "./components/sixthComponent";
import more from "@/common/assets/images/more_vert.svg";
import useTopIssues from "./use-allTop-issues.hook";

const All_TOP_ISSUES = [
  {
    id: 1,
    value: FirstComponent,
    linkText: "Suspend User",
    url: "",
    btnImage: danger,
  },
  {
    id: 2,
    value: SecondComponent,
    linkText: "Freeze Engine",
    url: "",
    btnImage: hand,
  },
  {
    id: 3,
    value: ThirdComponent,
    linkText: "Investigate",
    url: "",
    btnImage: searching,
  },
  {
    id: 4,
    value: FourthComponent,
    linkText: "Restrict Access",
    url: "",
    btnImage: keys,
  },
  {
    id: 5,
    value: FifthComponent,
    linkText: "Investigate",
    url: "",
    btnImage: searching,
  },
  {
    id: 6,
    value: SixthComponent,
    linkText: "Sessions Explorer",
    url: "",
    btnImage: language,
  },
];

export const AllTopIssues = ({ hideElement, pagination, paramsFlag }: any) => {
  const {
    currentItems,
    handleNext,
    handlePrevious,
    currentPage,
    ITEMS_PER_PAGE,
  } = useTopIssues({ All_TOP_ISSUES });
  return (
    <>
      <Box>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={styles.top_rows}
        >
          <Grid item xs={5}>
            <Typography sx={styles.topText}>Top Issues</Typography>
          </Grid>
          <Grid item xs={5} sx={styles.more_row}>
            {hideElement && (
              <Typography sx={styles.topbadge}>
                <span style={styles.bold}> All </span> / Posture / Runtime /
                Usage
              </Typography>
            )}

            <Image src={more} alt="" onClick={() => alert("APEX")} />
          </Grid>
        </Grid>

        <>
          {pagination ? (
            <Box>
              {currentItems.map((item: any) => {
                return (
                  <Grid
                    key={item.id}
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    sx={styles.top_issue_row}
                  >
                    <Grid
                      item
                      sm={8.1}
                      xs={12}
                      className={pagination && "trues"}
                    >
                      <item.value paramsFlag={paramsFlag} />
                    </Grid>
                    <Grid item sm={3.9} xs={12} sx={styles.badgeBtn}>
                      <Link
                        href={
                          item.linkText === "Suspend User"
                            ? "/policies"
                            : item.linkText === "Freeze Engine"
                            ? "/engines"
                            : item.linkText === "Investigate" ||
                              item.linkText === "Sessions Explorer"
                            ? "/session-explorer"
                            : ""
                        }
                      >
                        <Image src={item.btnImage} alt="" />
                        {item.linkText}
                      </Link>
                    </Grid>
                  </Grid>
                );
              })}
            </Box>
          ) : (
            <Box>
              {All_TOP_ISSUES.map((item: any) => {
                return (
                  <Grid
                    key={item.id}
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    sx={styles.top_issue_row}
                  >
                    <Grid item sm={8.7} xs={12}>
                      <item.value paramsFlag={paramsFlag} />
                    </Grid>
                    <Grid item sm={3.3} xs={12} sx={styles.badgeBtn}>
                      <Link
                        href={
                          item.linkText === "Suspend User"
                            ? 
                            {
                              pathname: "/policies",
                              query: {
                                user: "PII",
                              },
                            }
                            : item.linkText === "Freeze Engine"
                            ? "/engines"
                            : item.linkText === "Investigate" ||
                              item.linkText === "Sessions Explorer"
                            ? {
                              pathname: "/session-explorer/session-word-cloud",
                              query: {
                                user: "Google Bard",
                              },
                            }
                            : ""
                        }
                        
                      >
                        <Image src={item.btnImage} alt="" />
                        {item.linkText}
                      </Link>
                    </Grid>
                  </Grid>
                );
              })}
            </Box>
          )}
        </>

        {pagination && (
          <Box
            className="d-flex justify-between align-center"
            sx={styles.buttonGrid}
          >
            <Button
              disabled={currentPage === 1}
              onClick={handlePrevious}
              variant="outlined"
              sx={styles.topIssuesBtns}
            >
              Previous
            </Button>
            <Typography sx={styles.topIssuesValue}>
              {`${currentPage} out of ${Math.ceil(
                All_TOP_ISSUES.length / ITEMS_PER_PAGE
              )}`}
            </Typography>
            <Button
              disabled={currentPage * ITEMS_PER_PAGE >= All_TOP_ISSUES.length}
              onClick={handleNext}
              variant="outlined"
              sx={styles.topIssuesBtns}
            >
              Next
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};
