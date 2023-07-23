import { useGLTF, useAnimations } from "@react-three/drei";

import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HalfMoon(props) {
  gsap.registerPlugin(ScrollTrigger);
  const group = useRef();
  const mesh = useRef();
  const rotate2ModelsRef = props.rotate2ModelsRef;

  // scrolling effect
  useLayoutEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-3",
        start: "top+=100 top",
        end: "bottom+=1000 bottom",
        pin: true,
        markers: true,
        scrub: true,
        delay: 2000,
        onEnter: () => {
          console.log("Animation started");
          document.getElementById("model-3").style.visibility = "visible";
        },
        onEnterBack: () => {
          document.getElementById("model-3").style.visibility = "visible";
        },
        onLeave: () => {
          document.getElementById("model-3").style.visibility = "hidden";
          // document.getElementById("page2").style.position = "fixed";
        },

        onLeaveBack: () => {
          document.getElementById("model-3").style.visibility = "hidden";
        },
      },
    });
  });

  const rotationSpeed = 0.005;
  useFrame(() => {
    if (rotate2ModelsRef.current) {
      rotate2ModelsRef.current.rotation.y += rotationSpeed;
    }
  });
  const { nodes, materials, animations } = useGLTF("/moonHalfCut.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="exporting_layers">
        <mesh
          // ref={mesh}

          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Default OBJ.005"]}
          rotation={[0, 0.003, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/moonHalfCut.gltf");
