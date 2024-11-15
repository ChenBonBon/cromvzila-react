import { create } from "zustand";

interface State {
  folioList: string[];
  rulesVisible: boolean;
  folio: string | null;
  folioVisible: boolean;
  setFolioList: (folioList: string[]) => void;
  setRulesVisible: (rulesVisible: boolean) => void;
  setFolio: (folio: string | null) => void;
  setFolioVisible: (folioVisible: boolean) => void;
}

const useFolioStore = create<State>()((set) => ({
  folioList: [],
  rulesVisible: false,
  folio: null,
  folioVisible: false,
  setFolioList: (folioList) => set({ folioList }),
  setRulesVisible: (rulesVisible) => set({ rulesVisible }),
  setFolio: (folio) => set({ folio }),
  setFolioVisible: (folioVisible) => set({ folioVisible }),
}));

export default useFolioStore;
