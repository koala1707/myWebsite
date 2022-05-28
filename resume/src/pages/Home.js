import React, {Component} from 'react';
import background from '../images/leaf-background.png'
import '../stylesheets/home.css'
import Sidebar from './Sidebar'

function Home() {

    return(
        <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            width: '100vw',
        }}
        >
            <Sidebar/>
            <div className='home-title'>
            <p>Erika Hosokawa</p>
            </div>
        </div>
    )
}

export default Home;