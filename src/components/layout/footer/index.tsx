"use client";
import React from "react";

const Footer = () => {
  const handleLinkClick = () => {
    const pdfUrl = "Narın-Təhməzova-Cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <li>
                <a href="https://github.com/narintahmaz">Github</a>
              </li>
              <li>
                <a href="/blog">Posts</a>
              </li>
              <li>
                <button onClick={handleLinkClick} style={{ all: "unset", cursor: "pointer" }}>
                  CV
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-header font-[600]">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="/contact">Message</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
