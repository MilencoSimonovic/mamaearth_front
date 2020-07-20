const influenceStyle = {
    appBar: {
        borderBottom: "1px solid #e2e1e1",
        '& *': {
            color: '#324467'
        },
        '& .app-title': {
            fontWeight: "600"
        }
    },
    content: {
        display: "flex",
        flexDirection: "column",
        padding: '20px 15px 0px',
        margin: 0,
        height: '100vh',
        background: 'white',
        "& *": {
            color: '#324467'
        }
    },
    headerPart: {
        '& .header-title': {
            fontWeight: "600",
            textTransform: 'none',
        }
    },
    mainContent: {
        marginTop: "20px",
        padding: '20px 5px 0px',
        '& .kyc-list-item': {
            display: "flex",
            alignItems: 'center',
            border: '1px solid #e6e0e0',
            borderRadius: "5px",
            padding: '20px',
            marginTop: '10px',
            '& img': {
                width: "60px",
                marginRight: '40px'
            },
            '& .kyc-list-title': {
                flexGrow: 5,
                textTransform: 'none',
                color: 'rgb(125 141 171)',
                margin: 0,
                fontWeight: 400
            },
            '& .kyc-list-status': {
                padding: '3px 8px',
                background: 'rgb(255 235 182)',
                borderRadius: "50px",
                color: 'rgb(157 135 74)'
            },
            '& .kyc-list-icon': {
                '& path': {
                    color: 'rgb(125 141 171)'
                }
            }
        }
    },
    footerPart: {
        padding: 10,
        
    }
}

export default influenceStyle;