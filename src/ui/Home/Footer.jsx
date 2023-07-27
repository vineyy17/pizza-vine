import { Form } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import "./Footer.scss";
import useBackgroundImage from "../../hooks/useBackgroundImage";

function Footer() {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/7886785/pexels-photo-7886785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  useBackgroundImage(backgroundImageUrl, "footer");

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

      <div className="footer__links">
        <div className="footer__links__socials">
          <FaInstagram />
          <FaFacebook />
          <FaLinkedin />
          <p>PRIVACY POLICY</p>
        </div>

        <div className="footer__links__name">
          <span>&copy; PIZZA VINE 2023</span> |{" "}
          <span>DESIGNED AND DEVELOPED BY VINEY</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
