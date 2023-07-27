import { useEffect } from "react";

const useBackgroundImage = (backgroundImageUrl, className) => {
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;

    img.onload = () => {
      const element = document.querySelector(`.${className}`);
      element.style.backgroundImage = `url(${backgroundImageUrl})`;
    };

    return () => {
      img.onload = null;
    };
  }, [backgroundImageUrl, className]);
};

export default useBackgroundImage;
