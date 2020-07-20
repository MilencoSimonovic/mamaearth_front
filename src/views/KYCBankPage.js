import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// @material-ui/core icon
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Header from "components/Header/Header.js";
// import GridItem from "components/Grid/GridItem.js";
// style 
import styles from 'assets/jss/material-kit-react/views/KYCPanStyle.js';
const useStyles = makeStyles(styles);
const bank_type = [
    {
        id: 1,
        bank_name: 'Bank1'
    },
    {
        id: 2,
        bank_name: 'Bank2'
    },
    {
        id: 3,
        bank_name: 'Bank3'
    },
    {
        id: 4,
        bank_name: 'Bank4'
    }
]

function KYCBank(props) {
    const classes = useStyles();
    const [accountName, setAccountName] = React.useState("");
    const [accountNumber, setAccountNumber] = React.useState("");
    const [bankCode, setBankCode] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [bankType, setBankType] = React.useState("");

    function chnageBankType(e) {
        setBankType(e.target.value);
    }
    function uploadData() {
        
    }
    React.useEffect(() => {

    }, [])
    return (
        <>
            <GridContainer className={classes.content}>
                <Header backIcon={<ArrowBackIcon />} back={true} title="KYC" {...props}/>
                <div className={classes.headerPart}>
                    <p>Step 2 of 2</p>
                    <Typography variant="h6" className="header-title">
                        Update your bank details
                    </Typography>
                </div>
                <div className={classes.mainContent}>
                    <div className={classes.userInfoForm}>
                        <TextField
                            id="hold-name"
                            label="Account holder name"
                            variant="outlined"
                            fullWidth
                            className="pan-input"
                            value={accountName}
                            onChange={(e) => setAccountName(e.target.value)}
                        />
                        <FormControl variant="outlined" className="pan-input" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Choose your Bank</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={bankType}
                                onChange={chnageBankType}
                                label="Choose your Bank"
                            >
                                {bank_type.map((item, i) => {
                                    return(
                                        <MenuItem key={i} value={item.id}>{item.bank_name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <TextField
                            id="account-number"
                            label="Bank account number"
                            variant="outlined"
                            fullWidth
                            className="pan-input"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                        />
                        <TextField
                            id="bank-code"
                            label="Bank IFSC code"
                            variant="outlined"
                            fullWidth
                            className="pan-input"
                            value={bankCode}
                            onChange={(e) => setBankCode(e.target.value)}
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

export default KYCBank;