import React, { useState } from "react";

const ReadMore = ({ shortContent, longContent }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="max-w-full items-center flex flex-col  p-4 rounded">
      {/* {shortContent} */}
      <span
        className={` overflow-hidden text-justify  text-xl text-bold p-12 items-left inline-block  ${
          collapse ? "h-96" : "h-full"
        }`}
      >
        {longContent}
      </span>
    
      <button
        className="bg-[--main-color] text-white h-12 w-32"
        onClick={() => setCollapse((prev) => !prev)}
      >
        { collapse ? 'Read More': 'Read Less'}
      </button>

    </div>
  );
};

export default ReadMore;
