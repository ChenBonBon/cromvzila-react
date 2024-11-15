import Back from "../components/back";
import PDF from "../components/pdf";
import Detail from "../components/project/detail";
import Project from "../components/project/project";
import useProject from "../hooks/useProject";

export default function Projects() {
  const { pdfVisible } = useProject();

  return (
    <div className="w-full h-full bg-project bg-cover bg-no-repeat">
      {new Array(5).fill(0).map((_, index) => (
        <Project key={index} index={index} />
      ))}
      <Detail />
      <Back
        backgroundImage="/images/project/back.png"
        className="absolute bottom-0 right-0 w-[5%] hover:w-[8%] transition-all duration-300 ease-linear"
      />
      {pdfVisible && <PDF />}
    </div>
  );
}
