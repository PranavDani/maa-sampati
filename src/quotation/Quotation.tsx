import "./Quotation.css";
import React, { FunctionComponent } from "react";
import { Delete } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { Snackbar } from "@material-ui/core";

interface QuotationProps {}

const Quotation: FunctionComponent<QuotationProps> = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("execute ho gaya");
    const order = { name, phone, email, message, location };
    setIsPending(true);

    localStorage.setItem("testObject", JSON.stringify(order));

    console.log("Post Pending");
    console.log(order);

    // let retrievedObject = localStorage.getItem("testObject");
    // console.log(retrievedObject);

    console.log("Reset form");
    e.target.reset();
    showSnackBar();
  };
  const showSnackBar = () => {
    setOpen(true);
  };
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="uname"
            onChange={(e) => setName(e.target.value)}
            pattern="^[a-zA-Z ]*$"
            placeholder="Your Name"
            required
          />
          <div className="group">
            <div className="user-input">
              <label htmlFor="">Phone number</label>
              <input
                type="text"
                placeholder="Your Phone no"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                pattern="^[0-9]{10}$"
                required
              />
            </div>
            <div style={{ width: "10px" }}></div>
            <div className="user-input">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
            </div>
          </div>
          <label htmlFor="">Anything We need to keep in mind?</label>
          <textarea
            rows={5}
            name=""
            id=""
            cols={30}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Marbles should be polished..."
          ></textarea>
          <label htmlFor="">Project Location</label>
          <input
            type="text"
            placeholder="Project Location"
            onChange={(e) => setLocation(e.target.value)}
          />

          <button>Request Quotation</button>
        </form>
      </section>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="You will soon receive our response"
      />
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
