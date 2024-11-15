import usePrison from "../../hooks/usePrison";

export default function Crashed() {
  const { finished } = usePrison();

  if (!finished) {
    return null;
  }

  return (
    <div className="absolute bottom-0 left-1/2 w-auto h-[90%] -translate-x-1/2">
      <img
        src="/images/prison/crashed.png"
        alt="/images/prison/crashed.png"
        className="max-w-max w-auto h-full"
      />
      <img
        src="/images/prison/crashed-message.gif"
        alt="/images/prison/crashed-message.gif"
        className="absolute -top-[14%] left-0 w-auto h-auto"
      />
    </div>
  );
}
