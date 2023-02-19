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
                    height: '15%',
                    width: '98vw',
                }}
            >
                <h1>Erika Hosokawa</h1>
                <h5 className='sub-title'>Junior Software Engineer/Developer</h5>
                <div className='d-flex justify-content-around buttons'>
                    <button onClick={toHome}><p>HOME</p></button>
                    <button onClick={toPortfolio}><p>PORTFOLIO</p></button>
                    <button onClick={toContact}><p>CONTACT</p></button>
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
                    <p className='mysummary'>I have experience working in IT as an intern, collaborating with a team and I've developed excellent communication skills through this. <br/>I have a well developed ability to remain calm in stressful situations and produce positive solutions. Creative and analytical problem solver. Patient, empathic, independent, and willing to learn new skills. Currently studying my final year in Bachelor of Information Technology, majoring in Software Development.</p>
                    
                    <h3>Work Experience</h3>
                    <h4>PAC Blockchain<h7><GoCalendar className='icon-size'/> July 2022 ~ October 2022</h7></h4>
                    <h5>Responsibilities</h5>
                    <p>- Contribute to building Rest APIs with Swagger</p>
                    <h5>Achievements</h5>
                    <div className='showPopup'>
                        <button onClick={() => getDetails(12)}>• Creating Rest APIs with Swagger in Python</button><br/>
                        <button onClick={() => getDetails(13)}>• Creating an email notification with Python and HTML</button><br/>
                        <button onClick={() => getDetails(14)}>• Testing code in pytest</button>
                    </div>
                    <h4>AI Travel<h7><GoCalendar className='icon-size'/> July 2021 ~ July 2022</h7></h4>
                    <h5>Responsibilities</h5>
                    <p>- Assist developers with extracting data from database using MySQL</p>
                    <p>- Develop the application on Docker</p>
                    <h5>Achievements</h5>
                    <div className='showPopup'>
                        <button onClick={() => getDetails(1)}>• Monitoring working hours on google spreadsheet</button><br/>
                        <button onClick={() => getDetails(2)}>• Monitoring AWS costs with Slack and Google spreadsheet</button><br/>
                        <button onClick={() => getDetails(3)}>• Displaying the latest flight information with an API</button>
                    </div>
                    <h4>NTN Corporation<h7><GoCalendar className='icon-size'/> October 2014 ~ November 2019</h7></h4>
                    <h5>Responsibilities</h5>
                    <p>- Managing several junior staff</p>
                    <p>- Creating documents for stakeholders with Excel, Word and PowerPoint</p>
                    <h5>Achievements</h5>
                    <div className='showPopup'>
                        <button onClick={() => getDetails(4)}>• Involved in installing a new financial system for the entire company</button><br/>
                        <button onClick={() => getDetails(5)}>• Tax documents</button>
                    </div>
                    <h3>Volunteering</h3>
                    <div className='showPopup'>
                        <button onClick={() => getDetails(6)}>• University of South Australia Ultimate Treasurer 2020, 2021, 2022</button><br/>
                        <button onClick={() => getDetails(7)}>• University Ambassador 2022</button>
                    </div>
                    <h3>Interest</h3>
                    <div className='showPopup'>
                        <button onClick={() => getDetails(8)}>• International Cultures</button>
                        <button onClick={() => getDetails(9)}>• Hiking</button>
                        <button onClick={() => getDetails(10)}>• Ultimate Frisbee</button>
                        <button onClick={() => getDetails(11)}>• Traveling</button>
                    </div>
                    <div className='dot-details'> 
                        <p>* • dot lines have more details</p>
                    </div>
                </div>
                <Popup trigger={showPopup} setTrigger={setShowPopup}><p>{detailsDescription}</p></Popup>
            <div>
        </div>
        
        </div>
        </div>
    )

}

export default Myself;