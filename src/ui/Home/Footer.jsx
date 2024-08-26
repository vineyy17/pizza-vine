import { Form } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { useState } from 'react';
import useBackgroundImage from '../../hooks/useBackgroundImage';
import Button from '../Button/Button';
import './Footer.scss';

function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const backgroundImageUrl =
    'https://images.pexels.com/photos/7886785/pexels-photo-7886785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  useBackgroundImage(backgroundImageUrl, 'footer');

  return (
    <div className="footer" id="footer-section">
      <div className="footer__header">
        <h1 className="footer__header__text" data-animation="header">
          GRAB PIZZA PERKS- SIGN UP FOR OFFERS & UPDATES
        </h1>
      </div>

      {!submitted ? (
        <Form className="footer__form" onSubmit={handleSubmit}>
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
      ) : (
        <div className="footer__feedback">
          <p className="footer__feedback__text">
            Thank you! We will get in touch with you shortly.
          </p>
        </div>
      )}

      <div className="footer__links">
        <div className="footer__links__social">
          <div className="footer__links__socials">
            <a
              href="https://twitter.com/The_vine__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/viney17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/viney._"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <p>PRIVACY POLICY</p>
        </div>

        <div className="footer__links__name">
          <span>&copy; PIZZA VINE 2024</span>
          <span id="dash"> |</span>{' '}
          <a
            href="https://twitter.com/The_vine__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>MADE WITH ❤️ BY VINEY</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
