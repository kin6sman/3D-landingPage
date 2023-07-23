import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page5 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const otherImages = document.querySelectorAll("img:not(#charkha-image)");
    const statsImage = document.getElementById("charkha-image");

    gsap.to(statsImage, {
      rotation: -360,
      duration: 10,
      ease: "linear",
      repeat: -1,
      delay: 2000,
      yoyo: false,
    });

    gsap.to(otherImages, {
      rotation: 360,
      duration: 5,
      ease: "linear",
      repeat: -1,
      yoyo: false,
    });
  }, []);

  return (
    <>
      <img src="stats.svg" alt="test img" id="charkha-image" />
      <img src="creativeNirvana.svg" alt="test img" id="eye-image" />
      <img src="techNirvana.svg" alt="test img" id="tech-image" />
      <img src="marketingNirvana.svg" alt="test img" id="marketing-image" />
    </>
  );
};

export default Page5;
