import React, { useContext, useState } from "react";
import { FaList, FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Cart } from "../CartContext";
import "../../App.css";
import AddToCartproductdetail from "./AddToCartproductdetail";

const Store = () => {
  const { productsArr, addToCart } = useContext(Cart);
  const [sortingValue, setSortingValue] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const companyList = [...new Set(productsArr.map((product) => product.company))];
  const colorList = [...new Set(productsArr.map((product) => product.color))];
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  const sortProducts = (a, b) => {
    if (sortingValue === "lowest") {
      return a.price - b.price;
    }

    if (sortingValue === "highest") {
      return b.price - a.price;
    }

    if (sortingValue === "a-z") {
      return a.title.localeCompare(b.title);
    }

    if (sortingValue === "z-a") {
      return b.title.localeCompare(a.title);
    }

    return 0;
  };

  ////sort new firt based on id
  // const sortProducts = (a, b) => {
  //   if (sortingValue === "lowest") {
  //     return a.price - b.price;
  //   }

  //   if (sortingValue === "highest") {
  //     return b.price - a.price;
  //   }

  //   if (sortingValue === "a-z") {
  //     return a.title.localeCompare(b.title);
  //   }

  //   if (sortingValue === "z-a") {
  //     return b.title.localeCompare(a.title);
  //   }

  //   return b.id - a.id;
  // };

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const productViewStyle = isGridView
    ? { display: "flex", flexWrap: "wrap" }
    : { display: "block" };

  const productItemStyle = isGridView
    ? { width: "50%", paddingBottom: "5%" }
    : { width: "100%", paddingBottom: "5%" };


    
    const filterByColor = (product) => {
      if (selectedColor === "") {
        return true;
      }
      return product.color === selectedColor;
    };
    
const filterByPriceRange = (product) => {
  if (minPrice === "" && maxPrice === "") {
    return true;
  }
  if (minPrice === "") {
    return product.price <= maxPrice;
  }
  if (maxPrice === "") {
    return product.price >= minPrice;
  }
  return product.price >= minPrice && product.price <= maxPrice;
};
  const filteredProducts = productsArr
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCompany !== "" ? product.company === selectedCompany : true
    ).filter(filterByColor)
    .filter(filterByPriceRange);


    
  return (
    <div className="flex">
      <div>
        <label htmlFor="sorting">Sort by:</label>
        <select
          id="sorting"
          value={sortingValue}
          onChange={(e) => setSortingValue(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
          <option value="a-z">Name: A to Z</option>
          <option value="z-a">Name: Z to A</option>
        </select>
      </div>
      <div className="flex1">
        <div>
          <label htmlFor="company">Company Wise:</label>
          <select
            id="company"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Select a company</option>
            {companyList.map((company, index) => (
              <option value={company} key={index}>
                {company}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="color">
  <label htmlFor="color">Color:</label>
  {colorList.map((color, index) => (
    <button
      key={index}
      className={`color-button ${
        color === selectedColor ? "selected" : ""
      }`}
      style={{ backgroundColor: color }}
      onClick={() => setSelectedColor(color)}
    />
  ))}
  <button
    className={`color-button ${selectedColor === "" ? "selected" : ""}`}
    onClick={() => setSelectedColor("")}
  >
    All
  </button>
</div>  



<div className="maxprise">
  <label htmlFor="minPrice">Min Price:</label>
  <input
    type="number"
    id="minPrice"
    value={minPrice}
    onChange={(e) => setMinPrice(e.target.value)}
  />
</div>
<div className="minprise">
  <label htmlFor="maxPrice">Max Price:</label>
  <input
    type="number"
    id="maxPrice"
    value={maxPrice}
    onChange={(e) => setMaxPrice(e.target.value)}
  />
</div>
      <div className="togglegridlistvew">
        <Button onClick={toggleView}>
          {isGridView ? <FaList /> : <FaTh />}
        </Button>
      </div>
      <div className="searchinput">
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => setSearchTerm("")}>Clear</Button>
      </div>

      <div style={productViewStyle} >
        {filteredProducts.sort(sortProducts).map((item, index) => {
          return (
            <div className="" style={productItemStyle} key={index}>
              <div className="product-item">
                <h3>{item.title}</h3>

                <Link to={`/product/${item.id}`}>
                  <div className="hover-image">
                    <img src={item.imageUrl} alt={item.title} width="40%" />
                  </div>
                </Link>

                <p>Price: ${item.price}</p>

                <Button
                  className="button"
                  onClick={() => addToCart(item.id)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          );
        })}

        <div>
          <AddToCartproductdetail />
        </div>
      </div>
    </div>
  );
};

export default Store