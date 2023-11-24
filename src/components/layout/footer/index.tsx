import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full text-footerGreen relative"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr min(1440px, 94%) 1fr",
      }}
    >
      <div className="col-start-2 flex sm:flex-col justify-between sm:gap-4">
        <div className="self-center font-acorn font-[500] sm:order-3">&copy; 2023 Narin Tehmezova</div>
        <div className="flex gap-20 sm:self-center">
          <div>
            <ul className="space-y-3">
              <p className="text-header font-[600]">Elsewhere</p>
              <li>Figma</li>
              <li>Github</li>
              <li>Posts</li>
              <li>CV</li>
            </ul>
          </div>

          <div>
            <p className="text-header font-[600]">Contact</p>
            <ul className="space-y-3">
              <li>Message</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
