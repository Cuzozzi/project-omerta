import { atom } from "recoil";

export const SpherePosition = atom({
  key: "spherePosition", // unique ID (with respect to other atoms/selectors)
  default: [0, 0, 0], // default value (aka initial value)
});
