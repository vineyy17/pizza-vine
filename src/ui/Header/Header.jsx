import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import "./Header.scss";

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
          <button className="nav__button c-button">
            <span className="c-link">
              <span className="c-link__inner">
                <span>Contact us</span>
                <span className="c-link__animated">Contact us</span>
              </span>
            </span>
          </button>
        </SLink>
      </nav>
    </div>
  );
}

export default Header;
