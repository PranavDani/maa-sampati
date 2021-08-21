import logo from '../assets/logo.svg';
import { Search } from "@material-ui/icons";
import './Header.css';


function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Maa Sampati Logo" />
            <ul className="header-list">
                <li>PRODUCTS</li>
                <li>CONTACT US</li>
                <li>ABOUT US</li>
            </ul>
            <div className="rightheader">
                <Search />
            </div>
        </header>
    )
}

export default Header
