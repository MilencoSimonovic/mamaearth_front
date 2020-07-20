import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// @material-ui/core icon
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// core components
import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// style 
import styles from 'assets/jss/material-kit-react/views/KYCStyle.js';
const useStyles = makeStyles(styles);

function KYC(props) {
    const classes = useStyles();

    React.useEffect(() => {
    }, [])
    return(
        <>
            <AppBar position="static" color="default" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" className="app-title">
                        KYC
                    </Typography>
                </Toolbar>
            </AppBar>
            <GridContainer className={classes.content}>
                <div className={classes.headerPart}>
                    <Typography variant="h6" className="header-title">
                        Please complete the steps below to complete your KYC
                    </Typography>
                </div>
                <div className={classes.mainContent}>
                    <div className="kyc-list-item">
                        <img src={require('assets/img/file-default.png')} alt="default"/>
                        <div style={{flexGrow: 5}}>
                            <p className="kyc-list-title">
                                Upload your
                            </p>
                            <p className="kyc-list-title">
                                PAN card
                            </p>
                        </div>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {props.history.push('/kyc-pan')}}>
                            <ArrowForwardIosIcon className="kyc-list-icon"/>
                        </IconButton>
                    </div>
                    <div className="kyc-list-item">
                        <img src={require('assets/img/bank-image.png')} alt="bank"/>
                        <div style={{flexGrow: 5}}>
                            <Typography variant="subtitle1" className="kyc-list-title">
                                Update your
                            </Typography>
                            <Typography variant="subtitle1" className="kyc-list-title">
                                bank details
                            </Typography>
                        </div>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {props.history.push('/kyc-bank')}}>
                            <ArrowForwardIosIcon className="kyc-list-icon"/>
                        </IconButton>
                        
                    </div>
                </div>
                <div className={classes.footerPart}>
                    
                </div>
            </GridContainer>
        </>
    )
}

export default KYC;