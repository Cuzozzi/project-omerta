import { NavLink } from "react-router-dom";

interface NavProps {
  path: string;
  domRender: string;
  thisWillBeUnsued?: number;
  end?: boolean;
}

function Link({ path, domRender, end }: NavProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${isActive ? "btn-primary" : "btn-ghost"} btn normal-case text-xl `
      }
      end={end}
    >
      {domRender}
    </NavLink>
  );
}

export default Link;
