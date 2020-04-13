import React from "react";

const VideoDeatail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
return (
  <>
    <div className="ui embed">
      <iframe title="video Player" src={videoSrc}></iframe>
    </div>

    <div className="ui segment">
      <h4 className=" ui header"> {video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  </>
);
};

export default VideoDeatail;
