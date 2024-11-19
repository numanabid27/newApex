export const styles = {
    grid: {
        paddingLeft: "4%",
        paddingRight: " 4%",
        justifyContent: "space-between"
    },
    toasterBox: {
        padding: '8px 8px 24px 32px', // 'p' to 'padding' for clarity, you can use shorthand if you prefer
        borderRadius: '5px',
        border: '1px solid #CBD5E1',
        background: 'linear-gradient(89deg, rgba(236, 254, 255, 0.20) 18.34%, rgba(103, 232, 249, 0.20) 81.66%)', // Correct gradient syntax
    },
    svgBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
    },
    toasterHeading: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '600',
        color: '#991B1B',
        textTransform: 'uppercase',
    },
    toasterHeading2: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '400',
        color: '#334155',
        mt: '16px',
        mb: '12px',
        "& span": {
            fontWeight: '700'
        }
    },
    tagsWraper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '30px',
    },
    tagsWraperCenter: {
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
    },
    toasterTag: {
        p: '4px 11px',
        borderRadius: '20px',
        border: '1px solid var(--Slate-400, #94A3B8)',
        background: '#FFF',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        color: '#334155',
    },
    counterWraper: {
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
    },
    counter65: {
        fontSize: '30px',
        fontWeight: '600',
        lineHeight: '36px',
        color: '#334155',
    },
    detectedMessages: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '20px',
        color: '#334155',
    },
    topFiltersWraper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        mt: '35px',
        mb: '21px',
        pl: '10px',
    },
    filterBox: {
        "& .MuiRadio-root": {
            display: 'none',
        },
        "& .MuiTypography-body1": {
            p: '10px 24px',
            borderRadius: '68px',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFF',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '24px',
            color: '#334155',
        },
        '& .Mui-checked+.MuiTypography-body1': {
            backgroundColor: '#059669',
            color: '#FFF',
        },
    },
    buttonsWraper: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
    },
    buttonskip: {
        p: '10px 16px',
        borderRadius: '8px',
        border: '1px solid #E2E8F0',
        background: '#FFF',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        color: '#334155',
    },
    buttonskipPrevent: {
        backgroundColor: '#059669',
        color: '#FFF'
    },
    messagesWraper: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#FEF2F2',
        borderRadius: '8px',
        p: '8px 13px',
    },
    messageText: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        color: '#000000',
    }
}