import React from 'react';
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

    function uploadData() {
        
    }
    React.useEffect(() => {
        
    }, [])
    return(
        <>
            <GridContainer className={classes.content}>
                <Header backIcon={<ArrowBackIcon/>} back={true} title="Your Profile"/>
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