import React from 'react';
import '../stylesheets/myself.css'
import { Line, Circle } from 'rc-progress'
import ProgressBar from './ProgressBar';
import {useEffect, useState} from 'react';

// beginner, intermediate, advanced, expert
function Myself() {
    const [percentage, setPercentage]= useState(0);
    const [skill, setSkill] = useState('');
    const [bgColor, setBgColor] = useState('#ef6c00');
    const [level, setLevel] = useState('')

    const jsAbility = () => {
        setPercentage(60);
        setSkill('JavaScript')
        setBgColor("rgb(93, 167, 25)")
        
    }

    const javaAbility = () => {
        setPercentage(50);
        setSkill('Java')
        setBgColor('rgb(26, 95, 185)')
    }

    const reactAbility = () => {
        setPercentage(55);
        setSkill('React')
        setBgColor("rgb(197, 123, 26)")
    }

    const pythonAbility = () => {
        setPercentage(50);
        setSkill('Python')
        setBgColor("rgb(26, 134, 197)")
    }

    const dotnetAbility = () => {
        setPercentage(40);
        setSkill('.NET')
        setBgColor("rgb(129, 26, 197)")
    }

    const cppAbility = () => {
        setPercentage(40);
        setSkill('C++')
        setBgColor("rgb(24, 158, 91)")
    }




    return (
        <div className="myself-home">
            <div class="horizon-title">
                <img src=''/>
                <h2>Erika Hosokawa</h2>
            </div>
            <div className='left-side'>
                <h5>CONTACT</h5>
                <h5>EDUCATION</h5>
                <h5>SKILLS</h5>
                <div>
                    <ProgressBar percentage={percentage} skill={skill} bgColor={bgColor} level={level}/>
                </div>
                <div>
                    <button onClick={jsAbility}>JavaScript</button>
                    <button onClick={javaAbility}>Java</button>
                    <button onClick={reactAbility}>React</button>
                    <button onClick={pythonAbility}>Python</button>
                    <button onClick={dotnetAbility}>ASP.NET</button>
                    <button onClick={cppAbility}>C++</button>
                    {/* <Circle percent={10} strokeWidth={4} strokeColor="#D3D3D3"/> */}
                </div>
            </div>

            <div className='right-side'></div>
        </div>
    )

}

export default Myself;