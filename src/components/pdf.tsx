import useApp from "../hooks/useApp";
import useProject from "../hooks/useProject";
import Close from "./close";

export default function PDF() {
  const { hidePDF } = useProject();
  const { width, height, hideMask } = useApp();

  function handleClose() {
    hidePDF();
    hideMask();
  }

  return (
    <div className="relative w-full h-full flex justify-center items-end z-[60]">
      <Close onClick={handleClose} />
      <iframe
        style={{ width, height }}
        src="https://online.pubhtml5.com/ugrmb/zxjw/"
        seamless
        allowTransparency
        allowFullScreen
      ></iframe>
    </div>
  );
}
