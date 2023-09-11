import React from "react";
// import styled from "styled-components";
import styles from "./Navbar.module.css";

class Navbar extends React.Component{
    render(){
        return(
            <>
            {/* <div style= {styles.nav}> */}
            {/* <Nav >    */}
            <div className= {styles.nav}>
                {/* <div style= {styles.title}> */}
                {/* <Title> */}
                  <div className= {styles.title}>

                  Movie-App
                  </div>

                {/* </Title> */}
                {/* </div> */}
                <div className= {styles.cart}>

                    <img alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" className={styles.cartIcon}/>
                    <span color = "#f2b6e7"  show = {true} className={styles.cartCount}>3</span>
                </div>

            </div>
            {/* </Nav> */}
            {/* </div> */}
            
            </>
        )
    }
}

export default Navbar;
// const styles = {
//     nav: {
//         width:"100%" ,
//      height:70 ,
//      background:"black" , 
//      display: "flex",
//      justifyContent:"space-between"
//     },
//     title:{
//         fontSize: 30,
//         color: "mustard",
//         fontWeight: 600,
//         fontFamily: '"Montserrat", sans-serif',
//         textTransform: "uppercase",
//         marginLeft: 10,
//         padding:20
//     },
//     cartIcon: {
//       height:"50px",
//       position: "relative",
//       right:15,
//       top:10
//     },
//     cartCount: {
//       background: "orange",
//       borderRadius: "50%",
//       padding: "4px 8px",
//       position: "absolute",
//       right:5,
//       top: 5,
//       fontSize: 12,
//     },
// }
