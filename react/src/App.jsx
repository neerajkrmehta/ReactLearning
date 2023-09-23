import Video from "./Comopnents/Video";
import "./App.css";

function App() {
  let obj = {
    title: "React JS tutorial",
    views: "999K",
    time: "1 year ago",
    channel: "Coder Dost",
    verified:true
  };

  return (
    <div className="App">
      <div>Videos</div>
      <Video {...obj}/>
      <Video verified={true}
       title="Node JS tutorial" 
       views="100K" 
       time="1 month ago"/>
      <Video
        title="Mongo DB tutorial"
        views="1M"
        time="1 month ago"
        channel="Coder Dost"
        verified={false}
      />
    </div>
  );
}

export default App;
