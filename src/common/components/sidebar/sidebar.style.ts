
export const SidebarStyle = {
    SidebarWraper: {
        backgroundColor: '#F8F9FB',
        width: '350px',
        paddingLeft: '60px',
        paddingTop: '56px',
        height: '100%',
        ['@media(max-width: 991px)']:{
            width: '50px',
            paddingLeft: '16px',
            paddingTop: '6px',
            overflow: 'hidden'
        }
    },
    Heading: {
        fontSize: '16px',
        color: '#1E1E1E',
        fontWeight: '700',
        lineHeight: '24px',
        ['@media(max-width: 991px)']:{
            display: 'none'
        }
    },
    TabItem: {
        py: '5px',
        width: '100%',
        textDecoration: 'none',
    },
    ItemText: {
        fontSize: '20px',
        lineHeight: '24px',
        color: '#334155',
        ['@media(max-width: 991px)']:{
            display: 'none'
        }
    }
};