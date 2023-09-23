import Video from "./Comopnents/Video";
import "./App.css";
import video from "./Data/Data";
import PlayButton from "./Comopnents/PlayButton";

function App() {
  

  return (
    <div className="App">
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
        />
      ))}

      <div style={{clear:'both'}}>
        <PlayButton  message="Paly-msg" on >Play</PlayButton>
        <PlayButton  message="pause-msg">Pause</PlayButton>
      </div>


    </div>
  );
}

export default App;
