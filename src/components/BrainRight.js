import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { Wireframe } from "@react-three/drei";

export function BrainRight(props) {
  const group = useRef();
  const mesh = useRef();

  // Define the rotation speed in radians per frame render
  const rotationSpeed = 0.005;

  // Use the useFrame hook to update the rotation of the mesh on each frame render
  useFrame(() => {
    if (mesh.current) {
      // Update the rotation of the mesh using the rotationSpeed
      mesh.current.rotation.y += rotationSpeed;
    }
  });

  // Load the glTF model
  const { nodes, materials, animations } = useGLTF("/brainRight.gltf");
  const { actions } = useAnimations(animations, group);
  
  // Increase the size of the object by adjusting the scale property
  const scale = 8; // Increase the scale to make the object larger


  return (
    <group ref={group} {...props} dispose={null} scale={[scale, scale, scale]}>
      <group name="exporting_layers">
        {/* Render the wireframe representation */}
        <Wireframe
          ref={mesh}
          geometry={nodes.Brain_Part_04002.geometry}
          simplify={true} // Remove some edges from wireframes  
          fillOpacity={0} // Opacity of the inner fill
          stroke={"#fff"} // Color of the stroke
          strokeOpacity={2} // Opacity of the stroke
          thickness={0.1} // Thinkness of the lines
          squeeze={true} // Narrow the centers of each line segment
          squeezeMin={0.01} // Smallest width to squueze to
          squeezeMax={0.1} // Largest width to squeeze from
          scale={[1, 1, 1]} // Set the scale of the wireframe representation

        />

        {/* Render the solid 3D object */}
        <mesh
          visible={false} // Hide the solid mesh to show only wireframe
          name="Brain_Part_04002"
          
          geometry={nodes.Brain_Part_04002.geometry}
          material={materials.Material}
          // position={[3.141, 0.248, -1.442]}
          rotation={[-1.31, -1.557, 1.832]}
          scale={[1, 1, 1]} // Set the scale of the solid mesh (you can adjust this value if needed)

          
        />
      </group>
    </group>
  );
}

useGLTF.preload("/brainRight.gltf");
