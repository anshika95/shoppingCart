import React from 'react';
const extra=(props)=>{
    return <div onClick={props.click} id={props.id}>{props.value}</div>;
}

export default extra;
