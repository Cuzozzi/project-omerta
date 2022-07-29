import axios from "axios";
import MapTile from "./MapTile";

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
  //let difference = tilepower - totaltiles;
  console.log(tilepower, totaltiles);
  if (totaltiles < tilepower) {
    console.log("wow");
    axios({
      method: "get",
      url: "http://localhost:5433/map/what_tile_next",
    }).then(function (response) {
      if (response.status === 200) {
        let x = response.data[0].min;
        let y = response.data[1].min;
        return <MapTile position={[x, y, 0]} />;
      } else {
        console.log("oof");
      }
    });
  }
}

export default TileGeneration;
