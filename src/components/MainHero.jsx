import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../config/api";
import {Link} from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./MainHero.css";

import { Navigation } from "swiper";

const MainHero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(API_URL.nowPlayingMovie).then((response) => {
      setMovies(response?.data?.results);
    });
  }, []);

  const limitString = (string, maxLength) => {
    if (string.length > maxLength) {
      return string?.slice(0, maxLength) + "...";
    }

    return string;
  };

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {movies.map((item, id) => (
          <SwiperSlide key={id}>
            <div className="w-full h-[600px] text-white inline-block cursor-pointer relative">
              <Link to={`/movie/${item.id}`} className="w-full h-full">
                <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
                <div className="absolute top-[20%] p-20 md:p-30">
                  <h1 className="text-3xl md:text-5x font-bold">{item?.title}</h1>
                  <p className="text-gray-400 text-sm mb-2">Released : {item?.release_date}</p>
                  <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-grey-200">{limitString(item?.overview, 200)}</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainHero;
