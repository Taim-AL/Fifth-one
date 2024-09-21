import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DataCard2 } from '../Component/Data';
import Card2 from '../Component/Card2';
import { Link } from 'react-scroll';
import AOS from 'aos';

export default ()=>{
    AOS.init({once:true});
        return(<>
        
        
        <section id='services' style={{marginTop:"80px"}}>
            <div className='con-title'>
                <h1 className='h1-title'>Services</h1>
                <h2 className='h2-title'>Services</h2>
            </div>
            <p style={{textAlign:"center"}}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
            
            <Row className='mx-0 p-5'>
                {DataCard2.map((e)=>{
                    return(
                        <Col lg='4' md='6' xs='12' className='h-100 mt-5'>
                            <Card2 icon={e.icon} title={e.title} about={e.par} dur={e.dur}/>
                        </Col>
                    )
                })}
            </Row>

                <Row className='mx-0 services-sec2' >
                    <Col md='1'></Col>
                    <Col md='10' data-aos="zoom-in" data-aos-duration='1500' data-aos-easing="ease-in-out">
                        <h1>Call To Action</h1>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to='home'>
                        <button>CALL TO ACTION</button>
                        </Link>
                    </Col>
                    <Col md='1'></Col>
                </Row>

        </section>
        
        
        </>)
}