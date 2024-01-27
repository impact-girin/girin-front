import { atom } from "recoil";

export const infoState = atom({
  key: "mountainState",
  default: {
    name: "북한산",
    description: "서울특별시와 경기도 고양시, 양주시, 의정부시에 걸쳐있는 산",
    height: "높이 : 687.9m",
  },
});
