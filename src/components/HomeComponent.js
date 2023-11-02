import React from "react";
import CountTime from "./CountTime";

const HomeComponent = ({ image, title, subtitle, bottomTitle, countDown }) => {
  return (
    <div className="pt-20 md:pt-0">
      <div className="bg-[--main-color] h-full py-20 w-full relative mt-12 md:pt-24 flex items-center justify-center flex-col">
        {countDown ? (
          <CountTime />
        ) : (
          <img
            src={image}
            alt=""
            className="flex  md:h-[400px] h-[200px] max-w-full"
          />
        )}
        <h1 className="text-2xl md:text-3xl mx-6 sm:mx-10 text-[#E1E9FB] text-center font-bold">
          {title}
        </h1>
        <h3 className="text-xl md:text-2xl text-white text-center my-2 sm:my-4 font-bold w-[100%] md:w-[50%]">
          {subtitle}
        </h3>
        <h1 className="text-2xl md:text-3xl text-[#E1E9FB] text-center font-bold">
          {bottomTitle}
        </h1>
      </div>
    </div>
  );
};

export default HomeComponent;
