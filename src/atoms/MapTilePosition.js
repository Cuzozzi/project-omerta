import { atom } from "recoil";

export const MapTilePosition = atom({
  key: "tilePosition", // unique ID (with respect to other atoms/selectors)
  default: [0, 0, 0], // default value (aka initial value)
});
