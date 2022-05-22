import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import './Row.css'
import movieTrailer from 'movie-trailer'

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // every time we
  const [trailerUrl, setTrailerUrl] = useState("");


  useEffect(() => {
    // load and pull the information of the movies
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies([...movies,request.data.items,0]);
      console.log(movies)
      return request;      
    }
    fetchData();
  }, [fetchUrl]);
  const opts ={
    height:"400",
    width:"100%",
    playerVars:{
      autoplay:1,
    },
  }
  const handleClick=(mov)=>{
    if (trailerUrl) {
      setTrailerUrl('')
    }else{
      movieTrailer(mov?.title || "")
      .then(url =>{
          const urlPramas = new URLSearchParams(new URL(url).search);
         setTrailerUrl(urlPramas.get('v'))
      }) .catch(error => console.log(error))
    }

  }
 
    return (
          <div className="row">
            {/*title*/}
             <h2>{title}</h2>
             <div className="row-posters"> 
             {/* containner-> posters*/}             
               { movies.map(function mapper(movie,i){

                var data = Array.from(movie)
                return(
                    data.slice(0,20).map((mov,j)=>{

                      return(
                          <div key ={i} className ='row-content'>                            
                            <span>
                              <img className ='row-poster' src={mov.image} onClick={()=>{handleClick(mov)}}/>                            
                            </span>
                         </div>

                      )
                    })
                )
        
            })}
      </div>
          { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}      
    </div>
  );
}
/** const any = movies.map((movie,i) => {
    console.log(movie)

    return(
    <div key= {i}>
      <p key = {i}>
      {
        movie.map(function(mov,j){
          console.log(mov.title)
        })
      }
      </p>
      
    </div>
      
    )
    
  })*/
 /* const any = movies.map(function mapper(movie,i){
    var data = Array.from(movie)
   data.map((mov,j)=>{
      console.log(mov.title)
      console.log(mov.fullTitle)
      return(
        <div key ={i} className ='row-content'>
         <h1>happy diwali

          </h1>
            <h1>{mov.title}</h1>
            
          </div>

      )
    })
  })*/
