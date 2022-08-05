import axios from "axios";
import MapTile from "./PrimaryMapTile";

async function TilePower() {
  let tilepower = 0;
  await axios({
    method: "get",
    url: "http://localhost:5433/map/get_tilepower",
  })
    .then(function (response) {
      if (response.status === 200) {
        tilepower = response.data[0].tilepower;
        console.log(response.data[0].tilepower);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  return tilepower;
}

async function TotalTiles() {
  let totaltiles = 0;
  await axios({
    method: "get",
    url: "http://localhost:5433/map/total_tiles",
  })
    .then(function (response) {
      if (response.status === 200) {
        totaltiles = response.data[0].count;
        console.log(response.data[0].count);
      }
    })
    .catch(function (err) {
      console.log(err);
      if (err.response.status === 401) {
      }
    });
  return totaltiles;
}

async function TileGeneration() {
  let tilepower = await TilePower();
  let totaltiles = await TotalTiles();
  let lastTileX = 0;
  let lastTileY = 0;
  //let difference = tilepower - totaltiles;
  console.log(tilepower, totaltiles);
  if (totaltiles < tilepower) {
    console.log("wow");
    axios({
      method: "post",
      url: "http://localhost:5433/map/tile-up",
      data: {
        x: lastTileX,
        y: lastTileY,
      },
    }).then(function (response) {
      if (response.status === 200) {
        console.log(response);
      } else {
        console.log("oof");
      }
    });
  }
}

export default TileGeneration;
