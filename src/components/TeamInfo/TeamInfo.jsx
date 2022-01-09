import React from 'react'
import './TeamInfo.scss'

export default function TeamInfo(props) {
    const {member: {first_name, last_name, job_title, description, profile_picture}} = props

    return (
        <div className='teamInfoWrapper'>
            <div className='memberInfoBox'>
                <span className='name'>{first_name} {last_name}  -  {job_title}</span>
                <img src={require('../../assets' + profile_picture)} alt="" />
                <p className='description'>{description}</p>
            </div>
            
            <div className='blackout' onClick={props.close}></div>
        </div>
    )
}
