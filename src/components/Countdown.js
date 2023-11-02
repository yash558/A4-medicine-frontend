import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { lines } from "../assets";

const Countdown = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="flex flex-col bg-gray-100  pt-24">
      <div className="flex flex-col text-[--main-color]">
        <h3 className="text-center text-4xl font-bold">
          Fueling Growth: Where Content and Traffic Thrive!
        </h3>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className=" grid grid-cols-fluid gap-9 mt-20 mb-8 px-12">
          <div className="border-2 border-[--border] shadow-lg rounded-lg text-center p-10">
            <i className="fa-solid fa-chart-pie  text-6xl text-[--btn-color] pb-3"></i>
            <h3 className="flex items-center justify-center text-6xl text-[--black-color] py-2 ">
              {counterOn && (
                <CountUp start={0} end={600} duration={5} delay={0} />
              )}
              +
            </h3>
            <p className="text-2xl font-medium py-2">Charts</p>
          </div>
          <div className="border-2 border-[--border] shadow-lg rounded-lg text-center p-10">
            <i className="fas fa-users text-6xl text-[--btn-color] pb-3"></i>
            <h3 className="flex items-center justify-center text-6xl text-[--black-color] py-2 ">
              {counterOn && (
                <CountUp start={0} end={3000} duration={5} delay={0} />
              )}
              +
            </h3>
            <p className="text-2xl font-medium py-2">Active monthly Users</p>
          </div>
          {/* <div className="border-2 border-[--border] shadow-lg rounded-lg text-center p-10">
                    <i className="fas fa-user-md text-6xl text-[--btn-color] pb-3"></i>
                    <h3 className="flex items-center justify-center text-6xl text-[--black-color] py-2 ">{counterOn && <CountUp start={0} end={150} duration={5} delay={0} />}+</h3>
                    <p className='text-2xl font-medium py-2'>Members</p>
                </div> */}
          <div className="border-2 border-[--border] shadow-lg rounded-lg text-center p-8">
            <i className="fa-solid fa-pen-to-square text-6xl text-[--btn-color] pb-3"></i>
            <h3 className="flex items-center justify-center text-6xl text-[--black-color] py-2 ">
              {counterOn && (
                <CountUp start={0} end={1500} duration={5} delay={0} />
              )}
              +
            </h3>
            <p className="text-2xl font-medium py-2">AKT MCQ's</p>
          </div>
        </div>
      </ScrollTrigger>
      <div >
        <img src={lines} alt="" className="h-38 w-96" />
      </div>
    </div>
  );
};

export default Countdown;
