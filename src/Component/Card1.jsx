import React from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';

export default ({num,title,about , dur})=>{
    AOS.init({once:true});
    return(<>
    
    <Link to='home' style={{cursor:"pointer"}}>
    <div className='p-5 card-con1 shadow' data-aos="fade-up" data-aos-duration={dur} data-aos-easing="ease-in-out">
        <div className='card-con2'>
            <h1>{num}</h1>
            <h4>{title}</h4>
            <p>{about}</p>
        </div>
    </div>
    
    </Link>
    
    
    </>)
}