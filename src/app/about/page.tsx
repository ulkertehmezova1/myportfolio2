"use client";

import React from "react";
import Me from "@/components/shared/cards/about-me-card";
import Skills from "@/components/shared/skils";
import MyExperience from "@/components/shared/cards/my-experience";
import Head from "next/head";

const About = () => {
  const handleLinkClick = () => {
    const pdfUrl = "Ulker_Tehmezova_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className=" flex  flex-col mt-20 ">
      <Head>
        <title>About me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-h1Size font-acorn tracking-[-3px] sm:tracking-[-2px] font-[600] self-center justify-center">
        I&apos;m Ulka&#769;r
      </h1>
      <Me onLinkClick={handleLinkClick} />
      <Skills />
      <MyExperience />
    </div>
  );
};

export default About;
