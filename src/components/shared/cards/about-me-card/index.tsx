import React, { FC } from "react";
import Image from "next/image";
import woman from "../../../../../public/images/woman.svg";
import { Grid } from "@mui/material";
import { FaCloudDownloadAlt } from "react-icons/fa/";

interface IMe {
  onLinkClick(): void;
}

const Me: FC<IMe> = ({ onLinkClick }) => {
  return (
    <div className="mt-20">
      <Grid container>
        <Grid item xs={12} md={6} className="flex items-center justify-center">
          <Image src={woman} width={950} height={780} alt="me" />
        </Grid>

        <Grid item xs={12} md={6}>
          <h2 className=" text-h2Size font-[700] font-acorn leading-none mb-3">I&apos;m a Front-End Developer  based on Baku.</h2>
          <p className="text-secondary text-fontBody mb-4">
          Passionate Frontend Developer with over 2 year of hands-on experience in crafting seamless user interfaces and enhancing digital experiences. Proficient in translating design concepts into high-quality, responsive, and visually appealing web applications. Excels in collaborating with cross-functional teams to bring creative ideas to life and elevate user engagement. Adept at implementing frontend frameworks, optimizing performance, and ensuring cross-browser compatibility.
          </p>
          <button onClick={onLinkClick} className="button">
            Download CV
            <FaCloudDownloadAlt className="icon" />
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Me;
