import "./Header.scss";

function Header() {
  return (
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
  );
}

export default Header;
