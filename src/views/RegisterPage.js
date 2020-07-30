import React from "react";

// register component
import UserInfo from "./RegisterComponent/UserInfo.js";
import Influence from "./RegisterComponent/Influence.js";
import Success from "./RegisterComponent/Success.js";

function Register(props) {
  const [registerStep, setRegisterStep] = React.useState(0);
  const [userId, setUserId] = React.useState("");
  function stepChange(value) {
    setRegisterStep(value);
  }
  function changeUserId(value) {
    setUserId(value);
  }
  return (
    <>
      {registerStep === 0 && (
        <UserInfo
          stepChange={stepChange}
          userIdchange={changeUserId}
          {...props}
        />
      )}
      {registerStep === 1 && (
        <Influence
          stepChange={stepChange}
          homePage={props.history}
          user_id={userId}
        />
      )}
      {registerStep === 2 && <Success {...props} />}
    </>
  );
}

export default Register;
