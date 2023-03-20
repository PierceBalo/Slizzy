import React from "react";
import Image from "next/image";
import { conceptOne, conceptTwo } from "../../../public/images";

const Concepts = () => {
  return (
    <>
      <div className="w-full h-[0.5px] bg-white my-10" />
      <div className="relative font-neutralFace px-3 w-full h-fit">
        <div className="my-32">
          <p className="text-2xl sm:text-9xl md:text-[1rem] xl:text-[12rem] font-light leading-none uppercase">
            Music
          </p>
          <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[12rem]  font-light leading-none uppercase">
            Is More
          </p>
          <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[12rem] indent-[10vw] font-light leading-none uppercase">
            Than The
          </p>
          <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[12rem] font-light leading-none uppercase">
            Notes
          </p>
        </div>
        <div className="w-full h-[0.5px] bg-transparent md:bg-white mb-[20vh] md:mb-[40vh]" />
        <div className="absolute top-[30%] md:top-0 right-0 flex items-center flex-col w-[60vw] mt-[30vh]">
          <div className="hidden md:block mb20">
            <p className="text-xl">(CONCEPTS)</p>
            <p className="text-xl">(IDEAS)</p>
            <p className="text-xl">(MOTIVES)</p>
          </div>
          <Image
            src={conceptOne}
            alt="concept"
            className="-z-10 my-10 w-[50%]"
          />
          <Image
            src={conceptTwo}
            alt="concept"
            className="my-10 w-[70%] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Concepts;
