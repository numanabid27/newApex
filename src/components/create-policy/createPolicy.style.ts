import Colors from "@/common/constants/color.constant";

export const style ={
    createPolicy:{
        px: "4%",
        my: 5,
    },
    createPolicyGrid:{
        border: "1px solid #CFD4DC",
        boxShadow: "0px 1px 2px 0px #1018280F",
        borderRadius:'8px',
        padding: "31px 0px 0px"
    },
    label:{
        color:Colors.primary_101,
        fontSize:'14px',
        fontWeight:500
    },
    multiSelect:{
        display: "flex",
        alignItems: "center",
        marginTop: "32px",
    },
    
    iconBtn: {
        "&:hover": { backgroundColor: "transparent" },
        pl: 0,
        pr: 0,
    },
    severityChip: {
        height: "25px",
        border: "1px solid transparent",
        // "&:hover": { border: "1px solid #B54708" },
    },
    severityLevel: {
        fontSize: "8px",
        ml: 1,
    },
    statusChip: {
        height: "25px",
        border: "1px solid transparent",
    },
    engine: {
        "&:hover": { backgroundColor: "transparent" },
        p: 0,
    },
    chip: {
        color: "#667085",
        fontSize: "14px",
        height: "25px",
    },
    header:{
        background:"#F8F9FB",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        
    },
    typography:{
        color:'#667084',
        fontWeight:500,
        fontSize:'12px',
        padding:'10px 22px'
    },
    tableRow:{
        background: "#F8F9FB",
    },
    parentRow:{
        background: "#F2F3F6",
        ".MuiTableCell-root":{
            padding:"15px 18px"
        }
    },
    type:{
        color:Colors.primary_101,
        fontSize:'14px',
        fontWeight:700
    },
    nestedCell:{
        padding:"17px 16px"
    },
    engineCell:{
        color:Colors.primary_101,
        fontSize:'14px',
        fontWeight:700
    },
    nestedTableRow:{
        margin:"0 0 0 auto", 
        maxWidth:"1598px"
    },
    save:{
        background:"#027947",
        color:"#fff",
        fontSize:'14px',
        fontWeight:600,
        padding: "8px 46px",
        textTransform: "capitalize",
        marginTop: "32px",
        marginLeft: "auto",
        display: "flex",
        borderRadius: "8px",
        "&:hover":{
            background:"#027947",
        }
    },
    thBorder:{
        "tr":{
            "&:last-child":{
                "td":{
                    borderBottom:'unset'
                },
                "th":{
                    borderBottom:'unset'
                }
            }
        }
    },
    desc:{
        boxShadow: "0px 1px 2px 0px #1018280D",
        border: "1px solid #CFD4DC",
        padding: "13px 16px",
        borderRadius: "8px",
        marginTop: "24px",
        "h6":{
            color:"#374151",
            fontWeight:600,
            fontSize:'14px'
        }
        
    }
}