import useProject from "../../hooks/useProject";
import { ProjectDetail } from "../../stores/project";
import Project2 from "./project2";
import Project3 from "./project3";
import Project41 from "./project4-1";
import Project42 from "./project4-2";
import Project5 from "./project5";

interface ProjectProps {
  index: number;
}

const PROJECT_LIST: ProjectDetail[] = [
  {
    src: "/images/project/project-1.png",
    nodeList: [
      "/images/project/project-1/1.png",
      "/images/project/project-1/2.png",
      "/images/project/project-1/3.jpg",
      "/images/project/project-1/4.jpg",
      "/images/project/project-1/5.jpg",
      "/images/project/project-1/6.jpg",
    ],
    position: {
      x: 8,
      y: 28,
    },
  },
  {
    src: "/images/project/project-2.png",
    nodeList: [<Project2 />],
    position: {
      x: 26,
      y: 25,
    },
  },
  {
    src: "/images/project/project-3.png",
    nodeList: [<Project3 />],
    position: {
      x: 40,
      y: 23,
    },
  },
  {
    src: "/images/project/project-4.png",
    nodeList: [
      "/images/project/project-4/1.jpg",
      <Project41 />,
      <Project42 />,
      "/images/project/project-4/5.png",
    ],
    position: {
      x: 62,
      y: 25,
    },
  },
  {
    src: "/images/project/project-5.png",
    nodeList: [
      <Project5 />,
      "/images/project/project-5/1.png",
      "/images/project/project-5/5.png",
    ],
    position: {
      x: 82,
      y: 28,
    },
  },
];

export default function Project(props: ProjectProps) {
  const { index } = props;

  const project = PROJECT_LIST[index];

  const { setProject, showProject } = useProject();

  function handleClick() {
    setProject(project);
    showProject();
  }

  return (
    <img
      src={project.src}
      alt={project.src}
      className="absolute h-[15%] cursor-pointer"
      style={{
        top: project.position.y + "%",
        left: project.position.x + "%",
      }}
      onClick={handleClick}
    />
  );
}
