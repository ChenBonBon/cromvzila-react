import usePrison from "../../hooks/usePrison";
import ChatBG from "./chat-bg";

export default function Chat() {
  const { message, chatting, finished } = usePrison();

  if (!chatting || finished) {
    return null;
  }

  return (
    <div className="absolute top-1/2 left-1/2 w-auto h-full -translate-y-1/2">
      <img
        src="/images/prison/cry.png"
        alt="/images/prison/cry.png"
        className="w-auto h-full"
      />
      <ChatBG message={message} />
    </div>
  );
}
