import { Link, useNavigate } from "react-router-dom";
import "./LinkButton.scss";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button
        className="linkButton linkButton__button"
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );

  return (
    <Link to={to} className="linkButton">
      {children}
    </Link>
  );
}

export default LinkButton;
