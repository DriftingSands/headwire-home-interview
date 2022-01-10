import React, { useEffect, useRef } from 'react'
import './NavMenu.scss'

export default function NavMenu(props) {

    const menuRef = useRef()

    useEffect(() => {
        // closes the Menu if user clicks anywhere outside
        const closeMenu = (e) => {
            if (!menuRef.current.contains(e.target)) {
                props.close()
            }
        }
        document.addEventListener('mousedown', closeMenu)

        return () => {
            document.removeEventListener('mousedown', closeMenu)
        }
    })

    return (
        <div className='navMenuWrapper' ref={menuRef}>
            <ul className='navMenuList'>
                <li className='active'>Main Home</li>
                <li className='inactive'>Interior Design</li>
                <li className='inactive'>Studio Home</li>
                <li className='inactive'>Architecture Agency</li>
                <li className='inactive'>Design Company</li>
                <li className='inactive'>Home Video</li>
                <li className='inactive'>Home Full Screen</li>
                <li className='inactive'>Home One Page</li>
                <li className='inactive'>Home with Side Menu</li>
            </ul>
        </div>
    )
}
