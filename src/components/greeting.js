import React from 'react';



const Greetings = (props)=>{
    return(
      <div><h1>HI !</h1> <p>{props.name} {props.familyName}</p></div>
    )
   
  }

export default Greetings;