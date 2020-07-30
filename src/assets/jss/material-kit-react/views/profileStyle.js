const profilStyle = {
    containter: {
        background: 'white',
        height: "100vh",
        display: "flex",
        flexDirection: 'column'
    },
    content: {
        flex: '1',
        overflow: 'auto',
    },
    header: {
        padding: '10px 30px',
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        '& img': {
            width: '50px',
            height: '50px',
            borderRadius: '50px',
            marginRight: '15px',
            border: '2px solid grey'
        },
        '& .user-detail': {
            flexGrow: 5,
            '& .user-name': {
                color: 'rgb(56 69 93)',
                fontSize: "16px",
                fontWeight: '700',
                margin: '0px',
                lineHeight: "16px"
            },
            '& svg': {
                color: 'red'
            }
        },
        '& .profile-edit': {
            '& svg': {
                fontSize: '18px',
                color: '#d6cece'
            }
        }
    },
    pendingCompaign: {
        borderTop: '5px solid #ffa6a8',
        padding: '10px 30px',
        background: '#feeeee',
        display: "flex",
        '& svg': {
            color: 'red',
            border: '2px solid rgba(255, 0,0,.4)',
            borderRadius: '50px',
            marginRight: '30px'
        },
        '& .error-message': {
            color: 'rgb(77 97 137)',
            fontSize: "15px",
            fontWeight: "700"
        }
    },
    profileList: {
        padding: '13px 20px 10px 30px',
        '& svg': {
            fontSize: '14px',
            '& path': {
                color: '#d6cece'
            }
        },
        '& .MuiListItemIcon-root': {
            fontWeight: "500",
            color: 'rgb(77 97 137)',
            minWidth: '0px'
        },
        '& .MuiListItemText-root span': {
            color: 'rgb(0 174 239)',
            fontSize: '20px',
            marginLeft: '10px'
        }
    }
}

export default profilStyle;