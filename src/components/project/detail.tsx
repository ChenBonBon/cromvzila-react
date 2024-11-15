import { useState } from "react";
import useApp from "../../hooks/useApp";
import useProject from "../../hooks/useProject";
import Close from "../close";

export default function Detail() {
  const { project, projectVisible, clearProject, hideProject } = useProject();
  const { hideMask } = useApp();

  const [currIndex, setCurrIndex] = useState(0);

  function handlePrev() {
    setCurrIndex(currIndex - 1);
  }

  function handleNext() {
    setCurrIndex(currIndex + 1);
  }

  function resetCurrIndex() {
    setCurrIndex(0);
  }

  function handleClose() {
    resetCurrIndex();
    clearProject();
    hideProject();
    hideMask();
  }

  if (!projectVisible || !project) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full z-40 bg-project-detail">
      {project.nodeList && (
        <>
          {typeof project.nodeList[currIndex] === "string" ? (
            <img
              src={project.nodeList[currIndex]}
              alt={project.nodeList[currIndex]}
              className="h-full w-auto"
            />
          ) : (
            project.nodeList[currIndex]
          )}
          {currIndex > 0 && (
            <img
              src="/images/project/prev.png"
              alt="/images/project/prev.png"
              className="absolute left-0 bottom-0 cursor-pointer w-[5%] hover:w-[8%] transition-all duration-300 ease-linear"
              onClick={handlePrev}
            />
          )}
          {currIndex < project.nodeList.length - 1 && (
            <img
              src="/images/project/next.png"
              alt="/images/project/next.png"
              className="absolute right-0 bottom-0 cursor-pointer w-[5%] hover:w-[8%] transition-all duration-300 ease-linear"
              onClick={handleNext}
            />
          )}
        </>
      )}
      {currIndex === project.nodeList.length - 1 && (
        <img
          src="/images/project/back.png"
          alt="/images/project/back.png"
          className="absolute right-0 bottom-0 cursor-pointer w-[5%] hover:w-[8%] transition-all duration-300 ease-linear"
          onClick={handleClose}
        />
      )}
      <Close onClick={handleClose} />
    </div>
  );
}
