import "../output.css";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Astronaut from "../components/models/Astronaut";
import { Suspense } from "react";
import PrimaryMapTile from "../components/map/PrimaryMapTile";
import MapTile from "../components/map/MapTile";
import axios from "axios";
import { useState, useEffect } from "react";
import MapSphere from "../components/map/MapSphere";
import MapCamera from "../components/map/MapCamera";

function InitialTilePlacement() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const asyncCall = async () => {
      const res = await axios.get("http://localhost:5433/map/all-tiles");
      setResult(res.data);
    };
    asyncCall();
  }, []);

  return result.map((tile, index) => (
    <MapTile key={index} position={[tile.x, tile.y, tile.z]} />
  ));
}

function Map() {
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
            {InitialTilePlacement()}
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
