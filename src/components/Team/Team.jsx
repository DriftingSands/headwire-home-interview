import React, { useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Team.scss'
import TeamJson from '../../assets/sample.json'
import TeamPortrait from '../TeamPortrait/TeamPortrait'
import TeamInfo from '../TeamInfo/TeamInfo'

export default function Team() {
    const [teamPage, setTeamPage] = useState(0)
    const [memberInfo, setMemberInfo] = useState(null)

    const openMember = (member) => {
        setMemberInfo(member)
    }
    const closeMember = () => {
        setMemberInfo(null)
    }

    return (
        <section className='teamWrapper'>

            {memberInfo && <TeamInfo member={memberInfo} close={closeMember}/>}

            <SectionTitle title='our professionals' desc='Meet Our Skilled Team'/>

            <div className='portraits' id={'portraits' + teamPage}>
                {TeamJson.map((obj, index) => {
                    return (<TeamPortrait member={obj} key={index} openMember={openMember}/>)
                })}
            </div>

            <nav className='teamPageNav'>
                <button onClick={() => setTeamPage(0)} className={teamPage === 0 && 'active'} ></button>
                <button onClick={() => setTeamPage(1)} className={teamPage === 1 && 'active'} ></button>
            </nav>
            
        </section>
    )
}
