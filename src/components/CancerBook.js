import React from "react";
import { Book1 } from "../assets";
import { CancerTopic } from "../constants";
const CancerBook = () => {
  const email = localStorage.getItem("email");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  return (
    <div className="bg-[--main-color]  my-12">
      <div className="flex flex-wrap justify-evenly text-white p-8">
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-bold text-center mb-8 capitalize">
            Why Should You Get The Book?
          </h1>
          <ul className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            {CancerTopic.map((topic, i) => (
              <li
                key={i}
                className="flex items-center justify-start text-justify text-lg md:text-xl font-bold"
              >
                <svg
                  fill="#83FF08"
                  width="25px"
                  height="25px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>tick-checkbox</title>
                  <path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h20q2.464 0 4.224 1.76t1.76 4.256v20q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM4 26.016q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-20q-0.832 0-1.44 0.608t-0.576 1.408v20zM7.584 16q0-0.832 0.608-1.408t1.408-0.576 1.408 0.576l2.848 2.816 7.072-7.040q0.576-0.608 1.408-0.608t1.408 0.608 0.608 1.408-0.608 1.408l-8.48 8.48q-0.576 0.608-1.408 0.608t-1.408-0.608l-4.256-4.256q-0.608-0.576-0.608-1.408z"></path>
                </svg>
                &nbsp; {topic}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center flex flex-col mt-6 items-center justify-center">
          <img src={Book1} alt="" className="h-96" />
          <h2 className="text-2xl font-bold p-3">
            ESSENTIAL OF CANCER MEDICINE <br /> IN PRIMARY CARE
          </h2>
          <h5 className="text-xl font-semibold">£40 </h5>
          <button className="border-2 bg-white   font-semibold px-8 mt-4 text-xl h-12 text-black">
            <a
              href={` https://zohosecurepay.eu/checkout/5p75ga9d-zb3br7m3s1dt4/A-VISUAL-GUIDEBOOK-OF-BASIC-AND-ESSENTIAL-GENERAL-PRACTICE--FAMILY-MEDICINE`}
            >
              Buy Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancerBook;
