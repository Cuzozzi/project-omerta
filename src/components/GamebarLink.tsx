import { Link } from "react-router-dom";

interface GamebarLinkProps {
  path: string;
  domRender: string;
  thisWillBeUnsued?: number;
}

function GamebarLink({ path, domRender }: GamebarLinkProps) {
  return (
    <Link to={path} className="btn btn-ghost bold">
      {domRender}
    </Link>
  );
}

export default GamebarLink;
