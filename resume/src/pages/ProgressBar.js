import React from "react";
import '../stylesheets/ProgressBar.css'



const ProgressBar  = (props) => {
    const { percentage, bgColor, level } = props;

const fillerStyles = {
    width: `${percentage}%`,
    backgroundColor: bgColor,
}

return(
    <div className="progressbar-container">
        <div className="progressbar-inline" style={fillerStyles}>
            <span className="progressbar-label">{`${level}`}</span>
        </div>
    </div>
)
}

export default ProgressBar;