import React from "react";
import ServiceCard from "../cards/services-card";

const MyServices = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-9">
        <h1 className="font-acorn font-bold text-[3rem] text-header bg-white30 mb-3">My Services</h1>
        <h1 className="text-center">Explore the wide range of services I offer.</h1>
      </div>
      <ServiceCard />
    </>
  );
};

export default MyServices;
