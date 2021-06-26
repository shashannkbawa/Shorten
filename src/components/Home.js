import React from 'react'

import Content from './Content'
import Navbar from './Navbar'
import Statistics from './Statistics'
import Footer from './Footer';

function Home() {
    return (
        <div className = "home">
            <Navbar/>
            <Content/>
            <Statistics/>
            <Footer/>   
        </div>
    )
}

export default Home
