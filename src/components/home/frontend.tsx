import { Link } from "react-router-dom";

export default function Frontend() {
  return (
    <div className="absolute left-0 top-0 w-full h-full z-10">
      <img
        src="/images/home/frontend.gif"
        alt="/images/home/frontend.gif"
        className="w-auto h-full"
      />
      <Link
        to="/prison"
        className="absolute top-[79%] left-[22%] w-[8%] h-[15%] text-transparent"
      >
        Prison
      </Link>
    </div>
  );
}
