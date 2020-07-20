import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
// @material-ui/core icon
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Header from "components/Header/Header.js";
// import GridItem from "components/Grid/GridItem.js";
// style 
import styles from 'assets/jss/material-kit-react/views/widthrawStyle.js';
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
];

function Widthraw(props) {
    const classes = useStyles();
    const [amount, setAmount] = React.useState('');
    const [accountName, setAccountName] = React.useState('');
    const [bankType, setBankType] = React.useState('');
    const [bankNumber, setBankNumber] = React.useState('');
    const [bankCode, setBankCode] = React.useState('');

    function chnageBankType(e) {
        setBankType(e.target.value);
    }
    function widthrawSend() {

    }
    React.useEffect(() => {

    }, [])
    return (
        <>
            <GridContainer className={classes.content}>
                <Header backIcon={<ArrowBackIcon />} back={true} title="Widthraw" {...props}/>
                <div className={classes.mainContent}>
                    <TextField 
                        id="amount"
                        label="Widthraw amount"
                        variant="outlined"
                        fullWidth
                        className="pan-input"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <TextField 
                        id="name"
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
                        id="number"
                        label="Bank account number"
                        variant="outlined"
                        fullWidth
                        className="pan-input"
                        value={bankNumber}
                        onChange={(e) => setBankNumber(e.target.value)}
                    />
                    <TextField 
                        id="number"
                        label="Bank IFSC code"
                        variant="outlined"
                        fullWidth
                        className="pan-input"
                        value={bankCode}
                        onChange={(e) => setBankCode(e.target.value)}
                    />
                </div>
                <div className={classes.footerPart}>
                    <Button 
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='footer-button'
                        onClick={widthrawSend}
                    >
                        Widthraw Request
                    </Button>
                </div>
            </GridContainer>
        </>
    )
}

export default Widthraw;