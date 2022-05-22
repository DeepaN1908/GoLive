import React, { Component ,useState,useEffect} from 'react'
import axios from "./axios";
import Row from './'

export default class Rows extends Component {
    state={
        movies:[]
    }
    componentDidMount(){
        fetch('https://imdb-api.com/en/API/MostPopularMovies/k_84qj5v7p')
            .then((res => res.json())
            .then(json =>{
          this.setState({
              movies:json,
          })
        }))
    }

    render() {
        var { movies } = this.state
        return (
            <div>
                {movies.map((movie,key) => {
                console.log(movie.items.crew)
                console.log(movie.title)
                return(
                    <div key={movie.items.id}>
                        <img src={movie.image} alt={movie.title}/>
                        <p style={{float:"left"}}> {movie.title}</p>
                     </div>
      
    )
    
  })}
            </div>
        )
    }
}
