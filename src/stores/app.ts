import { create } from "zustand";

interface State {
  bioVisible: boolean;
  easterEggVisible: boolean;
  maskVisible: boolean;
  setBioVisible: (bioVisible: boolean) => void;
  setEasterEggVisible: (easterEggVisible: boolean) => void;
  setMaskVisible: (maskVisible: boolean) => void;
}

const useAppStore = create<State>()((set) => ({
  bioVisible: false,
  easterEggVisible: false,
  maskVisible: false,
  setBioVisible: (bioVisible) => set({ bioVisible }),
  setEasterEggVisible: (easterEggVisible) => set({ easterEggVisible }),
  setMaskVisible: (maskVisible) => set({ maskVisible }),
}));

export default useAppStore;
