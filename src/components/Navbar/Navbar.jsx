import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.svg'
import searchIcon from '../../assets/icons/search.png'
import bagIcon from '../../assets/icons/bag.png'
import menuIcon from '../../assets/icons/menu.png'
import downIcon from '../../assets/icons/arrow-down-sign-to-navigate.png'
import NavMenu from '../NavMenu/NavMenu'

export default function Navbar() {
    const [showHomeMenu, setShowHomeMenu] = useState(false)

    const triangleSVG = () => {
        return (
            <svg height="10" width="20">
                <polygon points="10,0 0,10 20,10" style={{fill:'white'}} />
            </svg>
        )
    }

return (
    <nav className='navbarWrapper'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>

        <div className='main'>
            <button className='navButton active' id='home' onClick={() => {setShowHomeMenu(true)}} >
                Home
                <img src={downIcon} alt='' />
                {triangleSVG()}
                {showHomeMenu && <NavMenu close={() => {setShowHomeMenu(false)}} />}
            </button>
            <button className='navButton inactive' id='pages'>
                Pages
                <img src={downIcon} alt='' />
                {triangleSVG()}
            </button>
            <a href='#servicesSection' className='navButton inactive' id='services'>
                Services
                <img src={downIcon} alt='' />
                {triangleSVG()}
            </a>
            <a href='#teamSection' className='navButton inactive' id='portfolio'>
                Portfolio
                <img src={downIcon} alt='' />
                {triangleSVG()}
            </a>
            <a href='#blogSection' className='navButton inactive' id='blog'>
                Blog
                <img src={downIcon} alt='' />
                {triangleSVG()}
            </a>
            <a href='#contactsSection' className='navButton inactive' id='contacts'>
                Contacts
                {triangleSVG()}
            </a>
        </div>

        <div className='menu'>
            <div className='left'>
                <button className='navButton' id='shoppingBagButton'>
                    <img src={bagIcon} alt="shopping bag" />
                </button>
                <button className='navButton' id='searchButton'>
                    <img src={searchIcon} alt="search" />
                </button>
            </div>
            <div className='right'>
                <button className='navButton' id='menuButton'>
                    <img src={menuIcon} alt="menu" />
                </button>
            </div>

        </div>
    </nav>
)
}
