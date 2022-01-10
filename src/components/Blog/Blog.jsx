import React from 'react'
import BlogPreview from '../BlogPreview/BlogPreview'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Blog.scss'

export default function Blog() {
    const blogEntries = [
        {title: 'Top 10 Tips for Your Kitchen Interior Design', image: 'grid1.jpeg', preview: 'A faceting effort livens up and...', type: 'interior', date: 'march 19, 2020', author: 'Tom Black'},
        {title: 'The Golden Ratio Rules for Best 2D Sketch', image: 'grid2.jpeg', preview: 'A faceting effort livens up and...', type: 'interior', date: 'march 19, 2020', author: 'Tom Black'},
        {title: 'Use Pastel Colors & Natural Materials', image: 'grid3.jpeg', preview: 'A faceting effort livens up and...', type: 'interior', date: 'march 19, 2020', author: 'Tom Black'},
    ]

    return (
        <section className='blogWrapper' id='blogSection'>
            <div className='top'>
                <SectionTitle title='our blog' desc='Read Our Latest News'/>

                <div className='buttonDiv'>
                    <button className='viewAll'>View All</button>
                    <div id='b1'></div>
                    <div id='b2'></div>
                    <div id='b3'></div>
                </div>
            </div>

            <div className='blogLatestContent'>
                {blogEntries.map((obj, index) => {
                    return (
                        <BlogPreview blogInfo={obj} key={index} />
                    )
                })}

            </div>

        </section>
    )
}
