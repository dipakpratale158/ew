import React, { useEffect, useState, useContext } from "react";
import { Cart } from "./CartContext";
import "../App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CartList.css"; // Import the CSS file here
import { FaTrash } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";
import FormatPrice from "./Helper/FormatPrice";
import { Link } from "react-router-dom";
import  "./CartList.css"
const CartList = ({price, onClose}) => {
  const history = useNavigate();
  
  const [CART, setCART] = useState([]);

  const { cart, handlePurchase, removeItem } = useContext(Cart);

  const removeHandler = (id) => {
    removeItem(id);
  };

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const purchaseHandler = () => {
    alert("Your order has been placed successfully!");
    handlePurchase();
    history('/store');
  };

 
  return (
    <div className="cart-container">
             <Button> <Link to="/store" className="back-to-store-btn" style={{color:"black"}} >Close X</Link></Button>

      {CART?.map((item, itemindex) => {
        return (
          <div className="cart-item" key={itemindex}>
            <img src={item.imageUrl} width={70} alt="product image" />
            <h4>{item.title}</h4>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return itemindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              <FaMinus />
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return itemindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              <FaPlus />
            </button>
            <span className="price">
              <FormatPrice price={item.price} />
            </span>
            <div className="deleteicon">
              <FaTrash
                className="remove_icon"
                onClick={() => removeHandler(item.id)}
              />
            </div>
          </div>
        );
      })}
      <p style={{ fontSize: "30px" }}>
        <b>Total Amount ₹ </b>
        <span>
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
        </span>

        {CART.length > 0 && (
          <Button onClick={purchaseHandler} style={{ float: "right" }}>
            Purchase
          </Button>
        )}
      </p>
    </div>
  );
};

export default CartList;