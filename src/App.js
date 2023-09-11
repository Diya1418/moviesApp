import React from 'react';
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from "./moviesData";

import "./index.css"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        movies : movies,
        cartCount: 0
    }
    // this.render = this.render.bind(this);   //global binding
}

addStars = () => {   //to skip using bind function to save 'this' make the function -> arrow function then no need to use bind()
     
    //form 1 -> directly pass state  ... object form
    // this.setState({
    //    stars: this.state.stars +0.5

    // });


    //form 2  functional form


    if(this.state.stars > 5){
        return;
    } 

    this.setState((prevState) => {
        return{
            stars: prevState.stars+0.5
        }

    });

    //    console.log( "this: ",this.state.stars);
//    this.state.stars += 0.5;

// this.render = this.addStars.bind(this)
    

}



handleIncStars = (movie) => {

    const {movies} = this.state;

    const mid = this.state.movies.indexOf(movie);

    if(movies[mid].stars >= 5)return;
    
    movies[mid].stars += 0.5;

    this.setState({
         movies : movies   // both have same name then it can be written as the name written once without semicolon -> movies

    });

}

handleDecStars = (movie) => {

    const {movies} = this.state;

    const mid = this.state.movies.indexOf(movie);

    if(movies[mid].stars <0)return;
    
    movies[mid].stars -= 0.5;

    this.setState({
         movies : movies   // both have same name then it can be written as the name written once without semicolon -> movies

    });

}

handleCart = (movie) => {

    let {movies,cartCount} = this.state;

    const mid = this.state.movies.indexOf(movie);
    
    movies[mid].cart = !movies[mid].cart;
    if(movies[mid].cart){
      cartCount += 1;
    }
    else{
      cartCount -= 1;
    }

    this.setState({
         movies ,  // both have same name then it can be written as the name written once without semicolon -> movies
         cartCount 
    });

}

handleFav = (movie) => {

    const {movies} = this.state;

    const mid = this.state.movies.indexOf(movie);
    
    movies[mid].fav = !movies[mid].fav;

    this.setState({
         movies : movies   // both have same name then it can be written as the name written once without semicolon -> movies
         
    });

}

  
  render(){
      const {movies,cartCount} = this.state;

      
    return (
        <>
        <Navbar cartCount = {cartCount}/>
        <MovieList movies = {movies}
        addStars={this.handleIncStars}
        redStars={this.handleDecStars} 
        addCart = {this.handleCart} 
        addFav = {this.handleFav}
        />
        </>
      );
    }
}


export default App;
