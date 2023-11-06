import React from "react";
import ai from "../../../../../public/images/ai.png";
import Image from "next/image";
import { myWorks } from "@/mocks/my-works";

const WorksCard = () => {
  return (
    <div className="w-[1142px] my-0 mx-auto">
      <div className="flex  items-start flex-wrap py-[50px] px-0">
        {myWorks?.map((work: any, index: number) => (
          <div
            className="basis-[calc(33.33333%-30px)] mt-0 mx-[15px] mb-[30px] overflow-hidden rounded-[28px]"
            key={index}
          >
            <a
              href="#"
              className="block py-[30px] px-[20px] bg-header overflow-hidden relative   text-[#fff] z-[2] group"
            >
              <div className="h-[128px] w-[128px] bg-[#f9b234] z-[1] absolute top-[-75px] right-[-75px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:scale-[10] "></div>

              <div className="min-h-[87px] mt-0 mx-0 mb-[25px] overflow-hidden font-bold text-3xl z-[10] relative">
                {work.name}
              </div>

              <div className="text-lg text-[#fff] z-[2] relative">
                Start:
                <span className="font-bold text-[#f9b234] transition-[color .5s ease]">{work.startDate}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksCard;
