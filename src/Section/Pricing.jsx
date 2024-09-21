import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';

export default ()=>{
    AOS.init({once:true});
    return(<>
    
    <section id='pricing' style={{paddingTop:"100px"}}>
            <div className='con-title'>
                <h1 className='h1-title'>Pricing</h1>
                <h2 className='h2-title'>Pricing</h2>
            </div>
            <p style={{textAlign:"center"}}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>


            <Row className='mx-0 p-5' style={{overflowX:"hidden"}}>
                <Col lg='4' md='6' xs='12' className='mb-5' >
                    <div className='card-pricing-free shadow' data-aos="fade-down-right" data-aos-duration="1300" data-aos-easing="ease-in-back">
                        <h3>FREE</h3>
                        <h4><strong>$0</strong>/month</h4>
                        <p>Aida dere</p>
                        <p>Nec feugiat nisl</p>
                        <p>Nulla at volutpat dola</p>
                        <del>Pharetra massa</del>
                        <del>Massa ultricies mi</del>
                        <button>Buy Now</button>
                    </div>
                </Col>
                <Col lg='4' md='6' xs='12' className='mb-5' >
                    <div className='card-pricing-business shadow' data-aos="fade-down" data-aos-duration="1300" data-aos-easing="ease-in-back">
                        <h3>BUSINESS</h3>
                        <h4><strong>$19</strong>/month</h4>
                        <p>Aida dere</p>
                        <p>Nec feugiat nisl</p>
                        <p>Nulla at volutpat dola</p>
                        <p>Pharetra massa</p>
                        <del>Massa ultricies mi</del>
                        <button>Buy Now</button>
                    </div>
                </Col>
                <Col lg='4' md='6' xs='12' className='mb-5'>
                <div className='card-pricing-free shadow'  data-aos="fade-down-left" data-aos-duration="1300" data-aos-easing="ease-in-back">
                        <h3>DEVELOPER</h3>
                        <h4><strong>$29</strong>/month</h4>
                        <p>Aida dere</p>
                        <p>Nec feugiat nisl</p>
                        <p>Nulla at volutpat dola</p>
                        <p>Pharetra massa</p>
                        <p>Massa ultricies mi</p>
                        <button>Buy Now</button>
                    </div>
                </Col>
            </Row>

    </section>
    
    
    
    
    </>)
}