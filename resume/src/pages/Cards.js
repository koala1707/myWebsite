import React from 'react';
import '../stylesheets/cards.css'

function Cards (props) {

    return(
        <div className='wrapper'>
            <div className='card'>
                <div className='card-body'>
                    <img src={props.img} className='card-image'/>
                    <h2 className='card-title'>{props.title}</h2>
                    <p className='card-description'>{props.description}</p>
                </div>
                <a href={props.button}>
                    <button className='card-button'>
                        Go to Repo
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Cards;