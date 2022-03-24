import { atom } from "recoil";

export const keywordState = atom({
  key: "keywordState",
  default: "",
});

export const bookState = atom({
  key: "bookState",
  default: [],
});
