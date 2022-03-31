import { atom } from "recoil";

export const keywordState = atom({
  key: "keywordState",
  default: "",
});

export const bookState = atom({
  key: "bookState",
  default: [],
});

export const pageState = atom({
  key: "pageState",
  default: 1,
});
