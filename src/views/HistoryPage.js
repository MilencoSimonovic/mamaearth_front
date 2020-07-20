import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/core icon
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Header from "components/Header/Header.js";
// import GridItem from "components/Grid/GridItem.js";
// style 
import styles from 'assets/jss/material-kit-react/views/historyStyle.js';
const useStyles = makeStyles(styles);

const histroty_list = [
    {
        type: 'add',
        amount: '$1000',
        date: '2020-07-15',
    },
    {
        type: 'width',
        amount: '$200',
        date: '2020-07-17',
    },
    {
        type: 'width',
        amount: '$500',
        date: '2020-07-18',
    },
    {
        type: 'add',
        amount: '$3000',
        date: '2020-07-20',
    }
]

function History(props) {
    const classes = useStyles();
    
    React.useEffect(() => {

    }, [])
    return (
        <>
            <GridContainer className={classes.content}>
                <Header backIcon={<ArrowBackIcon />} back={true} title="History" {...props}/>
                <div className={classes.headerPart}>
                    <div className="total-history">
                        <div className="total-earn">
                            <div className="list-dot"></div>
                            <div className="money-amount">
                                <p style={{color: 'grey'}}>Money earned</p>
                                <p style={{fontWeight: 700, fontSize: 15}}>$ 1000</p>
                            </div>
                        </div>
                        <div style={{borderRight: '1px solid #d8d8d8'}}></div>
                        <div className="total-withdrew">
                            <div className="list-dot"></div>
                            <div className="money-amount">
                                <p style={{color: 'grey'}}>Money withdrew</p>
                                <p style={{fontWeight: 700, fontSize: 15}}>$ 1000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.mainContent}>
                    <div className="history-list">
                        {histroty_list.map((item, i) => {
                            return(
                                <div key={i} className="history-list-item">
                                    <div>
                                        {item.type === 'add' ? (
                                            <p style={{fontWeight: '700'}}>Money added</p>
                                        ) : (
                                            <p style={{fontWeight: '700'}}>Money withdrew</p>
                                        )}
                                        <p style={{color: 'grey', fontSize: '13px'}}>{item.date}</p>
                                    </div>
                                    <div style={{flexGrow: 5}}></div>
                                    {item.type === 'add' ? (
                                        <p style={{color: '#21c165', fontSize: 16, fontWeight: '800'}}>{item.amount}</p>
                                    ) : (
                                        <p style={{color: '#e4797b', fontSize: 16, fontWeight: '800'}}>{item.amount}</p>
                                    )}
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </GridContainer>
        </>
    )
}

export default History;