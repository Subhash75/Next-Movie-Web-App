"use client";

import Image from "next/image";
import { useState } from "react";

function ShortlistButton() {
  const [isShortlisted, setIsShortlisted] = useState(false);

  const handleMovieShortlist = () => {
    setIsShortlisted((prevValue) => !prevValue);
  };

  return (
    <button
      onClick={handleMovieShortlist}
      className="text-white rounded-lg sm:rounded-2xl text-lg sm:text-xl py-3 px-4 sm:py-5 sm:px-8 tracking-wide font-semibold border bg-white border-black"
    >
      <Image
        src={
          isShortlisted
            ? "/images/shortlist-checked.png"
            : "/images/uncheck_like.png"
        }
        alt="uncheck_img"
        width={24}
        height={24}
      />
    </button>
  );
}

export default ShortlistButton;
