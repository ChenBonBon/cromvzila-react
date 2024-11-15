import { useMemo } from "react";
import usePrisonStore from "../stores/prison";

const MESSAGES = [
  "Zillala's cat is named Zimimi.",
  "Zillala met Zimimi on March 15, 2020.",
  "Zimimi weighs 4.9 kg.",
  "Zimimi loves to eat shrimp the most.",
  "Zimimi has the most beautiful tail.",
  "Zillala likes to waste time with Zimimi without doing any work.",
  "Zimimi's temper is both good and bad.",
  "You can pet Zimimi for a while, but not for too long.",
  "Zimimi smells like a mix of a creamy little cake and a sun-dried blanket, except for the mouth.",
  "Zillala has a blanket, and so does Zimimi.",
  "Zillala has liked many cats: Zimimi, Zimeowmeow, Benmimi, Jaomimi, Yangmimi, Nutmeg...",
  "Zimeowmeow's real name is Snowy.",
  "Snowy is a sturdy ginger cat.",
  "Snowy passed away on September 11, 2022.",
  "Zillala regrets not seeing Snowy one last time.",
  "Benmimi and Jaomimi also met an untimely death.",
  "Time waits for no one. Life for humans isn't as long as for cats.",
  "I really wish I could go back to before 2019.",
  "I really want to do what I want.",
  "Being in prison is really uncomfortable; I don't want to stay here.",
  "Even though the theme of the Honour Project is 'Fluffy Soft Life,' I am stuck in a 'hard jail.'",
  "Can you let me out? I promise not to go to bite you.",
  "I have nothing else to say...",
];

export default function usePrison() {
  const {
    count,
    chatting,
    zimiMessage,
    setCount,
    addCount,
    setChatting,
    setZimiMessage,
  } = usePrisonStore();

  const message = useMemo(() => MESSAGES[count], [count]);

  const finished = useMemo(() => {
    return count === MESSAGES.length;
  }, [count]);

  function chat() {
    addCount(1);
    setChatting(true);

    setTimeout(() => {
      setChatting(false);
    }, 3500);
  }

  function reset() {
    setCount(0);
    setChatting(false);
  }

  return {
    count,
    message,
    finished,
    chatting,
    zimiMessage,
    addCount,
    chat,
    setZimiMessage,
    reset,
  };
}
