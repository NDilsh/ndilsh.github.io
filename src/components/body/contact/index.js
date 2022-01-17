import React from 'react'
import Separator from '../../common/separator'
import './contact.css'
import SocialContact from '../../common/social-contact'
import './message.css'
import Message from './message'

function Contact() {
    return (
        <div className='contact'>
            <Separator />
            <label className='section-title'>Contact</label>
            <div className='contact-container'>



                <div className='contact-left'>
                <label className='msgme'>Hire Me</label>
                <div className="download">
                        <a download href={require('../../../assets/Nadun Dilshan CV.pdf').default}>
                            <i class="" />
                            Download CV
                        </a>
                    </div>
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocialContact />
                    
                </div>
                <div>
                    <Message />
                </div>
            </div>
        </div>
    )
}

export default Contact