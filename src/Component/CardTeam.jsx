import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from 'aos';

export default ({img , name , title , par,dur})=>{
    AOS.init({once:true});
    return(<>
    
    <div className='card-team shadow' data-aos="fade-up" data-aos-duration={dur} data-aos-easing="ease-in-out">
        <div>
            <div className='con-img-team'>
                <img src={img} alt={name} className='img-team' />
            </div>
            <h3>{name}</h3>
            <h5>{title}</h5>
            <p>{par}</p>
            <div className='con-icon-team'>
                <TwitterIcon className='icon-team'/>
                <FacebookOutlinedIcon className='icon-team'/>
                <InstagramIcon className='icon-team'/>
                <LinkedInIcon className='icon-team'/>
            </div>
        </div>
    </div>
    
    
    
    
    </>)
}