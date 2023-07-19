import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function HalfMoon(props) {
  const group = useRef();
  const mesh = useRef();

  // Define the rotation speed in radians per frame render
  const rotationSpeed = 0.005;

  // Use the useFrame hook to update the rotation of the mesh on each frame render
  useFrame(() => {
    if (mesh.current) {
      // Update the rotation of the mesh using the rotationSpeed
      mesh.current.rotation.y += rotationSpeed;
    //   mesh.current.rotation.y += rotationSpeed;
    //   mesh.current.rotation.z += rotationSpeed;
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
