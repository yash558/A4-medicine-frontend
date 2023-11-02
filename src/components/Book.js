import React from "react";
import { Link } from "react-router-dom";
import { Book1, Book2 } from "../assets";
import scrollToTop from './scrollToTop';
const Book = () => {
 
 
  return (
    <div className="bg-[--main-color]  my-12">
      <div className="flex flex-wrap justify-evenly text-white p-8">
        <div className="text-center flex flex-col mt-6 items-center justify-between">
          <img src={Book2} alt="" className="h-96" />
          <h2 className="text-2xl font-bold p-3">
            A VISUAL GUIDEBOOK OF BASIC <br /> AND ESSENTIAL GENERAL <br />{" "}
            PRACTICE / FAMILY MEDICINE
          </h2>
          <h5 className="text-xl font-semibold">Just For £60</h5>
          <button className="border-2 bg-white   font-semibold px-8 mt-4 text-xl h-12 text-black"  onClick={scrollToTop}>
            <Link
              to="/book/64953bbeea5bc673e346683a"
            >
              Buy Now
            </Link>
          </button>
        </div>
        <div className="text-center flex flex-col mt-6 items-center justify-between">
          <img src={Book1} alt="" className="h-96" />
          <h2 className="text-2xl font-bold p-2">
            ESSENTIALS OF CANCER MEDICINE <br /> IN PRIMARY CARE
          </h2>
          <h5 className="text-xl font-semibold ">Just For £40</h5>
          <button className="border-2 bg-white text-black font-semibold px-8 mt-2 text-xl h-12"  onClick={scrollToTop}>
            <Link
              to="/book/64953c90ea5bc673e346683d"            >
              Buy Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
