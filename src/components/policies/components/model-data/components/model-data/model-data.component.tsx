import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { Issue } from "../Issue/issue.component";
import { Description } from "../description/description.component";
import { UseBy } from "../use-by/use-by.component";
import { PolicyAccordian } from "../../model-accordian";
import { ModalDataStyle } from "./modal-data.style";
import { ButtonComponent } from "@/common/components/button/button";
import pencil from "@/common/assets/images/pencil.svg";
import view from "@/common/assets/images/view.svg";
import copy from "@/common/assets/images/copy.svg"
import { useState } from "react";

export const ModelData = ({ selectedRow, setIsModel, setOpenModal}: any) => {

  const PolicyData = [
   
    {
      id: 1,
      title: "Issues over time",
      desc: Issue,
    },
  ];
  
  return (
    <>
      <Box sx={ModalDataStyle.ModalGrid}>
          
        <Grid container mb={8}>
          <Grid xs={9} display="flex" gap="10px">
            <ButtonComponent title="Edit" icon={pencil} />
            <ButtonComponent title="View" icon={view} />
            <ButtonComponent title="Duplicate" icon={copy} />
          </Grid>
          <Grid xs={3} display="flex" justifyContent="flex-end">
            <Button sx={ModalDataStyle.delete} onClick={()=>{setIsModel(true), setOpenModal(false)}}>Delete</Button>
          </Grid>
        </Grid>

        <Typography sx={ModalDataStyle.ModalTypo}>
          {selectedRow?.policyName}
        </Typography>
        {
          selectedRow?.longDesc?.map((item:any, i: number)=>{
            return(
              <Typography sx={ModalDataStyle.ModalDesc} key={i.toString()} pb={2}>
                {item.desc}
              </Typography>
            )
          })
        }
       
        <Box mt={6}>
          <Typography pb={3} fontSize="14px" color="#667084">Groups</Typography>
          <Box display="flex" gap="10px">
            {
              selectedRow.groups.groupName?.map((items:any, i:number)=>(
                <Typography variant="h6" key={i.toString()} sx={ModalDataStyle.groupNames}>{items.name1}</Typography>
              ))
            }
          </Box>
        </Box>

        {/* policy suggestions */}
        <Box sx={ModalDataStyle.suggestion}>
          <Grid container justifyContent="space-between" mb={3.2}>
            <Grid sm={5.5} xs={7}>
              <Typography variant="h6" fontWeight={400} color="#156FEE">Policy suggestion </Typography>
            </Grid>
            <Grid sm={5.5} xs={5} display="flex" justifyContent="flex-end">
              <Button sx={ModalDataStyle.button}>Close</Button>
            </Grid>
          </Grid>

          <Box sx={ModalDataStyle.morePolicy}>
            <Typography variant="h6">Policy name</Typography>
            <Typography>This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et This is the description of the policy</Typography>
            <Button>Active</Button>
          </Box>

          <Box sx={ModalDataStyle.morePolicy}>
            <Typography variant="h6">Policy name 2</Typography>
            <Typography>This is the description of the policy lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et This is the description of the policy</Typography>
            <Button>Active</Button>
          </Box>
        </Box>

      </Box>
     

      {/* <Grid container sx={ModalDataStyle.ModalContainer}>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Action</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={ModalDataStyle.ModalValue}>
            {selectedRow?.type}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Source</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={ModalDataStyle.ModalValue}>
            {selectedRow?.policyName}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Engines</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={ModalDataStyle.ModalValue}>
            {selectedRow?.engine}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Severity Level</Typography>
        </Grid>
        <Grid item xs={8}>
          <Chip
            label={selectedRow?.severityLevel}
            sx={{
              ...ModalDataStyle.ModalChip,
              background:
                selectedRow?.severityLevel === "Critical"
                  ? "#FEF3F2"
                  : selectedRow?.severityLevel === "High"
                  ? "#FFF6ED"
                  : selectedRow?.severityLevel === "Medium"
                  ? "#FFFAEB"
                  : selectedRow?.severityLevel === "Low"
                  ? "#ECFDF3"
                  : "",
              color:
                selectedRow?.severityLevel === "Critical"
                  ? "#B42318"
                  : selectedRow?.severityLevel === "High"
                  ? "#C4320A"
                  : selectedRow?.severityLevel === "Medium"
                  ? "#B54708"
                  : selectedRow?.severityLevel === "Low"
                  ? "#027A48"
                  : "",
            }}
            icon={
              <CircleIcon
                sx={{
                  ...ModalDataStyle.ModalCircle,
                  fill:
                    selectedRow?.severityLevel === "Critical"
                      ? "#F04438"
                      : selectedRow?.severityLevel === "High"
                      ? "#FB6514"
                      : selectedRow?.severityLevel === "Medium"
                      ? "#F79009"
                      : selectedRow?.severityLevel === "Low"
                      ? "#12B76A"
                      : "",
                }}
              />
            }
          />
        </Grid>
      </Grid> */}

      <Box sx={ModalDataStyle.ModalData}>
        {PolicyData.map((item: any) => {
          return (
            <Box key={item.id} sx={ModalDataStyle.ModalAccordin}>
              <PolicyAccordian
                id={item.id}
                title={item.title}
                DescCom={item.desc}
                selectedRow={selectedRow}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};
