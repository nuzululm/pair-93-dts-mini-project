import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-gray-200 font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <GoChevronLeft onClick={slideLeft} className="text-white left-0 absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />

        <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <GoChevronRight onClick={slideRight} className="text-white right-0 absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
      </div>
    </>
  );
};

export default Row;
