import { atom } from "recoil";

export const userId = atom({
  key: "userId",
  default: {
    id: null as string | null,
  },
});
