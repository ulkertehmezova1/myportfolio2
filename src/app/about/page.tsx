"use client";

import React from "react";
import Me from "@/components/shared/cards/about-me-card";
import Skills from "@/components/shared/skils";
import MyExperience from "@/components/shared/cards/my-experience";

const About = () => {
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
    <div className=" flex  flex-col mt-20 ">
      <h1 className="text-h1Size font-acorn tracking-[-3px] sm:tracking-[-2px] font-[600] self-center justify-center">
        I'm Na&#769;r
      </h1>
      <Me onLinkClick={handleLinkClick} />
      <Skills />
      <MyExperience />
    </div>
  );
};

export default About;
