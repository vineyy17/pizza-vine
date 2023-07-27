import Footer from "./Footer";
import Hero from "./Hero";
import PizzaMoment from "./PizzaMoment";
import PizzaVideo from "./PizzaVideo";
import PizzaIntro from "./pizzaIntro";
import PizzaMiddle from "./PizzaMiddle";
import PizzaOutro from "./PizzaOutro";

function Home() {
  return (
    <div>
      <Hero />
      <PizzaIntro />
      <PizzaMoment />
      <PizzaMiddle />
      <PizzaVideo />
      <PizzaOutro />
      <Footer />
    </div>
  );
}

export default Home;
