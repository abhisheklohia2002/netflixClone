import Rowss from "./Components/Rows"
import requests from "./Components/Requests"
import "./App.css"
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
const App = ()=> {
  // const [count, setCount] = useState(0)

  return (
  
<div className="app">
  <Navbar/>


 <Banner/>
 <Rowss title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}   isLargeRow = {true} />
 <Rowss title = "Trending Now"  fetchUrl = {requests.fetchTrending} />

 <Rowss title = "Top Rated"  fetchUrl = {requests.fetchTopRated} />
 <Rowss title = "Actions Movies"  fetchUrl = {requests.fetchActionsMovies} />
 <Rowss title = "Comedy Movies"  fetchUrl = {requests.fetchComedyMovies} />
 <Rowss title = "Horror Movies"  fetchUrl = {requests.fetchHorrorsMovies} />
 <Rowss title = "Romance Movies"  fetchUrl = {requests.fetchRomanceMovies} />
 <Rowss title = "Documentaries"  fetchUrl = {requests.fetchDocumentariesMovies} />


</div>
  )
}

export default App
