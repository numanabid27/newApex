import React, { useState } from "react";
import CreatePolicy from "../create-policy/createPolicy.component";
import Policies from "../policies/policies.component";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import { ButtonComponent } from "@/common/components/button/button";
import CheckBoxComponent from "../create-policy/component/checkbox.component";
import AddIcon from "@mui/icons-material/Add";
import importImg from "@/common/assets/images/import.svg";
import exportImg from "@/common/assets/images/export.svg";
import switchGraph from "@/common/assets/images/switchGraph.svg";

export const PolicyPage = () => {
  const [isPolicy, setIsPolicy] = useState(false);

  return (
    <>
      <Grid container justifyContent="space-between" mb={6} mt={6} sx={{paddingLeft: "4%", paddingRight:" 4%"}}>
        <Grid sm={4} xs={12} mb={{ sm: 0, xs: 3 }}>
          <Link href="#" className="addButton">
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
            <ButtonComponent
              title="Switch Policy"
              handleClick={() => {
                setIsPolicy(!isPolicy);
              }}
              icon={switchGraph}
            />
            <ButtonComponent title="Import company policy" icon={importImg} />
            <ButtonComponent title="Export" icon={exportImg} />
          </Box>
        </Grid>
      </Grid>


      {isPolicy ? <Policies /> : <CreatePolicy />}
    </>
  );
};
