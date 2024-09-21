import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DataCardContact } from '../Component/Data';
import CardContact from '../Component/CardContact';
import Footer from '../Component/Footer';
import AOS from 'aos';

export default ()=>{
    AOS.init({once:true});
    return(<>
    
    <section id='contact' style={{paddingTop:"50px"}}>
            <div className='con-title'>
                <h1 className='h1-title'>Contact</h1>
                <h2 className='h2-title'>Contact</h2>
            </div>
            <p style={{textAlign:"center"}}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>

            <Row className='mx-0 p-5' data-aos="fade-up" data-aos-duration='1300' data-aos-easing="ease-in-out">
                {DataCardContact.map((e)=>{
                    return(<>
                    
                    <Col lg={e.col} md='12' xs='12'>
                        <CardContact icon={e.icon} title={e.title} par={e.par}/>
                    </Col>

                    </>)
                })}
                <Col md='12' lg='6' xs='12' className='mb-3'>
                    <div className='shadow'>
                        <iframe style={{width:"100%",height:"383px"}} src="https://maps.google.com/maps?q=Downtown%20Conference%20Center%20157%20William%20St,%20New%20York,%20NY%2010038,%20United%20States&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </Col>
                <Col md='12' lg='6' xs='12' className='mb-3'>
                    <div className='contact-inputs shadow'>
                        <Row className='mx-0 p-3'>
                            <Col lg='6' md='12'>
                                <input type="text" placeholder='Your Name' className='input-contact'/>
                            </Col>
                            <Col lg='6' md='12'>
                                <input type="email" placeholder='Your Email' className='input-contact'/>
                            </Col>
                            <Col md='12'>
                                <input type="text" placeholder='Subject' className='input-contact'/>
                            </Col>
                            <Col md='12'>
                                <textarea placeholder='Message' cols="30" rows="5" className='input-contact'></textarea>
                                <div style={{textAlign:"center"}}>
                                    <button className='but-send'>Send Message</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

                <Footer/>

    </section>
    
    
    
    
    </>)
}