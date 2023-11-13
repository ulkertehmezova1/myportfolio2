import React from "react";
import Image from "next/image";
import star1 from "../../../../public/images/star-1.svg";

const PageTitle = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center text-5xl font-acorn text-[7rem] font-[600] mt-40 sm:mt-10">
        <div className="self-end mr-10">
          <Image src={star1} alt="star" width={50} height={50} />
        </div>
        <div>
          <div className="text-header">
            <h1 className="leading-none tracking-[-3px] sm:tracking-[-2px] text-h1Size">
              <span className="whitespace-nowrap"> Hi. I&apos;m Narin.</span>
              <span className="md:whitespace-break-spaces sm:block sm:whitespace-nowrap">{`\nData Analytic`}</span>
            </h1>
          </div>
        </div>

        <div className="self-start  mt-[-30px]">
          <Image src={star1} alt="star" width={50} height={50} />
        </div>
      </div>
      <div className="mb-9">
        <div className="grid text-center grid-cols-title mt-10">
          <p style={{ gridColumn: "2" }} className="text-center col-span-2">
            I&apos;m passionate about crafting experiences that are engaging, accessible, and user-centric.
          </p>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
