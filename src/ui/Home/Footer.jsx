import "./Footer.scss";
import { Form } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__header">
        <h1 className="footer__header__text" data-animation="header">
          GRAB PIZZA PERKS- SIGN UP FOR OFFERS & UPDATES
        </h1>
      </div>

      <Form className="footer__form">
        <div className="footer__form__div">
          <input
            className="footer__form__input"
            type="text"
            placeholder="full name"
            required
          />
        </div>

        <div className="footer__form__div">
          <input
            className="footer__form__input"
            type="email"
            placeholder="email address"
            required
          />
        </div>

        <button className="c-button c-button--footer">
          <span className="c-link">
            <span className="c-link__inner">
              <span>Sign up</span>
              <span className="c-link__animated">Sign up</span>
            </span>
          </span>
        </button>
      </Form>
    </div>
  );
}

export default Footer;
