import React from 'react';
import { Link } from 'react-router-dom';
//api 
import Axios from 'axios';
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
// import ErrorIcon from '@material-ui/icons/Error';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// @material-ui custome component
import Footer from 'components/Footer/Footer.js';
// loading component
import Loading from 'components/Loading/Loading.js';
//styles
import styles from 'assets/jss/material-kit-react/views/profileStyle.js';
const useStyles = makeStyles(styles);

function Profile(props) {
    const classes = useStyles();
    const [userData, setUserData] = React.useState('');

    function logOut() {
        localStorage.clear();
        props.history.push('/register');
    }
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
    return (
        <div className={classes.containter}>
            {userData !== "" ? (
                <div className={classes.content}>
                    <div className={classes.header}>
                        <img src={userData.info.image} alt="user_name" />
                        <div className="user-detail">
                            <p className="user-name">{userData.info.name}</p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <YouTubeIcon />
                                <Link to="/" style={{ fontSize: '13px', color: 'rgb(0 174 239)', marginLeft: 5 }}>Add instagram</Link>
                            </div>
                        </div>
                        {/* <IconButton onClick={() => {logOut()}}>
                            <ExitToAppIcon />
                        </IconButton> */}
                        <IconButton onClick={() => { props.history.push('/profile-edit') }} className="profile-edit">
                            <ArrowForwardIosIcon />
                        </IconButton>

                    </div>
                    {/* <div className={classes.pendingCompaign}>
                        <ErrorIcon />
                        <p className="error-message">
                            Visit pending campaign tab to complete task
                        </p>
                    </div> */}
                    <div>
                        <List component="nav" aria-label="main mailbox folders" >
                            <ListItem button className={classes.profileList} onClick={() => props.history.push('/earn')}>
                                <ListItemIcon>
                                    Your earnings
                            </ListItemIcon>
                                <ListItemText primary={`₹ ${userData.info.price === undefined ? 0 : userData.info.price}`} />
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
                            <Divider />
                            <ListItem button className={classes.profileList} onClick={logOut}>
                                <ListItemIcon>
                                    Log Out
                                </ListItemIcon>
                                <ListItemText primary="" />
                                <ListItemIcon>
                                    <ArrowForwardIosIcon />
                                </ListItemIcon>
                            </ListItem>
                            <Divider />
                        </List>
                    </div>
                </div>
            ) : (
                    <Loading />
                )}
            <div>
                <Footer link="profile" pageRouter={props.history} />
            </div>
        </div>
    )
}

export default Profile