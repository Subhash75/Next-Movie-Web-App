"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { trendingMoviesTypes } from "./types";
import MovieCardLoader from "./_components/MovieCardLoader";
import Image from "next/image";
import useResponsiveCondition from "@/hooks/useResponsiveCondition";

function MovieCard(props: trendingMoviesTypes) {
  const { title, genre, year, videoUrl } = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isShortlisted, setIsShortlisted] = useState(false);
  const isGreaterThan640px = useResponsiveCondition(640);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.pause();
    }
  }, []);

  useEffect(() => {
    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    };

    const options = { threshold: 0.9 };

    const observer = new IntersectionObserver(observerCallback, options);

    if (isGreaterThan640px) {
      observer.disconnect();
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    if (videoRef.current && !isGreaterThan640px)
      observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [isGreaterThan640px]);

  const handleVideoPlayOnHover = () => {
    if (videoRef.current && isGreaterThan640px) {
      videoRef.current.play();
    }
  };

  const handleVideoPauseOnHover = () => {
    if (videoRef.current && isGreaterThan640px) {
      videoRef.current.pause();
    }
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleMovieShortlist = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsShortlisted((prevValue) => !prevValue);
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
      videoRef.current.play();
    }
  };

  return (
    <div
      className={`text-white relative mt-5 h-[300px] mx-auto sm:mx-0 w-full sm:w-[255px] flex-shrink-0 rounded-2xl ${
        isLoading ? "cursor-auto" : "cursor-pointer"
      }`}
      onMouseEnter={handleVideoPlayOnHover}
      onMouseLeave={handleVideoPauseOnHover}
      onClick={handleFullScreen}
    >
      <video
        ref={videoRef}
        loop
        muted
        preload="none"
        onLoadedData={handleVideoLoaded}
        className={`w-full object-cover ${
          isLoading ? "h-0" : "h-full"
        } rounded-xl`}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isLoading ? (
        <MovieCardLoader />
      ) : (
        <>
          <div
            className="h-[83px] absolute bottom-0 left-0 right-0 flex justify-center gap-y-1 flex-col text-black pl-3 rounded-bl-xl rounded-br-xl"
            style={{
              background: "linear-gradient(to right, #ffffff, transparent)",
            }}
          >
            <p className="font-bold">{title}</p>
            <div className="flex text-[14px]">
              <p className="border-r-2 border-black pr-1">{year}</p>
              <p className="px-1">{genre}</p>
            </div>
          </div>
          <button
            onClick={handleMovieShortlist}
            className="text-white rounded-lg p-2 tracking-wide font-semibold bg-white absolute top-3 right-3"
          >
            <Image
              src={
                isShortlisted
                  ? "/images/shortlist-checked.png"
                  : "/images/uncheck_like.png"
              }
              alt="uncheck_img"
              width={20}
              height={20}
            />
          </button>
        </>
      )}
    </div>
  );
}

export default MovieCard;
