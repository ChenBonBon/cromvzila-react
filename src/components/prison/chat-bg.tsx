interface ChatBGProps {
  message: string;
}

export default function ChatBG(props: ChatBGProps) {
  const { message } = props;

  return (
    <div className="absolute top-0 -left-[110%] h-2/3">
      <img
        src="/images/prison/chat-bg.gif"
        alt="/images/prison/chat-bg.gif"
        className="h-full"
      />
      <p className="absolute top-[15%] left-[20%] w-1/2 h-1/2 flex items-center font-chat text-2xl select-none">
        {message}
      </p>
    </div>
  );
}
