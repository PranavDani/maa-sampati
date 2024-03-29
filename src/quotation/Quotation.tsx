import "./Quotation.css";
import React, { FunctionComponent, useEffect } from "react";
import { Delete } from "@material-ui/icons";
import { useState } from "react";
import { IconButton, Snackbar } from "@material-ui/core";
import { ProductData, addForQuote, QuoteProduct } from "../Apis";

interface QuotationProps { }

const Quotation: FunctionComponent<QuotationProps> = () => {
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [products, setProducts] = useState<CartRowProps[]>([] as CartRowProps[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const dataProds = products.map((prod) => {
      if (prod.quantity && prod.height && prod.width && prod.depth) {
        setOpenError(true);
        isValid = false;
        return;
      }
      return {
        id: prod.id,
        title: prod.title,
        image: prod.image,
        quantity: prod.quantity,
        height: prod.height,
        width: prod.width,
        depth: prod.depth,
      } as QuoteProduct;
    }) as QuoteProduct[];
    if (isValid) {
      addForQuote(name, phone, email, message, location, dataProds).then((res) => {
        showSnackBar();
        localStorage.clear();
        getProducts();
        e.target.reset();
      });
    }
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
    setOpenError(false);
    setOpen(false);
  };

  function allStorage(): ProductData[] {
    var archive: ProductData[] = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      if (keys[i]?.startsWith("iconify"))
        continue;

      archive.push(JSON.parse(localStorage.getItem(keys[i]) as string));
    }

    return archive;
  }

  const getProducts = () => {
    const products: CartRowProps[] = [];
    const data = allStorage();
    for (let i = 0; i < data.length; i++) {
      const product = data[i];
      products.push({
        id: product.id,
        title: product.name,
        image: product.img,
        quantity: 1,
        depth: 100,
        width: 100,
        height: 100,
      } as CartRowProps);
    }
    setProducts(products);
  };

  useEffect(() => getProducts(), []);

  return (
    <div className="quotation">
      <h1>REQUEST FOR QUOTATION</h1>
      <table>
        <tr>
          <th>Product</th>
          <th>Dimensions(in cms)</th>
          <th>Quantity</th>
          <th></th>
        </tr>
        {
          products.map((product, index) => (
            <CartRow
              key={product.id}
              id={product.id}
              image={product.image}
              depth={product.depth}
              height={product.height}
              width={product.width}
              quantity={product.quantity}
              title={product.title}
              onDelete={(id) => {
                localStorage.removeItem(id);
                getProducts();
              }}
              onChange={(item) => {
                setProducts(products.map((p) => (p.id === item.id ? item : p)));
              }}
            />
          ))
        }
      </table>
      <section className="contact info-form">
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

          <button className="request">Request Quotation</button>
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
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openError}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Please fill all the fields"
      />
    </div>
  );
};

interface CartRowProps {
  id: string;
  image: string;
  title: string;
  height: number;
  width: number;
  depth: number;
  quantity: number;
  onDelete: (id: string) => void;
  onChange: (cartProp: CartRowProps) => void;
}

const CartRow: FunctionComponent<CartRowProps> = (props: CartRowProps) => {
  return (
    <tr className="cart-row">
      <td>
        <div className="product-details">
          <img
            height="100px"
            src={props.image}
            alt={props.title}
          />
          <h3>{props.title}</h3>
        </div>
      </td>
      <td>
        <p>
          Height: <input type="number" min={1} placeholder={"100"} onChange={(e) => {
            props.onChange({
              ...props,
              height: parseInt(e.target.value)
            })
          }} />
        </p>
        <p>
          Width: <input type="number" min={1} placeholder={"100"} onChange={(e) => {
            props.onChange({
              ...props,
              width: parseInt(e.target.value)
            })
          }} />
        </p>
        <p>
          Depth: <input type="number" min={1} placeholder={"5"} onChange={(e) => {
            props.onChange({
              ...props,
              depth: parseInt(e.target.value)
            })
          }} />
        </p>
      </td>
      <td>
        <input type="number" min={1} placeholder={"100"} onChange={(e) => {
          props.onChange({
            ...props,
            quantity: parseInt(e.target.value)
          })
        }} />
      </td>
      <td>
        <IconButton onClick={() => props.onDelete(props.id)}>
          <Delete />
        </IconButton>
      </td>
    </tr>
  );
};

export default Quotation;
