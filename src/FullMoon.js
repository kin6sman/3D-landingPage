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
  let light = useThree((state) => state);

  // console.log(light);
  // useLayoutEffect(
  //   () =>
  //     gsap.to(mesh.current, {

  //       // y: -2, // New position when the scroll reaches 1
  //       duration: 2, // Animation duration
  //       ease: "Power2.easeInOut", // Easing function
  //       scrollTrigger: {
  //         trigger: ".fullmoon",
  //         start: "top center",
  //         end: "bottom center",
  //         scrub: true,
  //         onUpdate: (self) => {
  //           let progress = self.progress;
  //           let decProgress = 1 - self.progress;
  //           // console.log(decProgress);
  //           if(progress === 1){
  //             scene.children.AmbientLight = {x: 1, y: 1, z: 100}
  //           }
  //         },
  //       },
  //     }),

  //   []
  // );

  useLayoutEffect(() => {
    // gsap.to(camera.position, {x:1, y:0.5})
    // gsap.to(scene.rotation, { x: 2 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#fullmoon",
          start: "top-=800 top",
          end: "bottom+=500 bottom",
          ease: "Power2.easeIn",
          markers: true,
          scrub: true,
          delay: 2000,
        },
      })
      // .fromTo(camera, { fov: 55 }, { fov: 60 })
      .fromTo(
        props.fullMoonAmbientLightRef.current,
        { intensity: 10 },
        { intensity: 0.01 }
      )
      // .to(props.fullMoonAmbientLightRef.current, { intensity: 0.01 })
      .to(scene.rotation, { y: 2 });
  }, []);

  // Define the rotation speed in radians per frame render
  const rotationSpeed = 0.001;

  // Use the useFrame hook to update the rotation of the mesh on each frame render
  // useFrame(() => {
  //   if (mesh.current) {
  //     // Update the rotation of the mesh using the rotationSpeed
  //     mesh.current.rotation.x += rotationSpeed;
  //   }
  // });

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
