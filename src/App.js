import React, { useState } from 'react';
import './App.css';
import {movieDictionary} from './data'

function App() {
  
  const [selectedGenre, setSelectGenre] = useState("Thriller")
  
  
  return (
    <>
      <header>Movie Recommender</header>
      <div className='genre'>

      {Object.keys(movieDictionary).map((genre, index)=>{
        return(
          <button className='btn' key={index} onClick={()=>setSelectGenre(genre)}>{genre}</button>
          )
        })}
       
      </div>
      <div className='selectedgenre'>{selectedGenre}</div>
      {
        movieDictionary[selectedGenre].map((movie,i)=>{
          return(
            <div className='movie' key={i}>
              <img src={movie.Img} alt='img'/><br/>
              <div className='movie-name'>{movie.Name}</div><br/>
              <div className='rating'>IMDb rating: {movie.IMDb}</div><br/>
              <div className='desc'>{movie.Description}</div><br/>
            </div>
          )
        })
      }
    </>
  );
}

export default App;
