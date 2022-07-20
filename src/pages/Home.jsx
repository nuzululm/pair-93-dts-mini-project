import React from "react";
import MainHero from "../components/MainHero";
import Row from "../components/Row";
import API_URL from "../config/api";

const Home = () => {
  return (
    <>
      <MainHero />
      <Row title="Now Playing" fetchURL={API_URL.nowPlayingMovie} rowID="1" />
      <Row title="Popular" fetchURL={API_URL.popularMovie} rowID="2" />
      <Row title="Up Coming" fetchURL={API_URL.upcomingMovie} rowID="3" />
      <Row title="Top Movies" fetchURL={API_URL.topRatedMovie} rowID="4" />
      <Row title="Top Series" fetchURL={API_URL.topRatedSeries} rowID="5" />
    </>
  );
};

export default Home;
