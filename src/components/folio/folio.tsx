import useApp from "../../hooks/useApp";
import useFolio from "../../hooks/useFolio";

interface FolioProps {
  item: string;
  index: number;
}

const POSITION_LIST = [
  {
    x: 0,
    y: 15,
  },
  {
    x: 25,
    y: 0,
  },
  {
    x: 50,
    y: 5,
  },
  {
    x: 75,
    y: 0,
  },
  {
    x: 10,
    y: 45,
  },
  {
    x: 30,
    y: 55,
  },
  {
    x: 50,
    y: 45,
  },
  {
    x: 75,
    y: 40,
  },
];

export default function Folio(props: FolioProps) {
  const { item, index } = props;

  const position = POSITION_LIST[index];

  const { setFolio, showFolio } = useFolio();
  const { showMask } = useApp();

  function handleClick() {
    setFolio(item);
    showFolio();
    showMask();
  }

  return (
    <img
      src={item}
      alt={item}
      className="absolute w-1/5 cursor-pointer"
      style={{
        top: position.y + "%",
        left: position.x + "%",
      }}
      onClick={handleClick}
    />
  );
}
