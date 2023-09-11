import React from "react";
import MovieCard from "./Moviecard";


class MovieList extends React.Component{
    

    
    render(){
        //const {title,plot,price,rating,stars,fav,cart,poster} = this.state.movies;
        
        const {movies,addStars,redStars,addFav,addCart} = this.props;
        console.log(this.props);
        return (
           <>
           {/* <MovieCard title={title}
                       plot={plot}
                       price={price}
                       rating={rating}
                       stars={stars}
                       fav={fav}
                       cart={cart}
                       />
            */}

            {movies.map((movie) => <MovieCard movies = {movie} 
            addStars={addStars}
            redStars={redStars} 
            addCart = {addCart} 
            addFav = {addFav}
            key= {movie.id}/>)}
            
           </>
        );

    }
}

export default MovieList;

