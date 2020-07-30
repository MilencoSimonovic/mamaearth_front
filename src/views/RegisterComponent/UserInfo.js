import React from 'react';
// react router
import { Link } from 'react-router-dom';
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
//api 
import axios from 'axios';
//loading screen
import Loading from 'components/Loading/LoginLoading.js';
// style 
import styles from 'assets/jss/material-kit-react/views/registerPage.js';
const useStyles = makeStyles(styles);

function Register(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);

    function responseGoogle(response) {
        setLoading(true)
        console.log(response)
        if (response.error === undefined) {

            const data = {
                "auth": {
                    provider: "google/facebook",
                    info: {

                    },
                    uid: `google_${response.googleId}`,
                    email: response.profileObj.email
                },
                "info": {
                    name: response.profileObj.name,
                    email: response.profileObj.email,
                    image: response.profileObj.imageUrl,
                    phone: '',
                    address: '',
                    kyc_flg: 0,
                    price: 0,
                    campaign_id: []
                },
                "categories": [],
                "bank_info": {

                },
                'kyc_progress': false,
                'pan_card': {}
            }
            axios.post(`${window.$host_url}signup`, data)
                .then(res => {
                    console.log(res);
                    localStorage.user_id = `google_${response.googleId}`;
                    if (res.data.msg === 'sign in successfully') {
                        setLoading(false)
                        props.history.push('/');
                    }
                    else {
                        props.userIdchange(`google_${response.googleId}`)
                        props.stepChange(1);
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    function responseFacebook(response) {
        setLoading(true)
        const data = {
            "auth": {
                provider: "google/facebook",
                info: {

                },
                uid: `facebook_${response.userID}`,
                email: response.email
            },
            "info": {
                name: response.name,
                email: response.email,
                image: response.picture.data.url,
                phone: '',
                address: '',
                kyc_flg: 0,
                price: 0,
                campaign_id: []
            },
            "categories": [],
            "bank_info": {

            },
            'kyc_progress': false,
            'pan_card': {}
        }
        axios.post(`${window.$host_url}signup`, data)
            .then(res => {
                localStorage.user_id = `facebook_${response.userID}`;
                if (res.data.msg === 'sign in successfully') {
                    console.log(props)
                    setLoading(false)
                    props.history.push('/');
                }
                else {
                    props.userIdchange(`facebook_${response.userID}`)
                    props.stepChange(1);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className={classes.container} >
            <GridContainer className={classes.content}>
                <img src={require('assets/img/logo.svg')} alt="logo" className={classes.logoImg} />
                <p className="register-dis">Join the community of influencers and get rewarded</p>
                <GridItem xs={12} sm={12} md={12} >
                    <div className={classes.buttonContent}>
                        <FacebookLogin
                            appId="296840584705291"
                            fields="name,email,picture"
                            autoLoad={false}
                            callback={responseFacebook}
                            icon={<InstagramIcon />}
                            render={renderProps => (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={renderProps.onClick}
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
                            clientId="396227111160-dqcufnuu8jn3j7q93a7rvjless5gt24r.apps.googleusercontent.com"
                            buttonText="Continue With Youtube"
                            scope="https://www.googleapis.com/auth/youtube.readonly"
                            autoLoad={false}
                            onSuccess={responseGoogle}
                            render={renderProps => (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
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
                        <p className="term-police">By signing up I accept the
                            <a style={{ textDecoration: 'underline', color: 'white' }} href="/">terms of use</a>  and the <a style={{ textDecoration: 'underline', color: 'white' }} href="/">data privacy policy</a>
                        </p>
                    </div>
                    <div className={classes.alreadyLogin}>
                        <p>Already have an account? </p>
                        <Link to="/" style={{ textDecoration: 'underline' }}>Login Here</Link>
                    </div>
                </GridItem>
            </GridContainer>
            {loading && (
                <Loading />
            )}
        </div>

    )
}

export default Register;