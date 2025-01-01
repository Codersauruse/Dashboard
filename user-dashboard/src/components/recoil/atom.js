import { atom } from "recoil";

const expandedState = atom({
  key: "expandedState", // Unique ID
  default: false,
});

const activeState = atom({
  key: "activeState",
  default: true,
});

export { expandedState, activeState };
