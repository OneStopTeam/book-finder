import { atom } from "recoil";

export const valueState = atom({
  key: "valueState",
  default: "",
});

export const bookState = atom({
  key: "bookState",
  default: [],
});
