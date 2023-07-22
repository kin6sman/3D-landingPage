import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { FullMoon } from "./FullMoon";
import { HalfMoon } from "./HalfMoon";
import { BrainRight } from "./BrainRight";
import { CupMoon } from "./CupMoon";
import Page1 from "./pages/Page1";
import { HeartModel } from "./HeartModel";

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();

//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta));
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }

export default function App() {
  const fullMoonAmbientLightRef = useRef();
  const rotate2ModelsRef = useRef();
  const heading = useRef();
  const fullMoonSpotlight = useRef();
  return (
    <>
      <div className="page page1">
        <div className="page1-cupMoon">
          <div className="heading-p1-container" id="head">
            <h1 className="page1-heading" ref={heading}>
              THE ALPHA AGENCY
            </h1>
          </div>
          <Canvas camera={{ position: [0, 4, 10], fov: 50 }} id="model-1">
            <ambientLight intensity={0.1} />
            <spotLight
              position={[0, 0, -100]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <CupMoon position={[0, -5, 6]} heading={heading}></CupMoon>
          </Canvas>
        </div>
      </div>
      {/* <div className="page gap"></div> */}
      <div className="page page2" id="page2">
        <div id="fullmoon">
          <h1 className="p2-heading">ATTAIN DIGITAL NIRVANA</h1>
          <Canvas camera={{ position: [-8, 4, 15], fov: 55 }} id="model-2">
            <ambientLight intensity={0.1} ref={fullMoonAmbientLightRef} />
            <spotLight
              position={[0, 100, -100]}
              angle={0.9}
              penumbra={1}
              intensity={2}
              ref={fullMoonSpotlight}
            />
            <pointLight position={[0, 0, 0]} />

            <FullMoon
              fullMoonSpotlight={fullMoonSpotlight}
              fullMoonAmbientLightRef={fullMoonAmbientLightRef}
            ></FullMoon>
          </Canvas>
        </div>
      </div>

      <div className="page page3" id="halfMoonBrain">
        <Canvas camera={{ position: [1, 4, 15] }} id="model-3">
          <ambientLight intensity={1} />
          <group ref={rotate2ModelsRef}>
            {/* HalfMoon */}
            <HalfMoon rotate2ModelsRef={rotate2ModelsRef} />

            {/* BrainRight */}
            <BrainRight position={[3, 0, -1]} />
          </group>
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
      <div className="page gap"></div>
      <div className="body-container">
        <div className="page page3" id="page-3">
          <h1>Testing</h1>
          <Canvas camera={{ position: [-10, -10, 0], fov: 10 }} id="model-4">
            <ambientLight intensity={1} />
            <spotLight
              position={[0, 0, -100]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <HeartModel />
            {/* <OrbitControls /> */}
          </Canvas>
        </div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
      </div>
    </>
  );
}
