import Video from "./Comopnents/Video";
import "./App.css";
import video from "./Data/Data";

function App() {
  

  return (
    <div className="App">
      <div>Videos</div>
      {video.map(video => 
        <Video
        key={video.id}
          title={video.time}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        />)
      }
    </div>
  );
}

export default App;
