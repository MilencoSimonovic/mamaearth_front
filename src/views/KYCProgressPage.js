import React from "react";
// api axios
import Axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// loading component
import Loading from "components/Loading/Loading.js";

//style
import styles from "assets/jss/material-kit-react/views/KYCProgressStyle.js";
const useStyles = makeStyles(styles);

function KYCProgress(props) {
  const classes = useStyles();
  const [bankDetails, setBankDetails] = React.useState("");
  const [panDetails, setPanDetails] = React.useState("");
  const [pageLoad, setPageLoad] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.user_id === undefined) {
      window.location.href = "/register";
    } else {
      Axios.post(`${window.$host_url}loginCheck`, { uid: localStorage.user_id })
        .then((res) => {
          setPanDetails(res.data.user.pan_card);
          setBankDetails(res.data.user.bank_info);
          setPageLoad(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className={classes.container}>
      {pageLoad ? (
        <>
          <div className={classes.content}>
            {/* <img src={require('assets/img/KYC-progress.png')} alt="in-progress"/> */}
            <Typography variant="h5">Verification is in progress</Typography>
            <Typography variant="h6">
              You have successfully completed the KYC
            </Typography>
            <Typography variant="h6">
              Your documents will be verified in 2~3 days
            </Typography>
            <div className="pan-details">
              <h5>PAN details</h5>
              <ul>
                <li>
                  <strong>Card Number: </strong> {panDetails.card_number}
                </li>
                <li>
                  <strong>Address: </strong> {panDetails.address}
                </li>
              </ul>
            </div>
            <div className="pan-details">
              <h5>Bank details</h5>
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
            </div>
          </div>
          <div className={classes.footer}>
            <Button
              variant="contained"
              className="go-button"
              fullWidth
              onClick={() => {
                props.history.push("/campain");
              }}
            >
              Go to campaigns
            </Button>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default KYCProgress;
