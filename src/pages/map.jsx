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
import { TotalTiles, TilePower } from "../components/map/TileGenerationHelpers";

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

async function TileGenerationStart() {
  let tilepower = await TilePower();
  let totaltiles = await TotalTiles();
  let renderArray = [];
  if (totaltiles < tilepower) {
    for (let i = totaltiles; i < tilepower; i++) {
      console.log("tilepower", tilepower);
      console.log("totaltiles", totaltiles);
      await axios({
        method: "get",
        url: "http://localhost:5433/map/tile-generation",
      }).then(function (response) {
        if (response.status === 200) {
          //console.log(response.data);
          renderArray.push({ x: response.data.x, z: response.data.z });
        } else {
          console.log("oof");
        }
      });
    }
    console.log(renderArray);
    return renderArray;
  }
}

function TileGenerationEnd() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const asyncCall = async () => {
      setResult(await TileGenerationStart());
    };
    asyncCall();
  }, []);
  console.log(result);
  return result.map((tile, index) => (
    <MapTile key={index} position={[tile.x, 0, tile.z]} />
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
            {TileGenerationEnd()}
          </Physics>
          <MapSphere />
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <directionalLight color="hotpink" position={[5, 10, 100]} />
            <Stars />
            <Astronaut />

            <MapCamera />
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
}

export default Map;
