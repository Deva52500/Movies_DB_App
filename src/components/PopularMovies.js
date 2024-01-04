import React, {useState} from 'react';
const image_URL="https://image.tmdb.org/t/p/w500/";


const PopularMovies =({movies})=>{
    return(
        <div className="container">
            
            <ul class="slideshow">
            <li><span>&nbsp;1</span></li>
            <li><span>&nbsp;2</span></li>
            <li><span>3</span></li>
            </ul>

          <div className="grid"> 
            {movies.map((movie) =>
            <div>
                <img alt="Movie Poster" src={image_URL+movie.poster_path} height="450px" width="350px"></img>
                <h3>Name: {movie.title}</h3>
                <h5>Release Date: {movie.release_date}</h5>
                <h5>Ratings: {movie.vote_average.toFixed(1)}</h5>
                <h6>Overview: {movie.overview}</h6>
            </div>
            )}
          </div>
  
        </div>
    )
}

export default PopularMovies;