import React from "react";
import ai from "../../../../../public/images/ai.png";
import Image from "next/image";
import { myWorks } from "@/mocks/my-works";
import { Grid } from "@mui/material";

const WorksCard = () => {
  return (
    <div className="my-0 mx-auto">
      <Grid container spacing={2}>
        {myWorks?.map((work: any, index: number) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <div className="">
              <a
                href={work.path}
                className="block py-[30px] px-[20px] bg-header overflow-hidden relative   text-[#fff] z-[2] group w-full h-full rounded-[28px]"
              >
                <div className="h-[128px] w-[128px] bg-[#f9b234] z-[1] absolute top-[-75px] right-[-75px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:scale-[10] "></div>

                <div className="min-h-[87px] mt-0 mx-0 mb-[25px] overflow-hidden font-bold text-3xl z-[10] relative">
                  {work.name}
                </div>

                <div className="text-lg text-[#fff] z-[2] relative">
                  Start:
                  <span className="font-bold text-[#f9b234] transition-[color .5s ease] group-hover:text-[#fff] transition-all duration-500 ease-in-out">
                    {work.startDate}
                  </span>
                </div>
              </a>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WorksCard;
