const historyStyle = {
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
    mainContent: {
        flex: 1,
        marginTop: '60px',
        '& .pan-input': {
            marginBottom: '30px'
        }
    },
    footerPart: {
        borderTop: '1px solid #d0cece',
        background: 'white',
        padding: '10px',
        '& .footer-button': {
            padding: '10px',
            fontSize: 18,
            fontWeight: '500',
            background: '#00aeef',
            '& .MuiButton-label': {
                color: 'white'
            },
            
        }
    }
}

export default historyStyle;