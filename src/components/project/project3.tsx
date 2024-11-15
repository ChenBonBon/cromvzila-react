import clsx from "clsx";
import { useState } from "react";

export default function Project3() {
  const [hovered, setHovered] = useState(false);

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  return (
    <div className="relative">
      <img
        src="/images/project/project-3/bg.png"
        alt="/images/project/project-3/bg.png"
      />
      <img
        src="/images/project/project-3/moto.png"
        alt="/images/project/project-3/moto.png"
        className={clsx(
          "absolute top-0 right-0 h-full cursor-pointer transition-transform duration-300 ease-linear",
          {
            ["translate-x-0 scale-[115%]"]: hovered,
            ["translate-x-1/2 scale-50"]: !hovered,
          }
        )}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}
