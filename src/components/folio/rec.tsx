import useFolio from "../../hooks/useFolio";

export default function REC() {
  const { refresh } = useFolio();

  return (
    <img
      src="/images/folio/rec.gif"
      alt="/images/folio/rec.gif"
      className="absolute top-[1%] left-[1%] h-[5%]"
      onClick={refresh}
    />
  );
}
