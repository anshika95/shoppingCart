import React from 'react';
import Aux from '../../Hoc/auxilary/auxilary';

const categories=(props)=>{
     const style={      
               display:'inline-block',
               margin:'10px',
               padding:'10px',
               backgroundColor:'#00a699',
               border:'1px solid green',
               color:'white',
               borderRadius:'5px',
               cursor:'pointer'                       
     }

     let users=<div>Loading Websites....</div>
     if(props.data.length>0){
           users=Object.keys(props.data)
          .map(userkey=>{
               
               return (<div style={style} onClick={props.click} id={ parseInt(userkey)+1} key={userkey}>{props.data[userkey]['website']}</div>);
          });
  
     }
    
    return (
         <Aux>
              <fieldset>
                    <legend>Websites</legend>
                    {users}
               </fieldset>
         </Aux>
    );
}

export default categories;