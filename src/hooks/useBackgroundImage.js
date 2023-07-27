import { useEffect } from "react";

const useBackgroundImage = (backgroundImageUrl, className) => {
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;

    img.onload = () => {
      const element = document.querySelector(`.${className}`);
      element.style.backgroundImage = `url(${backgroundImageUrl})`;
    };

    img.onerror = () => {
      console.log(`Error loading background image for class: ${className}`);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [backgroundImageUrl, className]);
};

export default useBackgroundImage;
