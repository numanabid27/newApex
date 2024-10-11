
const commonInputStyle = {
    p: '10px 14px',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    border: '1px solid #D0D5DD',
    borderRadius: '8px',
    backgroundColor: '#FFF',
    fontSize: '16px',
    lineHeight: '26px',
    color: '#334155',
    width: '100%',
    outline: 'none',
    "::placeholder": {
        color: '#94A3B8',
    },
};

const baseButtonStyle = {
    p: '10px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    height: '40px',
    textTransform: 'capitalize',
    display: 'flex',
    gap: '10px'
};

const baseFlexStyle = {
    display: 'flex',
    alignItems: 'center',
};

export const IntegrationPopUpStyle = {
    DialogWraper: {
        ".MuiPaper-elevation": {
            minWidth: '509px',
            p: '30px',
            ["@media(max-width: 575px)"]: {
                minWidth: '300px',
                p: '16px',
            }
        },
    },
    DialogHeader: {
        ...baseFlexStyle,
        justifyContent: 'center',
        gap: '10px',
    },
    InputLabel: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
        color: '#334155',
    },
    PopUpField: {
        ...commonInputStyle,
        mt: '6px',
    },
    CancelButton: {
        ...baseButtonStyle,
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        border: '1px solid #D0D5DD',
        color: '#334155',
    },
    ConnectionButton: {
        ...baseButtonStyle,
        border: '1px solid #17A34A',
        color: '#17A34A',
    },
    ConnectButton: {
        ...baseButtonStyle,
        border: '1px solid #17A34A',
        color: '#FFF',
        backgroundColor: '#17A34A',
        ":hover": {
            color: '#000'
        }
    },
    ButtonsWraperMain: {
        ...baseFlexStyle,
        mt: '30px',
        justifyContent: 'space-between',
        ["@media(max-width: 575px)"]: {
            flexWrap: 'wrap',
            gap: '12px'
        }
    },
    ButtonsWraper: {
        ...baseFlexStyle,
        gap: '20px'
    }
};

