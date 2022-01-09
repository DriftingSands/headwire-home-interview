import React from 'react'
import './BlogPreview.scss'
import circle from '../../assets/icons/black-circle.png'

export default function BlogPreview(props) {
    const {blogInfo: {title, image, preview, type, date, author}} = props

    return (
        <div className='blogPreviewWrapper'>
            <div className='thumbnail'>
                <img src={require('../../assets/' + image)} alt="blogpost thumbnail" />
                <span className='thumbnailTag'>{type}</span>

            </div>

            <div className='metaData'>
                <span>{date}</span>
                <img src={circle} alt="" width='10' />
                <img src={circle} alt="" width='10' />
                <span>{author}</span>
            </div>

            <h4 className='postTitle'>{title}</h4>

            <p className='postPreview'>{preview}</p>
            
        </div>
    )
}
