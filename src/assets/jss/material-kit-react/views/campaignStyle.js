const campaignStyle = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: 'column',
        background: 'rgb(245 247 249)'
    },
    content: {
        padding: '10px 20px',
        marginTop: '60px',
        flex: '1',
        overflow: 'auto'
    },
    campaignTab: {
        background: 'white',
        '& .MuiTab-wrapper': {
            textTransform: 'none',
            lineHeight: "13px"
        },
        '& .Mui-selected': {
            color: 'rgb(0 174 239)'
        },
        '& .MuiTabs-indicator': {
            backgroundColor: 'rgb(0 174 239)'
        }
    },
    campaignContent: {
        '& .campaign-list': {
            borderBottom: '1px solid #d2d1d1',
            marginBottom: "20px",
            '& img': {
                width: '100%',
                borderRadius: "10px",
            },
            '& .campaign-detail': {
                display: 'flex',
                '& *': {
                    color: 'grey'
                }
            }
        }
    }
}

export default campaignStyle;