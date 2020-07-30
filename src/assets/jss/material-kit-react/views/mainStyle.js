const mainStyle = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    content: {
        flex: 1,
    },
    footer: {
        borderTop: '1px solid #e4dede',
        "& .bottom-tab": {
            textTransform: 'none',
            '& svg': {
                margin: '0px!important'
            }
        },
        '& .bottom-tab.Mui-selected': {
            color: '#ef479c'
        },
        "& .MuiTabs-indicator": {
            display: 'none'
        }
    }
}

export default mainStyle;