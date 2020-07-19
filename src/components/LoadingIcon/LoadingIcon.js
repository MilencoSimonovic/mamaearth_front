import React from 'react'
// nodejs library to set properties for components
import PropTypes from "prop-types";
//loading icon
import {
    FadeLoader
} from "react-spinners";

export default function LoadingIcon() {
    return(
        <div>
            Loading...
        </div>
    )
}

InfoArea.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};

