import React from "react";
import MovieCard from "../MovieCard";
import { trendingMovies } from "../app.constants";

function TrendingMovies() {
  return (
    <>
      <h2 className="text-white mt-5 text-[20px] font-semibold tracking-wide">
        Trending
      </h2>
      <div className="flex flex-col sm:flex-row gap-x-10 pb-4 w-full overflow-visible sm:overflow-auto">
        {trendingMovies.map((value) => {
          return <MovieCard {...value} key={value.id} />;
        })}
      </div>
    </>
  );
}

export default TrendingMovies;
