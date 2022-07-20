import React, { useState } from "react";
import { API_KEY, BASE_URL } from "../config/api";

const DetailHero = ({ movieID, isMovie = true }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}&language=id-ID`).then((response) => {
      setMovie(response.data?.results);
    });
  }, []);
  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5x font-bold">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5"> Play </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4"> Add to Watchlist </button>
            </div>
            <p className="text-gray-400 text-sm">Released : {movie?.release_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-grey-200">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailHero;
