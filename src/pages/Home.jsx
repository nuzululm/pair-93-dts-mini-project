import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import API_URL from "../config/config";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Now Playing" fetchURL={API_URL.nowPlayingMovie} />
      <Row title="Popular" fetchURL={API_URL.popularMovie} />
      <Row title="Up Coming" fetchURL={API_URL.upcomingMovie} />
      <Row title="Top Movies" fetchURL={API_URL.topRatedMovie} />
      <Row title="Top Series" fetchURL={API_URL.topRatedSeries} />
    </>
  );
};

export default Home;
