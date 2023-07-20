import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function FullMoon(props) {
  const { nodes, materials } = useGLTF("moon.gltf");
  gsap.registerPlugin(ScrollTrigger);

  const mesh = useRef();
  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  useLayoutEffect(() => {
    // gsap.to(camera.position, {x:1, y:0.5})
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#fullmoon",
          start: "top top",
          end: "bottom+=500 bottom",
          markers: true,
          scrub: true,
          delay: 2000,
        },
      })
      .fromTo(camera.position, { x: -8, y: 10, z: 15 }, { y: 4 })
      .to(scene.rotation, { x: 2 });
  }, []);

  // Define the rotation speed in radians per frame render
  const rotationSpeed = 0.001;

  // Use the useFrame hook to update the rotation of the mesh on each frame render
  useFrame(() => {
    if (mesh.current) {
      // Update the rotation of the mesh using the rotationSpeed
      mesh.current.rotation.x += rotationSpeed;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        // ref={mesh}
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
        rotation={[-Math.PI, 0, -Math.PI]}
        position={[0, 2, 0]} // Initial position
      />
    </group>
  );
}

useGLTF.preload("moon.gltf");
