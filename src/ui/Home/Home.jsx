import Hero from "./Hero";
import PizzaMoment from "./PizzaMoment";
import PizzaOutro from "./PizzaOutro";
import PizzaIntro from "./pizzaIntro";

function Home() {
  return (
    <div>
      <Hero />
      <PizzaIntro />
      <PizzaMoment />
      <PizzaOutro />
    </div>
  );
}

export default Home;
