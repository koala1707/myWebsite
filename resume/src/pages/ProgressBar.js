import React from "react";



const ProgressBar  = (props) => {
    const { percentage, skill, bgColor, level } = props;


const containerStyles = {
    height: 23,
    width: '200%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50
}

const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: bgColor,
    borderRadius: 'inherit',
    textAligh: 'right',
    transition: 'width 1s ease-in-out'
}

const labelStyles = {
    padding: 10,
    color: 'white',
    fontWeight: 'bold'
}

return(
    <div style={containerStyles}>
        <div style={fillerStyles}>
            {/* <p>Progress Bar</p> */}
            <span style={labelStyles}>{`${percentage}% ${skill} ${level}`}</span>
        </div>
    </div>
)
}

export default ProgressBar;