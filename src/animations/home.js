import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scrollEl = document.querySelector("[data-scroll-container]");

gsap.registerPlugin(ScrollTrigger);

export default class Home {
  constructor() {
    this.homeIntro();
  }

  homeIntro() {
    const tl = gsap.timeline();

    gsap.to(scrollEl, {
      autoAlpha: 1,
    });

    tl.from(".nav", {
      duration: 0.5,
      delay: 0.3,
      opacity: 0,
      yPercent: -100,
      ease: "power4.out",
    });
  }
}
