import { useEffect } from "react";
import Back from "../components/back";
import Detail from "../components/folio/detail";
import Folio from "../components/folio/folio";
import REC from "../components/folio/rec";
import Rules from "../components/folio/rules";
import Mask from "../components/mask";
import useFolio from "../hooks/useFolio";

export default function Folios() {
  const {
    folioList,
    rulesVisible,
    showRules,
    hideRules,
    clearFolio,
    hideFolio,
    refresh,
  } = useFolio();

  function handleClick() {
    clearFolio();
    hideFolio();
  }

  useEffect(() => {
    refresh();
    showRules();

    return () => {
      hideRules();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (rulesVisible) {
        hideRules();
      }
    }, 7000);
  }, [rulesVisible]);

  return (
    <div className="w-full h-full bg-folio bg-cover bg-no-repeat">
      <REC />
      <Rules />
      {folioList.map((folio, index) => (
        <Folio key={index} item={folio} index={index} />
      ))}
      <Detail />
      <Back
        backgroundImage="/images/folio/back.png"
        className="absolute bottom-[2%] right-[1%] w-[8%]"
      />
      <Mask onClick={handleClick} />
    </div>
  );
}
