import { NavLink } from "react-router-dom";

interface NavProps {
  path: string;
  thisWillBeUnsued?: number;
  end?: boolean;
  children?: String | JSX.Element | JSX.Element[];
}

function Link({ path, end, children }: NavProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${isActive ? "btn-primary" : "btn-ghost"} btn bold`
      }
      end={end}
    >
      {children}
    </NavLink>
  );
}

export default Link;
