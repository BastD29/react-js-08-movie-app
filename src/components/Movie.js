import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/no-image.jpeg';
import { motion } from 'framer-motion';

export default function Movie({movie}) {

  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      layout
      className="movie"
    >
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <div className='shadow'></div>
      </Link>
      {movie.poster_path !== null ? (
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
      ) : (
        <img src={defaultImage} />
      )}
      <h2>{movie.title}</h2>
    </motion.div>
  )
}
