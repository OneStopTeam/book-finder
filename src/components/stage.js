import { atom } from "recoil";

const relatedState=atom({
    key:"relatedState",
    default:[],
  });

  export { relatedState };