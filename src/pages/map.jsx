import "../output.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import Astronaut from "../components/models/Astronaut";
import { Suspense } from "react";
import * as THREE from "three";

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    //@ts-ignore
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      //@ts-ignore
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    //@ts-ignore
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[32, 32]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

function Map() {
  return (
    <main>
      <div
        id="canvas-container"
        className="map-window flex justify-center items-center flex-1 flex-col"
      >
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <directionalLight color="hotpink" position={[5, 10, 100]} />
            <OrbitControls />
            <Stars />
            <Astronaut />
            <Physics>
              <Box />
              <Plane />
            </Physics>
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
}

export default Map;
