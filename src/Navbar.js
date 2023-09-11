import React from "react";
import styled from "styled-components";

const Nav =  styled.div`
width:100%;
height:70px;
background:linear-gradient(to bottom right, #c33686, #a18b21);
display: flex;
justify-content: space-between;
cursor: pointer;
`;

const Title = styled.div`
font-size: 40px;
color:#1d3b60;
font-weight: 600;
font-family: 'Times New Roman', Times , serif;
text-transform: uppercase;
margin-left: 20;

`;

const Cart = styled.img`
height:50px;
position: relative;
cursor: pointer;
right:15;
top:10;
`;

const CartCount = styled.div`
background-color: ${(props) => props.color};
      border-radius: 50%;
      padding: 4px 8px;
      position: absolute;
      right:7px;
      top: 0px;
      font-size: 12px;
      visibility: ${(props) => props.show? "visible":"hidden"}
`; 

class Navbar extends React.Component{
    render(){
    const {cartCount} = this.props;
        return(
            <>
            {/* <div style= {styles.nav}> */}
            <Nav >   
                {/* <div style= {styles.title}> */}
                <Title>
                  Movie-App
                </Title>
                {/* </div> */}
                <div>
                    <Cart alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" style={styles.cartIcon}/>
                    <CartCount color = "#f2b6e7"  show = {true}>{cartCount}</CartCount>
                </div>
            </Nav>
            {/* </div> */}
            
            </>
        )
    }
}

export default Navbar;

const styles = {
    nav: {
        width:"100%" ,
     height:70 ,
     background:"black" , 
     display: "flex",
     justifyContent:"space-between"
    },
    title:{
        fontSize: 30,
        color: "mustard",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 10,
        padding:20
    },
    cartIcon: {
      height:"50px",
      position: "relative",
      right:15,
      top:10
    },
    cartCount: {
      background: "orange",
      borderRadius: "50%",
      padding: "4px 8px",
      position: "absolute",
      right:5,
      top: 5,
      fontSize: 12,
    },
}