
import { useState, useCallback, useEffect } from "react";

interface VideoPlayerProps {
  videoId: string;
  thumbnailImage?: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  // Open YouTube video in a new tab instead of a modal
  const openVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="play-button-container absolute inset-0 flex items-center justify-center cursor-pointer" onClick={openVideo}>
      <button
        className="play-button"
        aria-label="Play trailer"
      />
    </div>
  );
};

export default VideoPlayer;
