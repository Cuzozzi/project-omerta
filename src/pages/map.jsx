import "../output.css";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Astronaut from "../components/models/Astronaut";
import { Suspense } from "react";
import PrimaryMapTile from "../components/map/PrimaryMapTile";
import MapTile from "../components/map/MapTile";
import MapSphere from "../components/map/MapSphere";
import MapCamera from "../components/map/MapCamera";
import InitialTilePlacement from "../components/map/InitialTilePlacement";

function Map() {
  console.log("shit");
  return (
    <main>
      <div
        id="canvas-container"
        className="map-window flex justify-center items-center flex-1 flex-col"
      >
        <Canvas>
          <Physics>
            <PrimaryMapTile />
            <MapTile position={[32, 0, 0]} />
            <InitialTilePlacement />
          </Physics>
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <directionalLight color="hotpink" position={[5, 10, 100]} />
            <Stars />
            <Astronaut />
            <MapSphere />
            <MapCamera />
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
}

export default Map;