import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../config/api";
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";

const DetailHero = ({ movieID }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}&language=id-ID`).then((response) => {
      console.log('data dari detail hero',response)
      setMovie(response?.data);
    });
  }, [movieID]);
  
  const limitString = (string, maxLength) => {
    if (string.length > maxLength && string !== "") {
      return string?.slice(0, maxLength) + "...";
    }

    return string;
  };

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-grey-200 my-4">{ movie.overview ? limitString(movie?.overview, 150) : ''}</p>
            <div className="my-4 flex">
              <button className="border bg-gray-300 text-black border-gray-300 hover:bg-white py-2 px-6 flex align-center">
                <FaPlay size={20}/><p className="ml-2">Play</p> 
              </button>
              <button className="border text-white border-gray-200 bg-gray-200 bg-opacity-50 hover:bg-opacity-70 py-2 px-6 ml-4 flex align-center">
                <AiOutlineInfoCircle size={24}/><p className="ml-2">More Information</p> 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="px-5 md:px-20 py-10">
          <h3 className="text-xl text-gray-200 font-bold my-2">Description</h3>
          <p className="text-md text-gray-200 font-regular">
            {movie.overview ? movie.overview : 'tidak ada deskripsi'}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailHero;
