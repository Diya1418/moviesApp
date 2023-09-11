import React from "react";

//function MovieCard (props) can be used but then replace all this.props with just props  
class MovieCard extends React.Component{


    // reduceStars = () => {   //to skip using bind function to save 'this' make the function -> arrow function then no need to use bind()
        
    //     if(this.state.stars <= 0){
    //         return;
    //     }

    //     this.setState((prevState) => {
    //         return{
    //             stars: prevState.stars-0.5
    //         }

    //     });
    

    // }
  
    // handleFav = () => {
    //     this.setState({
    //         fav: !this.state.fav
    //     });
    // }

    // handleCart = () =>{
    //     this.setState({
    //         cart: !this.state.cart
    //     });
    // }

    render(){
         const {title,plot,price,stars,fav,cart,poster} = this.props.movies; 

         const {movies, addStars,redStars,addCart,addFav} = this.props;

      return (
        <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src={poster} />
                </div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs.{price}</div>

                    <div className="footer">
                        <div className="rating">8.9</div>
                        <div className="star-dis">

                                <img className="str-btn"
                                alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                                onClick = {() => {redStars(movies)}} />

                                <img alt="star" className="stars " 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />

                                <img className="str-btn"
                                alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" 
                                 onClick = {() => {addStars(movies)}} />    {/* local binding */}
                             

                                <span className="starcount">{stars}</span>
                        </div>

                        {fav?<button className="unfavourite-btn" onClick = {() => {addFav(movies)}}>Un-Favourite</button>:
                        <button className="favourite-btn" onClick = {() => {addFav(movies)}}>Favourite</button>}
                        
                        {cart?<button className="unfavourite-btn" onClick = {() => {addCart(movies)}}>Remove from cart</button>:
                         <button className="cart-btn" onClick = {() => {addCart(movies)}}>Add to cart</button>}
                        
                        


                    </div>

                </div>
            </div>
        </div>
      )

    }
}

export default MovieCard;

