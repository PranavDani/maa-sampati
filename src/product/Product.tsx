import React, { FunctionComponent } from "react";
import "./product.css";

interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
  return (
    <>
      <div className="product-header">
        <img
          src={`${process.env.PUBLIC_URL}/assets/categories/imported-granite.jpg`}
          alt=""
        />
        <div className="product-details">
          <h1>Kuch to</h1>
          <button>Add for Quotation</button>
          <button>Enquire Now</button>
        </div>
      </div>
      <div className="product-info">
        <p>Some good info About this product</p>
        <p>Some good info About this product</p>
        <p>Some good info About this product</p>
        <p>Some good info About this product</p>
      </div>
    </>
  );
};

export default Product;
