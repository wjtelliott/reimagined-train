import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import PriorExp from './PriorExp';
import Projects from './Projects';

const Home = () => {

    return (
        <div>

            <img src="/images/landscape.JPG" alt="Image of the American Badlands" id='hero' />

            <Header showNavMenu={true} />
            <About />
            {/* <Education /> */}
            <Projects />
            <PriorExp />
            <Contact />
            <Footer />
            
        </div>
        
    )
}

export default Home;