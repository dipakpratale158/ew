import React, { useContext } from "react";
import { Cart } from "../CartContext";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";
import Star from "../Star";
import AddToCartproductdetail from "./AddToCartproductdetail";
import FormatPrice from "../Helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { Button } from "react-bootstrap";
const ProductDetails = () => {
  const { productsArr } = useContext(Cart);
  const { id } = useParams();

  let product = productsArr.find((value) => value.id === id);

  console.log(product);

  return (
<div class="container">
      <div className="itemContainer">
        <div className="itemImage">
          <img src={product.imageUrl} alt="product-images" />
          <p>Insert image Block</p>
        </div>

        <div className="itemDetails">
          <h1>{product.title}</h1>
          <h2>{product.name}</h2>
          <h3>Price: ₹{product.price} </h3>
          <span> 55% off</span>
          <div className="product-data">
          
            <Star stars={product.stars} reviews={product.reviews} />

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={product.price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={product.price} />
            </p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Dipak Delivered</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {product.stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {product.company} </span>
              </p>
            </div>

            <hr />
          </div>
          <AddToCartproductdetail product={product} />

        </div>

        <div className="itemReview">
          <p className="reviewtitle">Reviews : </p>

          {product.ProductReview.map((e) => (
            <div className="itemReview1">
              <p>{e.name} - </p>

              <p>{e.review}</p>
            </div>
          ))}
        </div>

       <Button> <Link to="/store" className="back-to-store-btn">Back to Store</Link></Button>
      </div>
    </div>
  );
};

export default ProductDetails;