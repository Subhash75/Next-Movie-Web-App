function MovieCardLoader() {
  return (
    <div className="relative mt-5 h-[300px] mx-auto sm:mx-0 w-full sm:w-[255px] flex-shrink-0 rounded-2xl">
      <div className="w-full h-full rounded-xl animate-pulse bg-gray-300"></div>
      <div
        className="h-[83px] absolute bottom-0 left-0 right-0 flex justify-center gap-y-1 flex-col pl-3 rounded-bl-xl rounded-br-xl"
        style={{
          background: "linear-gradient(to right, #ffffff, transparent)",
        }}
      >
        <div className="animate-pulse bg-gray-300 w-36 h-3 rounded-2xl"></div>
        <div className="animate-pulse bg-gray-300 w-24 h-3 mt-2 rounded-2xl"></div>
      </div>
    </div>
  );
}

export default MovieCardLoader;
