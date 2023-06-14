import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import SearchComponent from '../components/SearchComponent';
import movieData from '../data.json';
import MovieLists from '../components/MovieLists';
import AddFavourite from '../components/AddFavourite';
import RemoveFavourites from '../components/RemoveFavourite';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'


function Home() {
  const [moviesInTheatre, setMoviesInTheatre] = useState< movieObject[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState< movieObject[]>([]);
  const [topRatedIndian, setTopRatedIndian] = useState< movieObject[]>([]);
  const [commingSoon, setCommingSoon] = useState< movieObject[]>([]);
	const [favourites, setFavourites] = useState< movieObject[]>([]);
	const [searchValue, setSearchValue] = useState('');

  type movieObject={
    id:string,
    title:string,
    year:string,
    genres: string[],
    ratings:  number[],
    poster:string,
    contentRating: string,
    duration: string,
    releaseDate: string,
    averageRating: number,
    originalTitle: string,
    storyline: string,
    actors:  string[],
    imdbRating: number|string,
    posterurl: string,

  };
  
 
  const getMovieRequest = async (searchValue:any) => {
    let dummy = await movieData;
    if (searchValue=="") {
      setMoviesInTheatre(dummy['movies-in-theaters']);

      setTopRatedMovies(dummy['top-rated-movies']);
  
      setTopRatedIndian(dummy['top-rated-india']);
  
       setCommingSoon(dummy['movies-coming']);
  
       setFavourites(dummy.favourite); 
    }else{
      setMoviesInTheatre(dummy['movies-in-theaters'].filter((mov) => mov.title.toLowerCase().includes(searchValue.toLowerCase())));
      setTopRatedMovies(dummy['top-rated-movies'].filter((mov) => mov.title.toLowerCase().includes(searchValue.toLowerCase())));
      setTopRatedIndian(dummy['top-rated-india'].filter((mov) => mov.title.toLowerCase().includes(searchValue.toLowerCase())));
      setCommingSoon(dummy['movies-coming'].filter((mov) => mov.title.toLowerCase().includes(searchValue.toLowerCase())));
      setFavourites(favourites.filter((mov) => mov.title.toLowerCase().includes(searchValue.toLowerCase())));

    }


    }
	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
  
  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')|| '{}'
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

  const saveToLocalStorage = (items:any) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

  const addFavouriteMovie = (movie: movieObject) => {
    if(favourites.filter(mov=>mov.id.includes(movie.id)).length==0){
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
    new Notify({
      status: 'success',
      title: 'Movie Added Successfully',
      text: 'Movie Added Successfully to the Favourites List.',
      effect: 'fade',
      speed: 300,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 2000,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'right top'
    })
  }else{
    new Notify({
      status: 'error',
      title: 'Unable to Add Movie',
      text: 'Movie is already available in the Favourites List.',
      effect: 'fade',
      speed: 300,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 2000,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'right top'
    })

  }
	};

  const removeFavouriteMovie = (movie: movieObject) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.id !== movie.id
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);

    new Notify({
      status: 'success',
      title: 'Movie Removed',
      text: 'Movie Successfully Removed from Favourites List.',
      effect: 'fade',
      speed: 300,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 2000,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'right top'
    })
	};

  return (
    <>
    <SearchComponent searchValue={searchValue} setSearchValue={setSearchValue}/>

    <div  className='container container-fluid movie-app'>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                <br /> <h3 id="moviesInTheatre">Movies in Theatre</h3>
                </div>
                <div className='row'>
                  <MovieLists
                    movies={moviesInTheatre}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourite}
                    favouriteMovies={favourites}
                  />
                </div>
          </div>
          <div className='container container-fluid movie-app'>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                  <br />
                  <h3 id="commingSoon">Coming Soon</h3>
                </div>
                <div className='row'>
                  <MovieLists
                    movies={commingSoon}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourite}
                  />
                </div>
          </div>
          <div  className='container container-fluid movie-app'>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                <br /> <h3 id="topRatedIndian">Top Rated Indian</h3>
                </div>
                <div className='row'>
                  <MovieLists
                    movies={topRatedIndian}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourite}
                  />
                </div>
          </div>   
          <div className='container container-fluid movie-app'> 
                <div className='row d-flex align-items-center mt-4 mb-4'>
                <br /><h3 id="topRatedMovies" >Top Rated Movies</h3>
                </div>
                <div className='row'>
                  <MovieLists
                    movies={topRatedMovies}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourite}
                  />
                </div>
          </div>
          <div  className='container container-fluid movie-app'>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                <br /><h3 id="favourites">Favourites</h3>
                </div>
                <div className='row'>
                  <MovieLists
                    movies={favourites}
                    handleFavouritesClick={removeFavouriteMovie}
                    favouriteComponent={RemoveFavourites}
                  />
                </div>
    </div>
    </>
  );
  }


export default Home;