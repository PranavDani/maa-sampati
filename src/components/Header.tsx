import logo from "../assets/logo.svg";
import { Search, ShoppingCart } from "@material-ui/icons";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { getData } from "../Apis";
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

  // const handleClick = () => {

  // }


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
        </Link>
        <a href="/#contact-us">
          <li >CONTACT US</li>
        </a>
        <li>ABOUT US</li>
      </ul>
      <div className="rightheader">
        {/* <Link to={`/products/?search=${"Volakas"}`}> */}
        {/* <Search /> */}
        {/* <form onSubmit={handleSubmit}> */}
        {/* </form> */}
        {/* </Link> */}
        <form onSubmit={handleSubmit}>
          {/* <input className="search" type="text" placeholder="Search" name="search" onChange={event => { setSearchTerm(event.target.value) }} /> */}
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
