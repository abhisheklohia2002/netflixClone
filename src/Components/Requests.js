
const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";


const requests = {

fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_network=213`,
fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionsMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorsMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentariesMovies : `/discover/movie?api_key=${API_KEY}&with_genres=99`,






}
 export default requests;
