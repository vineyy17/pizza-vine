import { useEffect } from "react";
import "./Footer.scss";
import { Form } from "react-router-dom";

function Footer() {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/7886785/pexels-photo-7886785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;

    img.onload = () => {
      console.log("Background image footer loaded successfully");

      const footer = document.querySelector(".footer");
      footer.style.backgroundImage = `url(${backgroundImageUrl})`;
    };

    img.onerror = () => {
      console.log("Error loading background image footer");
    };
  }, []);

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
