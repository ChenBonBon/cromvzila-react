import { useEffect, useState } from "react";

export default function useOrientation() {
  const landscapeQuery = window.matchMedia("(orientation: landscape)");

  const [orientation, setOrientation] = useState("portrait");

  function checkOrientation() {
    if (landscapeQuery.matches) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }

  function handleOrientationChange(mediaQuery: MediaQueryListEvent) {
    if (mediaQuery.matches) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }

  useEffect(() => {
    checkOrientation();

    landscapeQuery.addEventListener("change", handleOrientationChange);

    return () => {
      landscapeQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return { orientation };
}
