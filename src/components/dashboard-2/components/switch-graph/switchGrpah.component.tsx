import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import apx from "@/common/assets/images/apx.svg";
import Image from "next/image";
import leftarrow from "@/common/assets/images/rightArrow.png";
import rightArrow from "@/common/assets/images/leftArrow.png";
import graphNode2 from "@/common/assets/images/graphNode2.svg";
import danger from "@/common/assets/images/gpp_maybe.svg";
import multiLayer from "@/common/assets/images/multiLayer.svg";
import safe from "@/common/assets/images/safe-gaurd.svg";
import { styles } from "./graph.style";

const SwitchGraph2 = () => {
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    setIsHover(true);
  }, []);
  const data = [
    {
      id: 1,
      color: "#B42318",
      title: "Critical",
      value: "0",
    },
    {
      id: 2,
      color: "#F79009",
      title: "Medium",
      value: "2",
    },
    {
      id: 3,
      color: "#F04438",
      title: "High",
      value: "5",
    },
    {
      id: 4,
      color: "#FACF15",
      title: "Low",
      value: "6",
    },
  ];

  const voilations = [
    {
      id: 1,
      title: "Data exposure",
      value: "103",
    },
    {
      id: 2,
      title: "AI threats",
      value: "12",
    },
    {
      id: 3,
      title: "AI misconduct",
      value: "102",
    },
  ];
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="27px 0px"
      sx={!isHover ? styles.switchBox2 : styles.switchBox}
    >
      <Box display="flex" alignItems="flex-end">
        <Box>
          {voilations.map((item: any, i: number) => {
            return (
              <Typography
                display="flex"
                sx={styles.dangerText}
                key={i.toString()}
              >
                <Image
                  src={danger}
                  draggable="false"
                  alt=""
                  width={13}
                  height={13}
                />
                <span>{item.value}</span>
                {item.title}
              </Typography>
            );
          })}
        </Box>
        <Box>
          <Image
            src={graphNode2}
            draggable="false"
            alt=""
            width={65}
            height={85}
          />
        </Box>
      </Box>
      <Box sx={styles.leftText}>
        <Typography variant="h6">574</Typography>
        <Typography sx={styles.typography}>Alerts</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <Image
          src={leftarrow}
          draggable="false"
          alt="abc"
          width={100}
          height={9}
        />
        <Image src={apx} draggable="false" alt="abc" width={100} height={100} />
        <Image
          src={rightArrow}
          draggable="false"
          alt="abc"
          width={100}
          height={9}
        />
      </Box>
      <Box sx={styles.rightText}>
        <Typography variant="h6">64</Typography>
        <Typography sx={styles.typography}>Issues</Typography>
      </Box>
      <Box display="flex" gap="10px" width={450}>
        <Box>
          <Image
            src={multiLayer}
            alt=""
            draggable="false"
            width={120}
            height={125}
          />
        </Box>
        <Box width={'100%'}>
          <Typography sx={styles.multiSide}>
            <span>51</span>
            Resolved
          </Typography>

          <Box sx={styles.sp}>
            <Typography sx={styles.openIssue}>Open issues</Typography>
            <Grid container>
              {data.map((item: any, i: number) => {
                return (
                  <Grid
                    key={i.toString()}
                    xs={12} md={3}
                    display="flex"
                    alignItems="center"
                    gap="7px"
                    sx={styles.voilation}
                  >
                    <span style={{ background: item.color, width: '3px', height: '40px' }}></span>
                    <Box>
                      <Typography variant="h6">{item.value}</Typography>
                      <Typography sx={styles.voilationTitle}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
              <Grid></Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SwitchGraph2;
