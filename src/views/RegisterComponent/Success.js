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
                <img src={require('assets/img/confirm-icon.png')} alt="in-progress"/>
                <Typography variant="h5">
                    Cogratulations!
                </Typography>
                <Typography variant="h6">
                    You have been registered successfully
                </Typography>
                <Typography variant="h6">
                    Check next step <a>campaign tabs</a>
                </Typography>
            </div>
            <div className={classes.footer}>
                <Button 
                    variant="contained" 
                    className="go-button"
                    fullWidth
                >
                    Invite
                </Button>
            </div>
        </div>
    )
}

export default KYCProgress;