import Lenis from "@studio-freight/lenis";

export default function scroll() {
  const lenis = new Lenis({
    lerp: 0.06,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smooth: true,
    smoothTouch: true,
    smoothWheel: true,
    touchMultiplier: 1,
    wheelMultiplier: 1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
