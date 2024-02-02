import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar_container">
      <Link to="/" draggable="false">
        <img
          className="navbar_logo"
          src="../src/assets/icons/logo_rr_light.svg"
          alt=""
          draggable="false"
        />
      </Link>

      <ul>
        <li>
          <Link to="/" draggable="false">
            News
          </Link>
        </li>
        <li>
          <Link to="/lineup" draggable="false">
            Line Up
          </Link>
        </li>
        <li>
          <Link to="/contactform" draggable="false">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
