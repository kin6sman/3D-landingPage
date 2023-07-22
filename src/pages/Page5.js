import React, { useEffect } from "react";
import gsap from "gsap";

const Page5 = () => {
  useEffect(() => {
    // Select the 'stats.svg' image
    const statsImage = document.getElementById("charkha-image");

    // Rotate the 'stats.svg' image 360 degrees in the opposite direction
    gsap.to(statsImage, {
      rotation: -360, // Negative value for opposite direction
      duration: 5,
      ease: "linear",
      repeat: -1, // Repeat the animation infinitely
      yoyo: false, // Make the animation reverse back and forth
    });

    // Rotate the other images (except 'stats.svg') 360 degrees in the original direction
    const otherImages = document.querySelectorAll("img:not(#charkha-image)");
    gsap.to(otherImages, {
      rotation: 360,
      duration: 2,
      // delay: 2000,
      ease: "linear",
      repeat: -1, // Repeat the animation infinitely
      yoyo: false, // Make the animation reverse back and forth
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
