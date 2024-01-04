import React,{useState,useEffect} from 'react';
import './App.css';
import PopularMovies from './components/PopularMovies';
import Header from './components/Header';
import axios from 'axios';
const general_API_URL="https://api.themoviedb.org/3/movie/now_playing?api_key=83d807122805f5c43f64dd6fa6c2406b";
const popular_API_URL="https://api.themoviedb.org/3/movie/popular?api_key=83d807122805f5c43f64dd6fa6c2406b";
const topRated_API_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=83d807122805f5c43f64dd6fa6c2406b";
const upcoming_API_URL="https://api.themoviedb.org/3/movie/upcoming?api_key=83d807122805f5c43f64dd6fa6c2406b";
function App() {

  const [movies, setMovies]=useState([]);

//Popular Movies
async function displayPopularMovies() {
try {
  const response = await axios.get(`${popular_API_URL}`);
  const data = response.data;
  console.log(data);
  setMovies(data.results);
} catch (error) {
  console.error('Error fetching data:', error);
}
}

//Top-rated Movies
async function displayTopMovies() {
  try {
    const response = await axios.get(`${topRated_API_URL}`);
    const data = response.data;
    console.log(data);
    setMovies(data.results);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  }

//Upcoming Movies
async function displayUpcomingMovies() {
  try {
    const response = await axios.get(`${upcoming_API_URL}`);
    const data = response.data;
    console.log(data);
    setMovies(data.results);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  }


  // Movie Search
  async function disaplaySearchValue(inputValue){
      if (inputValue===''){
        window.alert("Enter valid title");
      }
      try {
        const url=`https://api.themoviedb.org/3/search/movie?api_key=83d807122805f5c43f64dd6fa6c2406b&query=${inputValue}`;
        const response = await axios.get(`${url}`);
        const data = response.data;
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

  }
  
  useEffect(() => {
    fetch(general_API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <div>        
      <Header popularMovies={displayPopularMovies} topMovies={displayTopMovies} upcomingMovies={displayUpcomingMovies} 
      searchValue={disaplaySearchValue}/>   
      <PopularMovies movies={movies} />
    </div>

  );
}      
export default App;