import React, { FunctionComponent } from "react";
import Card from "../components/Card";
import { FilterList } from "@material-ui/icons";
import "./products.css";
import { Link } from "react-router-dom";
import { getData, store, useQuery, ProductData } from "../Apis";
import { useEffect, useState } from "react";
// import { query } from "@firebase/firestore";

interface ProductsProps { }

const Products: FunctionComponent<ProductsProps> = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  let query = useQuery();
  const type = query.get("type");
  const origin = query.get("origin");
  const search = query.get("search");
  // console.log(search)

  useEffect(() => {
    getData(origin, type, search).then((data) => {
      setProducts(data);
    });
  }, []);

  // useEffect(() => {
  //   getSearchResults(search).then((data) => {
  //     console.log(data)
  //     setProducts(data)
  //   })
  // }, [search])
  return (
    <>
      <div className="focus-image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/categories/imported-granite.jpg`}
          alt=""
        />
        {{ origin } && { type } ? (
          <h1>
            {origin} {type}
          </h1>
        ) : null}
      </div>
      <div className="transition-shade"></div>

      <button className="outlined-button">
        <FilterList /> Filter
      </button>

      <section className="gridview">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Card title={product.name} img={product.img} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Products;
