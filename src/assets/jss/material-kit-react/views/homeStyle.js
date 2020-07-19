const homeStyle = {
    container: {
        padding: '10px 20px',
        background: 'white',
        height: "100vh",
        display: "flex",
        flexDirection: 'column'
    },
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        '& .header-name': {
            fontWeight: "999",
            textTransform: 'none',
        },
        '& .header-noti': {
            '& .MuiBadge-badge': {
                top: 7,
                minWidth: "15px",
                height: "15px",
                width: "15px",
                right: '5px'
            },
            '& svg': {
                fontSize: "30px"
            }
        }
    },
    content: {
        marginTop: '20px',
        flex: '1',
        overflow: 'auto'
    },
    userList: {
        display: "flex",
        width: "100%",
        overflow: "auto",
        "& .user-item-list": {
            margin: '0px 10px'
        }
    },
    recommend: {
        marginTop: '20px',
        '& .recommend-title': {
            fontWeight: "200",
            textTransform: 'none'
        },
        '& .recommend-carousel': {
            borderRadius: '15px',
            overflow: "hidden"
        },
        '& .recommend-details': {
            display: "flex",
            '& *': {
                fontSize: "13px",
                color: 'grey'
            }
        },
        '& .recommend-name': {
            fontSize: 14,
            fontWeight: "300",
            margin: 0
        }
    },
    uncomingCompaign: {
        marginTop: '50px',
        '& .uncoming-header': {
            display: "flex",
            '& .uncoming-header-title': {
                fontSize: '18px',
                fontWeight: "400"
            },
            '& .uncoming-header-more': {
                fontSize: '15px',
                color: '#00cbf0'
            }
        },
        '& .upcoming-content': {
            display: "flex",
            flexWrap: 'wrap',
            alignContent: 'space-between',
            '& .capaign-list': {
                width: "50%",
                padding: '0px 5px',
                '& img': {
                    borderRadius: '10px',
                    width: '100%'
                }
            },
            '& .campaign-detail': {
                display: "flex",
                '& *': {
                    fontSize: "12px",
                    color: 'grey',
                    margin: 0
                }
            }
        }
    }
}

export default homeStyle;