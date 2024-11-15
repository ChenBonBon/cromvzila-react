import useFolio from "../../hooks/useFolio";

export default function Detail() {
  const { folio, folioVisible } = useFolio();

  if (!folioVisible || !folio) {
    return null;
  }

  return (
    <img
      src={folio}
      alt={folio}
      className="absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 z-40"
    />
  );
}
