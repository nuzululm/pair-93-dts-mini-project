export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";

const API_URL = {
  //movie
  nowPlayingMovie: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=id-ID&page=1`,
  popularMovie: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=id-ID&page=2`,
  topRatedMovie: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=id-ID&page=1`,
  upcomingMovie: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=id-ID&page=1`,
  nowPlayingSeries: `${BASE_URL}/tv/now_playing?api_key=${API_KEY}&language=id-ID&page=1`,
  //detail movie
  detailMovie: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=id-ID`,
  //tv
  topRatedSeries: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=id-ID&page=2`,
  popularSeries: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=id-ID&page=1`,
};

export default API_URL;
