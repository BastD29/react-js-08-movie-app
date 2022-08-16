import React, { useContext, useEffect } from 'react';
import MovieContext from '../context/MovieContext';
import Movie from './Movie';

import { motion } from 'framer-motion';

export default function MoviesList() {
    const {filtered, fetchPopular, header} = useContext(MovieContext);

    useEffect(() => {
        if (header === "Trending"){
            fetchPopular();
        }
    }, [header]);

    return (
        <>
            <motion.div layout className='popular-movies'>
                {filtered.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />
                })}
            </motion.div>
            {filtered.length === 0 && <p className='info'>No movies to display</p>}
        </>
    )
}