import { stories } from "@/mocks/my-stories";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

const MyExperience = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-header bg-white30 mb-14 uppercase mt-14">My Story</h1>
      <div className="steps-progress">
        <ul className="steps-list">
          {stories?.map((skill: any, index: any) => (
            <li className="steps-item" key={index}>
              <h3 className="head mb-2">{skill?.position}</h3>
              <div className="location">
                <FaBuilding className="inline mr-2 " />
                {skill?.company}
              </div>
              <div className="periode">
                <FaCalendar className="inline mr-2" />
                {skill?.date}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyExperience;
