export const styles = {
  settig_sec: {
    padding: "0 5%",
  },
  title: {
    color: "#344054",
    fontSize: "18px",
    padding: "34px 0px 38px",
    fontWeight: 500,
  },
  setting_grid: {
    justifyContent: { xs: "center", sm: "unset" },
    margin: "0 auto",
    gap: "20px",
  },
  setting_column: {
    border: "1px solid #EAECF0",
    padding: "20px 0 0 !important",
    borderRadius: "8px",
    boxShadow: "0px 0px 3px #80808063",
    "&:hover":{
      boxShadow: "0px 0px 7px #80808082",
    }
  },
  main_box: {
    padding: "0px 21px 21px",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "10px",
    alignItems: "center",
    height:"70px",
    "@media screen and (max-width:1440px)" : {
      height:"60px",
    },
    "@media screen and (max-width:767px)" : {
      height:"unset",
    }
  },
  box_title: {
    color: "#344054",
    fontSize: "24px",
    textDecoration:"none",
  },
  status: {
    padding: "1px 12px",
    fontSize: " 14px",
    borderRadius: "18px",
    fontWeight: 500,
  },
  properties_row: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "71px",
    height: "25px",
    paddingTop: "19px",
  },
  category: {
    marginLeft: "10px",
    "@media screen and (max-width:1440px)" : {
      fontSize: "14px",
    }
  },
  availability: {
    color: "#039855",
    fontSize: "14px",
    background: " #ECFDF3",
    padding: "3px 7px",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
  },
  freezeItem: {
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
    backgroundColor: "#FEF3F2",
    color: "#F04438",
    padding: "5px 10px",
    borderRadius: "3px",
    fontSize: "14px",
  },
  circularIcon: {
    fontSize: "10px",
    marginRight: "3px",
  },
  property_text: {
    color: "#027A48",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
  },
  visibility_row: {
    borderTop: "1px solid #D0D5DD",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 25px",
  },
  disable: {
    color: "#344054",
    fontSize: "18px",
    padding: "34px 0px 38px",
    fontWeight: 500,
  },
  disable_row: {
    justifyContent: { xs: "center", sm: "unset" },
    margin: "0 auto 30px",
    gap: "20px",
  },
  disabled_column: {
    border: "1px solid #EAECF0",
    background: "",
    padding: "20px 0 0 !important",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0px 0px 3px #80808063",
  },
  disableBox: {
    padding: "0px 21px 21px",
  },
  disableBoxRow: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "10px",
    alignItems: "flex-start",
  },
  disableTilte: {
    color: "#98A2B3",
    fontSize: "24px",
    "@media screen and (max-width:1440px)" : {
      fontSize:"16px"
    }
  },
  disableStatus: {
    color: "#98A2B3",
    border: "1px solid #98A2B3",
    padding: "1px 12px",
    fontSize: " 14px",
    borderRadius: "18px",
    fontWeight: 500,
  },
  disable_desc: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "71px",
    height: "25px",
    paddingTop: "19px",
  },
  desc: {
    marginLeft: "10px",
    color: "#98A2B3",
    "@media screen and (max-width:1440px)" : {
      fontSize:"14px"
    }
  },
  disbleProperties: {
    borderTop: "1px solid #D0D5DD",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 25px",
  },
  hide: {
    color: "#344054",
    fontSize: "14px",
    bgcolor: " #F9FAFB",
    padding: "3px 7px",
    borderRadius: "3px",
  },
  disableIcon: {
    fontSize: "10px",
    marginRight: "3px",
    color: "#D0D5DD",
  },
  disableModel: {
    color: "#027A48",
    fontSize: "14px",
    fontWeight: 500,
  },
  disableImage: {
    filter: "grayscale(1)",
  },
};
