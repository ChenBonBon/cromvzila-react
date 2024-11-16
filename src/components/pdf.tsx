import { usePdf } from "@mikecousins/react-pdf";
import { useRef, useState } from "react";
import ReactLoading from "react-loading";
import useApp from "../hooks/useApp";
import useProject from "../hooks/useProject";
import Close from "./close";

export default function PDF() {
  const { hidePDF } = useProject();
  const { hideMask } = useApp();

  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument } = usePdf({
    file: "https://bonbon.oss-cn-shanghai.aliyuncs.com/cromvzila/pdf-1.pdf",
    page,
    canvasRef,
  });

  function handlePrev() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  }

  function handleNext() {
    if (pdfDocument && page === pdfDocument.numPages) {
      return;
    }
    setPage(page + 1);
  }

  function handleClose() {
    hidePDF();
    hideMask();
  }

  if (!pdfDocument) {
    return (
      <div className="relative w-full h-full flex justify-center items-center z-[60]">
        <ReactLoading
          type="spinningBubbles"
          color="#FFFFFF"
          height="auto"
          width="20%"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {pdfDocument && pdfDocument.numPages > 0 && (
        <div className="relative w-full h-full flex justify-center items-center z-[60]">
          <Close onClick={handleClose} />
          <img
            src="/images/project/prev.png"
            alt="/images/project/prev.png"
            className="absolute left-0 bottom-0 cursor-pointer w-[5%] hover:w-[8%] transition-all duration-300 ease-linear"
            onClick={handlePrev}
          />
          <canvas ref={canvasRef} className="w-auto h-full" />
          <img
            src="/images/project/next.png"
            alt="/images/project/next.png"
            className="absolute right-0 bottom-0 cursor-pointer w-[5%] hover:w-[8%] transition-all duration-300 ease-linear"
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  );
}
