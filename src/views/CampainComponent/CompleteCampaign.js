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
    }, [props.search])
    return (
        <div className={classes.campaignContent}>
            <div className={classes.campaignContent}>
                {props.campaignList.map((item, i) => {
                    return (
                        <div className="campaign-list" key={i}>
                            <img src={item.image_url} alt="aour" />
                            <div className="campaign-detail">
                                <p>Get ₹ {item.price}</p>
                                <div style={{ flexGrow: 5 }}></div>
                                <p style={{ display: 'flex', alignItems: 'center' }}><ScheduleIcon /> {Math.ceil((new Date(item.end_at) - new Date()) / (1000 * 60 * 60 * 24))} days</p>
                            </div>
                            <p>{item.description} </p>
                        </div>
                    )
                })}
                {props.campaignList.length === 0 && (
                    <p style={{ marginTop: 10, textAlign: 'center' }}>There is not completed campaign</p>
                )}
            </div>
        </div>
    )
}

export default MyCompaign