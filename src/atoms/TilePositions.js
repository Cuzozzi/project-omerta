import { atom } from "recoil";
import axios from "axios";

async function GetTilePositions() {
  let token = String(localStorage.getItem("token"));
  let i = false;
  console.log(token);
  axios({
    method: "get",
    url: "http://localhost:5433/api/get_tile_positions",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        i = true;
      }
    })
    .catch(function (err) {
      console.log(err);
      if (err.response.status === 401) {
        i = false;
      }
    });
  if (authValue) {
    return true;
  } else {
    return false;
  }
}

export const TilePositions = atom({
  key: "tilePositions", // unique ID (with respect to other atoms/selectors)
  default: [0, 0, 0], // default value (aka initial value)
});
