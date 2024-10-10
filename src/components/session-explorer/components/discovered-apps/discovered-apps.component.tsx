import * as React from 'react';
import { Box, Button, Chip, Grid, Menu, MenuItem, Typography } from "@mui/material";

import CustomTextField from "@/common/components/custom-textfield/custom-textfield.component";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import menu from "@/common/assets/images/more_vert.svg";
import multiSelectIcon from "@/common/assets/images/multiSelect.svg";
import ban from "@/common/assets/images/ban.svg";
import usersList from "@/common/assets/images/usersList.svg";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import {
  DISCOVERED_APP_TABLE_DATA,
  FILTERES_DATA,
  SELECTOR_VALUES,
} from "./discovered-apps.constant";
import { styles } from "./discovered-apps.style";
import claude from "@/common/assets/images/claude.png";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import MultipleSelectCheckmarks from './components/selector.componet';
import { actions, multiAction, multiActionApplication, multiActionDepartments, multiActionRisk } from './components/selector.constant';
import MultiSelect from './components/selector.componet';
import CustomDialog from '@/common/components/custom-dialog/custom-dialog.component';

interface FormData { }

export default function DiscoveredApps() {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState<any>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 

  
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);

  };
  const handleClose = (e: any) => {
    e.stopPropagation();
    setAnchorEl(null);
  };
  const methods = useForm<FormData>({
    mode: "onChange",
    defaultValues: {},
  });

  const DISCOVERED_APP_TABLE_HEADER = [
    {
      id: 1,
      header: "Application",
      accessor: "application",
      cell: (data: any) => {
        return (
          <Box sx={styles.applicationCell}>
            <Image src={data.img} alt={data.name} width={20} height={20} />
            <Typography variant="body1">{data.name}</Typography>
          </Box>
        );
      },
    },
    {
      id: 2,
      header: "Category",
      accessor: "category",
      cell: (data: any) => {
        return (
          <Box sx={styles.categoryCell}>
            {data.map((item: any, i: any) => (
              <Chip
                sx={styles.cellChip}
                key={item.id}
                label={item.name}
                variant="outlined"
              />
            ))}
          </Box>
        );
      },
    },
    {
      id: 3,
      header: "Users' Departments",
      accessor: "user_dep",
      cell: (data: any) => {
        return (
          <Box sx={styles.categoryCell}>
            {data.map((item: any, i: any) => (
              <Chip
                sx={styles.cellChip}
                key={item.id}
                label={
                  <>
                    {item.name}
                    {item.img && (
                      <Image
                        src={item.img}
                        alt="ban"
                        width={16}
                        height={16}
                        style={{ paddingTop: '2px', paddingLeft: '2px' }}
                      />
                    )}
                  </>
                }

                variant="outlined"
              />
            ))}
          </Box>
        );
      },
    },
    {
      id: 4,
      header: "Risk score",
      accessor: "risk_score",
      cell: (data: any) => {
        return (
          <Box sx={styles.categoryCell}>
            <Image src={data.img} alt={data.level} width={20} height={20} />
            <Typography variant="body1">{data.level}</Typography>
          </Box>
        );
      },
    },
    {
      id: 5,
      header: "Risky users",
      accessor: "risk_users",
      cell: (data: any) => {
        return (
          <Box sx={styles.categoryCell}>
            <Typography variant="body1">{data}</Typography>
          </Box>
        );
      },
    },
    {
      id: 6,
      header: "Total users",
      accessor: "total_users",
      cell: (data: any) => {
        return (
          <Box sx={styles.categoryCell}>
            <Typography variant="body1">{data}</Typography>
          </Box>
        );
      },
    },
    {
      id: 7,
      header: "Risk",
      accessor: "source",
      cell: (data: any) => {
        return (
          <Box sx={styles.riskWraper}>
            {data.map((item: any, index: number) => (
              <Box>
                <Box
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  // onMouseEnter={handleClick}
                  // onMouseLeave={handleClose}
                  sx={styles.categoryCell}
                  key={index}
                >
                  <Image src={item.icon} alt={item.risk} width={20} height={20} />
                  <Typography variant="body1">{item.risk}</Typography>
                </Box>

                <Menu
                  sx={styles.menuWraper}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem
                    sx={styles.menuItem}
                    onClick={handleClose}
                  >
                    <Image src={usersList} alt='users' />
                    <Typography>See users list</Typography>
                  </MenuItem>
                  <MenuItem
                    sx={styles.menuItem}
                    onClick={handleClose}
                  >
                    <Image src={multiSelectIcon} alt='users' />
                    <Typography>Mark as a non-risky app</Typography>
                  </MenuItem>
                  <MenuItem
                    sx={styles.menuItem}
                    onClick={handleClose}
                  >
                    <Image src={ban} alt='users' />
                    <Typography>Block app</Typography>
                  </MenuItem>
                </Menu>
              </Box>

            ))}
          </Box>
        );
      },
    },
    {
      id: 8,
      header: "",
      accessor: "action",
      cell: (data: any) => {
        return (
          <Box sx={{ position: 'relative' }}>
            <Button
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Image src={menu} alt="menu" width={20} height={20} />
            </Button>
            <Menu
              sx={styles.menuWraper}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                sx={styles.menuItem}
                onClick={handleClose}
              >
                <Image src={usersList} alt='users' />
                <Typography>See users list</Typography>
              </MenuItem>
              <MenuItem
                sx={styles.menuItem}
                onClick={handleClose}
              >
                <Image src={multiSelectIcon} alt='users' />
                <Typography>Mark as a non-risky app</Typography>
              </MenuItem>
              <MenuItem
                sx={styles.menuItem}
                onClick={handleClose}
              >
                <Image src={ban} alt='users' />
                <Typography>Block app</Typography>
              </MenuItem>
            </Menu>
          </Box>
        );
      },
    },
  ];

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <Box sx={styles.selectorsWraper}>
        <MultiSelect data={multiActionDepartments} setForAllLabel="Departments" />
        <MultiSelect data={multiActionApplication} setForAllLabel="Application" />
        <MultiSelect data={multiActionRisk} setForAllLabel="Risk" />
        <MultiSelect data={actions} setForAllLabel="Source" />
        <MultiSelect data={multiAction} setForAllLabel="Type" />
      </Box>
      <Box sx={styles.tableRow}>
        <CustomTable
          rows={DISCOVERED_APP_TABLE_DATA}
          column={DISCOVERED_APP_TABLE_HEADER}
          setOpenModal={setOpenModal}
          isSwitch={false}
          setSelectedRow={setSelectedRow}
          isTableHead={true}
          isPagination={true}
        />
        <CustomDialog
          thead={"discoverApp"}
          openModal={openModal}
          newData={selectedRow}
          setOpenModal={setOpenModal}
        />
      </Box>
    </>
  );
}
