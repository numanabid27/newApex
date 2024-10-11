
export const SettingsStyle = {
    ContentWrapper: {
        background: '#FFF',
        px: '45px',
        py: '50px',
        width: 'calc(100% - 350px)',
        ['@media(max-width: 991px)']: {
            px: '16px',
            py: '16px',
            width: 'calc(100% - 50px)',
        }
    },
    MainHeading: {
        fontSize: '40px',
        lineHeight: '24px',
        color: '#334155'
    },
    SelectorWraper: {
        mt: '40px'
    },
    TabButton: {
        border: '1px solid #CBD5E1',
        py: '10px',
        px: '20px',
        borderRadius: '40px',
    },
    tabs: {
        ".MuiTabs-flexContainer": {
            mt: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            "button.Mui-selected": {
                background: "#039855",
                color: "#fff",
                border: '1px solid #039855'
            },
            ['@media(max-width: 991px)']: {
                flexWrap: 'nowrap',
                overflowX: 'auto',
            }
        },
    },
    TabsContentWrapper: {
        mt: '32px'
    },
    ContentHeading: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '700',
        color: '#334155',
    },
    SeeAllLink: {
        fontSize: '14px',
        lineHeight: '20px',
        color: '#17A34A',
        textDecoration: 'none',
        mt: '4px',
        ml: '20px'
    },
    GridContainer: {
        mt: '30px',
        gap: '30px'
    },
    GridItem: {
        alignItems: 'center',
        py: '30px',
        px: '40px',
        borderRadius: '20px',
        borderLeft: '4px solid #22C55D',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        ['@media(max-width: 768px)']: {
            p: '12px'
        }
    },
    ChatIconWraper: {
        alignItems: 'center',
    },
    PlatformHeading: {
        fontSize: '24px',
        lineHeight: '34px',
        color: '#334155',
        ml: '20px'
    },
    PlatformText: {
        fontSize: '16px',
        lineHeight: '24px',
        color: '#334155',
        mt: '20px'
    },
    Accordion: {
        boxShadow: 'none',
        ':before': {
            display: 'none'
        }
    }
};