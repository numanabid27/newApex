export const styles = {
    pyBg:{
        background:"#fff",
        position:"absolute",
        boxShadow: "0px 0px 34.8px 6.96px #202A2F26",
        bottom:'42px',
        right: "0",
        left: "0",
        padding: "7px 10px",
        borderRadius: "14px",
        zIndex: 99
    },
    desc:{
        background:"#F2F4F7",
        padding: '12px 0px',
        borderRadius: '11px'
    },
    paragraph:{
        fontSize:'12px',
    },
    descCode:{
        background:"#1D2939",
        padding: '12px 0px',
        borderRadius: '11px',
        "@media screen and (max-width:767px)":{
            overflowX:"scroll"
        }
    },
    code:{
        color:"#fff",
        fontSize:'12px',
        "pre":{
            "@media screen and (max-width:767px)":{
                width:'fit-content'
            }
        }
    },
    
}