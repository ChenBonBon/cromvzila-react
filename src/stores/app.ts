import { create } from "zustand";

interface State {
  width: number;
  height: number;
  bioVisible: boolean;
  easterEggVisible: boolean;
  maskVisible: boolean;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setBioVisible: (bioVisible: boolean) => void;
  setEasterEggVisible: (easterEggVisible: boolean) => void;
  setMaskVisible: (maskVisible: boolean) => void;
}

const useAppStore = create<State>()((set) => ({
  width: 4096,
  height: 2160,
  bioVisible: false,
  easterEggVisible: false,
  maskVisible: false,
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setBioVisible: (bioVisible) => set({ bioVisible }),
  setEasterEggVisible: (easterEggVisible) => set({ easterEggVisible }),
  setMaskVisible: (maskVisible) => set({ maskVisible }),
}));

export default useAppStore;
