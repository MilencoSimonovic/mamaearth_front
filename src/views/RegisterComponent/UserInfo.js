import React from 'react';
// react router
import {Link} from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
// @material-ui/core icon
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// social login button
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// style 
import styles from 'assets/jss/material-kit-react/views/registerPage.js';
const useStyles = makeStyles(styles);

function Register(props) {
    const classes = useStyles();

    function responseGoogle(response) {
        console.log(response);
    }
    function responseFacebook(respose) {
        console.log(respose);
    }
    return(
        <div className={classes.container} >
            <GridContainer className={classes.content}>
                <img src={require('assets/img/logo.svg')} alt="logo" className={classes.logoImg}/>
                <p className="register-dis">Join the community of influencers and get rewarded</p>
                <GridItem xs={12} sm={12} md={12} >
                    <div className={classes.buttonContent}>
                        <FacebookLogin
                            appId="201544907574928"
                            fields="name,email,picture"
                            autoLoad={true}
                            callback={responseFacebook} 
                            icon={<InstagramIcon />}
                            render={renderProps => (
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {props.stepChange(1); renderProps.onClick()}}
                                    fullWidth
                                    className="facebook-button"
                                    startIcon={<InstagramIcon />}
                                >
                                    Continue With Instagram
                                </Button>
                            )}
                        />
                        <GoogleLogin
                            className="google-button"
                            clientId="401801974710-e8cef3un9ht67lkccesn056k6igdr5bi.apps.googleusercontent.com"
                            buttonText="Continue With Youtube"
                            scope="https://www.googleapis.com/auth/youtube.readonly"
                            onSuccess={responseGoogle}
                            render={({ onClick, disabled }) => (
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {props.stepChange(1); onClick()}}
                                    disabled={disabled} 
                                    fullWidth
                                    className="google-button"
                                    startIcon={<YouTubeIcon />}
                                >
                                    Continue With Youtube
                                </Button>
                            )}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                        />
                        <p className="term-police">By signing up I accept the terms of use and the data privacy policy</p>
                    </div>
                    <div className={classes.alreadyLogin}>
                        <p>Already have an account? </p>
                        <Link to="/">Lgoin Here</Link>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
        
    )
}

export default Register;