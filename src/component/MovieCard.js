import React, {useState} from 'react'
import { MovieList } from './MovieList'
import { MovieData } from './../MovieData';
import { Add } from './Add';

const MovieCard = () => {
    const [movieData,setMovieData]=useState(MovieData);
    const addMovie=(newMovie)=>setMovieData([...movieData,newMovie])
    
    return (
        <div className='App'>
            {MovieData.map((el,i)=>
                <MovieList MovieData={el} key={i}/>
            )}
            <Add addMovie={addMovie}/>
            
            
        </div>
        // const MovieCard = () => {
        //     const [movie, setMovie] = useState(MovieData);
        //     const addNew=(newMovie)=>setMovie([...movie,newMovie])
        //     return (
        //         <div id="movies">
        //             {movie.map((film,i)=><MovieList MovieData={film} key={i}/>)}
        //             <Add addNew={addNew}/>
        //         </div>
        //     )
        // }
    )
}

export default MovieCard
