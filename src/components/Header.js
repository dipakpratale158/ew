import React, {useContext} from "react";
// import Button from "react-bootstrap/Button";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "./CartContext";
import AuthContext from "./store/AuthContext";
import { FiShoppingCart } from "react-icons/fi";
import classes from "./Header.module.css"
import { useState } from "react";
const Header = (props) => {

  const [hovered, setHovered] = useState(false);




   const {cart} = useContext(Cart);

  const authCtx = useContext(AuthContext);
  const history = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = ()=> {
    alert("Do you want Logout")
     authCtx.Logout();
    history('/login')
  };
  const linkStyle = {
    textDecoration: "none",
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#f1c40f",
    color: "#fff",
    borderRadius: "10px",
    transform: `translateY(${hovered ? "-5px" : "0px"})`,
    transition: "transform 0.2s ease-out",
    "@media (max-width: 768px)": {
      padding: "10px",
      fontSize: "14px",
    },
  };
  return (
    <>
    <div className={classes.navBar}>
      <Nav className={classes.justifycontentcenter} activeKey="/home">
      <div style={{margin:'20px',color:"black"}}><Link to="/" style={linkStyle}>HOME</Link></div>

     {isLoggedIn &&  <div>
      <Link
        to="/store"
        style={linkStyle}
        
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        STORE
      </Link>
    </div>
}
<div style={{margin:'20px',color:"black"}}><Link to="/movies" style={linkStyle} >
Entertainment</Link></div>

      <div style={{margin:'20px',color:"black"}}><Link to="/about" style={linkStyle} onClick={() => props.handleShow(false)}>ABOUT</Link></div>
      <div style={{margin:'20px',color:"black"}}><Link to="/contact" style={linkStyle}>Contact US</Link></div>
      
      { !isLoggedIn && <div style={{margin:'20px',color:"black"}}><Link to="/signup" style={linkStyle}>Sign Up</Link></div>}

      {isLoggedIn && <div style={{margin:'20px',color:"black"}}><Link to="/login" style={linkStyle} onClick={logoutHandler}>LogOut</Link></div>}
      </Nav>
       </div>
    <div className="flex shopping-cart ">
      <h4 style={{fontFamily:'Comic Sans MS' }} >Shopping Cart</h4>
    
 
      {isLoggedIn && <Link to="cart" className={classes.cartsection}>
              <FiShoppingCart className={classes.carttrolley} onClick={() => props.handleShow(true)}/>
              <span className={classes.carttotalitem}> {cart.length} </span>
            </Link>}




    </div>
    <div className="generic-section"><h1>The Generics</h1></div>
    </>
  );
};

export default Header;