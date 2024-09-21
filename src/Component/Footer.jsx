import React from 'react';
import { Col, Row } from 'react-bootstrap';
///////////////icon
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ul1, ul2 } from './Data';
import { Link } from 'react-scroll';

export default ()=>{
    return(<>
    
    <Row className='mx-0 p-5 footer-day'>
        
        <Col lg='4' md='12' className="mt-3">
            <div style={{display:"flex",justifyContent:"center" ,alignItems:"center"}}>
                <div className='contanir-day-footer'>
                    <h1>Day</h1>
                    <p>A108 Adam Street <br/> NY 535022, USA</p>
                    <p><strong>Phone: </strong> +1 5589 55488 55 <br/> <strong>Email:</strong> info@example.com</p>
                    <TwitterIcon className='icon-footer'/>
                    <FacebookOutlinedIcon className='icon-footer'/>
                    <InstagramIcon className='icon-footer'/>
                    <TelegramIcon className='icon-footer'/>
                    <LinkedInIcon className='icon-footer'/>
                </div>
            </div>
        </Col>
        
        <Col lg='4' md='12' className="mt-3">
            <div className='contaner2-footer'>
                <div className='ul-footer'>
                    <label>Useful Links</label>
                    {ul1.map((e)=>{
                        return(<>
                            <li>
                                <KeyboardArrowRightIcon className='icon-ul1'/>
                                {e.title}
                            </li>
                        </>)
                    })}
                </div>
                <div className='ul-footer'>
                    <label>Our Services</label>
                    {ul2.map((e)=>{
                        return(<>
                            <li>
                                <KeyboardArrowRightIcon className='icon-ul1'/>
                                {e.title}
                            </li>
                        </>)
                    })}
                </div>
            </div>
        </Col>
        
        <Col lg='4' md='12' className="mt-3">
            <label className='lable-1'>Our Newsletter</label>
            <p className='p-footer'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <div className='con-input-footer'>
                <input type="text"  className='input-footer'/>
                <button className='but-footer'>Subscribe</button>
            </div>
        </Col>
    
        <div className='hr-footer'></div>
    
        <Col md='4'></Col>
        <Col md='4' style={{textAlign:"center",marginTop:"2rem"}}>
            <p style={{color:"#fff"}}>© Copyright <strong> Day.</strong> All Rights Reserved  <br/> Designed by <strong style={{color:"#cc1616"}}> BootstrapMade</strong></p>
        </Col>
        <Col md='4'></Col>

    </Row>
    
    
    
    </>)
}