// import "../Button/Button.scss";
import "../../styles/shared/_button.scss";

function Button({ children, type }) {
  return (
    <button className={`c-button c-button--${type}`}>
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
