import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({children}){
    const [movies, setMovies] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [header, setHeader] = useState("Trending");
    const [activeGenre, setActiveGenre] = useState(0);

    const fetchPopular = async () => {
        const data = await fetch(
            
            'https://api.themoviedb.org/3/movie/popular?api_key=cecb8ae8236231beeb7c24539049cb70&language=en-US&page=1'
        );

        const movies = await data.json();
        setMovies(movies.results);
        setFiltered(movies.results);
        setHeader("Trending");
        setActiveGenre(0);
    }

    return (
        <MovieContext.Provider
            value={{
                header,
                setHeader,
                filtered,
                setFiltered,
                fetchPopular,
                movies,
                setMovies,
                activeGenre,
                setActiveGenre,
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext;