import React from 'react'
import './HomeBackground.scss'
import { useState, useEffect } from 'react'
import Slider1 from '../../assets/slider1-home1.jpeg'
import Slider2 from '../../assets/slider2-home1.jpeg'
import Slider3 from '../../assets/slider3-home1.jpeg'

export default function HomeBackground() {
    const images = [Slider1, Slider2, Slider3]
    const length = (images.length - 1)
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => nextImage(), 5000)
        return () => clearTimeout(timer)
    }, [currentImage])

    const prevImage = () => {
        if (currentImage <= 0) {setCurrentImage(length)}
        else {setCurrentImage(currentImage - 1)}
    }
    const nextImage = () => {
        if (currentImage >= length) {setCurrentImage(0)}
        else {setCurrentImage(currentImage + 1)}
    }
    
    
    return (
        <div className='backgroundWrapper'>
        <section className='backgroundButtons'>
            <button onClick={prevImage} className='prevButton' ></button>
            <button onClick={nextImage} className='nextButton' ></button>
        </section>
        <section className='backgroundText'>
            <h4>STUDIO</h4>
        </section>
        <section className='backgroundImages'>
            {images.map((slide, index) => {
                return (
                    <img src={slide} alt="background" id='backgroundImage' className={index === currentImage ? 'active' : 'inactive'} key={index}/>
                )
            })}
        </section>
        </div>
    )
}
