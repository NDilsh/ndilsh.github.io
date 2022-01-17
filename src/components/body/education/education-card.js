import React from 'react'
import './education-card.css'

function EducationCard({ item }) {
    return (
        <div className='education-card'>
            <img src={item.schoolLogo} className='education-logo' />
            <div className='education-info'>
                <label className='school-name'>{item.name}</label><br></br>
                    <label>{item.title}</label>
                <div className='education-dates'>
                    <label>{item.dateStart}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className='education-desc'>
                    <p>{item.eduDiscription}</p>
                </div>
            </div>
        </div>
    )
}

export default EducationCard
