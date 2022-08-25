import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="footer p-4 text-base-content rounded-b items-end bg-slate-700">
      <div className="grid grid-flow-col gap-4 m-0 p-0">
        <FooterLink path="/team" domRender="Our Team" />
        <FooterLink path="/rules" domRender="Game Rules" />
      </div>
    </footer>
  );
}

export default Footer;
