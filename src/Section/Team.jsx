import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DataCardTeam } from '../Component/Data';
import CardTeam from '../Component/CardTeam';

export default ()=>{
    return(<>
    
    <section id='team'>
            <div className='con-title'>
                <h1 className='h1-title'>Team</h1>
                <h2 className='h2-title'>Team</h2>
            </div>
            <p style={{textAlign:"center"}}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        
        <Row className='mx-0 p-5'>
            {DataCardTeam.map((e)=>{
                return(<>
                    <Col lg='4' md='6' xs='12'>
                        <CardTeam img={e.img} name={e.name} title={e.title} par={e.par} dur={e.dur}/>
                    </Col>
                </>)
            })}
        </Row>
    </section>
    
    
    
    </>)
}