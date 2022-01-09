import React from 'react'
import './ServiceCard.scss'

export default function ServiceCard(props) {
    
    return (
        <div className='serviceCardWrapper'>
            {console.log(props)}
            <img src={props.cardInfo.image} alt="" />
            <h5>{props.cardInfo.title}</h5>
            <p>{props.cardInfo.description}</p>
            <span>Read More</span>
        </div>
    )
}
