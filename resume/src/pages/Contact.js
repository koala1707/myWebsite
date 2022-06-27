import React from 'react';
import '../stylesheets/contact.css'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Contact() {
    const navigate = useNavigate();
    const [eMail, setEMail] = useState({
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const [sentEmail, setSentEmail] = useState()
    const [filledIn, setFilledIn] = useState()
    
    const toHome = () => {
        navigate('/')
    }

    useEffect(() => {
        if(eMail.name === '' || eMail.email === ''){
            setFilledIn(false)
        }
        else{
            setFilledIn(true)
        }
    }, [eMail.name, eMail.email])

    const receiveEmail = () => {
        fetch(`email/contact`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({eMail})
        })
        setEMail({company: "",name: "", email: "", phone: "",    message: ""})
        setSentEmail(true)
        
    }

    const setTargetValue = (e) => {
        setEMail((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    } 

    return (
        <div className='contact'>
            <p className='contact-title'>Contact Me!</p>
            <div className='contact-container'>
                <form>
                <label>Company</label>
                    <input type='text' placeholder='Company' name='company' value={eMail.company} onChange={setTargetValue}/>
                    <label>*Name</label>
                    <input type='text' placeholder='Name' name='name' value={eMail.name} onChange={setTargetValue}/>
                    <label>*Email Address </label>
                    <input type='text' placeholder='Email Address' name='email' value={eMail.email} onChange={setTargetValue}/>
                    <label>Phone Number</label>
                    <input type='text' placeholder='Phone Number' name='phone' value={eMail.phone} onChange={setTargetValue}/>
                    <label>Message</label>
                    <textarea className='message' name='message' value={eMail.message} onChange={setTargetValue}></textarea>
                    <p>* Required</p>
                </form>
                
                <button onClick={filledIn ? receiveEmail : ''}>Submit</button>
                <div className='sent-email'>{sentEmail ? 'Sent your message. Thank you.' : ''}</div>
                
            </div>
            <div className='to-home'>
                <button onClick={toHome} ><p>Home</p></button>
            </div>
        </div>
    )

}

export default Contact;