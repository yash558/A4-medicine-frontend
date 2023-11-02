import React from "react";

import FeatureCard from "./FeatureCard";
import { dot } from "../../assets";

const Feature = () => {
  return (
    <div className="bg-gray-100 ">
        <img src={dot} alt="" className="h-20 md:h-44" />
      <div className="features flex mt-[0rem] md:mt-[-6rem] pb-12  items-center justify-center">
        <div className="container">
          <div className="flex flex-row justify-center">
            <div className="col-8">
              <div className="">
                <h2 className="flex flex-col text-center  mb-10 text-4xl font-bold">
                  Discover the Incredible Features of A4Medicine{" "}
                  <span className="text-[--main-color] text-center">
                    {" "}
                    &nbsp;Unleash the Power of Knowledge!
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="features-carousel">
              <FeatureCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
