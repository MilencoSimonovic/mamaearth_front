const earnStyle = {
    content: {
        display: "flex",
        flexDirection: "column",
        margin: 0,
        height: '100vh',
        background: 'white',
        "& *": {
            color: '#324467'
        }
    },
    mainContent: {
        flex: '1',
        marginTop: "57px",
        '& .header': {
            borderTop: '5px solid rgb(239 151 151)',
            padding: '10px 30px',
            display: "flex",
            background: "rgb(247 206 206)",
            position: 'relative',
            zIndex: '1000000',
            '& svg': {
                borderRadius: 50,
                border: '2px solid rgb(200 187 153)',
                marginRight: '20px',
                '& path': {
                    color: 'rgb(200 11 11)'
                }
            },
            '& .error-message': {
                fontWeight: "600",
                fontSize: "20",
                color: '#c31010'
            }
        },
        '& .header-pending': {
            borderTop: '5px solid rgb(239 181 76)',
            padding: '10px 30px',
            display: "flex",
            background: "rgb(236 220 159)",
            position: 'relative',
            zIndex: '1000000',
            '& svg': {
                borderRadius: 50,
                border: '2px solid rgb(200 187 153)',
                marginRight: '20px',
                '& path': {
                    color: 'rgb(200 145 11)'
                }
            },
            '& .error-message': {
                fontWeight: "600",
                fontSize: "20"
            }
        },
        '& .earn-info': {
            backgroundColor: 'rgb(245 247 249)',
            marginTop: '50px',
            borderRadius: 10,
            border: '1px solid #e0e0e0',
            padding: 15,
            '& .earn-info-header': {
                borderBottom: '1px solid #e0e0e0',
                display: "flex",
                '& .title': {
                    fontWeight: "600",

                },
                '& .amount': {
                    fontWeight: "600",
                    fontSize: "20px",
                    color: '#1db6ef'
                }
            },
            '& .earn-info-content': {
                marginTop: 15,
                display: "flex",
                '& .money-action-btn': {
                    flexGrow: 5,
                    textAlign: "center",
                },
                '& .money-action-btn.action': {
                    '& svg': {
                        borderRadius: 50,
                        background: '#e1f1f8',
                        cursor: "pointer",
                        '& path': {
                            color: '#00aeef'
                        }
                    },
                    '& p': {
                        fontWeight: "700",
                    }
                },
                '& .money-action-btn.non-action': {
                    '& svg': {
                        borderRadius: 50,
                        background: '#e1f1f8',
                        cursor: "pointer",
                        '& path': {
                            color: '#cce4ec'
                        }
                    },
                    '& p': {
                        fontWeight: "700",
                        color: '#dad8d8'
                    }
                }
            }
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

export default earnStyle;