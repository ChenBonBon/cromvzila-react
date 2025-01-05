import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import useApp from "../../hooks/useApp";

export default function Nav() {
  const { showBio, showMask } = useApp();

  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  function handleClickBio() {
    showBio();
    showMask();
  }

  function handleClickGame() {
    window.open("https://cat-blind-box.netlify.app/", "_blank");
  }

  return (
    <div
      className={clsx(
        "absolute top-0 left-0 h-[70%] z-30 transition-transform duration-300 ease-linear",
        {
          ["translate-y-0"]: hovered,
          ["-translate-y-3/4"]: !hovered,
        }
      )}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      <img
        src="/images/home/nav.png"
        alt="/images/home/nav.png"
        className="w-auto h-full"
      />
      <span
        className="absolute bottom-[39%] left-[42%] p-4"
        onClick={handleClickGame}
      ></span>
      <Link to="/folios">
        <img
          src="/images/home/artwork.png"
          alt="/images/home/artwork.png"
          className="absolute top-[9%] left-[50%] h-[3%]"
        />
      </Link>
      <Link to="/projects">
        <img
          src="/images/home/project.png"
          alt="/images/home/project.png"
          className="absolute top-[9%] left-[63%] h-[3%]"
        />
      </Link>
      <Link to="/" onClick={handleClickBio}>
        <img
          src="/images/home/bio.png"
          alt="/images/home/bio.png"
          className="absolute top-[9%] left-[75%] h-[3%]"
        />
      </Link>
    </div>
  );
}
