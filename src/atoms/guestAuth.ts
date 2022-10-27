import { atom } from "recoil";

export const guestAuth = atom({
  key: "guestAuth", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
