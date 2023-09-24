import Video from "./Comopnents/Video";
import "./App.css";
import videoDb from "./Data/Data";
import PlayButton from "./Comopnents/PlayButton";
import Counter from "./Comopnents/Counter";
import { useState } from "react";
function App(e) {
  

  const [video, setvideo] = useState(videoDb)
  

  return (
    <div className="App" onClick={() => console.log('App')} >
      <div>
        <button onClick={()=>{
          setvideo([...video,{
              id: video.length+1,
              title: "Demo tutorial",
              views: "1M",
              time: "5 month ago",
              channel: "Coder Dost",
              verified: false,
            }]);
        } }>Add Video</button>

      </div>
      {video.map((video) => (
        <Video
          key={video.id}
          title={video.time}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
         >
          <PlayButton
          onPlay={() => console.log("playing..", video.title)}
          onPause={() => console.log("Pauseed..", video.title)}
        
          > {video.title}
        </PlayButton>

         </Video>
          

        
      ))}

      <div style={{ clear: "both" }}>
        {/* <PlayButton
          onPlay={() => console.log("play")}
          onPause={() => console.log("Pause")}
        >
          Play
        </PlayButton> */}
        {/* <PlayButton onClick={() => alert("Alert")}>Pause</PlayButton>  */}
      </div>

      <Counter></Counter>

    </div>
  );
}

export default App;
