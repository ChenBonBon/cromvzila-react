import { create } from "zustand";

export type ProjectDetail = {
  src: string;
  position: {
    x: number;
    y: number;
  };
  nodeList: (string | JSX.Element)[];
};

interface State {
  project: ProjectDetail | null;
  projectVisible: boolean;
  pdfVisible: boolean;
  setProject: (project: ProjectDetail | null) => void;
  setProjectVisible: (projectVisible: boolean) => void;
  setPdfVisible: (pdfVisible: boolean) => void;
}

const useProjectStore = create<State>()((set) => ({
  project: null,
  projectVisible: false,
  pdfVisible: false,
  setProject: (project) => set({ project }),
  setProjectVisible: (projectVisible) => set({ projectVisible }),
  setPdfVisible: (pdfVisible) => set({ pdfVisible }),
}));

export default useProjectStore;
