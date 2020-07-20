import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/core icon
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HistoryIcon from '@material-ui/icons/History';
import ErrorIcon from '@material-ui/icons/Error';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Header from "components/Header/Header.js";

// import GridItem from "components/Grid/GridItem.js";
// style 
import styles from 'assets/jss/material-kit-react/views/EarnStyle.js';
const useStyles = makeStyles(styles);

function ProfileEcit(props) {
    const classes = useStyles();
    const [kycVerify, setKycVerify] = React.useState(0);

    // function uploadData() {
        
    // }
    React.useEffect(() => {
        setKycVerify(0)
    }, [])
    return(
        <>
            <GridContainer className={classes.content}>
                <Header backIcon={<ArrowBackIcon/>} back={true} title="Your Earnings" {...props}/>
                <div className={classes.mainContent}>
                    <div className="header">
                        <ErrorIcon />
                        <p className="error-message">
                            Visit pending campaign tab to complet task
                        </p>
                    </div>
                    <div style={{padding: '0px 20px'}}>
                        <div className="earn-info">
                            <div className="earn-info-header">
                                <p className="title">Your earnings</p>
                                <div style={{flexGrow: 5}}></div>
                                <p className="amount">$500</p>
                            </div>
                            <div className="earn-info-content">
                                {kycVerify === 0 && (
                                    <div className="money-action-btn action" onClick={() => props.history.push('/kyc')}>
                                        <AssignmentIndIcon />
                                        <p>KYC</p>
                                    </div>
                                )}
                                
                                <div className={`money-action-btn ${kycVerify === 0 ? "non-action" : "action"}`}>
                                    <AccountBalanceIcon />
                                    <p>Withdraw</p>
                                </div>
                                <div className={`money-action-btn ${kycVerify === 0 ? "non-action" : "action"}`}>
                                    <HistoryIcon />
                                    <p>History</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </GridContainer>
        </>
    )
}

export default ProfileEcit;