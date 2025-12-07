import React, { useState, useRef } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClick, setHasClick] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideo, setLoadedVideo] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const upcomingVideo = (currentIndex % totalVideos) + 1;

  const handleMinVideoPlayer = () => {
    setHasClick(true);
    setCurrentIndex(upcomingVideo);
  };

  const getVideoSrc = (index) => `videos/Call-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideo((prev) => prev + 1);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {/* Small Preview Video */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMinVideoPlayer}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideo)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          {/* Middle Invisible Video */}
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          {/* Background Main Video */}
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
    
         <h1 className=" special-font hero-heading  absolute bottom-5 right-5 z-40 text-blue-75">
          <b>Call of Duty</b>
          </h1>

          <div className=" absolute left-0  top-0  z-40 size-full ">
            <div className=" mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading  text-blue-75"><b>W</b>ar<b>Z</b>one</h1>
              
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
