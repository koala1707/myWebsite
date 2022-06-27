import React from 'react'
import '../stylesheets/popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inside'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;