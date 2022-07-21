import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ item, type }) => {
  return (
    <Link to={`/movie/${item.id}?type=${type}`} className="w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      {item.backdrop_path ? <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} /> : <div className="w-full h-auto block bg-gray-200"></div>}

      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-gray-200">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item.title ? item.title : item.name}</p>
      </div>
    </Link>
  );
};

export default Movie;
