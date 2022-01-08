import React from 'react'
import './Quote.scss'
import founderIcon from '../../assets/founder-of-company.png'

export default function Quote() {
    return (
        <section className='quoteWrapper'>

            <div className='contentWrapper'>
                <blockquote>
                    "Even if you don't have a ready sketch of what you want - we will help you to get the result you dreamed of."
                </blockquote>

                <div className='author'>
                    <img src={founderIcon} alt="" />

                    <div className='founderName'>
                        <h3>David Oswald</h3>
                        <span>Founder of Company</span>
                    </div>
                </div>
            </div>

        </section >
    )
}
