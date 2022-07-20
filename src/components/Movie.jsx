import React from "react";

const Movie = ({ item }) => {
  return (
    <div className="w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-gray-200">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item.title}</p>
      </div>
    </div>
  );
};

export default Movie;