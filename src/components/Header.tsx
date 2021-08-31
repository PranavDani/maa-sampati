import logo from "../assets/logo.svg";
import { Search } from "@material-ui/icons";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Maa Sampati Logo" />
        <span>Maa Sampati</span>
      </div>

      <ul className="header-list">
        <li>PRODUCTS</li>
        <li>CONTACT US</li>
        <li>ABOUT US</li>
      </ul>
      <div className="rightheader">
        <Search />
      </div>
    </header>
  );
}

export default Header;
