import { create } from "zustand";

interface State {
  count: number;
  chatting: boolean;
  zimiMessage: string;
  setCount: (count: number) => void;
  addCount: (count: number) => void;
  setChatting: (chatting: boolean) => void;
  setZimiMessage: (zimiMessage: string) => void;
}

const usePrisonStore = create<State>()((set) => ({
  count: 0,
  chatting: false,
  zimiMessage: "MeowWoo, I'll say anything.",
  setCount: (count) => set({ count }),
  addCount: (count) => set((state) => ({ count: state.count + count })),
  setChatting: (chatting) => set({ chatting }),
  setZimiMessage: (zimiMessage) => set({ zimiMessage }),
}));

export default usePrisonStore;
