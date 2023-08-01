import { useRouteError } from "react-router-dom";
import LinkButton from "../LinkButton/LinkButton";
import "./Error.scss";

function Error() {
  const error = useRouteError();

  return (
    <div className="error">
      <h1 className="error__heading">Something went wrong 😢</h1>
      <p className="error__message">{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
