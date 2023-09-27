import { useState } from 'react';
import React from 'react'
// import PlayButton from './playButton.css'
// import './playbuttton'
import './Playbutton.css';


function PlayButton({message, children, onPlay, onPause,id}) {

  
  const [playing, setPlaying] = useState(false);

  

 function handleClick(e){
    // console.log(e);
    e.stopPropagation()

    if (playing) onPause()
   else onPlay();

  
   setPlaying(!playing)
 }


  return (
    <button onClick={handleClick}>
      {children}: {playing ? "⏸️" : "▶️"}
    </button>
  );
}

export default PlayButton