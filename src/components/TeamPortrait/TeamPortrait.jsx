import React from 'react'
import './TeamPortrait.scss'

export default function TeamPortrait(props) {
    const {member: {first_name, last_name, job_title, profile_picture}} = props

    return (
        <div className='portraitWrapper' onClick={() => props.openMember(props.member)} >
            <div className='overlay'>
                <h5 className='portraitName'>{first_name} {last_name}</h5>
                <span className='plus'>+</span>
                <h6 className='portraitTitle'>[ {job_title} ]</h6>
            </div>
            <img id='profilePicture' src={require('../../assets' + profile_picture)} alt="profile" />
        </div>
    )
}
