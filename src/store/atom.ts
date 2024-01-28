import { atom } from "recoil";

export const infoState = atom({
  key: "mountainState",
  default: {
    name: "",
    description: "",
    height: "",
    image: "",
    lat: 0,
    lng: 0,
  },
});

export const rewardState = atom({
  key: "reward",
  default: {
    isReward: false,
  },
});
