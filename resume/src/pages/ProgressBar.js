import React from "react";
import '../stylesheets/ProgressBar.css'



const ProgressBar  = (props) => {
    const { percentage, skill, bgColor, level } = props;

const containerStyles = {
    // height: 23,
    // width: '50%',
    // backgroundColor: '#e0e0de',
    // borderRadius: 50,
    // marginLeft: 45,
}

const fillerStyles = {
    // height: '100%',
    width: `${percentage}%`,
    backgroundColor: bgColor,
    // borderRadius: 'inherit',
    // textAligh: 'right',
    // transition: 'width 1s ease-in-out'
}

const labelStyles = {
    padding: 20,
    color: 'white',
    fontWeight: 'bold'
}

return(
    // <div style={containerStyles}>
    <div className="progressbar-container">
        {/* <div style={fillerStyles}> */}
        <div className="progressbar-inline" style={fillerStyles}>
            {/* <span style={labelStyles}>{`${level}`}</span> */}
            <span className="progressbar-label">{`${level}`}</span>
        </div>
    </div>
)
}

export default ProgressBar;