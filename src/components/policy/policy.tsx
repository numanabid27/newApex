import React, { useState } from "react";
import CreatePolicy from "../create-policy/createPolicy.component";
import Policies from "../policies/policies.component";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import Link from "next/link";
import { ButtonComponent } from "@/common/components/button/button";
import AddIcon from "@mui/icons-material/Add";
import importImg from "@/common/assets/images/import.svg";
import exportImg from "@/common/assets/images/export.svg";
import switchGraph from "@/common/assets/images/switchGraph.svg";
import { styles } from "./policy.style";
import { style } from "../create-policy/createPolicy.style";

export const PolicyPage = () => {
  const [isPolicy, setIsPolicy] = useState(false);

  const [selectedValue, setSelectedValue] = useState('Policies');
  const [counter, setCounter] = useState<any>(65);
  const [skipClickCount, setSkipClickCount] = useState<number>(0);
  const [showToaster, setShowToaster] = useState(true);

  const mockupData= [
    {
      text1: "outside the Executive department",
      text2: "have requested access to",
      text3: "Nexus project.",
      text4: "",
      count: 65,
    },
    {
      text1: "not in security department",
      text2: "asked to",
      text3: "analyze Incident report",
      text4: "data",
      count: 12,
    },
    {
      text1: "not in Legal department",
      text2: "asked to",
      text3: "share Contract file",
      text4: "data",
      count: 10,
    }
  ];
  
  const handleSkipClick = () => {
    setSkipClickCount((prev) => prev + 1);
    if(skipClickCount > 1){
      setSkipClickCount(0);
    }
    if (skipClickCount === 0) {
      setCounter(10);
    } else if (skipClickCount === 1) {
      setCounter(12);
    }
    
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };


  return (
    <>
      <FormControl>
        <RadioGroup sx={styles.topFiltersWraper}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={selectedValue}
          onChange={handleChange}
        >
          <FormControlLabel value="Policies" control={<Radio />} label="Policies" sx={styles.filterBox} />
          <FormControlLabel value="Exclusions" control={<Radio />} label="Exclusions" sx={styles.filterBox} />
        </RadioGroup>
      </FormControl>
      {selectedValue === "Policies" ? (
        <>
          {showToaster &&
            <Box>
              <Box sx={styles.toasterBox}>
                <Box sx={styles.svgBox}>
                  <Button onClick={()=>setShowToaster(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.809 7.19102C17.0637 7.44571 17.0637 7.85864 16.809 8.11333L8.11333 16.809C7.85864 17.0637 7.44571 17.0637 7.19102 16.809C6.93633 16.5543 6.93633 16.1414 7.19102 15.8867L15.8867 7.19102C16.1414 6.93633 16.5543 6.93633 16.809 7.19102Z" fill="#334155" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.19102 7.19102C7.44571 6.93633 7.85864 6.93633 8.11333 7.19102L16.809 15.8867C17.0637 16.1414 17.0637 16.5543 16.809 16.809C16.5543 17.0637 16.1414 17.0637 15.8867 16.809L7.19102 8.11333C6.93633 7.85864 6.93633 7.44571 7.19102 7.19102Z" fill="#334155" />
                    </svg>
                  </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6054 2.61028C11.0257 2.36537 11.5035 2.23633 11.9899 2.23633C12.4764 2.23633 12.9541 2.36537 13.3745 2.61028C13.7944 2.85497 14.1419 3.20657 14.3818 3.62927C14.382 3.62966 14.3822 3.63005 14.3824 3.63044L22.3794 17.6252C22.3798 17.6258 22.3801 17.6263 22.3804 17.6268C22.621 18.0443 22.7478 18.5176 22.7479 18.9995C22.748 19.482 22.6212 19.956 22.3802 20.374C22.1391 20.792 21.7924 21.1392 21.3747 21.3807C20.957 21.6223 20.4832 21.7497 20.0007 21.7502H4.00302C3.51946 21.7539 3.04345 21.6301 2.62301 21.3911C2.20151 21.1515 1.85084 20.8047 1.60654 20.386C1.36225 19.9672 1.23301 19.4912 1.23194 19.0064C1.23087 18.5222 1.35767 18.0463 1.5995 17.6268C1.59981 17.6263 1.60012 17.6257 1.60043 17.6252L9.59743 3.63044C9.59765 3.63005 9.59787 3.62966 9.59809 3.62927C9.83792 3.20657 10.1855 2.85497 10.6054 2.61028ZM11.9899 3.73633C11.7688 3.73633 11.5517 3.79498 11.3606 3.90631C11.1696 4.01763 11.0115 4.17764 10.9024 4.37001L10.9011 4.37233L2.89944 18.3753C2.78924 18.5661 2.73145 18.7827 2.73194 19.0031C2.73242 19.2235 2.79117 19.4398 2.90221 19.6301C3.01325 19.8205 3.17265 19.9781 3.36424 20.087C3.55583 20.1959 3.77281 20.2522 3.99318 20.2503L3.99993 20.2502L19.9992 20.2502C20.2185 20.25 20.4339 20.1921 20.6237 20.0823C20.8136 19.9725 20.9712 19.8147 21.0807 19.6247C21.1903 19.4347 21.2479 19.2192 21.2479 18.9999C21.2478 18.7806 21.1901 18.5652 21.0804 18.3752L21.0787 18.3723L13.0787 4.37233L13.0774 4.37001C12.9684 4.17764 12.8103 4.01763 12.6193 3.90631C12.4282 3.79498 12.211 3.73633 11.9899 3.73633Z" fill="#991B1B" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill="#991B1B" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 17C11.25 16.5858 11.5858 16.25 12 16.25H12.01C12.4242 16.25 12.76 16.5858 12.76 17C12.76 17.4142 12.4242 17.75 12.01 17.75H12C11.5858 17.75 11.25 17.4142 11.25 17Z" fill="#991B1B" />
                  </svg>
                  <Typography sx={styles.toasterHeading}>Potential Data Exposure</Typography>
                </Box>
                <Typography sx={styles.toasterHeading2}>Users <span>{mockupData[skipClickCount].text1}</span> {mockupData[skipClickCount].text2} <span>{mockupData[skipClickCount].text3} </span>{mockupData[skipClickCount].text4}</Typography>
                <Box sx={styles.tagsWraper}>
                  <Box sx={styles.tagsWraperCenter}>
                    <Box sx={styles.toasterTag}>Unusual evidence</Box>
                    <Box sx={styles.counterWraper}>
                      <Typography sx={styles.counter65}>{mockupData[skipClickCount].count}</Typography>
                      <Typography sx={styles.detectedMessages}>detected messages</Typography>
                    </Box>
                  </Box>
                  <Box sx={styles.buttonsWraper}>
                    <Button sx={styles.buttonskip} onClick={handleSkipClick}
                    >Skip</Button>
                    <Button sx={{
                      ...styles.buttonskip,
                      ...styles.buttonskipPrevent
                    }}>Prevent</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          }

          {isPolicy ? <Policies /> : <CreatePolicy />}
        </>

      ) : (
        <Typography my={5}>No data found</Typography>
      )}
    </>
  );
};
