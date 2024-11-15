import clsx from "clsx";
import useApp from "../hooks/useApp";

interface MaskProps {
  className?: string;
  onClick?: () => void;
}

export default function Mask(props: MaskProps) {
  const { className, onClick } = props;

  const { maskVisible, hideMask } = useApp();

  function handleClick() {
    onClick && onClick();

    hideMask();
  }

  if (!maskVisible) {
    return null;
  }

  return (
    <div
      className={clsx(
        "absolute top-0 left-0 w-full h-full bg-black opacity-50 z-50",
        className
      )}
      onClick={handleClick}
    ></div>
  );
}
