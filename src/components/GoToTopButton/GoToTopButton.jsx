import React, { useState, useEffect } from 'react'
import './GoToTopButton.scss'

export default function GoToTopButton() {
    const [isVisable, setIsVisable] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisable(true)
        } else {
            setIsVisable(false)
        }
    }
    
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
            <div className='goToTopButtonWrapper' id={isVisable ? 'active' : 'inactive'} >
                <buttom className='goToTopButton' onClick={scrollToTop} ></buttom>
            </div>
    )
}
