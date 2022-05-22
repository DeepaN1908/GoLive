const API_Key = "k_24xyzip8";
const API_Key2 = 'k_84qj5v7p'
const API_Key3 ='k_lc3ky3tf'
const request = {// api key (Aakash-Rajendran)k_24xyzip8
  //api key (aakash) k_84qj5v7p
  trendingmovies: `https://imdb-api.com/en/API/MostPopularMovies/${API_Key2}`,
  upcomming: `https://imdb-api.com/en/API/ComingSoon/${API_Key2}`,
  netflixoriginals:`https://imdb-api.com/en/API/Company/${API_Key}/co0144901`,
  lastyearhits: `https://imdb-api.com/en/API/IMDbList/${API_Key2}/ls041656709`,//tamil movies
  Actionmovies: `https://imdb-api.com/en/API/IMDbList/${API_Key}/ls027328830`,
  comedymovies: `https://imdb-api.com/en/API/IMDbList/${API_Key2}/ls058726648`,
  horrormovies: `https://imdb-api.com/en/API/IMDbList/${API_Key2}/ls026573448`,
  besttamilmovies:`https://imdb-api.com/en/API/IMDbList/${API_Key}/ls062036891`,
 // newArrival :`https://imdb-api.com/en/API/Title/${API_Key2}/tt10579952`,
   ontheater: `https://imdb-api.com/en/API/InTheaters/k_24xyzip8`,
//  documentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
};
export default request;
