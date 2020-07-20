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
    headerPart: {
        marginTop: '60px',
        '& .total-history': {
            padding: '15px',
            borderRadius: 10,
            border: '1px solid #d8d8d8',
            display: "flex",
            '& .total-earn': {
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                '& .list-dot': {
                    marginTop: '5px',
                    width: 10,
                    height: 10,
                    background: 'green',
                    borderRadius: '10px',
                    marginRight: '15px'
                },
                '& .money-amount': {
                    '& p': {
                        margin: 0
                    }
                }
            },
            '& .total-withdrew': {
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                '& .list-dot': {
                    marginTop: '5px',
                    background: "red",
                    width: 10,
                    height: 10,
                    borderRadius: '10px',
                    marginRight: '15px'
                },
                '& .money-amount': {
                    '& p': {
                        margin: 0
                    }
                }
            }
        }
    },
    mainContent: {
        marginTop: '20px',
        '& .history-list-item': {
            marginTop: '10px',
            padding: '10px',
            borderRadius: 5,
            border: '1px solid #d8d8d8',
            display: "flex",
            '& p': {
                margin: '0px'
            }
        }
    }
}

export default historyStyle;