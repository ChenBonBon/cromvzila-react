import clsx from "clsx";
import { useState } from "react";

export default function Project5() {
  const [hovered, setHovered] = useState(false);

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  return (
    <div className="relative w-full h-full bg-white">
      <img
        src="/images/project/project-5/2.png"
        alt="/images/project/project-5/2.png"
        className="absolute -bottom-[5%] left-[15%] h-4/5"
      />
      <img
        src="/images/project/project-5/3.png"
        alt="/images/project/project-5/3.png"
        className={clsx(
          "absolute top-0 left-1/2 -translate-x-1/2 h-4/5 z-10 transition-transform duration-300 cursor-pointer",
          {
            ["translate-y-0"]: hovered,
            ["-translate-y-1/2"]: !hovered,
          }
        )}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        src="/images/project/project-5/4.png"
        alt="/images/project/project-5/4.png"
        className="absolute bottom-0 right-[20%] h-1/2"
      />
    </div>
  );
}
