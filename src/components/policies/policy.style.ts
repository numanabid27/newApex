import Colors from "@/common/constants/color.constant";

export const styles = {
  pliciesSec: {
    px: "4%",
    my: 5,
  },
  policies_grid: {
    mt: 3,
  },
  chip: {
    color: "#667085",
    fontSize: "14px",
    height: "25px",
  },
  severityChip: {
    height: "25px",
    border: "1px solid transparent",
    // "&:hover": { border: "1px solid #B54708" },
  },
  statusChip: {
    height: "25px",
    border: "1px solid transparent",
  },
  iconBtn: {
    "&:hover": { backgroundColor: "transparent" },
    pl: 0,
    pr: 0,
  },
  engine: {
    "&:hover": { backgroundColor: "transparent" },
    p: 0,
  },
  severityLevel: {
    fontSize: "8px",
    ml: 1,
  },
  polices_grid:{
    border: "1px solid #EAECF0",
    borderRadius:'8px',
    padding:"9px 40px",
    alignItems:'center',
    marginTop:'13px',
    boxShadow: '0px 1px 2px 0px #1018280F',
    cursor:'pointer',
    gap:'15px',
    "@media screen and (max-width:767px)":{
      padding:'9px 18px',
      overflowX:'scroll',
      flexWrap:'unset'
    }
  },
  policies_info:{
    "h5":{
      color:Colors.primary_101,
      fontSize:'16px',
      fontWeight:700,
      paddingBottom: "2px"
    },
    "h6":{
      color:'#667084',
      fontSize:'16px',
      fontWeight:400
    }
  },
  group:{
    borderLeft:'1px solid #CFD4DC',
    paddingLeft:'25px',
    "h6":{
      color:"#667084",
      fontSize:'14px',
      fontWeight:400
    },
    "@media screen and (max-width:899px)":{
      borderLeft:'unset',
      paddingLeft:'0px',
    }
  },
  deleteBackdrop:{
    position: "fixed",
    zIndex: "999999",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    height: "100%",
    background:"#00000070"
  },
  deleteModel:{
    background: "#fff",
    padding: "22px 28px",
    borderRadius:"8px",
    maxWidth: "658px",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    height: "fit-content",
    "&:before":{
      background: "#000",
      content:`''`,
      position:'absolute'
    },
    "h5":{
      color:Colors.primary_101,
      fontSize:'16px',
      fontWeight:700
    },
    "h6":{
      padding: "22px 0",
      lineHeight: 1.6,
      fontSize:'16px',
      fontWeight:400
    },
    "button":{
      fontSize:'14px',
      fontWeight:600,
      textTransform: "capitalize",
      padding:"8px 16px",
      borderRadius:'8px'
    }
  },
  cancel:{
    border:" 1px solid #D0D5DD",
  },
  groupChip:{
    color: "#374151",
    fontWeight: 500
  },
  actionText:{
    display:'flex',
    gap:'12px',
    fontWeight: "500",
    fontSize: "14px",
    justifyContent:'flex-end'
  }
};
