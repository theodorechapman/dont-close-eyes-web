
import { useState, useCallback, useEffect } from "react";

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = useCallback(() => {
    setShowVideo(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeVideo = useCallback(() => {
    setShowVideo(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    if (showVideo) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [showVideo, closeVideo]);

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <button
          onClick={openVideo}
          className="play-button"
          aria-label="Play trailer"
        />
      </div>

      {showVideo && (
        <div className="modal-overlay" onClick={closeVideo}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="video-container">
              <iframe
                className="video-embed"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
