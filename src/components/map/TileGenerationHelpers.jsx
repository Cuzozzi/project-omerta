import axios from "axios";
import { useState, useEffect } from "react";
import MapTile from "./MapTile";

export async function TilePower() {
  let tilepower = 0;
  await axios({
    method: "get",
    url: "http://localhost:5433/map/get_tilepower",
  })
    .then(function (response) {
      if (response.status === 200) {
        tilepower = response.data[0].tilepower;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  return tilepower;
}

export async function TotalTiles() {
  let totaltiles = 0;
  await axios({
    method: "get",
    url: "http://localhost:5433/map/total_tiles",
  })
    .then(function (response) {
      if (response.status === 200) {
        totaltiles = response.data[0].count;
      }
    })
    .catch(function (err) {
      console.log(err);
      if (err.response.status === 401) {
      }
    });
  return totaltiles;
}

export function InitialTilePlacement() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const asyncCall = async () => {
      const res = await axios.get("http://localhost:5433/map/all-tiles");
      console.log(res);
      setResult(res.data);
      console.log(result);
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

export function TileGenerationEnd() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const asyncCall = async () => {
      setResult(await TileGenerationStart());
      console.log(result);
    };
    asyncCall();
  }, []);
  return result.map((tile, index) => (
    <MapTile key={index} position={[tile.x, 0, tile.z]} />
  ));
}
