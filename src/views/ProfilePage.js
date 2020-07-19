import React from 'react';
import {Link} from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// @material-ui/core icon
import YouTubeIcon from '@material-ui/icons/YouTube';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ErrorIcon from '@material-ui/icons/Error';
// @material-ui custome component
import Footer from 'components/Footer/Footer.js';
//styles
import styles from 'assets/jss/material-kit-react/views/profileStyle.js';
const useStyles = makeStyles(styles);

function Profile(props) {
    const classes = useStyles();

    return(
        <div className={classes.containter}>
            <div className={classes.content}>
                <div className={classes.header}>
                    <img src={require('assets/img/2.png')} alt="user_name"/>
                    <div className="user-detail">
                        <p className="user-name">Ashish agrawal</p>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <YouTubeIcon />
                            <Link to="/">Add instagram</Link>
                        </div>
                    </div>
                    <IconButton onClick={() => {props.history.push('/profile-edit')}}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                    
                </div>
                <div className={classes.pendingCompaign}>
                    <ErrorIcon />
                    <p className="error-message">
                        Visit pending campaign tab to complet task
                    </p>
                </div>
                <div>
                <List component="nav" aria-label="main mailbox folders" >
                    <ListItem button className={classes.profileList} onClick={() => props.history.push('/earn')}>
                        <ListItemIcon>
                            Your earnings
                        </ListItemIcon>
                        <ListItemText primary="$550" />
                        <ListItemIcon>
                            <ArrowForwardIosIcon />
                        </ListItemIcon>
                    </ListItem>
                    <Divider />
                    <ListItem button className={classes.profileList}>
                        <ListItemIcon>
                            Ranks and Recommendations
                        </ListItemIcon>
                        <ListItemText primary="" />
                        <ListItemIcon>
                            <ArrowForwardIosIcon />
                        </ListItemIcon>
                    </ListItem>
                    <Divider />
                    <ListItem button className={classes.profileList}>
                        <ListItemIcon>
                            Your wishlist
                        </ListItemIcon>
                        <ListItemText primary="" />
                        <ListItemIcon>
                            <ArrowForwardIosIcon />
                        </ListItemIcon>
                    </ListItem>
                </List>
                </div>
            </div>
            <Footer link="profile" pageRouter={props.history}/>
        </div>
    )
}

export default Profile