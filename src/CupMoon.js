import React, { useRef, useEffect, useLayoutEffect } from "react";

import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame, useThree } from "react-three-fiber";

export function CupMoon(props) {
  const { nodes, materials } = useGLTF("moon.gltf");
  const mesh = useRef();

  gsap.registerPlugin(ScrollTrigger);

  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  useLayoutEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".page1-cupMoon",
        start: "top center",
        end: "bottom+=500 center",

        markers: true,
        scrub: true,
        delay: 2000,

        onUpdate: (self) => {
          let progress = self.progress;
          let decProgress = 1 - self.progress;
          // console.log(decProgress);

          // if (!self.isActive) {
          //   // If scrolling ends (scrollTrigger is deactivated), animate the text downwards
          //   gsap.to(".heading-p1-container", {
          //     y: 100,
          //     opacity: 0,
          //     duration: 1,
          //   });
          // }
          // Example: Change the background color based on scroll progress
          if (progress > 0 && progress < 1) {
            document.getElementById("head").style.visibility = "visible";
            document.getElementById("model-1").style.opacity =
              (decProgress * 1) / 2;
          } else if (progress === 1) {
            // document.getElementById("fullmoon").style.position = "fixed";
            document.getElementById("head").style.visibility = "hidden";
          } else if (progress <= 0.5) {
            document.getElementById("fullmoon").style.position = "relative";
          } else if (!progress === 1) {
            document.getElementById("head").style.visibility = "visible";
          }
        },
      },
    });
    // .fromTo(
    //   ".heading-p1-container",
    //   { y: -800 },
    //   { y: 500, duration: 1, end: "bottom+=2000 center" }
    // );
  }, []);

  //   // gsap.to(camera.position, {x:1, y:0.5})
  //   gsap.to(mesh.current.position, {
  //     // y: -2, // New position when the scroll reaches 1
  //     duration: 1, // Animation duration
  //     ease: "power2.out", // Easing function
  //     scrollTrigger: {
  //       trigger: ".page1-cupMoon",
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: true,
  //       onUpdate: (self) => {

  //         let progress = self.progress;
  //         let decProgress = 1 - self.progress;
  //         console.log(decProgress);
  //         // Example: Change the background color based on scroll progress
  //         if (progress > 0 && progress < 1) {
  //           document.getElementById("model-1").style.opacity = decProgress;
  //         } else if (progress === 1) {
  //           document.getElementById("fullmoon").style.position = "fixed";
  //           // document.getElementById("model-1").style.opacity = 0;
  //         } else if (progress < 1) {
  //           document.getElementById("fullmoon").style.position = "relative";
  //         }
  //       },
  //     },
  //   });
  // }, []);

  // Define the rotation speed in radians per frame render
  const rotationSpeed = 0.001;

  // Use the useFrame hook to update the rotation of the mesh on each frame render
  useFrame(() => {
    if (mesh.current) {
      // Update the rotation of the mesh using the rotationSpeed
      mesh.current.rotation.x -= rotationSpeed;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
        rotation={[-Math.PI, 0, -Math.PI]}
        position={[0, 2, 0]} // Initial position
      />
    </group>
  );
}

useGLTF.preload("moon.gltf");
