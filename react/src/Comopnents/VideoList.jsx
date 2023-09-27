import Video from "./Video";
import PlayButton from "./PlayButton";
import { useContext } from "react";
import VideosContext from "./Context/VideosContext";

function VideoList({dispatch, editVideo }) {

  const videos = useContext(VideosContext)
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
          dispatch={dispatch}
        >
        
      
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
            id={video.id}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideoList;



