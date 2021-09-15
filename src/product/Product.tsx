import React, { FunctionComponent } from "react";
import "./product.css";
import Card from "../components/Card";

interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
  return (
    <>
      <div className="product-header">
        <img
          src={`${process.env.PUBLIC_URL}/assets/categories/imported-granite.jpg`}
          alt=""
        />
        <div className="product-action">
          <div>
            <h1>Some product</h1>
            <hr />
          </div>
          <div>
            <p>Some good info About this product</p>
            <p>Some good info About this product</p>
            <p>Some good info About this product</p>
            <p>Some good info About this product</p>
          </div>
          <div className="action-buttons">
            <button>Add for Quotation</button>
            <button>Enquire Now</button>
          </div>
        </div>
      </div>
      <div className="product-info">
        <p>Some more info About this product</p>
        <p>Some more info About this product</p>
        <p>Some more info About this product</p>
        <p>Some more info About this product</p>
      </div>
      <h1>You May Also Like</h1>
      <section className="gridview">
        <Card title="INDIAN MARBLE" img="indian-marble.jpg" />
        <Card title="IMPORTED MARBLE" img="imported-marble.jpg" />
        <Card title="INDIAN GRANITE" img="indian-granite.jpg" />
        <Card title="IMPORTED GRANITE" img="imported-granite.jpg" />
        <Card title="STONE" img="stone.jpg" />
        <Card title="COMPOSITE" img="composite.jpg" />
      </section>
    </>
  );
};

export default Product;
