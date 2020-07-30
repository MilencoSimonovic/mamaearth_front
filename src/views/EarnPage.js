import React from 'react';
//api 
import Axios from 'axios';
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
// loading component
import Loading from 'components/Loading/Loading.js';
// import GridItem from "components/Grid/GridItem.js";
// style 
import styles from 'assets/jss/material-kit-react/views/EarnStyle.js';
const useStyles = makeStyles(styles);

function ProfileEcit(props) {
    const classes = useStyles();
    const [userData, setUserData] = React.useState('');

    // function uploadData() {

    // }
    React.useEffect(() => {
        if (localStorage.user_id === undefined) {
            window.location.href = "/register";
        }
        else {
            Axios.post(`${window.$host_url}loginCheck`, { uid: localStorage.user_id })
                .then(res => {
                    setUserData(res.data.user)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])
    React.useEffect(() => {

    }, [])
    return (
        <>
            <GridContainer className={classes.content}>
                <Header backIcon={<ArrowBackIcon />} back={true} title="Your Earnings" {...props} />
                {userData !== "" ? (
                    <div className={classes.mainContent}>
                        {userData.info.kyc_flg === 0 && (
                            !userData.kyc_progress ? (
                                <div className="header">
                                    <ErrorIcon />
                                    <p className="error-message">
                                        Complete the KYC to withdraw your amount
                                    </p>
                                </div>
                            ) : (
                                    <div className="header-pending">
                                        <ErrorIcon />
                                        <p className="error-message">
                                            Complete the KYC to withdraw your amount
                                    </p>
                                    </div>
                                )

                        )}
                        <div style={{ padding: '0px 20px' }}>
                            <div className="earn-info">
                                <div className="earn-info-header">
                                    <p className="title">Your earnings</p>
                                    <div style={{ flexGrow: 5 }}></div>
                                    <p className="amount">{`₹ ${userData.info.price === undefined ? 0 : userData.info.price}`}</p>
                                </div>
                                <div className="earn-info-content">
                                    {userData.info.kyc_flg === 0 ? (
                                        <>
                                            {!userData.kyc_progress ? (
                                                <div className="money-action-btn action" onClick={() => props.history.push('/kyc')}>
                                                    <AssignmentIndIcon />
                                                    <p>KYC</p>
                                                </div>
                                            ) : (
                                                    <div className="money-action-btn action" onClick={() => props.history.push('/kyc-pendding')}>
                                                        <AssignmentIndIcon />
                                                        <p>KYC</p>
                                                    </div>
                                                )}
                                            <div className={`money-action-btn non-action`}>
                                                <AccountBalanceIcon />
                                                <p>Withdraw</p>
                                            </div>
                                            <div className={`money-action-btn non-action`}>
                                                <HistoryIcon />
                                                <p>History</p>
                                            </div>
                                        </>
                                    ) : (
                                            <>
                                                <div className={`money-action-btn action`} onClick={() => { props.history.push('/widthdraw') }}>
                                                    <AccountBalanceIcon />
                                                    <p>Withdraw</p>
                                                </div>
                                                <div className={`money-action-btn action`} onClick={() => { props.history.push('/history') }}>
                                                    <HistoryIcon />
                                                    <p>History</p>
                                                </div>
                                            </>
                                        )}


                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                        <Loading />
                    )}

            </GridContainer>
        </>
    )
}

export default ProfileEcit;