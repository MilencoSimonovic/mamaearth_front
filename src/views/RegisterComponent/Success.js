import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

//style
import styles from "assets/jss/material-kit-react/views/KYCProgressStyle.js";
const useStyles = makeStyles(styles);

function KYCProgress(props) {
  const classes = useStyles();
  const { width, height } = useWindowSize();
  function next() {
    props.history.push("/");
  }
  React.useEffect(() => {
    var timer = setTimeout(function () {
      props.history.push("/");
    }, 2500)
    return () => {
      clearTimeout(timer);
    }
  })
  return (
    <div className={classes.container}>
      <Confetti width={width} height={height} />
      <div className={classes.content}>
        <img src={require("assets/img/confirm-icon.png")} alt="in-progress" />
        <Typography variant="h5">Congratulations!</Typography>
        <Typography variant="h6">
          You have been registered successfully
        </Typography>
      </div>
      <div className={classes.footer}>
        <Button
          variant="contained"
          className="go-button"
          fullWidth
          onClick={next}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default KYCProgress;
