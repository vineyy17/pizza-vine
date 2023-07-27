import Footer from "./Footer";
import Hero from "./Hero";
import PizzaMoment from "./PizzaMoment";
import PizzaVideo from "./PizzaVideo";
import PizzaIntro from "./pizzaIntro";
import PizzaOutro from "./PizzaOutro";

function Home() {
  return (
    <div>
      <Hero />
      <PizzaIntro />
      <PizzaMoment />
      <PizzaOutro />
      <PizzaVideo />
      <Footer />
    </div>
  );
}

export default Home;
