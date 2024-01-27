import { atom } from "recoil";

export const infoState = atom({
  key: "mountainState",
  default: {
    name: "",
    description: "",
    height: "",
    image: "",
  },
});
