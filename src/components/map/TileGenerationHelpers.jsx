import axios from "axios";
import { useState, useEffect } from "react";
import MapTile from "./MapTile";

export async function TilePower() {
  let tilepower = 0;
  await axios({
    method: "get",
    url: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/map/tile-power`,
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
    url: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/map/count-tiles`,
  })
    .then(function (response) {
      if (response.status === 200) {
        totaltiles = response.data[0].count;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  return totaltiles;
}

export async function allTiles() {
  let allTiles = [];
  await axios({
    method: "get",
    url: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/map/all-tiles`,
  })
    .then(function (response) {
      allTiles = response.data;
    })
    .catch(function (err) {
      console.log(err);
    });
  return allTiles;
}

export async function TileGeneration() {
  let tilePower = await TilePower();
  let countTiles = await TotalTiles();
  let renderArray = [];
  let allArray = await allTiles();

  console.log(allArray);
  console.log(tilePower, countTiles);

  if (Number(countTiles) < Number(tilePower)) {
    await axios({
      method: "put",
      url: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/map/test-generation`,
      data: {
        tilepower: tilePower,
        counttiles: countTiles,
      },
    })
      .then(function (response) {
        console.log(response);
        renderArray = response.data;
        renderArray = renderArray.concat(allArray);
        console.log(renderArray);
      })
      .catch(function (err) {
        console.log(err);
      });
  } else {
    renderArray = allArray;
  }
  return renderArray;
}

export function StartTileGeneration() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const asyncCall = async () => {
      const data = await TileGeneration();
      setResult(data);
    };
    asyncCall();
  }, []);

  if (result) {
    return result.map((tile, index) => (
      <MapTile key={index} position={[tile.x, 0, tile.z]} />
    ));
  } else {
    return;
  }
}
