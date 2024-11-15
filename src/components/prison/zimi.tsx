import usePrison from "../../hooks/usePrison";
import ChatBG from "./chat-bg";

export default function Zimi() {
  const { chat, zimiMessage, chatting, finished } = usePrison();

  if (chatting || finished) {
    return null;
  }

  return (
    <div className="absolute top-1/2 left-1/2 w-auto h-full -translate-y-1/2">
      <img
        src="/images/prison/zimi.gif"
        alt="/images/prison/zimi.gif"
        className="w-auto h-full cursor-pointer"
        onClick={chat}
      />
      <ChatBG message={zimiMessage} />
    </div>
  );
}
