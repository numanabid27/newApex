"use client";

import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";
import { POLICIES_LISTENING } from "./policies.constant";
import usePolicies from "./use-policies.hook";
import { styles } from "./policy.style";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { ButtonComponent } from "@/common/components/button/button";
import restore from "@/common/assets/images/restore.svg";
import importImg from "@/common/assets/images/import.svg";
import exportImg from "@/common/assets/images/export.svg";
import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
import Image from "next/image";
import policies from "@/common/assets/images/policies.svg";
import CheckBoxComponent from "../create-policy/component/checkbox.component";
import { useState } from "react";

function Policies() {
  const {
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    setIsModel,
    isModel,
  } = usePolicies();

  const policiesTypes = [
    { id: 1, value: "GDPR", checkedValue: true, enable: true },
    { id: 2, value: "Nist Ai RMF", checkedValue: true, enable: true },
    { id: 3, value: "HIPAA", checkedValue: false, enable: false },
    { id: 4, value: "EU AI Act", checkedValue: false, enable: false },
    { id: 5, value: "Mitre ATLAS", checkedValue: true, enable: true },
  ];

  // for future purpose
  const updatePolicyType = (data: any, id: any) => {
    // return policiesTypes.map((policy) => {
    //   if (policy.id === id) {
    //     return { ...policy, checkedValue: data };
    //   }
    //   console.log(policy);
    //   return policy;
    // });
  };
  // console.log(policiesTypes);
  return (
    <Grid container item xs={12} sx={styles.pliciesSec}>
      <Grid container justifyContent="space-between" mb={6} mt={4}>
        <Grid sm={4} xs={12} mb={{sm:0, xs:3}}>
          <Link href="/policies/create-policy" className="addButton">
            <AddIcon />
            New policy
          </Link>
        </Grid>
        <Grid sm={8} xs={12}>
        <Box display="flex" gap="10px" justifyContent={{sm:'flex-end', xs:"flex-start"}}>
            <ButtonComponent title="Restore" icon={restore} />
            <ButtonComponent title="Import" icon={importImg} />
            <ButtonComponent title="Export" icon={exportImg} />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ margin: "6px 0 15px 10px" }}>
        {policiesTypes?.map((item, i) => {
          return (
            <CheckBoxComponent
              id={item?.id}
              key={i.toString()}
              label={item?.value}
              policy={true}
              checkedValue={item?.checkedValue}
              enable={item?.enable}
              onChangeValue={updatePolicyType}
            />
          );
        })}
        {/* <CheckBoxComponent label="HIPAA" policy={true} />
        <CheckBoxComponent label="HIPAA" policy={true} /> */}
      </Box>

      {POLICIES_LISTENING.map((items: any, i: number) => {
        return (
          <Grid
            container
            sx={styles.polices_grid}
            key={i.toString()}
            onClick={() => {
              setOpenModal(true);
              setSelectedRow(items);
            }}
          >
            <Grid sm={5.8} xs={12} display="flex" alignItems="center" gap="48px">
              <Box onClick={(e: any) => e.stopPropagation()}>
                <CustomSwitch defaultChecked />
              </Box>
              <Box display="flex" alignItems="center" gap="20px">
                <Image src={policies} alt="policies" width={79} height={80} />
                <Box sx={styles.policies_info}>
                  <Typography variant="h5">{items.policyName}</Typography>
                  <Typography variant="h6">{items.policyDesc}</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid sm={5.8} xs={12} sx={styles.group}>
              <Typography variant="h6" mb={2}>
                {items.groups.title}
              </Typography>
              <Box display="flex" gap="8px">
                {items.groups.groupName.map((innerItem: any, i: number) => (
                  <Chip
                    label={innerItem.name1}
                    sx={styles.groupChip}
                    variant="outlined"
                    key={i.toString()}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        );
      })}

      {isModel && (
        <Box sx={styles.deleteBackdrop}>
          <Box sx={styles.deleteModel}>
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
                sx={styles.cancel}
              >
                Cancel
              </Button>
              <Button sx={{ background: "#FEF3F2", color: "#B42318" }}>
                Yes, delete it
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
      />
    </Grid>
  );
}

export default Policies;
