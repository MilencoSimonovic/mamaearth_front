import React from 'react';

// register component
import UserInfo from './RegisterComponent/UserInfo.js';
import Influence from './RegisterComponent/Influence.js';

function Register(props) {
    const [registerStep, setRegisterStep] = React.useState(0);
    function stepChange(value) {
        setRegisterStep(value);
    }
    return (
        <>
        {registerStep === 0 && (
            <UserInfo stepChange={stepChange}/>
        )}
        {registerStep === 1 && (
            <Influence stepChange={stepChange} homePage={props.history}/>
        )}
        </>
    )
}

export default Register