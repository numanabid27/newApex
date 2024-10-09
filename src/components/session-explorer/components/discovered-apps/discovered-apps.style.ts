export const styles = {
  discoveredAppFilters: {
    display: "flex",
    alignItems: "center",
    gap: { sm: "15px", xs: "5px" },
    "& .MuiSelect-select": {
      padding: "0 0",
      fontSize: "12px !important",
    },
    "& .MuiFormLabel-root": {
      fontSize: "12px",
      fontWeight: 600,
    },
    "& .MuiInputBase-inputAdornedEnd": {
      padding: "14px 11px",
      fontSize: "12px",
    },
    "& .MuiInputBase-adornedEnd": {
      borderRadius: "8px",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "18px",
      position: "unset",
    },
    "& .MuiMenuItem-root": {
      fontSize: " 12px !important",
    },
  },
  formControl: {
    width: "100%",
    marginTop: "2px",
  },
  label: {
    fontSize: "12px",
  },
  depFilter: {
    padding: "11px 10px",
    borderRadius: "8px",
    "& .MuiSelect-select": {
      padding: "0 18px",
    },
  },
  severityLevel: {
    fontSize: "8px",
    ml: 1,
  },
  severityChip: {
    height: "25px",
    border: "1px solid transparent",
    fontWeight: 500,
    fontSize: "14px",
  },
  tableRow: {
    width: "100%",
  },
  applicationCell: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  categoryCell: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
  },
  cellChip: {
    "& .MuiChip-root ": {
      borderRadius: "1px !important",
    },
  },
};
