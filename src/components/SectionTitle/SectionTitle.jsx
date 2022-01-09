import React from 'react'
import './SectionTitle.scss'

export default function SectionTitle(props) {
    return (
        <div className='titleWrapper'>
            <span>[ {props.title ? props.title : 'Title Here...'} ]</span>
            <h6>{props.desc ? props.desc : 'Desc Here...'}</h6>
            <div className='titleUnderline'></div>
        </div>
    )
}
