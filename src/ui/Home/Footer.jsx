import { Form } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import "./Footer.scss";
import useBackgroundImage from "../../hooks/useBackgroundImage";
import Button from "../Button/Button";

function Footer() {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/7886785/pexels-photo-7886785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  useBackgroundImage(backgroundImageUrl, "footer");

  return (
    <div className="footer" id="footer-section">
      <div className="footer__header">
        <h1 className="footer__header__text" data-animation="header">
          GRAB PIZZA PERKS- SIGN UP FOR OFFERS & UPDATES
        </h1>
      </div>

      <Form className="footer__form">
        <input
          className="footer__form__input"
          type="text"
          placeholder="full name"
          required
        />

        <input
          className="footer__form__input"
          type="email"
          placeholder="email address"
          required
        />

        <Button type="footer">Sign up</Button>
      </Form>

      <div className="footer__links">
        <div className="footer__links__social">
          <div className="footer__links__socials">
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>

          <p>PRIVACY POLICY</p>
        </div>

        <div className="footer__links__name">
          <span>&copy; PIZZA VINE 2023</span> <span id="dash">|</span>{" "}
          <span>DESIGNED AND DEVELOPED BY VINEY</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
