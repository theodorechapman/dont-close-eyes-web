
import { useState, useCallback, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoPlayerProps {
  videoId: string;
  thumbnailImage?: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  const isMobile = useIsMobile();
  
  // Open YouTube video in a new tab instead of a modal
  const openVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="play-button-container absolute inset-0 flex items-center justify-center cursor-pointer" 
      onClick={openVideo}
      style={{ 
        top: isMobile ? '-150px' : '0',
        bottom: isMobile ? '150px' : '0'
      }}
    >
      <button
        className="play-button"
        aria-label="Play trailer"
      />
    </div>
  );
};

export default VideoPlayer;
