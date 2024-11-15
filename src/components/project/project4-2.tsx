import useApp from "../../hooks/useApp";
import useProject from "../../hooks/useProject";
import Mask from "../mask";

export default function Project42() {
  const { showPDF } = useProject();
  const { showMask } = useApp();

  function handleClick() {
    showPDF();
    showMask();
  }

  return (
    <div className="relative w-full h-full bg-white">
      <img
        src="/images/project/project-4/6.png"
        alt="/images/project/project-4/6.png"
        className="absolute top-1/2 -translate-y-1/2 left-[15%] h-4/5"
      />
      <img
        src="/images/project/project-4/7.png"
        alt="/images/project/project-4/7.png"
        className="absolute top-[10%] right-1/4 h-1/4"
      />
      <img
        src="/images/project/project-4/8.png"
        alt="/images/project/project-4/8.png"
        className="absolute bottom-[5%] right-[10%] -translate-x-1/2 h-1/3"
        onClick={handleClick}
      />
      <Mask />
    </div>
  );
}
