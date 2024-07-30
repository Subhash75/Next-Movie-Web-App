import ContinueWatchMovies from "./_components/ContinueWatchMovies";
import MovieAutoPlay from "./_components/MovieAutoPlay/MovieAutoPlay";
import TrendingMovies from "./_components/TrendingMovies";

export default function Home() {
  return (
    <>
      <MovieAutoPlay />

      <div className="absolute top-[456px] bottom-0 right-0 left-0 lg:left-[270px] py-6 px-3 sm:px-10">
        <ContinueWatchMovies />
        <TrendingMovies />
      </div>
    </>
  );
}
