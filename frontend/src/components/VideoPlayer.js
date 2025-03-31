import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) {
    return <p>Video not available</p>;
  }

  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
