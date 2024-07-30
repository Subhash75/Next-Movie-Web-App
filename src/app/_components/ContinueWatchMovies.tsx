import React from "react";
import { continueWatchingMovies } from "../app.constants";
import MovieCard from "../MovieCard";

function ContinueWatchMovies() {
  return (
    <>
      <h2 className="text-white mt-3 text-[20px] font-semibold tracking-wide">
        Continue Watching
      </h2>
      <div className="flex flex-col sm:flex-row gap-x-10 pb-4 w-full overflow-visible sm:overflow-auto">
        {continueWatchingMovies.map((value) => {
          return <MovieCard {...value} key={value.id} />;
        })}
      </div>
    </>
  );
}

export default ContinueWatchMovies;
