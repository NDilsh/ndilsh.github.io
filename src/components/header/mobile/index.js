import React from 'react'
import './mobile.css'

function Mobile({isOpen,setIsOpen}) {
    return (
        <div className='mobile'>
           <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
           <i class="far fa-times-circle"></i>
           </div>
           <div className='mobile-options'>
           <div className='mobile-option'>
                <a href='#projects'>
                <i class="far fa-folder option-icon"></i>Projects
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#skills'>
                <i class="fas fa-laptop-code option-icon"></i>Skills
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#education'>
                <i class="fas fa-university option-icon"></i>Education
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#contact'>
                <i class="far fa-user option-icon"></i>Contact
                </a>
            </div>
           </div>
        </div>
    )
}
export default Mobile