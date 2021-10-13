import React, { FunctionComponent } from "react";
import Card from "../components/Card";
import { FilterList } from "@material-ui/icons";
import "./products.css";
import { Link } from "react-router-dom";
import { getData, store, useQuery , ProductData} from "../Apis";
import { useEffect, useState } from "react";
// import { query } from "@firebase/firestore";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  let query = useQuery();
  const type = query.get("type");
  const origin = query.get("origin");

  useEffect(() => {
    getData(origin, type).then((data) => {
        setProducts(data);
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
          <Link key={product.id} to={`/product/${product.id}`}>
            <Card title={product.name} img={product.img} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Products;
