import Video from "./Comopnents/Video";
import "./App.css";
import video from "./Data/Data";
import PlayButton from "./Comopnents/PlayButton";

function App() {
  

  return (
    <div className="App" onClick={() => console.log('App')} >
      <div>Videos</div>
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
    </div>
  );
}

export default App;
