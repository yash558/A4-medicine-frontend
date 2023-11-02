import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PopFeature = ({ visible, onClose, desc }) => {
  const formatText = desc.split("<br>").map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
      <br />
    </React.Fragment>
  ));
  console.log(desc);
  const handleStatOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleStatOnClose}
      className="fixed inset-0 z-[1000] overflow-y bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-4  rounded-xl flex flex-col w-[90%] md:w-[60%]">
        <button className="text-2xl md:text-3xl font-bold flex justify-end" onClick={onClose}>
          <FontAwesomeIcon icon={faClose}/>
        </button>
        <h5 className="text-[15px] md:text-xl text-[--main-color] text-justify font-sans">
        {formatText && formatText?.length > 0 ? formatText : desc}
        </h5>
      </div>
    </div>
  );
};

export default PopFeature;
