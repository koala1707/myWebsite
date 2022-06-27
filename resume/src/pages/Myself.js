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
import Popup from "./Popup"

function Myself() {
    const navigate = useNavigate();
    const [skillList, setSkillList] = useState([])
    const [showPopup, setShowPopup] = useState(false)
    const [detailsDescription, setDetailsDescription] = useState('')
    
    const toHome = () => {
        navigate('/')
    }

    const toPortfolio = () => {
        navigate('/portfolio')
    }

    const toContact = () => {
        navigate('/contact')
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
        //console.log("list: ", skillList)
    }, [])

    // Get job achievement details from db
    const getDetails = (index) => {
        setShowPopup(true);
        // setJobDetailsIndex(e)
        fetch(`myself/details/${index}`)
        .then(res => res.json())
        .then(data => setDetailsDescription(data[0].description))
    }

    return (
        <div className='myself-title'>
            <div
                style={{
                    backgroundImage: `url(${Titlebg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '25vh',
                    width: '98vw',
                }}
            >
                <h1>Erika Hosokawa</h1>
                <h5 className='sub-title'>Entry Software Engineer</h5>
                <div className='d-flex justify-content-around buttons'>
                    <button onClick={toHome}>HOME</button>
                    <button onClick={toPortfolio}>PORTFOLIO</button>
                    <button onClick={toContact}>CONTACT</button>
                </div>
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
                    
                </div>

                <div className='right-side'>
                    <p className='mysummary'>I have experience working in IT industry as an intern with collaborating team work and excellent communication skills. Well developed ability to remain calm in stressful situations and mediate positive solutions.<br/> Creative and analytical problem solver. Patient, empathic, independent, and willing to learn new skills. Currently studying my final year in Bachelor of Information Technology, majoring in Software Development</p>
                    <h3>Work Experience</h3>
                    <h4>AI Travel<h7><GoCalendar className='icon-size'/> July 2021 ~ Current</h7></h4>
                    
                    <h5>Responsibilities</h5>
                    <p>• Assist developers to extract data from database using MySQL</p>
                    <p>• Develop the application on Docker</p>
                    <h5>Achievement</h5>
                    <p onClick={() => getDetails(1)} className='showPopup'>• Monitoring working hours for engineers in GAS</p>
                    

                    <p onClick={() => getDetails(2)} className='showPopup'>• Monitoring AWS cost with Slack and Google spreadsheet</p>

                    <p onClick={() => getDetails(3)} className='showPopup'>• Displaying the latest flight information with API</p>

                    
                    
                    <h4>NTN Corporation<h7><GoCalendar className='icon-size'/> October 2014 ~ November 2019</h7></h4>
                    <h5>Responsibilities</h5>
                    <p>• Manage a couple of junior staff</p>
                    <p>• Create document for stakeholders with Excel, Word and PowerPoint</p>
                    <h5>Achievement</h5>
                    <p onClick={() => getDetails(4)} className='showPopup'>• Involved in installing a new financial system for the entire company</p>
                    <p onClick={() => getDetails(5)} className='showPopup'>• Tax documents</p>
                    <h3>Volunteers</h3>
                    <p onClick={() => getDetails(6)} className='showPopup'>• University of South Australia Ultimate Treasurer 2020, 2021, 2022</p>
                    <p onClick={() => getDetails(7)} className='showPopup'>• University Ambassador 2022</p>
                    <h3>Interest</h3>
                    <p onClick={() => getDetails(8)} className='showPopup'>• Multi Cultures</p>
                    <p onClick={() => getDetails(9)} className='showPopup'>• Hiking</p>
                    <p onClick={() => getDetails(10)} className='showPopup'>• Ultimate Frisbee</p>
                    <p onClick={() => getDetails(11)} className='showPopup'>• Traveling</p>
                </div>
                <Popup trigger={showPopup} setTrigger={setShowPopup}><p>{detailsDescription}</p></Popup>
            <div>
        </div>
        
        </div>
        </div>
    )

}

export default Myself;