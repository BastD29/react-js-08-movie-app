import React, { useEffect, useState } from 'react';
import {MdArrowBack} from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import defaultImage from "../assets/no-image.jpeg";

export default function Details() {
  let navigate = useNavigate();
  let params = useParams();
  
  const [movie, setMovie] = useState();

  const fetchMovie = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cecb8ae8236231beeb7c24539049cb70&language=en-US`
    );
    const movie = await data.json();
    setMovie(movie);
  }

  useEffect(() => {
    fetchMovie(params.movieId);
  }, [movie]);

  return (
    <>
      <div className='back'>
        <MdArrowBack onClick={() => navigate(-1)} />
      </div>
      {movie && (
        <div className='container details'>
          <h1 className='section-title'>{movie.original_title}</h1>
          {movie.poster_path !== null ? (
            <img
              className='img-bg'
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />
          ) : (
            <img
              className='img-bg'
              src={defaultImage}
            />
          )}
          <div>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  )
}
