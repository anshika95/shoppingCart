import React from 'react';
import Aux from '../../Hoc/auxilary/auxilary';
import deleteImg from '../../Resources/delete.png';
import UpdateImg from '../../Resources/edit.png'

const cartItems=(props)=>{
    const style={
        display:'block',
        margin:'10px',
        padding:'10px',
        backgroundColor:'#FFBAB3',
        border:'1px solid #F95087',
        borderRadius:'5px',
        color:'black'
            
    }
    const styleTitle={
        display:'block',
       
    }

    const  styleCount={
        display:'block',
        fontWeight:'bold'
        
    }
    
    const styleTov={
        display:'block',
        margin:'10px',
        padding:'10px',
        backgroundColor:'#FC9483',
        border:'1px solid #F95087',
        borderRadius:'2px',
        color:'black'
            
    }
    const styleImg={
        width:'30px',
        height:'30px',
        margin:'5px'
    }

    
  
    const items=Object.keys(props.data)
    .map(
        igkey=>{return (
        
            <div style={style}   key={'key'+igkey}>
                <span  style={styleTitle}>Title: {props.data[igkey]['title']}</span >
                <span  style={styleCount}>Order Value: {props.data[igkey]['postCount']}</span> 
                <span onClick={props.delete.bind(this,props.data[igkey]['id'])}><img style={styleImg} src={deleteImg} alt="Delete"></img></span>
                <span onClick={props.update.bind(this,props.data[igkey]['id'])}><img style={styleImg} src={UpdateImg} alt="Update"></img></span>
                
                
              
                
            </div>
            )
    })

    
        
        const tov=Object.keys(props.data)
        .map(igkey=>{return props.data[igkey]})
        .reduce((acc,item)=>{return acc+parseInt(item['postCount'])},0);

        const Tov=<div style={styleTov}>Total Order Value: {tov}</div>
          


    
    return (
        <Aux>
        {items}
        {Tov}
        </Aux>
       
    );
}

export default cartItems;