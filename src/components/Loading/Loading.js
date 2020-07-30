import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";

function Loading(props) {
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
                left: 0
            }}
        >
            <FadeLoader
                size={150}
                color={"grey"}
                loading={true}
            />
        </div>
    )
}

export default Loading