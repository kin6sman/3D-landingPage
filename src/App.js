import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { FullMoon } from "./components/FullMoon";
import { HalfMoon } from "./components/HalfMoon";
import { BrainRight } from "./components/BrainRight";
import { CupMoon } from "./components/CupMoon";
import Page5 from "./pages/Page5";
import { HeartModel } from "./components/HeartModel";

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
          <h1 className="p2-heading" id="p2-heading">
            ATTAIN DIGITAL NIRVANA
          </h1>
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

      <div className="page page3">
        <div id="halfMoonBrain">
          <h3 className="h3-halfMoon">
            We are a mix of right brain - left brain
          </h3>
          <Canvas camera={{ position: [1, 3, 15], fov: 70 }} id="model-3">
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
      </div>
      <div className="page gap"></div>
      <div className="body-container">
        <div className="page page4" id="page-4">
          <div className="heartContainer">
            <p id="p4-para1">Every brief for us is an opportunity to</p>
            <p id="p4-para2">
              Declutter Brand communication Decipher Target Audience
            </p>
            <p id="p4-para3">and deliver</p>
            <h1 id="p4-h1">“BRAND LOVE”</h1>
            <Canvas camera={{ position: [-10, -10, 0], fov: 5 }} id="model-4">
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
        </div>
        {/* <div className="page gap"></div> */}
        <div className="page page5">
          <div className="image-container">
            <Page5 />
          </div>
        </div>
      </div>
    </>
  );
}
