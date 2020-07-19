import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/core icon
import ScheduleIcon from '@material-ui/icons/Schedule';

// style 
import styles from 'assets/jss/material-kit-react/views/campaignStyle.js';
const useStyles = makeStyles(styles);

function MyCompaign(props) {
    const classes = useStyles();
    React.useEffect(() => {
        console.log(props.search);
    }, [props.search])
    return(
        <div className={classes.campaignContent}>
            <div className="campaign-list">
                <img src={require('assets/img/1-3.jpg')} alt="aour"/>
                <div className="campaign-detail">
                    <p>Get $1000</p>
                    <div style={{flexGrow: 5}}></div>
                    <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                </div>
                <p>Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign </p>
            </div>
            <div className="campaign-list">
                <img src={require('assets/img/1-2.jpg')} alt="aour"/>
                <div className="campaign-detail">
                    <p>Get $1000</p>
                    <div style={{flexGrow: 5}}></div>
                    <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                </div>
                <p>Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign </p>
            </div>
            <div className="campaign-list">
                <img src={require('assets/img/1-1.jpg')} alt="aour"/>
                <div className="campaign-detail">
                    <p>Get $1000</p>
                    <div style={{flexGrow: 5}}></div>
                    <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                </div>
                <p>Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign </p>
            </div>
        </div>
    )
}

export default MyCompaign