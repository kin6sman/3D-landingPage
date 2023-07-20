import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";

export function CupMoon(props) {
  const { nodes, materials } = useGLTF("moon.gltf");
  const mesh = useRef();

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
