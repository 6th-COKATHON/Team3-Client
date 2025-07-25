import { create } from "zustand";

export interface userState {
  nickname: string;
  user2: string;
  user3: string;
  user4: string;
  seNickname: (nickname: string) => void;
}

export const useUserStore = create<userState>((set) => ({
  nickname: "",
  user2: "픽헌즈",
  user3: "cotatoss",
  user4: "11번째사람",
  seNickname: (nickname) => set({ nickname }),
}));
