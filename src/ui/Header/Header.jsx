import { useEffect, useState } from "react";
import "./Header.scss";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setIsVisible(currentScrollPos <= 0 || currentScrollPos < prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className="header"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <nav className="nav">
        <div className="nav__about">
          <span>About</span>
        </div>

        <div className="nav__order">
          <span>Order</span>
        </div>

        <div className="nav__brand">
          <span>
            Pizza <br />
            Vine
          </span>
        </div>

        <div className="nav__cart">
          <span>Cart</span>
          <span>(1)</span>
        </div>

        <button className="nav__button c-button">
          <span className="c-link">
            <span className="c-link__inner">
              <span>Contact us</span>
              <span className="c-link__animated">Contact us</span>
            </span>
          </span>
        </button>
      </nav>
    </div>
  );
}

export default Header;
