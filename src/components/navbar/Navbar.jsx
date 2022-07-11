import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav nav">
          <Link to="/">
            <div className="nav__logo logo">HotelReact.</div>
          </Link>
          <ul className="nav__list">
            <li className="nav__item">
              <button type="button" className="nav__button btn">
                Register
              </button>
            </li>
            <li className="nav__item">
              <button type="button" className="nav__button btn">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
