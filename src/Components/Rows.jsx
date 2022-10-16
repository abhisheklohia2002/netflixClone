import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import { move } from '../../../PracticeMern/server/src/router/routers';
import axios from './Axios';
// import instance from './Axios';
import "./Row.css"

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"


const base_url = `https://image.tmdb.org/t/p/original/`



const Rowss = ({title,fetchUrl,isLargeRow }) => {

  const [movies, setmovies] = useState([]);
  const [trailer,settrailer] = useState("");

useEffect(()=>{
//
const fetchData = async ()=>{
const request = await axios.get(fetchUrl);
console.log(request);
setmovies(request.data.results)
return request;

}

fetchData()
},[fetchUrl]);
console.log(movies,1)

const opts = {
  height:"390",
  width:"100%",
  playerVars:{
    autoplay:1,
  },

}

const handleClick = (movies)=>{
  if(trailer){
  settrailer("")
  }
  else{
    movieTrailer(movies?.name || "" ).then((url)=>{
      const urlParams = new URLSearchParams( new url(url).search);
     settrailer(urlParams.get("v"))

    }).catch((err)=>{
console.log(err)
    })
  }
}

  return (
    <div className='row'>
        <h2 className='title' style={{color:"#ede6d1"}}>
         {title}
        </h2>
<div className='row_posters'>
{/* row_posters */}
{movies.map((movies => 
  <>
  <img  onClick={(movies)=>handleClick(movies)} key = {movies.id} className={`row_movie_poster ${isLargeRow && "row_posterLarger"}`}
   src = {`${base_url}${ isLargeRow ? movies.poster_path:movies.backdrop_path}`} alt = {movies.name} />
  </>
  
  ))}
</div>
{  trailer &&    <YouTube videoId = {trailer} opts = {opts} />}
    </div>
  )
}

export default Rowss;

