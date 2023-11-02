import React, { useState } from "react";
import { stats } from "../constants";
import PopFeature from "./Popfeature";
import { motion } from "framer-motion";

const Stats = () => {
  const [isFeature, setFeature] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();
  const handleStatClick = ({index}) => {
    setFeature(true);
    setCurrentIndex(index);
    
  };
  const handleOnStatClose = () => {
    setFeature(false);
    setCurrentIndex(undefined);
  };
  const show = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="flex items-center justify-center my-4">
      <div className=" bg-[--main-color]  rounded-[20px] p-8 flex flex-col w-[85%]  items-center justify-center ">
        <div>
          <h3 className="text-xl md:text-4xl text-white font-bold px-0 md:px-16 text-center my-8">
            Dive into Charts, Engage in Webinars, Embrace Knowledge through
            Books, and Master Your Skills with MCQs at A4medicine!
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center gap-4">
          {stats.map((item, i) => {
            return (
              <motion.div
                variants={show}
                key={i}
                className=" h-full p-3 rounded-md width-[100%] bg-white flex flex-col items-center text-center    justify-between odd-border-r lg:flex-1 lg:odd:border-r lg:even:border-r"
              >
                <div className="flex flex-col items-center justify-center">
                <img src={item.icon} alt="" className="h-28  w-28 my-4" />
                <h2 className="text-[#000] text-[1.1rem] font-bold">
                  {item.title}
                </h2>
                <p className="">{item.desc}</p>
                </div>
                <div className="flex justify-center">
                    <button
                      className="text-[--main-color] text-xl mt-4 border-2 rounded-md text-center hover:text-[#F17732] hover:border-[#F17732] h-[3rem] w-[7rem] border-[#3C3CAF] border-spacing-2"
                      onClick={() => handleStatClick({ index: i })}
                    >
                      Know More
                    </button>
                  </div>
                {isFeature && currentIndex === i && (
                  <PopFeature
                    onClose={handleOnStatClose}
                    visible={isFeature}
                    desc={item.feature}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
