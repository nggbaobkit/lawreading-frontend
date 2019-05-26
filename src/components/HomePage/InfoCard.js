import React from 'react';

const InfoCard = (props) => {
    
    return ( 
        <div style={{height:"300px", width:"500px", padding:'8px' ,backgroundColor:'#ccc'}}  >
            <img style={{height:"100%"}} alt="img" src={props.image}/>
        </div>
        );
    
}
 
export default InfoCard;