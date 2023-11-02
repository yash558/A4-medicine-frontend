import React from "react";

const BookSell = ({ image, link, price }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center my-12">
      <img src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${image}`} alt="" className="w-[40%] h-[40%] outline" />
      <button className="border-2 bg-[--main-color] text-white   font-semibold px-8 mt-4 text-xl h-12 ">
        <a href={link}>Buy Now</a>
      </button>
      <h5 className="text-3xl text-[--main-color] my-4 font-semibold">
         £ {price} 
      </h5>
    </div>
  );
};

export default BookSell;
