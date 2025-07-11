import React, { ReactNode } from "react";

interface VideoPlayerProps {
  desktopSrc?: string;
  mobileSrc?: string;
  poster?: string;
  title?: string;
  iframe?: ReactNode;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, iframe }) => {
  return (
    <div className="video-recap" style={{ width: "100%", maxWidth: 944, margin: "0 auto" }}>
      <h2>{title || "Video Recap"}</h2>
      <div className="video-recap-video" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 2 }}>
        {iframe ? (
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            {iframe}
          </div>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0kGVGp-BoWo?si=IC4sm6bTQh3JBtIM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer; 