import { useEffect } from "react";
import "./PizzaVideo.scss";

// function PizzaVideo() {
//   return (
//     <div className="pizzaVideo">
//       <div className="pizzaVideo__video">
//         <video className="pizzaVideo__video__content" autoPlay loop muted>
//           <source src="../../../images/videos/production_id_4266804 (2160p) (1).mp4" />
//           Your browser is not supported!
//         </video>
//       </div>

//       <div className="pizzaVideo__text">
//         <h1 className="pizzaVideo__text__header" data-animation="header">
//           Express Delivery
//         </h1>
//         <p className="pizzaVideo__text__paragraph" data-animation="paragraph">
//           Hot Pizzas, Quick to Your Doorstep!
//         </p>
//       </div>
//     </div>
//   );
// }

function PizzaVideo() {
  useEffect(() => {
    const videoLocation = document.querySelector(".pizzaVideo__video__content");

    const videoSource = (element, src) => {
      if (window.innerWidth > 768) {
        const source = document.createElement("source");
        source.src = src;
        element.appendChild(source);
      }
    };

    videoSource(
      videoLocation,
      "../../../images/videos/production_id_4266804 (2160p) (1).mp4"
    );
  }, []);

  return (
    <div className="pizzaVideo">
      <div className="pizzaVideo__video">
        <video className="pizzaVideo__video__content" autoPlay loop muted>
          Your browser is not supported!
        </video>
      </div>

      <div className="pizzaVideo__text">
        <h1 className="pizzaVideo__text__header" data-animation="header">
          Express Delivery
        </h1>
        <p className="pizzaVideo__text__paragraph" data-animation="paragraph">
          Hot Pizzas, Quick to Your Doorstep!
        </p>
      </div>
    </div>
  );
}

export default PizzaVideo;
