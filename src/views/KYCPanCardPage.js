import React from 'react';
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
// import GridItem from "components/Grid/GridItem.js";
// style 
import styles from 'assets/jss/material-kit-react/views/KYCPanStyle.js';
const useStyles = makeStyles(styles);

function KYCPANCard(props) {
    const classes = useStyles();
    const [cardNumber, setCardNumber] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [preveiwImage, setPreviewImage] = React.useState(null);
    const [panImage, setPanImage] = React.useState(null);

    function panImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let newFile = e.target.files[0];
        reader.onloadend = () => {
            setPreviewImage(reader.result);
            setPanImage(newFile);
        };
        reader.readAsDataURL(newFile);
    }
    function uploadData() {
        var data = {
            card_number: cardNumber,
            address: address,
            image: panImage
        }
        console.log(data);
    }
    React.useEffect(() => {

    }, [])
    return(
        <>
            
            <GridContainer className={classes.content}>
                <Header backIcon={<ArrowBackIcon/>} back={true} title="KYC" {...props}/>
                <div className={classes.headerPart}>
                    <p>Step 1 of 2</p>
                    <Typography variant="h6" className="header-title">
                        Upload your PAN card
                    </Typography>
                </div>
                <div className={classes.mainContent}>
                    <label className="pan-card-upload" htmlFor="pan-card">
                        {preveiwImage !== null ? (
                            <img src={preveiwImage} alt="pan-preview" className="preveiw-image"/>
                        ) : (
                            <>
                                <img src={require('assets/img/file-default.png')} alt="pan-card" />
                                <p>Upload the image here</p>
                            </>
                        )}
                        
                    </label>
                    <input type="file" id="pan-card" style={{display: 'none'}} onChange={panImageChange}/>
                    <div className={classes.userInfoForm}>
                        <TextField 
                            id="card-number"
                            label="PAN card number"
                            variant="outlined"
                            fullWidth
                            className="pan-input"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
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
                        NEXT
                    </Button>
                </div>
            </GridContainer>
        </>
    )
}

export default KYCPANCard;