import clsx from "clsx";
import { useState } from "react";

interface ClueCardProps {
  onClick?: () => void;
}

export default function ClueCard(props: ClueCardProps) {
  const { onClick } = props;

  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  return (
    <img
      src="/images/home/file.png"
      alt="/images/home/file.png"
      className={clsx(
        "absolute w-1/5 right-1/4 z-30 bottom-0 -rotate-12 cursor-pointer transition-transform duration-300 ease-linear",
        {
          ["translate-y-0"]: hovered,
          ["translate-y-3/4"]: !hovered,
        }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    />
  );
}
