import React from 'react'
// import PlayButton from './playButton.css'
// import './playbuttton'
import './Playbutton.css';


function PlayButton({message, children}) {

 function handleClick(){
    console.log(message);
 }


  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default PlayButton