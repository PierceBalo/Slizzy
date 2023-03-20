import React from "react";
import Image from "next/image";

import { office } from "../../../public/images";

const Office = () => {
  return (
    <>
      <div className=" w-full h-[0.5px] bg-white" />
      <div className=" relative h-fit font-neutralFace w-full py-5 px-3">
        <div className="py-10 flex flex-col">
          <h1 className=" text-5xl md:text-7xl font-bold">
            unleash new levels of <br /> CREATIVITY
          </h1>
          <div className=" flex my-2 items-end w-full justify-end">
            <h1 className=" text-3xl md:text-5xl font-bold mx-4 lg:mx-10">
              OFFICE
            </h1>
            <Image alt="office" src={office} className="w-[50vw]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold flex items-start">
            AMSTERDAM
            <span className="text-xl font-normal mt-2 mx-5">(9:34PM)</span>
          </h1>
        </div>
        <div className="w-full h-[0.5px] bg-white" />

        <div className="flex flex-col lg:flex-row justify-between py-10 pb-32">
          <div className="text-lg">
            (LETS HEAR <br /> SOMETHING)
          </div>
          <div className="text-5xl lg:text-8xl font-bold overflow-hidden">
            INVENTEDMOST.COM
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-white"></div>
      </div>
    </>
  );
};

export default Office;
