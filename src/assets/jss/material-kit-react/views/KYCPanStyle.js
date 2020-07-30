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
        marginTop: '60px',
        '& .header-title': {
            fontWeight: "600",
            textTransform: 'none',
        }
    },
    mainContent: {
        flex: '1',
        overflow: 'auto',
        marginTop: "20px",
        padding: '20px 5px 0px',
        '& .pan-card-upload': {
            padding: '15px',
            border: '1px dashed grey',
            borderRadius: "5px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& .preveiw-image': {
                width: "50%"
            }
        }
    },
    userInfoForm: {
        marginTop: '10px',
        '& .pan-input': {
            marginTop: "20px"
        }
    },
    footerPart: {
        padding: 10,
        '& .footer-button': {
            background: "#00aeef",
            padding: 10,
            '& .MuiButton-label': {
                color: 'white!important'
            }
        }
    }
}

export default influenceStyle;