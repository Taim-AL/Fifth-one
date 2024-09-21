import React from 'react';

export default ({ icon , title , par })=>{
    return(<>
    
    <div className='card-contact shadow'>
        <div>
            {icon}
            <h3>{title}</h3>
            <p>{par}</p>
        </div>
    </div>
    
    
    
    </>)
}