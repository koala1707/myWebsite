import React from 'react';
import '../stylesheets/myself.css'
import { Line, Circle } from 'rc-progress'
import ProgressBar from './ProgressBar';
import {useEffect, useState} from 'react';
import {GoCalendar} from 'react-icons/go'
import Sample from '../images/matt.jpg'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillPhone}  from 'react-icons/ai'
import {GrMapLocation} from 'react-icons/gr'

// beginner, intermediate, advanced, expert
function Myself() {
    const [percentage, setPercentage]= useState(0);
    const [skill, setSkill] = useState('');
    const [bgColor, setBgColor] = useState('#ef6c00');
    const [level, setLevel] = useState('')
    useEffect(() => {
        setInterval(() => setPercentage(0))
    }, [])
    const abilityList = [
        {percentage: 70, skill: 'JavaScript', bgColor: 'rgb(26, 95, 185)', level: 'Intermediate'},
        {percentage: 50, skill: 'Java', bgColor: 'rgb(26, 95, 185)', level: 'Intermediate'},
        {percentage: 60, skill: 'React', bgColor: 'rgb(197, 123, 26)', level: 'Intermediate'},
        {percentage: 55, skill: 'Python', bgColor: 'rgb(26, 134, 197)', level: 'Intermediate'},
        {percentage: 40, skill: 'ASP.NET', bgColor: 'rgb(129, 26, 197)', level: 'Beginner'},
        {percentage: 35, skill: 'C++', bgColor: 'rgb(24, 158, 91)', level: 'Beginner'},
    ];
    
    return (
        <div className='myself-title'>
            <h1>Erika Hosokawa</h1>
            <h5>Software Engineer in the future</h5>
        <div className="myself-home">
            <div className='left-side'>
                <img className='photo' src={Sample}/>
                <h5>CONTACT</h5>
                <p><HiOutlineMail className='icon-size'/> m3tpfbzr@gmail.com</p>
                <p><AiFillPhone className='icon-size'/> 0412-938-770</p>
                <p><GrMapLocation className='icon-size'/> Adelaide, SA Australia</p>
                
                <h5>EDUCATION</h5>
                <p>University of South Australia</p>
                <h6>Bachelor of Information Technology</h6>
                <h6>(Software Development)</h6>
                <h6>February 2020 - November 2022</h6>
                
                <h5>SKILLS</h5>
                <div className='skill-bar'>
                    {abilityList.map((v, i) => (
                        <>
                        <p>{v.skill}</p>
                        <ProgressBar className='progress-bar' key={i} percentage={percentage} bgColor={v.bgColor} level={v.level}/>
                        </>
                    ))}
                </div>
            </div>

            <div className='right-side'>
                <h3>Work Experience</h3>
                <div className='work-experience'>
                    <div className='ai-travel'>
                    <h4>AI Travel</h4>
                    <date><GoCalendar className='icon-size'/> July 2022 ~ Current</date>
                    <h5 className='responsibilities'>Responsibilities</h5>
                    <div className='res-'>
                    <p>Assist developers to extract data from database using MySQL</p>
                    <p>Develop the application on Docker</p>
                    </div>
                    <h5 className='achievement'>Achievement</h5>
                    <p>Created programming to manage programmers’ working hours in google spreadsheet using Google Apps Scripts (GAS)</p>
                    <p>Created programming to send AWS services cost to Slack and google spreadsheet. Allowing managers to monitor cost movement every six hours with AWS Lambda in Python. (GAS in JavaScript)</p>
                    <p>Created programming to extract data from database in Ruby with MySQL</p>
                    <p>Built API using flask and MySQL</p>
                    </div>
                    <h4>NTN Corporation</h4>
                </div>
                
            <div>
                
            </div>
            </div>
        </div>
        </div>
    )

}

export default Myself;