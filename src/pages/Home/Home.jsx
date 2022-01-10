import React from 'react'
import HomeBackground from '../../components/HomeBackground/HomeBackground';
import {LeftSidebar, RightSidebar} from '../../components/Sidebar/Sidebar';
import './Home.scss'
import Navbar from '../../components/Navbar/Navbar';
import Quote from '../../components/Quote/Quote'
import Services from '../../components/Services/Services'
import Team from '../../components/Team/Team';
import Blog from '../../components/Blog/Blog';

export default function Home() {
    return (
    <>
    <Navbar/>
    <HomeBackground />
    <LeftSidebar/>
    <RightSidebar/>
    <main className='homeWrapper'>

            <h1>Best Furniture and Decor</h1>
            <p>
                We pride ourselves on being builders - creating architectural and creatuve solutions 
                to help people realize their vision and making them a reality. Wanna work with us?
            </p>

            <button>
                View Projects
            </button>
    
    </main>

    <Quote/>

    <Services />

    <Team />

    <Blog />

    </>
)
}
