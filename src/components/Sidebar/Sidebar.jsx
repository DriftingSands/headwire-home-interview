import React from 'react'
import './Sidebar.scss'

export function LeftSidebar() {
    return (
        <aside className='leftSidebarWrapper'>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Pintrest</li>
        </aside>
    )
}

export function RightSidebar() {
    return (
        <aside className='rightSidebarWrapper'>
        </aside>
    )
}
