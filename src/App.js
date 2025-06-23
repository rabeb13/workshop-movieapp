import './App.css';
import { useState } from 'react';
import MovieList from './Components/MovieList/MovieList';
import { moviesData } from './data';
import FilterByName from './Components/FilterByName/FilterByName';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByRate from './Components/Rating/Rating';

function App() {
  const [movies,setMovies] = useState(moviesData);
  const[inputSearch,setInputSearch]= useState("");
  const [rating, setRating] = useState(1);

  //add
  const add= (newMovie)=> {
    setMovies([...movies,newMovie]);
  };

  return (
    <div className="App">
      <h1>Checkpoint Movie App</h1>
      {/* Filterbyname */}
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      {/* Filterbyrate */}
      <FilterByRate rating={rating} setRating={setRating}/>
      {/* AddMovie */}
      <AddMovie add={add} />
      {/* MovieList */}
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
    
    </div>
  );
}

export default App;
