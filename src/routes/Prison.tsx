import { useEffect } from "react";
import Back from "../components/back";
import Chat from "../components/prison/chat";
import Crashed from "../components/prison/crashed";
import Zimi from "../components/prison/zimi";
import useApp from "../hooks/useApp";
import usePrison from "../hooks/usePrison";

export default function Prison() {
  const { showEasterEgg } = useApp();
  const { reset } = usePrison();

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <div className="w-full h-full bg-prison bg-cover bg-no-repeat">
      <Chat />
      <Zimi />
      <Crashed />
      <Back
        backgroundImage="/images/prison/back.png"
        className="absolute bottom-[4.5%] right-[1.5%] text-white w-[8%]"
      />
      <div
        className="absolute bottom-0 left-0 w-2/5 h-1/3 cursor-pointer"
        onClick={showEasterEgg}
      ></div>
    </div>
  );
}
