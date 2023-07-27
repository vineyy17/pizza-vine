import Hero from "./Hero";
import PizzaMoment from "./PizzaMoment";
import PizzaOutro from "./PizzaOutro";
import PizzaVideo from "./PizzaVideo";
import PizzaIntro from "./pizzaIntro";

function Home() {
  return (
    <div>
      <Hero />
      <PizzaIntro />
      <PizzaMoment />
      <PizzaOutro />
      <PizzaVideo />
    </div>
  );
}

export default Home;
