import "../output.css";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import PrimaryMapTile from "../components/map/PrimaryMapTile";
import Scene from "../components/map/Scene";
import { StartTileGeneration } from "../components/map/TileGenerationHelpers";

function Map() {
  return (
    <main>
      <div
        id="canvas-container"
        className="map-window flex justify-center items-center flex-1 flex-col"
      >
        <Canvas>
          <Physics>
            <Scene />
            <PrimaryMapTile />
            <StartTileGeneration />
            <Stars />
          </Physics>
        </Canvas>
      </div>
    </main>
  );
}
export default Map;
