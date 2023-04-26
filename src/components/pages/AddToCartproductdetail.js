import React, { useContext } from "react";
import { Cart } from "../CartContext";
import { Button } from "react-bootstrap";
import classes from "../Header.module.css"
import { Link } from "react-router-dom";

const AddToCartproductdetail = ({ product }) => {
  const { addToCart, cart } = useContext(Cart);

  return (
    <Link to="/cart"  className={classes.seeCartBtn}>
      <div
        className={classes.seeCartBtn}
        onClick={() => addToCart(product)}
      >See Cart Detail</div>
    </Link>
     
  );
};

export default AddToCartproductdetail;