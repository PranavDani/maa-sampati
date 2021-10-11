import React, { FunctionComponent } from "react";
import Card from "../components/Card";
import { FilterList } from "@material-ui/icons";
import "./products.css";
import { Link } from "react-router-dom";
import { getData, store, useQuery } from "../Apis";
import { useEffect, useState } from "react";
// import { query } from "@firebase/firestore";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  const [products, setProducts] = useState([]) as any;
  console.log(products);
  let query = useQuery();
  const type = query.get("type");
  const origin = query.get("origin");
  // console.log(type);
  // console.log(origin);

  useEffect(() => {
    getData(store).then((data) => {
      if (type) {
        let final = data.filter(function (e) {
          if (origin) {
            return e.type == type && e.origin == origin;
          } else {
            return e.type == type;
          }
        });
        setProducts(final);
      } else {
        setProducts(data);
      }
      // console.log(final);
    });
  }, []);
  return (
    <>
      <div className="focus-image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/categories/imported-granite.jpg`}
          alt=""
        />
        <h1>COMPOSITE MARBLE</h1>
      </div>
      <div className="transition-shade"></div>

      <button className="outlined-button">
        <FilterList /> Filter
      </button>

      <section className="gridview">
        {products.map((product) => (
          <Link to={`/product/06r47pllGonVl3Jshjcq`}>
            <Card title={product.name} img={product.img} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Products;
