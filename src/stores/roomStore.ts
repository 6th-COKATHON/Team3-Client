import { create } from "zustand";

export interface roomState {
  id: number;
  title: string;
  participants: number;
  isReady: boolean;
  emoji: string;
  gradient: {
    from: string;
    to: string;
  };
  roomExplain: string;
  roomExplain2: string;
  roomExplain3: string;
  roomExplain4: string;
  selectedImgUrl: string;
  setTitle: (title: string) => void;
  setRoomExplain: (roomExplain: string) => void;
  setSelectedImgUrl: (selectedImgUrl: string) => void;
  reset: () => void;
}

export const useRoomStore = create<roomState>((set) => ({
  id: 0,
  title: "",
  participants: 10,
  isReady: false,
  emoji: "🦊",
  gradient: {
    from: "#A3EDFF",
    to: "#4C7EDE",
  },
  roomExplain: "",
  roomExplain2: "파란 하늘?",
  roomExplain3: "모래가 보여요",
  roomExplain4: "돌..? 사막인것 같아요",
  selectedImgUrl: "",
  setTitle: (title) => set({ title }),
  setRoomExplain: (roomExplain) => set({ roomExplain }),
  setSelectedImgUrl: (selectedImgUrl) => set({ selectedImgUrl }),
  reset: () => set({ title: "", roomExplain: "", selectedImgUrl: "" }),
}));
