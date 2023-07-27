import "./PizzaMoment.scss";
import { useEffect } from "react";

function PizzaMoment() {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/7886594/pexels-photo-7886594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;

    img.onload = () => {
      console.log("Background image moments loaded successfully");

      const moment = document.querySelector(".moment");
      moment.style.backgroundImage = `url(${backgroundImageUrl})`;
    };

    img.onerror = () => {
      console.log("Error loading background image moments");
    };
  }, []);

  return (
    <div className="moment">
      <div className="pizza__moment">
        <h1 className="pizza__moment__header" data-animation="header">
          Embrace the Moment
        </h1>
        <p className="pizza__moment__paragraph" data-animation="paragraph">
          So much to savor, share, and cherish.
        </p>
      </div>
    </div>
  );
}

export default PizzaMoment;
