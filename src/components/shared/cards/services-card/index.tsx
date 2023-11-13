import React from "react";
import img from "../../../../../public/images/showcase_wirebox.png";
import Image from "next/image";
import { services } from "@/mocks/my-services";

const ServiceCard = () => {
  return (
    <div className="grid gap-[30px] max-w-[1600px] xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4">
      {services?.map((servise, index) => (
        <a
          className="rounded-xl bg-white backdrop-blur-md saturate-150 no-underline overflow-hidden relative transition-all col-span-2 hover:-translate-y-3 hover:shadow-cardHoverShadow"
          key={index}
        >
          <div className="flex items-start justify-start relative gap-4 h-full p-9">
            <div className="flex flex-col gap-[16px]">
              <div className="text-header font-bold ">{servise.title}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ServiceCard;
