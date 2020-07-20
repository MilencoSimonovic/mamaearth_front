import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//style
import styles from 'assets/jss/material-kit-react/views/KYCProgressStyle.js' ;
const useStyles = makeStyles(styles);

function KYCProgress () {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <img src={require('assets/img/KYC-progress.png')} alt="in-progress"/>
                <Typography variant="h5">
                    Verification is in progress
                </Typography>
                <Typography variant="h6">
                    You have successfully completed the KYC
                </Typography>
                <Typography variant="h6">
                    Your documents will be verified in 2~3 days
                </Typography>
            </div>
            <div className={classes.footer}>
                <Button 
                    variant="contained" 
                    className="go-button"
                    fullWidth
                >
                    Go to campaigns
                </Button>
            </div>
        </div>
    )
}

export default KYCProgress;