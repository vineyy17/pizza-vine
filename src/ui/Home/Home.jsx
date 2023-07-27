import Footer from "./Footer";
import Hero from "./Hero";
import PizzaMoment from "./PizzaMoment";
import PizzaVideo from "./PizzaVideo";
import PizzaIntro from "./pizzaIntro";
import PizzaMiddle from "./PizzaMiddle";
import PizzaOutro from "./PizzaOutro";
import Sponsor from "./Sponsor";

function Home() {
  return (
    <div>
      <Hero />
      <PizzaIntro />
      <PizzaMoment />
      <PizzaMiddle />
      <PizzaVideo />
      {/* <Sponsor /> */}
      <Footer />
    </div>
  );
}

export default Home;
