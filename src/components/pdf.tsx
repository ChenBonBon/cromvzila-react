import { useRef } from "react";
import useApp from "../hooks/useApp";
import useProject from "../hooks/useProject";
import Close from "./close";

export default function PDF() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { hidePDF } = useProject();
  const { width, height, hideMask } = useApp();

  function handleClose() {
    hidePDF();
    hideMask();
  }

  return (
    <div className="relative w-full h-full flex justify-center items-end z-[60]">
      <div className="absolute top-0 left-0 w-full h-[40px] bg-black">
        <Close onClick={handleClose} />
      </div>
      <iframe
        ref={iframeRef}
        style={{ width, height }}
        src="https://online.pubhtml5.com/ugrmb/zxjw/"
        seamless
        allowTransparency
        allowFullScreen
      ></iframe>
    </div>
  );
}
