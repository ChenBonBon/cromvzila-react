import { Link } from "react-router-dom";

interface BackProps {
  backgroundImage: string;
  className?: string;
}

export default function Back(props: BackProps) {
  const { backgroundImage, className } = props;

  return (
    <Link to="/" className={className}>
      <img src={backgroundImage} alt={backgroundImage} />
    </Link>
  );
}
