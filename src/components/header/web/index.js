import React from 'react'
import './web.css'

function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#projects'>
                <i class="far fa-folder option-icon"></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'>
                <i class="fas fa-laptop-code option-icon"></i>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#education'>
                <i class="fas fa-university option-icon"></i>Education
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                <i class="far fa-user option-icon"></i>Contact
                </a>
            </div>
        </div>
    )
}
export default Web
