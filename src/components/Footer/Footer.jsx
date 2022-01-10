import React from 'react'
import './Footer.scss'
import theRatioLogo from '../../assets/logo-footer.svg'
import locationIcon from '../../assets/icons/placeholder.png'
import phoneIcon from '../../assets/icons/telephone.png'
import mailIcon from '../../assets/icons/open-mail.png'

export default function Footer() {
    return (
        <section className='footerWrapper' id='contactsSection'>
            <div className='footerTop'>
                <div className='links'>
                    <img className='footerLogo' src={theRatioLogo} alt="logo" />
                    <span>We provides a full range of interior design. architectural design.</span>
                    <div className='linkButtons'>
                        <button className='facebook'></button>
                        <button className='twitter'></button>
                        <button className='linkedIn'></button>
                        <button className='instagram'></button>
                    </div>

                </div>

                <div className='contacts'>
                    <h6>Contacts</h6>
                    <span><img src={locationIcon} alt="location icon" /> 411 University St. Seattle. USA</span>
                    <span><img src={mailIcon} alt="mail icon" />theratio_interior@mail.com</span>
                    <span><img src={phoneIcon} alt="phone icon" />+1 800 456 789 123</span>
                </div>

                <div className='latestProjects'>
                    <h6>Latest Projects</h6>
                    <span>Stylish Family Appertment</span>
                    <span>Modern Villa in Belgium</span>
                    <span>Private House in Spain</span>
                </div>

                <div className='subscribe'>
                    <h6>Subscribe</h6>
                    <form className='subscribeForm'>
                        <input placeholder='your email' type="text" />
                        <button className='subscribeButton'></button>
                    </form>
                    <span>Follow our neewsletter to stay updated about agency</span>
                </div>
            </div>

            <div className='footerBottom'>
                <span className='copyright'>
                    Copyright © 2021 Theratio by <strong>ThemeModern</strong> All Rights Reserved.
                </span>

                <span className='termsOfUse'>
                    Terms of use   |   Privacy Environmental Policy
                </span>

            </div>
        </section>
    )
}
