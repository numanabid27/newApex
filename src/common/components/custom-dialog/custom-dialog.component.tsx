import { ModelData } from "@/components/policies/components/model-data/components/model-data/model-data.component";
import { SessionAccordion } from "@/components/session-explorer/components/session-accordion/session-accordion.component";
import CloseIcon from "@mui/icons-material/Close";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Box, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useState } from "react";
import ModelAccordian from "../model-accordion/model-accordion.component";
import { styles } from "./custom-dialogue.style";
import slack from "@/common/assets/images/slacke.svg"

import Image from "next/image";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomDialog({
  thead,
  openModal,
  setOpenModal,
  newData,
  selectedRow,
  setIsModel,
  issues,
  isMessage=false
}: any) {
  const [expandValue, setExpandValue] = useState(true);
  return (
    <>
      <BootstrapDialog
        onClose={() => setOpenModal(false)}
        aria-labelledby="customized-dialog-title"
        open={openModal}
        className={`${
          issues ? "issuesWidth" : ""
        } custom-dialogue_class z_index`}
      >
        <DialogContent dividers sx={{ padding: "0px !important" }}>
          {thead === "policy" && (
            <ModelData
              selectedRow={selectedRow}
              setIsModel={setIsModel}
              setOpenModal={setOpenModal}
            />
          )}
          {thead === "session" && <SessionAccordion newData={newData} isMessage={isMessage} />}
          {thead === "issue" && <ModelAccordian modelData={openModal} />}
        </DialogContent>
        {thead == "session" && (
          <Grid container spacing={2} sx={styles.policyModel} gap="5px">
            <Grid item xs={8} sm={3.3}>
              <Link href="#" style={styles.btns}>
                <Image src={slack} alt="" width={15} height={15} style={{marginRight:'10px'}} />
                Share to Slack
              </Link>
            </Grid>
            <Grid item xs={8} sm={3.2}>
              <Link href="#" style={styles.btns}>
                <MailOutlineIcon sx={styles.doneIcon} />
                Share to Email
              </Link>
            </Grid>
          </Grid>
        )}
      </BootstrapDialog>
    </>
  );
}
