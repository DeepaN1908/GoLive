import React ,{useState,useEffect}from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'
function Banner() {
    const [movie, setMovies] = useState([])


    useEffect(() => {
       // effect
       async function fetchdata(){
        const request = await axios.get(requests.ontheater)
        console.log(request)
        setMovies(...movie,request.data.items[Math.floor(Math.random() * request.data.items.length -1)] )
        
        return request


       }
        fetchdata()
    }, [])
    console.log(movie)
   /* const datas = Array.from(movie)
    const data = datas.map((random)=>{
        console.log(random.title)
        return(
            <div>

            </div>
        )
    })*/
    return (
        /**BAckground imaage */
        <header className = 'banner' 
        style ={{
            backgroundSize:'cover',
            backgroundImage:`url('${movie.image
            }')`,
            backgroundPosition:" center center ",
            imageResolution :'from-image'
            
        }}
        >
            <div className ='banner-contents'>
                    
                    {/**title */}
                    
                    <h1 className ='banner_title'>{movie.title}</h1>
                    <div className = "banner buttons">
                        <button className = 'banner__buttons'>
                            Play
                        </button>
                        <button className = 'banner__buttons'>
                            My List
                        </button>
                        <h1 className="banner_discription">{movie.plot} {movie.directors} {movie.geners} {movie.stars}</h1>
                        <div className ="banner__fadded-bottom"></div>
                    </div>

                

                    {/**div 2 buttons */}
                    {/**description */}
            </div>
           
        </header>

    )
}

export default Banner
