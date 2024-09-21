import React from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
export default ({icon,title,about,dur})=>{
    AOS.init({once:true});
    return(<>
    
    <Link to='home' style={{cursor:"pointer"}}>
    <div className='p-5 card-con1 shadow' style={{height:"20rem"}} data-aos="fade-up" data-aos-duration={dur} data-aos-easing="ease-in-out">
        <div className='card-con2 text-center'>
            <div className='con-icon'><div className='bac-icon'></div> {icon}</div>
            <h4>{title}</h4>
            <p>{about}</p>
        </div>
    </div>
    </Link>
    
    
    
    </>)
}