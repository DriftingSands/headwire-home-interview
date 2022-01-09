import React from 'react'
import './Services.scss'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

import image1 from '../../assets/iconbox1.2.png'
import image2 from '../../assets/iconbox1.1.png'
import image3 from '../../assets/iconbox1.3.png'

export default function Services() {
    const cardArray = [
        {
            title: 'Design & Planning',
            description: 'We will help you to get the result you dreamed of.',
            image:  image1
        },{
            title: 'Custom Solutions',
            description: 'Individual aesthetically stunning solutions for cusomers.',
            image:  image2
        },{
            title: 'Furniture & Decor',
            description: 'We will create and produce our product design lines',
            image:  image3
        },
    ]

    const achivementsArray = [
        {title: 'current clients', value: '180+'},
        {title: 'years of expirience', value: '10+'},
        {title: 'awards winning', value: '35+'},
        {title: 'offices worldwide', value: '5+'},
    ]


    return (
        <section className='servicesWrapper'>
            <div className='foreground'>

                <div className='title'>
                    <span>[ Our Services ]</span>
                    <h6>What We Can Offer</h6>
                    <div className='titleUnderline'></div>
                </div>

                <div className='cards'>
                    {cardArray.map((obj, index) => {
                        return (<ServiceCard cardInfo={obj} key={index} />)
                    })}
                </div>

                <div className='achivements'>
                    {achivementsArray.map((obj, index) => {
                        return (
                            <div className='achivementWrapper'>
                                <span className='value'>[{obj.value}]</span>
                                <span className='title'>{obj.title}</span>
                            </div>
                        )
                    })}
                </div>

            </div>

            <div className='background'>

            </div>
        </section>
    )
}
