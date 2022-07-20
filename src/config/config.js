const API_KEY = '362024f107295e17f76353cec5a691e0';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = {
    nowPlayingMovie : `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=id-ID&page=1`,
    popularMovie    : `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=id-ID&page=1`,
    topRatedMovie   : `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=id-ID&page=1`,
    upcomingMovie   : `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=id-ID&page=1`,
    nowPlayingSeries: `${BASE_URL}/tv/now_playing?api_key=${API_KEY}&language=id-ID&page=1`,
    topRatedSeries  : `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=id-ID&page=1`,
    popularSeries   : `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=id-ID&page=1`,
};

export default API_URL;
