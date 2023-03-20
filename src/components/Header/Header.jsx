import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { close, menu } from "../../../public/images";
import gsap from "gsap";

const Header = () => {
  let resMenu = useRef(null);
  let resMenuHeader = useRef(null);
  let resMenuItemOne = useRef(null);
  let resMenuItemTwo = useRef(null);
  let resMenuItemThree = useRef(null);
  let resMenuItemFour = useRef(null);
  function menuOpen() {
    openMenu.reversed() ? openMenu.play() : openMenu.reverse();
  }

  const openMenu = gsap.timeline({ paused: "true", reversed: "true" });
  useEffect(() => {
    openMenu.to(resMenu.current, {
      y: 0,
      zIndex: 100,
      duration: 0.2,
    });

    openMenu.from(
      [
        resMenuHeader.current,
        resMenuItemOne.current,
        resMenuItemTwo.current,
        resMenuItemThree.current,
        resMenuItemFour.current,
      ],
      {
        duration: 0.5,
        stagger: {
          amount: 0.4,
        },
        y: -50,
      }
    );
  }, []);
  return (
    <div>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]"
      >
        <div
          ref={resMenuHeader}
          className="flex items-start justify-between w-[100%] h-fit py-[5px]"
        >
          <div className="mx-[5px] mix-blend-difference font-momentum font-semibold text-[20px] leading-none">
            Winged <br /> Anubis
          </div>
          <div
            className="block md:hidden cursor-pointer mx-[5px]"
            onClick={menuOpen}
          >
            <Image
              src={close}
              alt="closeicon"
              className="w-9 object-contain invert"
            />
          </div>
        </div>
        <div className="mx-2 my-10 space-y-1">
          <span className=" overflow-hidden block">
            <div
              ref={resMenuItemOne}
              className="font-neutralFace font-bold text-[30px] uppercase"
            >
              work
            </div>
          </span>
          <span className=" overflow-hidden block">
            <div
              ref={resMenuItemTwo}
              className="font-neutralFace font-bold text-[30px] uppercase"
            >
              about
            </div>
          </span>
          <span className=" overflow-hidden block">
            <div
              ref={resMenuItemThree}
              className="font-neutralFace font-bold text-[30px] uppercase"
            >
              publications
            </div>
          </span>
          <span className=" overflow-hidden block">
            <div
              ref={resMenuItemFour}
              className="font-neutralFace font-bold text-[30px] uppercase"
            >
              office
            </div>
          </span>
        </div>
      </div>
      <div
        className="absolute bg-black top-0 py-[5px] 
      font-neutralFace h-[20vh] flex justify-between flex-col w-[100%]"
      >
        <div
          id="header"
          className="flex items-start justify-between w-[100%] h-fit"
        >
          <div className="mx-[5px] mix-blend-difference font-momentum font-semibold text-[20px] leading-none">
            Winged <br /> Anubis
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace text-30[px] uppercase">
            work
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace text-30[px] uppercase">
            about
          </div>

          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace text-30[px] uppercase">
            publications
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace text-30[px] uppercase">
            office
          </div>
          <div className="block md:hidden cursor-pointer mx-[5px]">
            <Image
              src={menu}
              alt="menu"
              className="w-9 object-contain invert"
              onClick={menuOpen}
            />
          </div>
        </div>
        <div className="flex items-start text-sm justify-between sm:justify-evenly px-5 w-[100%] h-fit">
          <div>
            An Independent <br /> Music Agency
          </div>
          <div>Amsterdam</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
