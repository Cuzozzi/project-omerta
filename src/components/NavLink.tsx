import { Link } from "react-router-dom";

interface NavProps {
  path: string;
  domRender: string;
  thisWillBeUnsued?: number;
}

function NavLink({ path, domRender }: NavProps) {
  return (
    <Link to={path} className="btn btn-ghost normal-case text-xl">
      {domRender}
    </Link>
  );
}

export default NavLink;
