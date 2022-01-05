import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import searchIcon from '../../assets/icons/search.png'
import bagIcon from '../../assets/icons/bag.png'
import menuIcon from '../../assets/icons/menu.png'
import downIcon from '../../assets/icons/arrow-down-sign-to-navigate.png'

export default function Navbar() {
return (
    <nav className='navbarWrapper'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>

        <div className='main'>
            <button className='navButton' id='home'>
                Home
                <img src={downIcon} alt='' />
            </button>
            <button className='navButton' id='pages'>
                Pages
                <img src={downIcon} alt='' />
            </button>
            <button className='navButton' id='services'>
                Services
                <img src={downIcon} alt='' />
            </button>
            <button className='navButton' id='portfolio'>
                Portfolio
                <img src={downIcon} alt='' />
            </button>
            <button className='navButton' id='blog'>
                Blog
                <img src={downIcon} alt='' />
            </button>
            <button className='navButton' id='contacts'>
                Contacts
            </button>
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
