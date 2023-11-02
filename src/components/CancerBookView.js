import React from "react";

const CancerBookView = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center my-12">
      <h1 className="text-center font-bold text-3xl md:text-5xl text-[--main-color] my-8">
        Find out why trainees love this book! <br /> Prepare for exams.
      </h1>
      <video
        src="https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/6487ff7769880a7a0b7a8af6/videos/d6d69f69-eed8-4051-ba85-e9d002ca995e.mp4"
        loop
        autoPlay
        muted
        className="h-[90%] w-[90%] md:h-[60%] md:w-[60%] "
      ></video>
      <button className="border-2 bg-[--main-color] text-white   font-semibold px-8 mt-4 text-xl h-12 ">
        <a
          href={`https://zohosecurepay.eu/checkout/jndjcxzc-i6f6lxcfthwsf/ESSENTIALS-OF-CANCER-MEDICINE-IN-PRIMARY-CARE`}
        >
          Buy Now
        </a>
      </button>
      <h5 className="text-3xl text-[--main-color] my-4 font-semibold">£40</h5>
    </div>
  );
};

export default CancerBookView;
