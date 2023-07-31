import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import "./Header.scss";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <div className="nav__about">
          <SLink to="about" smooth={true}>
            About
          </SLink>
        </div>

        <div className="nav__order">
          <Link to="/menu">Order</Link>
        </div>

        <div className="nav__brand">
          <Link to="/">
            Pizza <br />
            Vine
          </Link>
        </div>

        <div className="nav__cart">
          <Link to="/cart">
            <span>Cart</span>
            <span>(2)</span>
          </Link>
        </div>

        <SLink to="footer-section" smooth={true}>
          <Button type="nav">Contact us</Button>
        </SLink>
      </nav>
    </div>
  );
}

export default Header;
