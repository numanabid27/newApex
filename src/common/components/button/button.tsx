import React from "react";
import { styles } from "./button.style";
import { Button } from "@mui/material";
import Image from "next/image";

export function ButtonComponent({ icon, title }: any){
  return (
    <Button sx={styles.button}>
      <Image src={icon} alt="apex" width={18} height={18} />
      {title}
    </Button>
  );
};


