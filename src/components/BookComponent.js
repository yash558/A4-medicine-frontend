import React from "react";
import CountTime from "./CountTime";

const BookComponent = ({ image, title, subtitle, bottomTitle, countDown }) => {
  return (
    <div>
      <div className="bg-[--main-color] h-full py-20  w-[100%] relative mt-12 md:pt-24 flex items-center justify-center flex-col">
        {countDown ? (
          <CountTime />
        ) : (
          <img src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${image}`} alt="" className="flex h-[400px]" />
        )}
        <h1 className=" text-2xl md:text-3xl mx-10  text-[#E1E9FB] text-center  font-bold ">
          {title}
        </h1>
        <h3 className=" text-3xl md:text-4xl  text-white text-center my-4  font-bold w-[100%] md:w-[50%]">
          {subtitle}
        </h3>
        <h1 className=" text-3xl md:text-4xl  text-[#E1E9FB] text-center  font-bold ">
          {bottomTitle}
        </h1>
      </div>
    </div>
  );
};

export default BookComponent;
