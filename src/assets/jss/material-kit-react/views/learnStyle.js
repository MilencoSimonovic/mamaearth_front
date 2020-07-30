const learnStyle = {
    container: {
        background: 'rgb(245 247 249)',
        height: "100vh",
        display: "flex",
        flexDirection: 'column'
    },
    content: {
        marginTop: '60px',
        flex: '1',
        overflow: 'auto',
        padding: '10px'
    },
    campaignItem: {
        padding: '10px',
        borderRadius: "10px",
        border: "1px solid #eae9e9",
        boxShadow: "0px 0px 3px #eae9e9",
        background: 'white',
        marginBottom: "20px",
        '& .campaign-header': {
            display: 'flex',
            '& img': {
                width: '50px',
                height: '50px',
                borderRadius: "50px",
                marginRight: '15px',
            },
            '& .user-data': {
                '& p': {
                    margin: 0,
                },
                '& .user-name': {
                    fontWeight: "600",
                    color: 'rgb(50 68 103)'
                },
                '& .create-date': {
                    fontSize: 12,
                    color: 'rgb(150 161 184)'
                }
            }
        },
        '& .campaign-content': {
            marginTop: '20px',
            borderRadius: '10px',
            overflow: "hidden"
        }
    }
}

export default learnStyle;