import React from 'react';
import { Col, Row } from 'react-bootstrap';
//////////icon
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import img1 from '../Assets/images/about.jpg';
//////////data
import { DataCard1 , DataImage } from '../Component/Data';
import Card1 from '../Component/Card1';
import AOS from 'aos';

export default ()=>{
    AOS.init({once:true});
    return(<>
    
    <section id='about'>
    <Row className='mx-0 sec-about-1' >
        <Col md='1'></Col>
        <Col lg='5' md='12' xs='12' data-aos="fade-down-right" data-aos-duration="1300" data-aos-easing="ease-in-out">
            <h3 className='h3-about1'>
                Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
                <CheckOutlinedIcon className='done-icon'/>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                <CheckOutlinedIcon className='done-icon'/>
                Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <p>
                <CheckOutlinedIcon className='done-icon'/>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
            </p>
            <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
        </Col>
        <Col lg='5' md='12' xs='12' data-aos="fade-down-left" data-aos-duration="1300" data-aos-easing="ease-in-out">
            <img src={img1} className='img1-about' alt="About" />
        </Col>
        <Col md='1'></Col>
    </Row>
    
    
    <Row className='mx-0 p-5'>
                {DataCard1.map((e)=>{
                    return(
                        <Col lg='4' md='6' xs='12' className='h-100 mt-3'>
                            <Card1 num={e.num} title={e.title} about={e.par} dur={e.dur}/>
                        </Col>
                    )
                })}
    </Row>
    <Row className='mx-0' style={{backgroundColor:"#f2f2f2",marginTop:"50px"}}>
                <Col md='1'></Col>
                <Col md='10' data-aos="zoom-in" data-aos-duration='1500' data-aos-easing="ease-in-out">
                    <Row className='mx-0'>
                        {DataImage.map((e)=>{
                            return(
                                <Col lg='2' md='4' xs='6' className='mt-3'>
                                    <img src={e.img} className='img-client' alt="" />
                                </Col>
                            )
                        })}
                    </Row>
                </Col> 
                <Col md='1'></Col>
    </Row>
    </section>
    </>)
}