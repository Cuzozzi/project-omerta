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
  //let tilepower = await TilePower();
  let tilepower = 999;
  let totaltiles = await TotalTiles();

  if (totaltiles < tilepower) {
    await axios({
      method: "get",
      url: "http://localhost:5433/map/tile-generation",
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
