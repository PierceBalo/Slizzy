import React from "react";
import Image from "next/image";
import {
  awardOne,
  awardTwo,
  awardThree,
  awardFour,
  awardFive,
  awardSix,
} from "../../../public/images";

const Award = () => {
  return (
    <>
      <div className="w-full h-[0.5px] bg-white my-10" />
      <div className="relative font-neutralFace">
        <div className="bg-[#e7e7e7] text-black h-[80vh]">
          <div className="px-3 py-2">
            <div className="w-full h-[1px] bg-black" />
            <div className="flex justify-between w-full text-xs py-2">
              <div>BOLD</div>
              <div>CUTURALLY CONNECTED</div>
              <div>INCLUSIVE</div>
            </div>
            <div className="my-28">
              <div className="text-sm md:text-xl">(OUR AWARDS)</div>
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug indent-[25vw] my-2">
                NOT FOR OUR EGOS, BUT BECAUSE AWARDS ARE A MEASURE OF
                CREATIVITY, ORIGINALITY AND QUALITY. AIMING FOR AWARDS PUSHES US
                TO THINK DEEPER, GO FURTHER AND HAVE MEANINGFUL CONVERSATIONS
                ABOUT WHAT CREATIVITY IS.
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50vh] sm:h-[70vh] bg-black text-[#e7e7e7]">
          <div
            className="flex items-center justify-center w-full h-full 
          text-center text-7xl sm:text-9xl md:text-[10rem] xl:text-[12rem] leading-none"
          >
            <h1 className="-mt-[50vh] mix-blend-difference">
              WE PLAY <br /> TO WIN
            </h1>
          </div>
        </div>
        <div className="absolute top-[30%] right-[10%]">
          <Image
            alt="award"
            src={awardOne}
            className=" h-19 sm:h-40 md:h-60 z-10 object-contain"
          />
        </div>
        <div className="absolute bottom-[10%] left-[15%]">
          <Image
            alt="award"
            src={awardTwo}
            className=" h-19 sm:h-40 md:h-60 z-10 object-contain"
          />
        </div>
        <div className="absolute bottom-[50%] left-[20%]">
          <Image
            alt="award"
            src={awardThree}
            className=" h-19 sm:h-40 md:h-60 z-10 object-contain"
          />
        </div>
        <div className="absolute bottom-[30%] left-[60%]">
          <Image
            alt="award"
            src={awardFour}
            className=" h-19 sm:h-40 md:h-60 z-10 object-contain"
          />
        </div>
        <div className="absolute right-[50%] bottom-[30%]">
          <Image
            alt="award"
            src={awardFive}
            className=" h-19 sm:h-40 md:h-60 z-10 object-contain"
          />
        </div>
        <div className="absolute bottom-[15%] left-[35%]">
          <Image
            alt="award"
            src={awardSix}
            className=" h-19 sm:h-40 md:h-60 z-10 object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Award;
