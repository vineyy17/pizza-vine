function slide() {
  const container = document.querySelector(".logos");
  const slide = document.querySelector(".logos__slide");

  let animationFrameId = null;
  let scrollAmount = 2;

  const animateScroll = () => {
    container.scrollLeft += scrollAmount;

    if (container.scrollLeft >= slide.scrollWidth / 2) {
      container.scrollLeft -= slide.scrollWidth / 2;
    }

    animationFrameId = requestAnimationFrame(animateScroll);
  };

  const handleMouseEnter = () => {
    cancelAnimationFrame(animationFrameId);
  };

  const handleMouseLeave = () => {
    animationFrameId = requestAnimationFrame(animateScroll);
  };

  container.addEventListener("mouseenter", handleMouseEnter);
  container.addEventListener("mouseleave", handleMouseLeave);

  animationFrameId = requestAnimationFrame(animateScroll);

  return () => {
    cancelAnimationFrame(animationFrameId);
    container.removeEventListener("mouseenter", handleMouseEnter);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
}

export default slide;
