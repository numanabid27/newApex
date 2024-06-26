export const styles = {
    tableCell:{
        display:'flex',
        alignItems:'center',
        gap:'10px'
    },
    cellData : {
        color:"#374151",
        fontSize:'14px'
    },
    cellCommit:{
        color:"#667085",
        fontSize:'14px'
    },
    tableContainer:{
        border: "1px solid #EAECF0",
        borderRadius: "10px"
    },
    cellHeader:{
        color:'#667085',
        fontSize:'12px',
        fontWeight:500,
        background:'#F9FAFB',
        padding:'6px 18px'
    },
    tableRow:{
        cursor:'pointer',
        "&:hover":{
            background:'#F2F4F7'
        }
    },
    voilation:{
        display:'flex',
        gap:'10px',
        alignItems:'center',
        "h6":{
            fontSize:'14px',
            fontWeight: 700
        },
        "h5":{
            fontSize:'14px'
        }
    }
}