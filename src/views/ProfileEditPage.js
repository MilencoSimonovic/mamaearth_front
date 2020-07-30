import React from 'react';
//api 
import Axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// @material-ui/core icon
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Header from "components/Header/Header.js";
// import GridItem from "components/Grid/GridItem.js";
// style 
import styles from 'assets/jss/material-kit-react/views/profileEditStyle.js';
const useStyles = makeStyles(styles);

function ProfileEcit(props) {
    const classes = useStyles();
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [userInfo, setUserInfo] = React.useState({});

    function uploadData() {
        userInfo.name = fullName;
        userInfo.email = email;
        userInfo.phone = mobileNumber;
        userInfo.address = address;
        const data = {
            uid: localStorage.user_id,
            updateData:{
                "info": userInfo
            }
        }
        Axios.post(`${window.$host_url}account/update`, data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }
    React.useEffect(() => {
        if(localStorage.user_id === undefined) {
            window.location.href="/register";
        }
        else {
            Axios.post(`${window.$host_url}loginCheck`, {uid: localStorage.user_id})
            .then(res => {
                setUserInfo(res.data.user.info)
                setFullName(res.data.user.info.name);
                setEmail(res.data.user.info.email);
                setMobileNumber(res.data.user.info.phone);
                setAddress(res.data.user.info.address);
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [])
    return(
        <>
            <GridContainer className={classes.content}>
                <Header backIcon={<ArrowBackIcon/>} back={true} title="Your Profile" {...props}/>
                <div className={classes.mainContent}>
                    <div className={classes.userInfoForm}>
                        <TextField 
                            id="full-name"
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            className="pan-input"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <TextField 
                            id="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            className="pan-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField 
                            id="phone"
                            label="Mobile Number"
                            variant="outlined"
                            fullWidth
                            className="pan-input"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                        <TextField
                            id="address"
                            label="Your permanent address"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            className="pan-input"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.footerPart}>
                    <Button 
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='footer-button'
                        onClick={uploadData}
                    >
                        Save
                    </Button>
                </div>
            </GridContainer>
        </>
    )
}

export default ProfileEcit;