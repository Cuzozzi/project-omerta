import FooterLink from "./FooterLink";
import { themeChange } from "theme-change";
import { useEffect, useState } from "react";

function Footer() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <footer className="footer p-4 text-base-content rounded-b items-end bg-base-200">
      <div className="grid grid-flow-col gap-4 m-0 p-0">
        <FooterLink path="/team" domRender="Our Team" />
        <FooterLink path="/rules" domRender="Game Rules" />
        <select data-choose-theme className="bg-base-200">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="synthwave">Synthwave</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="luxury">Luxury</option>
          <option value="business">Business</option>
          <option value="night">Night</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
