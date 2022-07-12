import { Link } from "react-router-dom";

interface GamebarLinkProps {
  path: string;
  domRender: string;
  logout?: () => void;
}

function GamebarLink({ path, domRender, logout }: GamebarLinkProps) {
  return (
    <Link to={path} className="btn btn-ghost bold" onClick={logout}>
      {domRender}
    </Link>
  );
}

export default GamebarLink;
