import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeartModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/heartShape.gltf");
  const { actions } = useAnimations(animations, group);

  gsap.registerPlugin(ScrollTrigger);

  const mesh = useRef();
  const rotate2ModelsRef = props.rotate2ModelsRef;

  // Set initial scale to 0 to hide the model
  useEffect(() => {
    gsap.set(mesh.current.scale, { x: 0, y: 0, z: 0 });
  }, []);

  // scrolling effect
  useLayoutEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#page-3",
        start: "top top",
        end: "bottom+=1000 bottom",
        pin: true,
        markers: true,
        scrub: true,
        delay: 2000,
        onEnter: () => {
          // Pop-in effect on scroll enter
          gsap.to(mesh.current.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.3,
            ease: "power4.in",
            repeat: -1, // Repeat the animation infinitely
            yoyo: false, // Make the animation reverse back and forth like a bounce
          });
        },
        onLeave: () => {
          // Pop-out effect on scroll leave
          gsap.to(mesh.current.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.2,
            ease: "power4.in",
            // repeat: -1, // Repeat the animation infinitely
            yoyo: false, // Make the animation reverse back and forth like a bounce
          });
        },
      },
    });
  });

  //   const rotationSpeed = 0.005;
  //   useFrame(() => {
  //     if (mesh.current) {
  //       mesh.current.rotation.y += rotationSpeed;
  //     }
  //   });

  return (
    <group {...props} dispose={null}>
      <group name="exporting_layers">
        <mesh
          ref={mesh}
          name="Curve001"
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={materials["Material.003"]}
          position={[10, 10, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/heartShape.gltf");
