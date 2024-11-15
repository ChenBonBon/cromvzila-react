import useProjectStore from "../stores/project";

export default function useProject() {
  const {
    project,
    projectVisible,
    pdfVisible,
    setProject,
    setProjectVisible,
    setPdfVisible,
  } = useProjectStore();

  function clearProject() {
    setProject(null);
  }

  function showProject() {
    setProjectVisible(true);
  }

  function hideProject() {
    setProjectVisible(false);
  }

  function showPDF() {
    setPdfVisible(true);
  }

  function hidePDF() {
    setPdfVisible(false);
  }

  return {
    project,
    projectVisible,
    pdfVisible,
    setProject,
    clearProject,
    showProject,
    hideProject,
    showPDF,
    hidePDF,
  };
}
