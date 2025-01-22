import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const products = [
    { id: 1, name: "Suit 1", price: "$199", image: "./images/golden-jacket.jpg" },
    { id: 2, name: "Suit 2", price: "$149", image: "./images/black-dress.jpg" },
    { id: 3, name: "Suit 3", price: "$49", image: "./images/suit3.jpeg" },
    { id: 2, name: "Suit 4", price: "$149", image: "./images/black-dress.jpg" },
    { id: 4, name: "Suit 5", price: "$49", image: "./images/suit3.jpeg" },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
