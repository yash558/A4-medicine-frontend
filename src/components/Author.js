import React from "react";
import { author } from "../assets";
const Author = () => {
  return (
    <div className="py-10 text-white">
      <div className="text-center mt-8">
        <div className="text-4xl font-semibold">
          <h1 className="text-black font-semibold text-4xl md:text-5xl text-center flex items-center justify-center">
            Meet The&nbsp;<span className="text-[--main-color]">Author</span>{" "}
          </h1>
          <p className="text-gray-400 my-3 text-sm md:text-lg">
            something about the author
          </p>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div>
              <div className="text-gray-400 my-3">
                <p className="text-xl md:text-2xl text-justify w-[90%]">
                  Dr Rahul Srivastava MD Physician MRCGP (London) Dr Rahul
                  Srivastava, founder of the A4Medicine project is a general
                  practitioner working in United Kingdom. He completed his
                  graduation from Odessa and briefly worked in India before
                  moving to the UK. Dr Srivastava has been working in the field
                  of primary care since 2008 after completing his General
                  Practitioner training from Swansea. <br /> <br /> Currently,
                  he works as a full-time General Practitioner in South Wales.
                  Dr Srivastava has worked with passion and dedication to make
                  the guidebook for over four years and is thrilled to share his
                  work with you. <br />
                  <br /> He hopes his work will help meet your specific needs as
                  a primary care physician in providing exceptional healthcare
                  services, where ever you practice.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center ">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-md">
                <img
                  src={author}
                  alt=""
                  className="w-full object-cover p-1 bg-[--main-color] rounded-xl"
                  loading="lazy"
                />
                <h2 className="text-[--main-color] mt-4 text-xl md:text-3xl">
                  Dr Rahul Srivastava
                </h2>
                <p className="text-[--main-color] text-sm md:text-lg">MD Physician <br /> MRCGP (London)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
