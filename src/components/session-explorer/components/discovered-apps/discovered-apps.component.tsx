import { Box, Chip, Grid, Typography } from "@mui/material";

import CustomTextField from "@/common/components/custom-textfield/custom-textfield.component";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import {
  DISCOVERED_APP_TABLE_DATA,
  FILTERES_DATA,
} from "./discovered-apps.constant";
import { styles } from "./discovered-apps.style";
import claude from "@/common/assets/images/claude.png";
import CustomTable from "@/common/components/custom-table/custom-table.component";

interface FormData {}

export default function DiscoveredApps() {
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
  ];

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <>
      {/* filter */}
      <Box sx={{ width: "100%" }}>
        <FormProvider {...methods}>
          <form>
            <Grid container spacing={3} mt={3} sx={{ width: "100%" }}>
              {FILTERES_DATA.map((field, index) => (
                <Grid item xs={12} sm={field.col} key={index}>
                  <CustomTextField {...field} />
                </Grid>
              ))}
            </Grid>
          </form>
        </FormProvider>
      </Box>
      <Box sx={styles.tableRow}>
        <CustomTable
          rows={DISCOVERED_APP_TABLE_DATA}
          column={DISCOVERED_APP_TABLE_HEADER}
          isSwitch={false}
          isTableHead={true}
          isPagination={true}
        />
      </Box>
    </>
  );
}
