import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'
import { FullMoon } from './FullMoon'
import { HalfMoon } from './HalfMoon'
import { BrainRight } from './BrainRight'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 4, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
     
      <FullMoon position={[0, -5, 3]}></FullMoon>
      
    </Canvas>
    {/* <h1>heloo</h1> */}
    <Canvas camera={{ position: [-8, 4, 15] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      <FullMoon></FullMoon>
      
    </Canvas>
    <Canvas camera={{ position: [1, 4, 15] }}>
      <ambientLight intensity={0.5} />
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      {/* <pointLight position={[-10, -10, -10]} /> */}
      
      <HalfMoon></HalfMoon>
      <BrainRight position={[3, 0, -1]} />
      <OrbitControls />
    </Canvas>


    </>
    
  )
}
