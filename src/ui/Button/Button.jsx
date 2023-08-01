// import "../Button/Button.scss";
import { Link } from "react-router-dom";
import "../../styles/shared/_button.scss";

function Button({ children, type, disabled, to, onClick }) {
  if (to)
    return (
      <Link className={`c-button c-button--${type}`} to={to}>
        <span className="c-link">
          <span className="c-link__inner">
            <span>{children}</span>
            <span className="c-link__animated">{children}</span>
          </span>
        </span>
      </Link>
    );

  if (onClick)
    return (
      <button
        className={`c-button c-button--${type}`}
        disabled={disabled}
        onClick={onClick}
      >
        <span className="c-link">
          <span className="c-link__inner">
            <span>{children}</span>
            <span className="c-link__animated">{children}</span>
          </span>
        </span>
      </button>
    );

  return (
    <button className={`c-button c-button--${type}`} disabled={disabled}>
      <span className="c-link">
        <span className="c-link__inner">
          <span>{children}</span>
          <span className="c-link__animated">{children}</span>
        </span>
      </span>
    </button>
  );
}

export default Button;
