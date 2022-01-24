import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋, I am <br />
                    <span className='info-name'>Nadun Dilshan</span>. <br />
                    I love experimenting with the web.
                    <div className="download">
                        <a download href={require('../../../assets/Nadun_Dilshan_CV1.pdf').default}>
                            <i class="" />
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="about-photo">
                    <img
                        src={require('../../../assets/Programming2.gif').default}
                        className="picture"
                    />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
