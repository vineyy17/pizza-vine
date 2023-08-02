import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import "./Header.scss";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../../features/cart/cartSlice";
import SearchOrder from "../../features/order/SearchOrder";

function Header() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className="header">
      <nav className="nav">
        <div className="nav__about">
          <SLink to="about" smooth={true}>
            <Link to="/">About</Link>
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
            <span>({totalCartQuantity ? totalCartQuantity : 0})</span>
          </Link>
        </div>

        <SLink to="footer-section" smooth={true}>
          <Button type="nav" to="/">
            Contact us
          </Button>
        </SLink>
      </nav>
    </div>
  );
}

export default Header;
