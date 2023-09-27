import Video from "./Comopnents/Video";
import "./App.css";
import videoDB from "./Data/Data";
import PlayButton from "./Comopnents/PlayButton";
// import Counter from "./Comopnents/Counter";
import { useContext, useReducer, useState } from "react";
import AddVideo from "./Comopnents/AddVideo";
import VideoList from "./Comopnents/VideoList";
import ThemeContext from "./Comopnents/Context/ThemeContext";
import VideosContext from "./Comopnents/Context/VideosContext";

function App() {
  console.log("render App");

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload.id);
        setEditableVideo(null);
        return newVideos;

      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

const themeContext = useContext(ThemeContext)

console.log({themeContext});


  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value = {mode}>
      <VideosContext.Provider value={videos}>
        <div
          className={`App ${mode}`}
          onClick={() => console.log("App")}
        >  
          <AddVideo
            dispatch={dispatch}
            editableVideo={editableVideo}
          ></AddVideo>
          <VideoList
            dispatch={dispatch}
            editVideo={editVideo}
           
          ></VideoList>
        </div>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
