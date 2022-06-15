import React from 'react';
import '../stylesheets/myself.css'
import ProgressBar from './ProgressBar';
import {GoCalendar} from 'react-icons/go'
import {HiOutlineMail} from 'react-icons/hi'
import {GrMapLocation} from 'react-icons/gr'
import Titlebg from '../images/name-title1.png'
import {useNavigate} from 'react-router-dom'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {useEffect, useState} from 'react';

function Myself() {
    const navigate = useNavigate();
    const [skillList, setSkillList] = useState([])
    const toHome = () => {
        navigate('/')
    }
    
    // Get skills list 
    useEffect(() => {
        fetch(`myself/skills`)
        .then(res => res.json())
        .then(data => 
            data.map((item, index) => {
            setSkillList(skillList => skillList.concat(item))
        })
        )
        console.log("list: ", skillList)
    }, [])
    
    return (
        <div className='myself-title'>
            <div
                style={{
                    backgroundImage: `url(${Titlebg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '28vh',
                    width: '98vw',
                }}
            >
                <h1>Erika Hosokawa</h1>
                <h5 className='sub-title'>Entry Software Engineer</h5>
            </div>
            <div className="myself-home">
                <div className='left-side'>
                    <h5>CONTACT</h5>
                    <p><HiOutlineMail className='icon-size'/> m3tpfbzr@gmail.com</p>
                    <p><GrMapLocation className='icon-size'/> Adelaide, SA Australia</p>
                    <div className='external-links'>
                    <a href='https://www.linkedin.com/in/erika-hosokawa-7024341a2/'><BsLinkedin className='external-link'/></a>
                    <a href='https://github.com/koala1707'><BsGithub className='external-link'/></a>
                    </div>
                
                    <h5>EDUCATION</h5>
                    <p>University of South Australia</p>
                    <h6>Bachelor of Information Technology</h6>
                    <h6>(Software Development)</h6>
                    <h6>February 2020 - November 2022</h6>
                
                    <h5>SKILLS</h5>
                    <div className='skill-bar'>
                        {skillList.map((v, i) => (
                        <>
                        <p>{v.skill}</p>
                        <ProgressBar className='progress-bar' key={i} percentage={v.percentage} bgColor={v.bgcolor} level={v.level}/>
                        </>
                        ))}
                    </div>
                    <div className='home-button'>
                    <button onClick={toHome}><p> HOME</p></button>
                    </div>
                </div>

                <div className='right-side'>
                    <p className='mysummary'> Experienced an internship in IT industry with collaborating team work and excellent communication skills. Well developed ability to remain calm in stressful situations and mediate positive solutions. Creative and analytical problem solver. Patient, empathic, independent, and willing to learn new skills.
AWS and Docker experience. Currently studying Bachelor of Information Technology, majoring in Software Development</p>
                    <h3>Work Experience</h3>
                    <h4>AI Travel<h7><GoCalendar className='icon-size'/> July 2022 ~ Current</h7></h4>
                    
                    <h5>Responsibilities</h5>
                    <p>• Assist developers to extract data from database using MySQL</p>
                    <p>• Develop the application on Docker</p>
                    <h5>Achievement</h5>
                    <p>• Created programming to manage programmers’ working hours in google spreadsheet using Google Apps Scripts (GAS)</p>
                    <p>• Created programming to send AWS services cost to Slack and google spreadsheet. Allowing managers to monitor cost movement every six hours with AWS Lambda in Python. (GAS in JavaScript)</p>
                    <p>• Created programming to extract data from database in Ruby with MySQL</p>
                    <p>• Built API using flask and MySQL</p>
                    <h4>NTN Corporation<h7><GoCalendar className='icon-size'/> October 2014 ~ November 2019</h7></h4>
                    <h5>Responsibilities</h5>
                    <p>• Manage a couple of junior staff</p>
                    <p>• Create document for stakeholders with Excel, Word and PowerPoint</p>
                    <h5>Achievement</h5>
                    <p>• Succussed to introduce and install new system to all subsidiaries</p>
                    <p>• Declared of consumption tax document</p>
                    <h3>Volunteers</h3>
                    <p>• University of South Australia Ultimate Treasurer 2020, 2021, 2022</p>
                    <p>• University Ambassador 2022</p>
                    <h3>Interest</h3>
                    <p>• Multi Cultures</p>
                    <p>• Hiking</p>
                    <p>• Running</p>
                    <p>• Traveling</p>
                    
                </div>
                
            <div>
        </div>
        
        </div>
        </div>
    )

}

export default Myself;