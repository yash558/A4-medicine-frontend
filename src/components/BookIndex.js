import React, { useState } from "react";

import PopChart from "./PopChart";

const BookIndex = ({ BookIndex1, BookIndex2 }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
 
  const handleClick1 = () => {
    setIsOpen1(true);
  };

  const handleClick2 = () => {
    setIsOpen2(true);
  };

  const handleOnClose1 = () => {
    setIsOpen1(false);
  };

  const handleOnClose2 = () => {
    setIsOpen2(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex justify-center flex-col items-center">
        <img
          src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${BookIndex1}`}
          alt=""
          className="h-[90%] items-center"
          loading="lazy"
        />
        <button
          className="absolute items-center mt-0 pt-0 left-[50%] md:left-[25%] -translate-x-1/2 -translate-y-1/2 text-center h-10 w-[30%] md:w-[20%] text-white hover:bg-[#F17732] text-xl bg-[--main-color]"
          onClick={handleClick1}
        >
          Check Index
        </button>

        {isOpen1 && (
          <PopChart
            onClose={handleOnClose1}
            visible={isOpen1}
            image={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${BookIndex1}`}
            name=""
          />
        )}
      </div>
      {BookIndex2 ? (
        <div className="flex justify-center flex-col items-center">
          <img
            src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${BookIndex2}`}
            alt=""
            className="h-[90%] items-center"
            loading="lazy"
          />
          <button
            className="absolute items-center mt-0 pt-0 left-[50%] md:left-[75%] -translate-x-1/2 -translate-y-1/2 text-center h-10 w-[30%] md:w-[20%] text-white hover:bg-[#F17732] text-xl bg-[--main-color]"
            onClick={handleClick2}
          >
            Check Index
          </button>

          {isOpen2 && (
            <PopChart
              onClose={handleOnClose2}
              visible={isOpen2}
              image={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${BookIndex2}`}
              name=""
            />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BookIndex;
