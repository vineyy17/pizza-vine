import Footer from "./Footer";
import Hero from "./Hero";
import PizzaMoment from "./PizzaMoment";
import PizzaVideo from "./PizzaVideo";
import PizzaIntro from "./PizzaIntro";
import PizzaOutro from "./PizzaOutro";

function Home() {
  return (
    <div>
      <Hero />
      <PizzaIntro id="about" />
      <PizzaMoment />
      <PizzaOutro />
      <PizzaVideo />
      <Footer />
    </div>
  );
}

export default Home;
