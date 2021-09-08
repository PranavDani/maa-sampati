import logo from "../assets/logo.svg";
import { Search, ShoppingCart } from "@material-ui/icons";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Maa Sampati Logo" />
          <span>Maa Sampati</span>
        </div>
      </Link>

      <ul className="header-list">
        <li>PRODUCTS</li>
        <li>CONTACT US</li>
        <li>ABOUT US</li>
      </ul>
      <div className="rightheader">
        <Search />
        <Link to="/quotation">
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
}

export default Header;
