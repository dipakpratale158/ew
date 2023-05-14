import React, {useContext} from "react";
// import Button from "react-bootstrap/Button";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "./CartContext";
import AuthContext from "./store/AuthContext";
import { FiShoppingCart } from "react-icons/fi";
import classes from "./Header.module.css"
const Header = (props) => {





   const {cart} = useContext(Cart);

  const authCtx = useContext(AuthContext);
  const history = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = ()=> {
    alert("Do you want Logout")
     authCtx.Logout();
    history('/login')
  };

  return (
    <>
    <div className={classes.navBar}>
      <Nav className={classes.justifycontentcenter} activeKey="/home">
      <div style={{margin:'20px',color:"black"}}><Link to="/">HOME</Link></div>

     {isLoggedIn && <div style={{margin:'20px',color:"black"}}><Link to="/store">STORE</Link></div>}

      <div style={{margin:'20px',color:"black"}}><Link to="/about" onClick={() => props.handleShow(false)}>ABOUT</Link></div>
      <div style={{margin:'20px',color:"black"}}><Link to="/contact">Contact US</Link></div>
      
      { !isLoggedIn && <div style={{margin:'20px',color:"black"}}><Link to="/signup">Sign Up</Link></div>}

      {isLoggedIn && <div style={{margin:'20px',color:"black"}}><Link to="/login" onClick={logoutHandler}>LogOut</Link></div>}
      </Nav>
       </div>
    <div className="flex shopping-cart ">
      <h4 style={{fontFamily:'Comic Sans MS'}}>Shopping Cart</h4>
    
 
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