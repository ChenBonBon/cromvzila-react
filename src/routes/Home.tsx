import { useEffect } from "react";
import Bio from "../components/home/bio";
import Frontend from "../components/home/frontend";
import Nav from "../components/home/nav";
import Wall from "../components/home/wall";
import Mask from "../components/mask";
import useApp from "../hooks/useApp";
import useL2D from "../hooks/useL2D";

export default function Home() {
  const { load, remove } = useL2D();
  const { hideBio } = useApp();

  useEffect(() => {
    load();

    return () => {
      remove();
    };
  }, []);

  return (
    <div className="w-full h-full bg-home bg-cover bg-no-repeat">
      <Nav />
      <Frontend />
      <Wall />
      <Bio />
      <Mask onClick={hideBio} />
    </div>
  );
}
