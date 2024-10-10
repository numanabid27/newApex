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
    mt: '34px'
  },
  applicationCell: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  riskWraper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  categoryCell: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
  },
  cellChip: {
    borderRadius: "6px !important",
   
  },
  menuWraper: {
    position: 'absolute',
    top: '15px',
    right: '0',
    left: '-8%',
    ".MuiList-root": {
      py: '4px',
      
    },
   ".MuiMenu-paper":{
      boxShadow:"0px 5px 5px -3px rgb(0 0 0 / 2%), 0px 8px 10px 1px rgb(0 0 0 / 0%), 0px 3px 14px 2px rgb(0 0 0 / 0%) !important"
   }
  },
  menuItem: {
    p: '10px 14px',
    display: 'grid',
    gridTemplateColumns: '20px 1fr',
    gap: '8px'
  },
  showOnHover: {
    position: 'absolute',
    top: '25px',
    right: '0',
  },
  selectorsWraper: {
    mt: '13px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '12px',
  },
  tooltip:{
    "h5":{
      fontSize:"14px",
      paddingBottom:'5px',
      paddingTop:'10px',
      fontWeight:700,
      color:"#344054"
    },
    "h6":{
      fontSize:"12px",
      paddingBottom:'8px',
      color:"#667085"
    }
  }
};
