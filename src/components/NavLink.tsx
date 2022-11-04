import { NavLink } from "react-router-dom";

interface NavProps {
  path: string;
  thisWillBeUnsued?: number;
  end?: boolean;
  icon: JSX.Element;
  domRender: string;
}

function Link({ path, end, icon, domRender }: NavProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${isActive ? "btn-primary" : "btn-ghost"} btn bold`
      }
      end={end}
    >
      <>
        {domRender}
        {icon}
      </>
    </NavLink>
  );
}

export default Link;
