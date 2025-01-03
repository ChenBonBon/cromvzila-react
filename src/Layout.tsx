import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import EasterEgg from "./components/home/easter-egg";
import useApp from "./hooks/useApp";
import useOrientation from "./hooks/useOrientation";

const ratio = 4096 / 2160;

export default function Layout() {
  const { width, height, setWidth, setHeight } = useApp();
  const { orientation } = useOrientation();

  async function computeSize() {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    if (innerWidth / innerHeight > ratio) {
      setWidth(innerHeight * ratio);
      setHeight(innerHeight);
    } else {
      setWidth(innerWidth);
      setHeight(innerWidth / ratio);
    }
  }

  useEffect(() => {
    computeSize();

    window.addEventListener("resize", computeSize);

    return () => {
      window.removeEventListener("resize", computeSize);
    };
  }, []);

  if (orientation === "portrait") {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-20 bg-black">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAGECAMAAADujQ6aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUU3RTZCMTVGMjA5MTFFMzk2MTM5MzA1MEQ1NDk5QkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUU3RTZCMTZGMjA5MTFFMzk2MTM5MzA1MEQ1NDk5QkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RTdFNkIxM0YyMDkxMUUzOTYxMzkzMDUwRDU0OTlCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RTdFNkIxNEYyMDkxMUUzOTYxMzkzMDUwRDU0OTlCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjSrkmgAAAMAUExURfDw8JydnbS1tYp7Jri5uYJ0KMTFxf/kAHt+gfvbRf7WHPrpStzc3PHv5vHv5PjODPLuy/jhdP7nF5iFI/vRC7+jGfrpUlVSM2NnaklNUfTorFpVMsvLy9/f37/AwvreWqOOIP3ZMt26EvngbW5ydTU5Ov/eAP7VFv/ZALi6u//QAP/OAF5ZMOvFDzk9OdGxFfXnokpJNffigf7mC//iAP/UDnpuKv/UDK+xs+3GDredG+O+EbKZHPHu4XFnLGpiLsKlGWVeL/vbQX9yKf/UCuTAELSbHPDw7a2VHvLry45+JfToss+vFs3NzfrdU/nfYp2JIUZGNv///25lLUJDNzY6OlFPNOfn5//mALugGnZrK56fn/Dw7v7TCv39/frcT9PT0+bm5qOkpLq7u/Xmn+fCEOXl5fzSC6eoqPPLDe7u7ti2E/Ls0PTptcXGxv7+/vvcSzQ5Pf7WHvLs0aWmpq2urvLv172/wP/mAry9vfv7+/zaOPzaOf/EAE9NNOPk5Orq6v7XIfT09MnKyvHx8fvpQP/FAO/IDsrLzKanp/XmoPj4+OTk5KSlpffODOLi4tjY2PLv0f7nD66wsf/UAJWDI/Lv0p2entDR0ffshv3YKv/HAD9BOKqrq6usrNzd3v/UC9SzFPfrgPDIDqeRH/3nIpSXmf7nDbO0tJKVl9vc3NLS0s/Pz/XNDKqTHtTU1NXV1f3nIP/WANKyFbO0tsytFvLy89DQ0PHy8nJoLNfX1+Xm5mBaMHp9f/f398epF/z8/PPz8zg7Ojw+OePj4/Dv6saoGMbGxre5u93e3rGysuS/Ebm7vJ+goHNpK9a1FMvMzf3TCujCEPDw7+zs7PvpPod4J8usFv/TAPLt1vbNDENEN3RpK9TV1f3SC/r6+v/gAP3XIeC9EWxjLbq6ure4uPLKDfvcT7qfG/Ls0/PrxfHu3sDCw/zaPPHJDXx/gkxLNfTpufLszf7WG8iqF+jDD/Tpt/jie2dgLvPqu/Pqv//VEUBCOP3XI/PqwAAAAAAPH/AAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAK3klEQVR42uzdeVxU5RoH8Dkhi3qJTAoIJFJA3KWSm2uhr2bbTZ68zdgwIKCyKURGBIUgImIsWmqaaWCapZVZmvuW2mL7avtyU7r75e77vW8z4nIO68zhnDnved/n+QtmnuFzfl/Oec/7vjOfz1io23XDAsphWdxvJcHTjokNQMiwBMEBCBkRLjgA+WDqdLEBCPnhZIzYAIT0TxQcgJAZ8YIDkKC+wzkHiL/eJ2rqr2bIiihr9lf8Avx30pRhpOv6NIRPgOsvCybuVeamdfwB7H2PeFBLfGP4Ahi6g3hYuQc4Avh51DfE43KMSeIFIH4HUVXP38wHQOJGdfmJqTcKLgBMCFIX//tTfIwBEzJVnv5H+RgEE+vVxHeMS6KUC4A7s9Xk3zCUl5ng0VwV8Uf78rAv0AKwqZ18wbdu85l0l6xaTYOj1lHKC8BQR5uL+68JxzpdDh8OoZQbgJg2F8DL4Z3vB7z1Llc7Qr6t4tf7dr4hUr9qOOUJIGasMv+HIZ3vCI2Jp5QrgARl/rHxnW6J5SZSyhnACOUKv8OJvevZjVxtibcALFDcAhx30I4BMrdNp5Q7gL6KE2Bcx63t3xvMD6C4BwZ1MsAlUB7L8qXiCoiiopVlgmJ+myQewCo5wGtUPIApcgAfAQEUG6HhAgJ8KJ8EHBMQQL4VtIQKCCC/C04WEUA+BPQXHWA2AiAAAggNsFF0gGwEQACxAepFByAIICCA6lcWhG4p2rrnWzC2vt2ztWhLaIH3AaLfAJbqjWjvAhysBsgvX1NcmP6OZGy9k15YvKY8H6D6oPcAwooAKiKyJHYqK6ICIDLMSwABFqjJs0tslT2vBioDvAKwAuBEncRe1Z0AWOEFgJ2Q4iexWX4psFN3gBVQclpitU6XeH4OeAjQDCkZEruVkQLNugKEVYKfxHL5wa4wPQEi4YTEdjXA73QECICaOsYB0g95eBF4BPA+4xdAy0Xwvm4A0fCKnXkA+ysQrRfAIIiQ2K8IGKQTQAHkZ5kAICsfCvQB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"
          alt="landscape"
          className="animate-landscape"
        />
        <div className="flex flex-col justify-center items-center gap-4 text-white text-2xl">
          <p>For best experience</p>
          <p>please rotate your device</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center w-screen h-screen bg-black">
        <Suspense>
          <div
            className="relative overflow-hidden"
            style={{
              width,
              height,
            }}
          >
            <EasterEgg />
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
