import { Link } from "react-router-dom";

interface FooterLinkProps {
  path: string;
  domRender: string;
  thisWillBeUnsued?: number;
}

function FooterLink({ path, domRender }: FooterLinkProps) {
  return (
    <Link to={path} className="link link-hover">
      {domRender}
    </Link>
  );
}

export default FooterLink;
