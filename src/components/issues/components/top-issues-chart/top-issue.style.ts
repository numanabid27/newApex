import Colors from "@/common/constants/color.constant";

export const TopIssuesStyling = {
  TopGridMian: {
    padding: "15px 17px 25px",
    mb: 2,
    pl: 4,
   overflow:'hidden'
  },
  TopGridMian1: {
    pl: 4,
    overflow:'hidden'
  },
  TopHeaderStyling: {
    color: "#344054",
    fontWeight: 600,
  },
  TopTrendingDownStyling: {
    backgroundColor: "#FEF3F2",
    padding: "5px 8px",
    borderRadius: "16px",
  },
  TopIssueTrending: {
    color: "#344054",
    fontSize: { md: "50px", xs: "38px" },
    fontWeight:600,
    padding:'0 17px 0 0',
    lineHeight: 0.4
  },
  TopTrendingPercentage: {
    color: Colors.primary_101,
    fontSize: "14px",
    fontWeight:600,
    display:'flex',
    alignItems:'center'
  },
  TopTrendingPercentage2: {
    color: "#667085",
    fontSize: "12px",
    fontWeight:700,
  },
  TopTrendingWeek: {
    color: "#667085",
    fontSize: { xl: "11.5px", xs: "11px" },
    width: "fit-content",

  },
  TopTrendingWeek2: {
    color: "#667085",
    fontSize: { xl: "12px", xs: "11px" },
  },
  TopIssuesChart: {
    height: "150px",
    width: "auto",
    ".echarts-for-react":{
      "canvas":{
        left: "-12vw !important",
        width: "102vw !important"
      }
    }
  },
  TopIssuesChart2: {
    height: "150px",
    width: "auto",
    ".echarts-for-react":{
      "canvas":{
        left: "-4.5vw !important",
        width: "36.6vw !important",
        "@media screen and (max-width:767px)":{
          left:" -15.5vw !important",
          width: "100vw !important"
        }
      }
    }
  },
  headerText:{
    color:Colors.primary_101,
    fontSize:'50px',
    fontWeight:200,
    lineHeight: 0.7,
  },
  borders:{
    borderRight:" 1px solid #D0D5DD",
    display: "flex",
    alignItems: "center",
    borderLeft: "1px solid #D0D5DD",
    padding: "0 19px"
  },
  severityChip: {
    height: "25px",
    border: "1px solid transparent",
  },
  severityLevel: {
    fontSize: "8px",
    ml: 1,
  },
  iconBtn: {
    "&:hover": { backgroundColor: "transparent" },
    pl: 0,
    pr: 0,
  },
  chip:{
    "span":{
      fontWeight:700,
      fontSize:'14px',
      paddingRight:'4px'
    }
  }
};
