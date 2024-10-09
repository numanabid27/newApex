
export const Dashboard2Style = {
    PageBG: {
        background: '#FCFCFD',
        pb: '60px'
    },
    GraphWraper: {
        position: 'relative',
        border: '1px solid #E2E8F0',
        mt: '40px',
        p: '16px 30px',
        boxShadow: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
        borderRadius: '8px',
        backgroundColor: '#FFF'
    },
    Devider: {
        backgroundColor: '#E2E8F0',
        height: '1px',
        mt: '20px'
    },
    StaticAlert: {
        position: 'absolute',
        p: '10px 20px',
        borderRadius: '5px',
        border: '1px solid rgba(50, 213, 131, 0.00)',
        backgroundColor: '#F6FEF9',
        boxShadow: '0px 0px 30px 0px rgba(49, 190, 124, 0.35)',
        maxWidth: '364px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        top: '25%',
        left: '44%',
        transform: 'translateX(-60%)',
        ['@media(max-width: 575px)']: {
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '300px',
        }
    },
    StaticAlertValue: {
        fontSize: '25px',
        lineHeight: '18px',
        fontWeight: '700',
        color: '#000'
    },
    StaticAlertText: {
        fontSize: '12px',
        lineHeight: '18px',
        color: '#000'
    },
    GraphHeading: {
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: '600',
        color: '#334155',
    },
    activeUser: {
        borderBottom: "1px solid #D0D5DD",
        paddingBottom: '9px',
        marginBottom: '15px',
        height: '48px',
        px: '24px',
        mt: '12px',
        "&:last-child": {
            borderBottom: "unset",
            paddingBottom: '0px',
            marginBottom: '0px',
        }
    },
    typography: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '700',
        color: '334155'
    },
    user1: {
        // display: 'flex',
        ".echarts-for-react": {
            height: "105px !important",
            "canvas": {
                top: "-65px !important",
                width: "14vw !important",
                left: "33px !important",
                "@media screen and (max-width:1820px)": {
                    width: "12.5vw !important",
                },
                "@media screen and (max-width:1440px)": {
                    width: "14vw !important",
                }
            }
        }
    },
    ChartsContainer: {
        pt: '24px',
        borderRadius: '8px',
        border: '1px solid #E4E4E7',
        boxShadow: '0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
        backgroundColor: '#FFF',

    },
    TopOpenIssues: {
        p: '12px 20px',
        borderBottom: '1px solid #E2E8F0'
    },
    CriticalBox: {
        borderRadius: '16px',
        p: '3px 20px',
        height: '24px',
        backgroundColor: '#FEF3F2',
        display: 'flex',
        alignItems: 'Center',
        justifyContent: 'center',
        gap: '6px',
        width: 'fit-content'
    },
    CriticalDot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#EF4444'
    },
    CriticalText: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
        color: '#B91C1B'
    },
    PriceBox: {
        p: '14px 16px 16px 16px',
        backgroundColor: '#FFF',
        boxShadow: '0px 1.038px 3.114px 0px rgba(16, 24, 40, 0.10), 0px 1.038px 2.076px 0px rgba(16, 24, 40, 0.06)',
        borderRadius: '8px',
        border: '1px solid #EAECF0'
    },
    PriceValue: {
        fontSize: '36px',
        lineHeight: '18px',
        fontWeight: '700',
        color: '#000',
        textAlign: 'center',
        my: '28px'
    },
    PrevMonthSmallText: {
        fontSize: '12px',
        lineHeight: '18px',
        color: '#64758B',
        textAlign: 'center',
    },
    PriceCardsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '16px',
        height: '100%',
        ['@media (max-width:575px)']: {
            flexDirection: 'row',
        },
    },
    DashboardSessionMain: {
        padding: "16px 17px 25px",
        boxShadow: "0px 1px 3px #8080804a",
        height: '100%'
    },
    BarChartWraper: {
        p: '27px 20px 0 20px',
        boxShadow: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
        backgroundColor: '#FFF',
        border: '1px solid #E2E8F0',
        borderRadius: '8px'
    },
    BorderTop: {
        borderTop: '1px solid #E2E8F0',
        width: '100%'
    },
    HalfChartHeight: {
        height: '173px'
    },
    CardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    SeeAllLink: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '700',
        color: '#64758B',
        textDecoration: 'none',
        cursor: 'pointer'
    },
    RulesText: {
        fontSize: '12px',
        lineHeight: '18px',
        color: '#64758B',
        mt: '6px'
    },
    DisabledRulesWraperMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '25px',
        mt: '27px'
    },
    DisabledRulesWraper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
    },
    ToolWraperMain: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '14px'
    },
    ToolWraper: {
        borderRadius: '12px',
        border: '1px solid #E4E4E7',
        backgroundColor: '#FFF',
        boxShadow: '0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
        display: 'flex',
        alignItems: 'center',
        gap: '26px',
        p: '14px 20px',
        width: 'fit-content',
        ['@media (max-width: 575px)']: {
            gap: '16px',
            p: '9px 10px',
        }
    },
    ToolText: {
        fontSize: '17px',
        lineHeight: '25px',
        color: '#344054',
        ['@media (max-width: 575px)']: {
            fontSize: '14px'
        }
    }
}