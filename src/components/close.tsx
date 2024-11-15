interface CloseProps {
  onClick: () => void;
}

export default function Close(props: CloseProps) {
  const { onClick } = props;

  return (
    <img
      src="/images/close.png"
      alt="/images/close.png"
      className="absolute top-4 left-4 w-[3%]"
      onClick={onClick}
    />
  );
}
