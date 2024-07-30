"use client";

import { useRef } from "react";
import ShortlistButton from "./ShortlistButton";

function MovieAutoPlay() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
      videoRef.current.play();
    }
  };

  return (
    <div className="absolute top-0 right-0 left-0 lg:left-[270px] ">
      <video
        ref={videoRef}
        loop
        autoPlay
        muted
        preload="none"
        style={{ width: "100%", height: "455px", objectFit: "cover" }}
      >
        <source src="/videos/asteroid_scenes.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-[20px] left-3 sm:left-[36px]">
        <h1 className="text-3xl sm:text-[48px] font-extrabold tracking-wide text-white">
          Space Wars
        </h1>
        <div className="flex mt-3 mb-5 sm:mb-10">
          <p className="text-white text-sm sm:text-base border-r pr-1 sm:pr-3">
            2024
          </p>
          <p className="text-white  text-sm sm:text-base border-r  px-1 sm:px-3">
            Action Sci-fi
          </p>
          <p className="text-white  text-sm sm:text-base pl-1 sm:pl-3">
            1 Season
          </p>
        </div>
        <div className="flex items-center gap-x-5">
          <button
            onClick={handleFullScreen}
            className="text-white bg-[#6100C2] rounded-lg sm:rounded-2xl text-lg sm:text-xl py-2 px-4 sm:py-5 sm:px-8 tracking-wide font-semibold"
          >
            Watch now
          </button>
          <ShortlistButton />
        </div>
      </div>
    </div>
  );
}

export default MovieAutoPlay;
