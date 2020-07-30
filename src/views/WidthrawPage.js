import React from "react";
//api
import Axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
// @material-ui/core icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Header from "components/Header/Header.js";
// import GridItem from "components/Grid/GridItem.js";
// style
import styles from "assets/jss/material-kit-react/views/widthrawStyle.js";
const useStyles = makeStyles(styles);
const bank_type = [
  {
    id: 1,
    bank_name: "Bank1",
  },
  {
    id: 2,
    bank_name: "Bank2",
  },
  {
    id: 3,
    bank_name: "Bank3",
  },
  {
    id: 4,
    bank_name: "Bank4",
  },
];

function Widthraw(props) {
  const classes = useStyles();
  // const [bankDetails, setBankDetails] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [accountName, setAccountName] = React.useState("");
  const [bankType, setBankType] = React.useState("");
  const [bankNumber, setBankNumber] = React.useState("");
  const [bankCode, setBankCode] = React.useState("");
  const [saveProcess, setSaveProcess] = React.useState(false);

  function chnageBankType(e) {
    setBankType(e.target.value);
  }
  function widthrawSend() {
    setSaveProcess(true);
    const data = {
      user_id: localStorage.user_id,
      amount: amount,
      account_name: accountName,
      bank_type: bankType,
      bank_number: bankNumber,
      bank_code: bankCode,
    };
    Axios.post(`${window.$host_url}withdraw_request/save`, data)
      .then((res) => {
        console.log(res);
        setSaveProcess(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    if (localStorage.user_id === undefined) {
      window.location.href = "/register";
    } else {
      Axios.post(`${window.$host_url}loginCheck`, { uid: localStorage.user_id })
        .then((res) => {
          // setBankDetails(res.data.user.bank_info);
          setAccountName(res.data.user.bank_info.name);
          setBankType(res.data.user.bank_info.bank_type);
          setBankNumber(res.data.user.bank_info.bank_number);
          setBankCode(res.data.user.bank_info.bank_code);

          // setPageLoad(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <>
      <GridContainer className={classes.content}>
        <Header
          backIcon={<ArrowBackIcon />}
          back={true}
          title="Withdraw"
          {...props}
        />
        <div className={classes.mainContent}>
          {/* <div className="bank-details">
            <ul>
              <li>
                <strong>Account name: </strong> {bankDetails.name}
              </li>
              <li>
                <strong>Bank name: </strong> {bankDetails.bank_type}
              </li>
              <li>
                <strong>Account number: </strong> {bankDetails.bank_number}
              </li>
              <li>
                <strong>IFSC code: </strong> {bankDetails.bank_code}
              </li>
              <li>
                <strong>Address: </strong> {bankDetails.address}
              </li>
            </ul>
          </div> */}
          <TextField
            id="amount"
            label="Withdraw amount"
            variant="outlined"
            fullWidth
            className="pan-input"
            value={amount}
            type="number"
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
            <InputLabel id="demo-simple-select-outlined-label">
              Choose your Bank
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={bankType}
              onChange={chnageBankType}
              label="Choose your Bank"
            >
              {bank_type.map((item, i) => {
                return (
                  <MenuItem key={i} value={item.id}>
                    {item.bank_name}
                  </MenuItem>
                );
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
            className="footer-button"
            onClick={widthrawSend}
            disabled={saveProcess}
          >
            Withdraw Request
          </Button>
        </div>
      </GridContainer>
    </>
  );
}

export default Widthraw;
