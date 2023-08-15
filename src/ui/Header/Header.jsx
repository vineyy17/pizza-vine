import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../../features/cart/cartSlice";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Header.scss";

function Header() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prevIsNavVisible) => !prevIsNavVisible);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      let resizeTimer;
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <nav className="nav">
        <button
          className="nav__toggle"
          aria-controls="primary-navigation"
          aria-expanded={isNavVisible ? "true" : "false"}
          onClick={toggleNav}
        ></button>

        <ul
          id="primary-navigation"
          className={`navigation ${isNavVisible ? "visible" : ""}`}
        >
          <li onClick={closeNav} className="navigation__home">
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>

          <li className="navigation__about">
            <SLink to="about" smooth={true} onClick={closeNav}>
              <span>About</span>
            </SLink>
          </li>

          <li onClick={closeNav} className="navigation__order">
            <Link to="/menu">
              <span>Order</span>
            </Link>
          </li>

          <li className="navigation__contact">
            <SLink to="footer-section" smooth={true} onClick={closeNav}>
              <span>Contact Us</span>
            </SLink>
          </li>
        </ul>

        <div className="nav__about">
          <SLink to="about" smooth={true}>
            <Link to="/">About</Link>
          </SLink>
        </div>

        <div className="nav__order">
          <Link to="/menu">
            <span>Order</span>
          </Link>
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
            <span>({totalCartQuantity ? totalCartQuantity : 0})</span>
          </Link>
        </div>

        <div className="nav__contact">
          <SLink to="footer-section" smooth={true}>
            <Button type="nav" to="/">
              Contact us
            </Button>
          </SLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
