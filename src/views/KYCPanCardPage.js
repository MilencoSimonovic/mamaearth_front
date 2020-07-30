import React from 'react';
//api 
import Axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// @material-ui/core icon
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Header from "components/Header/Header.js";
//loading component 
import Loading from 'components/Loading/Loading.js';
// import GridItem from "components/Grid/GridItem.js";
// style 
import styles from 'assets/jss/material-kit-react/views/KYCPanStyle.js';
const useStyles = makeStyles(styles);

function KYCPANCard(props) {
    const classes = useStyles();
    const [cardNumber, setCardNumber] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [preveiwImage, setPreviewImage] = React.useState('');
    const [imageURL, setImageURL] = React.useState('');
    const [fileProgress, setFileProcess] = React.useState(0);
    const [kycProgress, setKYCProgress] = React.useState(false);
    const [saveProcess, setSaveProcess] = React.useState(false);
    const [pageLoad, serPageLoad] = React.useState(false);


    function panImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let newFile = e.target.files[0];
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(newFile);
        const file_size = newFile.size;
        var formData = new FormData();
        formData.append('file', newFile);
        console.log(`${window.$host_url}upload-file`)
        Axios.post(`${window.$host_url}upload-file`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
                console.log(parseInt(progressEvent.loaded / file_size * 100))
                setFileProcess(progressEvent.loaded / file_size * 100)
            }
        })
            .then(res => {
                console.log(res)

                setImageURL(res.data.data.url);
            })
            .catch(err => {
                console.log(err)
            })
    }
    function uploadData() {
        console.log(fileProgress)
        setSaveProcess(true);
        var data = {
            uid: localStorage.user_id,
            updateData: {
                "pan_card": {
                    card_number: cardNumber,
                    address: address,
                    image_url: imageURL
                }
            }
        }
        Axios.post(`${window.$host_url}account/update`, data)
            .then(res => {
                setSaveProcess(false);
                if (!kycProgress) {
                    props.history.push('/kyc-bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    React.useEffect(() => {
        if (localStorage.user_id === undefined) {
            window.location.href = "/register";
        }
        else {
            Axios.post(`${window.$host_url}loginCheck`, { uid: localStorage.user_id })
                .then(res => {
                    setKYCProgress(res.data.user.kyc_progress);
                    const pan_card = res.data.user.pan_card;
                    if (Object.keys(pan_card).length !== 0) {
                        setCardNumber(pan_card.card_number);
                        setAddress(pan_card.address);
                        setPreviewImage(pan_card.image_url);
                        setImageURL(pan_card.image_url);
                    }
                    serPageLoad(true);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])
    return (
        <>

            <GridContainer className={classes.content}>
                <Header backIcon={<ArrowBackIcon />} back={true} title="KYC" {...props} />
                <div className={classes.headerPart}>
                    <p>Step 1 of 2</p>
                    <Typography variant="h6" className="header-title">
                        Upload your PAN card
                    </Typography>
                </div>
                {pageLoad ? (
                    <>
                        <div className={classes.mainContent}>
                            <label className="pan-card-upload" htmlFor="pan-card">
                                {(preveiwImage !== '' && preveiwImage !== undefined) ? (
                                    <img src={preveiwImage} alt="pan-preview" className="preveiw-image" />
                                ) : (
                                        <>
                                            <img src={require('assets/img/file-default.png')} alt="pan-card" />
                                            <p>Upload the image here</p>
                                        </>
                                    )}

                            </label>
                            {!kycProgress && (
                                <input type="file" id="pan-card" style={{ display: 'none' }} accept="image/*" onChange={panImageChange} />
                            )}

                            <div className={classes.userInfoForm}>
                                <TextField
                                    id="card-number"
                                    label="PAN card number"
                                    variant="outlined"
                                    fullWidth
                                    className="pan-input"
                                    value={cardNumber}
                                    onChange={(e) => { setCardNumber(e.target.value) }}
                                    disabled={kycProgress}
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
                                    disabled={kycProgress}
                                />
                            </div>
                        </div>
                        <div className={classes.footerPart}>
                            {kycProgress ? (
                                null
                            ) : (
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className='footer-button'
                                        onClick={uploadData}
                                        disabled={saveProcess}
                                    >
                                        NEXT
                                    </Button>
                                )}

                        </div>
                    </>
                ) : (
                        <Loading />
                    )}
            </GridContainer>
        </>
    )
}

export default KYCPANCard;