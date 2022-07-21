import React from "react";
import DetailHero from "../components/DetailHero";
import Row from "../components/Row";
import API_URL from "../config/api";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Detail = () => {
  let params = useParams();
  let [queryStrings] = useSearchParams();

  return (
    <>
      <Navbar />
      <DetailHero movieID={params.movieID} type={queryStrings.get("type")} />
      <Row title="Popular" fetchURL={API_URL.popularMovie} rowID="2" />
      <Row title="Up Coming" fetchURL={API_URL.upcomingMovie} rowID="3" />
      <Row title="Top Movies" fetchURL={API_URL.topRatedMovie} rowID="4" />
      <Row title="Top Series" fetchURL={API_URL.topRatedSeries} rowID="5" type="tv" />
      <Footer />
    </>
  );
};

export default Detail;
