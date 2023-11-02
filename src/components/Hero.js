import React, { useState } from "react";
import bgImg from "../assets/bgmain.png";
import PopupCard from "./PopupCard";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="h-full pt-44 w-full bg-[#E1E9FB] flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-12">
          <div className="effect-wrap ">
            <i className="fas fa-plus text-[#EFFF10] text-3xl animate-spin-slow absolute z-10 left-[10%] top-[20%]"></i>
            <i className="fas fa-plus text-[orange] animate-spin-slow text-3xl absolute z-10 left-[90%] bottom-[30%]"></i>
            {/* <i className="fas fa-circle-notch text-[orange] animate-spin-slow text-3xl absolute z-10 left-[10%] bottom-[10%]"></i> */}
            {/* <img src={healthcare} alt="" className='h-24 absolute left-[60%] md:left-[50%] top-[84%] md:top-[80%]  animate-pulse' /> */}
          </div>
          <p className="text-xl">
            "A4Medicine: Your comprehensive, fully referenced educational
            resource for primary care clinicians worldwide."
          </p>
          <h1 className="py-3 uppercase text-[#112653]  text-3xl md:text-5xl font-bold">
            Welcome to A4 Medicine
          </h1>
          <p className="text-2xl font-bold">
            A4Medicine your path to primary care <br /> exams success and safe
            practice!.
          </p>
          <button
            className="my-8 text-center h-14 text-white hover:bg-[#F17732] text-2xl sm:w-[30%] bg-[--main-color] "
            onClick={handleClick}
          >
            Read More
          </button>
          {isOpen && <PopupCard onClose={handleOnClose} visible={isOpen} />}
        </div>
        <div>
          <img
            loading="lazy"
            src={bgImg}
            alt=""
            className="w-full h-[380px] md:h-[520px]"
          />
        </div>
      </div>
      {/* <div className="absolute flex text-2xl top-[60%] right-[8%] md:top-[22%] md:right-[10%] z-20 shadow-md text-center bg-white rounded-md px-4 py-4">
        <h5>Prepare</h5>
        <span className="w-8 h-6 m-auto flex items-center justify-center">➡️</span>
        </div>
        <div className="absolute flex text-2xl top-[100%] left-[4%] md:top-[60%] md:left-[44%]   z-20 shadow-md text-center bg-white rounded-md px-4 py-4">
        <h5>Practice</h5>
        <span className="w-8 h-6 m-auto flex items-center justify-center"></span>
        </div>
      <div className="absolute flex text-2xl top-[120%] right-[2%] md:top-[80%] md:right-[2%]  z-20 shadow-md text-center bg-white rounded-md px-4 py-4">
        <h5>Pass</h5>
        <span className="w-8 h-6 m-auto flex items-center justify-center">✅</span>
      </div>       */}
    </div>
  );
};

export default Hero;
