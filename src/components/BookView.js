import React from "react";

const BookView = ({price, link, video}) => {
  const email = localStorage.getItem("email");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  return (
    <div className="text-center flex flex-col items-center justify-center my-12">
      <h1 className="text-center font-bold text-3xl capitalize md:text-5xl text-[--main-color] my-8 w-[70%]">
      Discover the ultimate guidebook catered to primary care clinicians. 
      </h1>
      <video
        src={video}
        loop
        autoPlay
        muted        
        className="h-[90%] w-[90%] md:h-[60%] md:w-[60%] "
      ></video>
      <button className="border-2 bg-[--main-color] text-white   font-semibold px-8 mt-4 text-xl h-12 ">
        <a
          href={link}
        >
          Buy Now
        </a>
      </button>
      <h5 className="text-3xl text-[--main-color] my-4 font-semibold">
         £ {price}
      </h5>
    </div>
  );
};

export default BookView;
