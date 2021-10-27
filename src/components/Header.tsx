import logo from "../assets/logo.svg";
import { ShoppingCart } from "@material-ui/icons";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "../Apis";
import SearchBar from "./Search";



function Header() {
  let query = useQuery();
  const search = query.get("search")

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.search.value
    history.push(`/products/?search=${value}`);
  }

  return (
    <header className="header" id="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Maa Sampati Logo" />
          <span>Maa Sampati</span>
        </div>
      </Link>

      <ul className="header-list">
        <Link to="/products">
          <li>PRODUCTS
          </li>
        </Link>
        <a href="/#contact-us">
          <li >CONTACT US</li>
        </a>
        <li>ABOUT US</li>
      </ul>
      <div className="rightheader">
        <form onSubmit={handleSubmit}>
          <SearchBar />
        </form>
        <Link to="/quotation">
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
}

export default Header;
