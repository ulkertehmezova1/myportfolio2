import React from "react";
import { Grid, Slider } from "@mui/material";
import { skills } from "@/mocks/skills";

const Skills = () => {
  const SkillCard = () => {
    return (
      <div className="flex flex-col gap-4 text-footerGreen">
        <div className="flex justify-between">
          <span className="font-[700] text-footerGreen ">JavaScript</span>
          <span>
            75<span>%</span>
          </span>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
        <div>
          <Slider disabled defaultValue={40} className="slider" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-bold text-[2rem] text-header bg-white30 mb-14 uppercase mt-14">Professional skills</h2>
      <div className="w-full">
        <Grid container spacing={8}>
          {skills?.map((skill: any) => (
            <Grid item md={4} xs={12} className="" key={skill?.id}>
              <SkillCard />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
