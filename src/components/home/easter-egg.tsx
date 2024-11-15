import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApp from "../../hooks/useApp";

export default function EasterEgg() {
  const { easterEggVisible, hideEasterEgg } = useApp();
  const [zimiIndex, setZimiIndex] = useState(0);

  useEffect(() => {
    setZimiIndex(Math.ceil(Math.random() * 6));
  }, []);

  if (!easterEggVisible) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white z-[60]">
      <img
        src="/images/easter-egg/lights.gif"
        alt="/images/easter-egg/lights.gif"
      />
      <img
        src={`/images/easter-egg/zimi-${zimiIndex}.gif`}
        alt={`/images/easter-egg/zimi-${zimiIndex}.gif`}
        className="absolute top-1/4 left-1/2 h-1/5 -translate-x-1/2"
      />
      <img
        src="/images/easter-egg/author.png"
        alt="/images/easter-egg/author.png"
        className="absolute bottom-[40%] left-[3%] w-2/5"
      />
      <img
        src="/images/easter-egg/zimiao.png"
        alt="/images/easter-egg/zimiao.png"
        className="absolute bottom-[15%] left-[3%] h-[15%]"
      />
      <Link to="https://www.instagram.com/cromvzilala" target="_blank">
        <img
          src="/images/easter-egg/ig.png"
          alt="/images/easter-egg/ig.png"
          className="absolute bottom-[27%] left-[14%] h-[6%]"
        />
      </Link>
      <Link to="https://www.tiktok.com/@cromvzila" target="_blank">
        <img
          src="/images/easter-egg/tiktok.png"
          alt="/images/easter-egg/tiktok.png"
          className="absolute bottom-[15%] left-[14%] h-[6%]"
        />
      </Link>
      <img
        src="/images/easter-egg/zimi.png"
        alt="/images/easter-egg/zimi.png"
        className="absolute bottom-[15%] left-[33%] h-1/5"
      />
      <Link
        to="mailto:cromvzila@gmail.com"
        className="absolute bottom-[30%] left-[40%] text-xs"
      >
        cromvzila@gmail.com
      </Link>
      <img
        src="/images/easter-egg/grass.png"
        alt="/images/easter-egg/grass.png"
        className="absolute bottom-[20%] left-[55%] h-[10%]"
      />
      <img
        src="/images/easter-egg/jiojio.png"
        alt="/images/easter-egg/jiojio.png"
        className="absolute bottom-[20%] left-[65%] h-[10%]"
      />
      <img
        src="/images/easter-egg/coding.png"
        alt="/images/easter-egg/coding.png"
        className="absolute bottom-[15%] left-[53%] h-[3%]"
      />
      <img
        src="/images/easter-egg/2024.png"
        alt="/images/easter-egg/2024.png"
        className="absolute bottom-[15%] left-[81%] h-[3%]"
      />
      <img
        src="/images/easter-egg/back.png"
        alt="/images/easter-egg/back.png"
        className="absolute bottom-0 right-0 h-1/5 cursor-pointer"
        onClick={hideEasterEgg}
      />
    </div>
  );
}
