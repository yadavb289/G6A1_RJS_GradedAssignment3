
import movieData from '../data.json';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




function ViewMovie(props:any) {
    const [moviesList, setMovieList] = useState< movieObject[]>([]);
    const {id} = useParams();
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
      
      
      const getMovieFiltered = async (id:any) => {
      
      await setMovieList(
                        moviesList=>({
                            ...movieData['movies-coming'].filter(mov=> mov.id.toLowerCase()=== id),
                            ...movieData.favourite.filter(mov=> mov.id.toLowerCase()=== id),
                            ...movieData['movies-in-theaters'].filter(mov=> mov.id.toLowerCase()=== id),
                            ...movieData['top-rated-india'].filter(mov=> mov.id.toLowerCase()=== id),
                            ...movieData['top-rated-movies'].filter(mov=> mov.id.toLowerCase()=== id)
                                    }))
                    

    console.log("moviesList",moviesList);

    }
    
    useEffect(() => {
		getMovieFiltered(id);
	}, [id]);


            if(moviesList.length !== 0){
            return (
                
                    <>
                    <div id='singleMovie'>
                    <div id='leftbox'>
					<img id='singleMovieImg' src={moviesList[0].posterurl} alt={moviesList[0].title}></img>
					</div>
	
					<div id='rightbox'>
					<h2>{moviesList[0].title}</h2>
                    <table>
                        <tr>
                            <th>
                                Imdb Rating:
                            </th>
                            <td>
                                {moviesList[0].imdbRating} 
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Content Rating:
                            </th>
                            <td>
                                {moviesList[0].contentRating}  
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Average Rating:
                            </th>
                            <td>
                                {moviesList[0].averageRating}  
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Duration:
                            </th>
                            <td>
                                {moviesList[0].duration}  
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Genres:
                            </th>
                            <td>
                                {moviesList[0].genres}  
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Casts:
                            </th>
                            <td>
                                {moviesList[0].actors}  
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Release Date:
                            </th>
                            <td>
                                {moviesList[0].releaseDate}  
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Story Details:
                            </th>
                            <td>
                                {moviesList[0].storyline}  
                            </td>
                        </tr>                  
                    </table>
				    </div>
                    </div>
                </>
                
            );
            }
            else{
            return(
                        <h3></h3>
                    );
            }
}

export default ViewMovie;