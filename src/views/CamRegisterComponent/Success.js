import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

//style
import styles from 'assets/jss/material-kit-react/views/KYCProgressStyle.js';
const useStyles = makeStyles(styles);

function KYCProgress(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <img src={require('assets/img/confirm-icon.png')} alt="in-progress" />
                <Typography variant="h5">
                    Cogratulations!
                </Typography>
                <Typography variant="h6">
                    You have been registered successfully
                </Typography>
                <Typography variant="h6">
                    Check next step <a href='/campain' style={{ color: 'rgb(0 174 239)' }}>campaign tab</a>
                </Typography>
            </div>
            <div className={classes.footer}>

            </div>
        </div>
    )
}

export default KYCProgress;