import { useEffect, useRef, useState } from "react";
import useApp from "../../hooks/useApp";
import ClueCard from "./clue-card";

export default function Bio() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const backendRef = useRef<HTMLImageElement | null>(null);

  const { bioVisible, showBio, showEasterEgg, showMask } = useApp();

  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });
  const [backendSize, setBackendSize] = useState({
    width: 0,
    height: 0,
  });

  function computeContainerSize() {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;

      setContainerSize({
        width,
        height,
      });
    }
  }

  function computeBackendSize() {
    if (backendRef.current) {
      const width = backendRef.current.offsetWidth;
      const height = backendRef.current.offsetHeight;

      setBackendSize({
        width,
        height,
      });
    }
  }

  function computeSize() {
    computeContainerSize();
    computeBackendSize();
  }

  function handleClick() {
    showBio();
    showMask();
  }

  useEffect(() => {
    computeSize();

    window.addEventListener("resize", computeSize);

    return () => {
      window.removeEventListener("resize", computeSize);
    };
  }, [bioVisible]);

  if (!bioVisible) {
    return <ClueCard onClick={handleClick} />;
  }

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max h-full z-40"
      ref={containerRef}
    >
      <img
        src="/images/bio/bg.png"
        alt="/images/bio/bg.png"
        className="w-auto h-full"
        ref={backendRef}
        onLoad={(event) => {
          const currentTarget = event.currentTarget;
          const { offsetWidth, offsetHeight } = currentTarget;

          setBackendSize({
            width: offsetWidth,
            height: offsetHeight,
          });
        }}
      />
      <img
        src="/images/bio/photo.png"
        alt="/images/bio/photo.png"
        className="absolute h-1/2 left-0 cursor-pointer"
        style={{
          top: (containerSize.height - backendSize.height) / 2,
        }}
        onClick={showEasterEgg}
      />
      <img
        src="/images/bio/mark.png"
        alt="/images/bio/mark.png"
        className="absolute h-1/5 cursor-pointer right-[8%] opacity-50"
        style={{
          bottom:
            (containerSize.height - backendSize.height) / 2 +
            backendSize.height / 8,
        }}
      />
    </div>
  );
}
