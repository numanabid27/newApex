import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Image from "next/image";

import { styles } from "./severity.style";

import useCreatePolicies from "../../use-createPolicies.hook";
import { useEffect, useState } from "react";

const Severity = ({title, img, severity, ltr}:any) => {
  const { handleClick, isHide, setIsHide } =
    useCreatePolicies();

  const [isValue, setIsValue] = useState();
  const handleClicked = (e: any) => {
    setIsValue(e);
  };

  useEffect(() => {
    setIsHide(false);
  }, [isValue]);

  return (
    <>
      <Box>
        <Button sx={styles.dropdwonButton} onClick={handleClick}>
          {isValue ? (
            <>{isValue}</>
          ) : (
            <>
            {
              ltr ? 
              <>
                {title}
                <Image src={img} alt="" />
              </>
              :
              <>
                <Image src={img} alt="" />
                {title}
              </>
            }
              
            </>
          )}
        </Button>
        {isHide && (
          <Box sx={ltr ? styles.dropdownStyle2 : styles.dropdownStyle}>
            {severity.map((item: any, i: number) => (
              <Button
                key={i.toString()}
                sx={[styles.typography, isValue == item.label && styles.selected]}
                onClick={() => handleClicked(item.label)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Severity;
