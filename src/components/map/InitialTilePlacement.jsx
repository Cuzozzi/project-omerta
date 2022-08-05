import axios from "axios";
import MapTile from "./PrimaryMapTile";
import { useState, useEffect } from "react";

function InitialTilePlacement() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const asyncCall = async () => {
      const res = await axios.get("http://localhost:5433/map/all-tiles");
      console.log(res.data);
      setResult(res.data);
    };
    asyncCall();
  }, []);

  //   for (let i = 0; i < result.data.length; i++)
  //     return (
  //       <MapTile
  //         position={[result.data[i].x, result.data[i].y, result.data[i].z]}
  //       />
  //     );

  return result.map((tile, index) => (
    <MapTile key={index} position={[tile.x, tile.y, tile.z]} />
  ));
}

export default InitialTilePlacement;
