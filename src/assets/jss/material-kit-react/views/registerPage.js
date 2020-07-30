const registerStyle = {
    container: {
        backgroundImage: `url(${require('assets/img/background.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "100vh",
    },
    content: {
        backdropFilter: 'blur(8px)',
        background: 'rgba(0,0,0,.7)',
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        margin: 0,
        '& .register-dis': {
            fontWeight: "200",
            color: 'white',

        }
    },
    logoImg: {
        width: "256px"
    },
    buttonContent: {
        marginTop: "50px",
        '& .facebook-button': {
            background: "#00aeef",
            padding: 15,
            marginTop: 15,
            textTransform: 'none',
        },
        '& .google-button': {
            background: "#e53222",
            padding: 15,
            marginTop: 15,
            textTransform: 'none',
        },
        '& .term-police': {
            marginTop: '10px',
            width: "210px",
            margin: 'auto',
            fontSize: "12px",
            fontWeight: "300",
            textAlign: "center",
            color: 'white',
            lineHeight: "20px"
        }
    },
    alreadyLogin: {
        marginTop: '70px',
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
        '& *': {
            color: 'white'
        }
    }
}

export default registerStyle;