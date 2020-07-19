const influenceStyle = {
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
        '& .title': {
            fontWeight: "999",
            lineHeight: "35px"
        },
        '& .sub-title': {
            fontWeight: "400"
        }
    },
    mainContent: {
        padding: '20px 5px 0px',
        flex: '1',
        "& .category-item": {
            padding: '7px 15px',
            border: '1px solid #dedede',
            display: "inline-block",
            borderRadius: "50px",
            margin: 5,
            fontWeight: "500",
            transition: 'all .3s',
            '&:hover': {
                background: "#00aeef",
                color: 'white',
                border: '1px solid #00aeef'
            }
        },
        '& .category-item-select': {
            background: "#00aeef",
            color: 'white',
            border: '1px solid #00aeef'
        }
    },
    footerPart: {
        padding: 10,
        '& .footer-button': {
            background: "#00aeef",
            padding: '10px 0px',
            "& .MuiButton-label": {
                color: 'white!important'
            }
        }
    }
}

export default influenceStyle;