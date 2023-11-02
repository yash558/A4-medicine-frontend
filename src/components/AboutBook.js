import React from "react";
import { motion } from 'framer-motion';

const AboutBook = ({ image, desc }) => {

  const formatText = desc.split("<br>").map((item, index) => {
    return (
      <span key={index}>
        {item}
        <br />
        <br />
      </span>
    );
  });


  return (
    <div className="py-10 text-white">
      <div className="text-center mt-8">
        <div className="text-4xl font-semibold">
          <h1 className="text-black font-semibold text-4xl md:text-5xl text-center flex items-center justify-center my-12">
            About The&nbsp;<span className="text-[--main-color]">Book</span>{" "}
          </h1>
          {/* <p className="text-gray-400 my-3 text-sm md:text-lg">
            something about the author
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2  ">
            <div className="flex items-center justify-center"  >
              <motion.img
              whileHover={{scale: 1.2}}
              src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${image}`}
                alt=""
                className="md:h-[600px] h-[400px]  object-contain p-1 bg-[--main-color] rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="flex md:flex-row flex-col-reverse items-center  px-10 max-w-4xl mx-auto">
              <div>
                <div className="text-gray-400 my-3">
                  <p className="text-xl md:text-2xl text-justify w-[90%]">
                    {formatText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBook;
