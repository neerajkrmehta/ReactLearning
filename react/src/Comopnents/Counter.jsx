import React, { useState } from 'react'

function Counter() {

 const [number,setNumber] = useState(0);



 function handelClick(e){
    e.stopPropagation();

 
     setNumber(number => number+1)
     setNumber(number => number+1)
     setNumber(number => number+1)



  console.log(number);

 }



  return (
   <>
   <h1 >{number}</h1>
   <button onClick={handelClick}>Add</button>
   
   
   </>
  )
}

export default Counter;