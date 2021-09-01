import './App.css';
import MovieCard from './component/MovieCard';
import Search from './component/Search';
import { MovieData } from './MovieData';

function App() {
  return (
    <div >
     <Search MovieData={MovieData}/>
    </div>
  );
}

export default App;
