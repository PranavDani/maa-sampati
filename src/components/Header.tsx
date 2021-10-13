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
        <li>
          <Link to="/products">
            <a aria-haspopup="true">PRODUCTS</a>
          </Link>
          {/* <ul className="dropdown" aria-label="submenu">
            <li className="menu-item">
              <a>Indian Marble</a>
            </li>
            <li className="menu-item">
              <a>Imported Marble</a>
            </li>
            <li className="menu-item">
              <a>Indian Granite</a>
            </li>
            <li className="menu-item">
              <a>Imported Granite</a>
            </li>
            <li className="menu-item">
              <a>Stone</a>
            </li>
            <li className="menu-item">
              <a>Composite</a>
            </li>
          </ul> */}
        </li>
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
