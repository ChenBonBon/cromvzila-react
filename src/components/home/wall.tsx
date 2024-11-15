import { Link } from "react-router-dom";

export default function Wall() {
  return (
    <div className="absolute right-0 top-0 h-full z-20">
      <img
        src="/images/home/wall.png"
        alt="/images/home/wall.png"
        className="w-auto h-full"
      />
      <Link to="/folios" className="absolute top-0 left-0">
        <img src="/images/home/monitor.gif" alt="/images/home/monitor.gif" />
      </Link>
      <Link to="/projects" className="absolute bottom-0 left-0">
        <img src="/images/home/post.gif" alt="/images/home/post.gif" />
      </Link>
    </div>
  );
}
