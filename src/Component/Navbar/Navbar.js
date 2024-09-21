import React, { useState } from 'react';
import './Navbar.css';
import AOS from 'aos';
import {Link} from 'react-scroll';
/////////////icon 
import DehazeIcon from '@mui/icons-material/Dehaze';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

export default()=>{

    AOS.init();

    const [cla,setCla] = useState(false);
    
    const [navbar , setNavbar]=useState(false);

    function handelClick(){
        setCla(!cla)
    }

    const changeColor =()=>{
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll',changeColor);


    return(<>

             <nav className={navbar ? 'NavbarItems1 fixed-top shadow ' : 'NavbarItems fixed-top shadow'} >
                 <h1 className='navbar-logo'>DAY </h1>
                 <div className='menu-icon' onClick={handelClick}>
                     <DehazeIcon className={cla ?'more1':'more'}/>
                 </div>
                 <ul className={cla ? '' : 'hide'}>
                             <li>
                                 <Link activeClass="nav-link" to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                             </li>
                             <li>
                                <Link activeClass="nav-link" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                             </li>
                             <li>
                             <Link activeClass="nav-link" to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
                             </li>
                             <li>
                             <Link activeClass="nav-link" to="pricing" spy={true} smooth={true} offset={-100} duration={500}>Pricing</Link>
                             </li>
                         <li>
                            <Link activeClass="nav-link" to="team" spy={true} smooth={true} offset={-100} duration={500}>Team</Link>
                             </li>
                             <li>
                             <Link activeClass="nav-link" to="contact" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
                             </li>
                 </ul>
             </nav>
             <div style={{height:"70px"}} ></div>
    
             <a href='#home' className='a-up' data-aos="fade-down"><ArrowUpwardOutlinedIcon className='icon-up'/></a>
         </>)
}