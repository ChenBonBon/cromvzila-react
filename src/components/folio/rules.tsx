import useFolio from "../../hooks/useFolio";

export default function Rules() {
  const { rulesVisible, hideRules } = useFolio();

  if (!rulesVisible) {
    return null;
  }

  return (
    <img
      src="/images/folio/rules.png"
      alt="/images/folio/rules.png"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      onClick={hideRules}
    />
  );
}
