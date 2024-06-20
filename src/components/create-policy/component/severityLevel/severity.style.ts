import Colors from "@/common/constants/color.constant";

export const styles = {
    dropdwonButton:{
        background: "#fff",
        borderRadius: "8px",
        padding: "7px 14px",
        display: "flex",
        justifyContent:'flex-start',
        overflow:'hidden',
        gap: "9px",
        color:Colors.primary_101,
        fontSize:'14px',
        fontWeight:600,
        textTransform:"capitalize",
        border: "1px solid #CFD4DC",
        boxShadow: "0px 1px 2px 0px #1018280D",
        whiteSpace:"nowrap",
        "&:hover":{
            background: "#fff",
        }
    },

    checkBoxItems:{
        display:'flex',
        alignItems: "center",
        gap: "8px"
    
    },
    dropdownStyle:{
        background:"#fff",
        padding: "0px 0px",
        width:'140px',
        borderRadius: "8px",
        marginTop: "10px",
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        zIndex: 99,
    },
    dropdownStyle2:{
        background:"#fff",
        padding: "4px 10px",
        width:'185x',
        borderRadius: "8px",
        marginTop: "10px",
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        zIndex: 99,
    },
    typography:{
        color:Colors.primary_101,
        fontWeight:500,
        textAlign:'left',
        textTransform:"capitalize",
        justifyContent:'flex-start'
    },
    selected:{
        background:'#F9FAFB'
    }
}