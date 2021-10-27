import React, { FunctionComponent } from "react";
import "./product.css";
import { getProduct, ProductData } from "../Apis";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Snackbar } from "@material-ui/core";
interface ProductProps { }

const Product: FunctionComponent<ProductProps> = () => {
  const [product, setProduct] = useState<ProductData>({} as ProductData);
  const [open, setOpen] = React.useState(false);
  const { id } = useParams("id");

  useEffect(() => { }, []);

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

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);

  function isRequestedForQuote(): boolean {
    return localStorage.getItem(product.id) != null;
  }

  function addForQuote() {
    localStorage.setItem(product.id, JSON.stringify(product));
    showSnackBar();
  }

  function removeFromQuote() {
    localStorage.removeItem(product.id);
    showSnackBar();
  }

  return (
    <>
      <div className="product-header">
        <img src={product.img} alt="" />
        <div className="product-action">
          <div>
            <h1>{product.name}</h1>
            <hr />
          </div>
          <div>
            <p>{`Colors: ${product.colors?.join(", ")}`}</p>
            <p>{`Origin: ${product.origin}`}</p>
            <p>{`Type: ${product.type}`}</p>
            {/* <p>Some good info About this product</p> */}
          </div>
          <div className="action-buttons">
            <button onClick={() => isRequestedForQuote() ? removeFromQuote() : addForQuote()}>
              {isRequestedForQuote() ? "Remove" : "Add"} for Quotation
            </button>
            <button onClick={() => window.location.href = "https://wa.me/919321028200"}>Enquire Now</button>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={`${product.name} is ${isRequestedForQuote() ? "added" : "removed"} for quotation`}
      />
    </>
  );
};

export default Product;
