import "./LogoSlider.scss";

import { useEffect } from "react";

function LogoSlider({ companyContents }) {
  useEffect(() => {
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

    // const handleMouseEnter = () => {
    //   cancelAnimationFrame(animationFrameId);
    // };

    // const handleMouseLeave = () => {
    //   animationFrameId = requestAnimationFrame(animateScroll);
    // };

    // container.addEventListener("mouseenter", handleMouseEnter);
    // container.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      //   container.removeEventListener("mouseenter", handleMouseEnter);
      //   container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="logos">
      <div className="logos__slide">
        {companyContents?.map((company, i) => (
          <div key={i} className="logos__item">
            <img
              className="logos__item__image"
              src={company.attributes.logoSrc}
              alt={company.attributes.name}
            />
          </div>
        ))}
        {companyContents?.map((company, i) => (
          <div key={`duplicate-${i}`} className="logos__item">
            <img
              className="logos__item__image"
              src={company.attributes.logoSrc}
              alt={company.attributes.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogoSlider;
