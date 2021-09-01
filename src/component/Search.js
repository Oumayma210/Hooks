import React,{useState} from 'react'
import MovieCard from './MovieCard';



function Search({MovieData}) {
    const [searchField, setSearchField] = useState("");
    
    
    const filteredMovies = MovieData.filter(
    movie => {
    return (
        movie
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        movie
        .rating
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
    }
);

const handleChange = e => {
    setSearchField(e.target.value);

};
    

    return (
        <div>
            <input  type = "search" placeholder = "Search Movie" onChange = {handleChange}/>
            
            <MovieCard filteredMovies={filteredMovies}/>
        </div>

    )
}

export default Search