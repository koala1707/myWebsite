import React from 'react';
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
                <div className='vertical'/>
                <div className='horizontal'>
                    <p>Erika Hosokawa</p>
                </div>
            </div>
        </div>
    )
}

export default Home;