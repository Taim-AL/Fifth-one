import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import HomeSec1 from '../Component/HomeSec1';
import About from './About';
import Services from './Services';
import Pricing from './Pricing';
import Team from './Team';
import Contact from './Contact';

export default ()=>{
    return(
        <>
        <Navbar/>
        <HomeSec1/>
        <About/>
        <Services/>
        <Pricing/>
        <Team/>
        <Contact/>
        </>
    )
}