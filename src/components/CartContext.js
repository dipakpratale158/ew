import React, { createContext, useEffect, useState } from 'react';
import { productsArr } from './CartItem';

export const Cart = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const saveCartToFirebase = () => {
    fetch(`https://ecommerce-website-23bc9-default-rtdb.firebaseio.com/${localStorage.getItem('xyz')}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const addToCart = (productId) => {
    const item = cart.find((item) => item.id === productId);
  
    if (item) {
      const updatedCart = cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + productsArr.find((p) => p.id === productId).price,
              stock:item.stock,
              company:item.company ,
              category:item.category
            }

          : item
      );
      setCart(updatedCart);
    } else {
      const product = productsArr.find((p) => p.id === productId);
      setCart([
        ...cart,
        { id: productId, quantity: 1, price: product.price, title: product.title, imageUrl: product.imageUrl, stock:product.stock,company:product.company,category:product.category },
      ]);
    }
  };
  
  

  const getSavedData = () => {
    fetch(`https://ecommerce-website-23bc9-default-rtdb.firebaseio.com/${localStorage.getItem('xyz')}.json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
              let errMessage = 'Authentication Failed, ' + data.error.message;
              throw new Error(errMessage);
            }
          });
        }
      })
      .then((data) => {
        const myarr = [];
        let sum = 0;

        for (let i in data) {
          myarr.push({
            id: i,
            imageUrl: data[i].imageUrl,
            price: data[i].price,
            quantity: data[i].quantity,
            stock:data[i].stock,
            company:data[i].company,
            category:data[i].category
          });
        }

        setCart(myarr);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const emptycartHandler = () => {
    fetch(`https://ecommerce-website-23bc9-default-rtdb.firebaseio.com/${localStorage.getItem('xyz')}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        setCart([]); // Clear the cart after successfully saving to Firebase
      })
      .catch((error) => console.error(error));
  };

  const handlePurchase = () => {
    emptycartHandler()
  };

 
  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  

  
  useEffect(() => {
    getSavedData();
  }, []);

  useEffect(() => {
    saveCartToFirebase();
  }, [cart]);

  return (
    <Cart.Provider value={{ cart, setCart, productsArr, addToCart,handlePurchase, removeItem}}>
      {children}
    </Cart.Provider>
  );
};

export default CartContext;