const KYCProgressStyle = {
    container: {
        display: "flex",
        flexDirection: 'column',
        height: '100vh',
        background: 'white'
    },
    content: {
        padding: '20px',
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        '& h5': {
            fontWeight: "999",
            marginTop: '30px',
            marginBottom: "5px"
        },
        '& h6': {
            textTransform: 'none',
            fontSize: '18px'
        },
        '& *': {
            color: '#324467'
        }
    },
    footer: {
        padding: 15,
        '& .go-button': {
            padding: '10px',
            background: '#00aeef',
            color: 'white',
            fontWeight: "500"
        }
    }
}

export default KYCProgressStyle;