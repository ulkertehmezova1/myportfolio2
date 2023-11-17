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
          <h2 className=" text-h2Size font-[700] font-acorn leading-none mb-3">I&apos;m a Data Analytic based on Baku.</h2>
          <p className="text-secondary text-fontBody mb-4">
            Enthusiastic data analyst with over 1 years of experience in analyzing complex datasets, generating reports,
            and providing data-driven recommendations. Achievements include leading successful advertising campaigns,
            implementing advanced statistical models, and driving data-driven decision making resulting in cost savings
            and operational improvements. Passionate about leveraging data to uncover valuable insights and contribute
            to business success. Excited about the opportunity to apply my skills and contribute to a dynamic data
            analytics team.
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
