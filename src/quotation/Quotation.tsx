import "./Quotation.css";
import React, { FunctionComponent } from "react";
import { Delete } from "@material-ui/icons";

interface QuotationProps {}

const Quotation: FunctionComponent<QuotationProps> = () => {
  return (
    <div className="quotation">
      <h1>REQUEST FOR QUOTATION</h1>
      <table>
        <tr>
          <th>Product</th>
          <th>Dimensions</th>
          <th>Quantity</th>
          <th></th>
        </tr>
        <CartRow
          image="imported-granite.jpg"
          depth={10}
          height={10}
          width={10}
          quantity={2}
          title="Some marble"
        />
      </table>
      <section className="contact">
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Your Name" />
          <div className="group">
            <div className="user-input">
              <label htmlFor="">Phone number</label>
              <input type="text" placeholder="Your Phone no" />
            </div>
            <div style={{ width: "10px" }}></div>
            <div className="user-input">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Your Email" />
            </div>
          </div>
          <label htmlFor="">Anything We need to keep in mind?</label>
          <textarea
            rows={5}
            name=""
            id=""
            cols={30}
            placeholder="Marbles should be polished..."
          ></textarea>
          <label htmlFor="">Project Location</label>
          <input type="text" placeholder="Project Location" />

          <button>Request Quotation</button>
        </form>
      </section>
    </div>
  );
};

interface CartRowProps {
  image: string;
  title: string;
  height: number;
  width: number;
  depth: number;
  quantity: number;
}

const CartRow: FunctionComponent<CartRowProps> = (props: CartRowProps) => {
  return (
    <tr>
      <td>
        <div className="product-details">
          <img
            height="100px"
            src={`${process.env.PUBLIC_URL}/assets/categories/${props.image}`}
            alt={props.title}
          />
          <h3>{props.title}</h3>
        </div>
      </td>
      <td>
        <p>
          {props.height} x {props.width} x {props.depth}
        </p>
      </td>
      <td>
        <p>{props.quantity}</p>
      </td>
      <td>
        <Delete />
      </td>
    </tr>
  );
};

export default Quotation;
