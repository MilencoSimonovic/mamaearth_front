import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";

function LoginLoading(props) {
    return (
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // background: 'rgb(54, 215, 183)',
                width: '100%',
                flex: 1,
                top: 0,
                left: 0,
                backdropFilter: 'blur(8px)',
                position: 'fixed',
                height: '100vh'
            }}
        >
            <FadeLoader
                size={150}
                color={"white"}
                loading={true}
            />
        </div>
    )
}

export default LoginLoading