import { url } from 'inspector';
import React, { useState } from 'react';


export default function Movies(props:any) {
	const FavouriteComponent = props.favouriteComponent;
	const allMovies = Array.from(props.movies); 
	let [favourites, setFavourites] = useState< movieObject[]>([]);
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

	if(props.movies==""){
		return(
			<p>
			No Movies found in the Section.
			</p>
	);
	}else{
	return (
		
		<>
		{allMovies.map((movie:any, index:any) => (
			<>
			
			
				<div className='image-container'>
					<a href={`/view_movie/${movie.id}`} >
					<img id='posterImg' src={movie.posterurl} alt={movie.title}></img>
					</a>
					<div
						onClick={() =>props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
					
				</div>
			</>	
			))}
			
		</>
	);
}
}