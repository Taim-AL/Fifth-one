import React from 'react';
import AOS from 'aos';

export default ()=>{
    AOS.init({once:true});
    return(<>
    
    
    <section className='sec-home-1' id='home'>
        {/* <div className=''></div> */}
        <div className='continer-1' data-aos="fade-up" data-aos-duration="2000"  data-aos-easing="ease-in-out">
            <h1>
                WELCOME TO DAY
            </h1>
            <h5>
                We are team of talented designers making websites with Bootstrap
            </h5>
            <div>
                <button>
                    GET STARTED
                </button>
            </div>
        </div>
    </section>
    
    </>)
}