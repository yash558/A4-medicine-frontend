import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import {
  faChevronRight,
  faClock,
  faMicrophoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const WebinarCard = ({ image, title, description, speaker, date, time, id }) => {
  const plan = localStorage.getItem("plan");
  console.log(plan);
  const formatText = description.split("<br>").map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
      <br />
    </React.Fragment>
  ));

  return (
    <div className="grid grid-cols-2 p-2 my-12 mx-20 border-2  bg-white shadow-lg border-gray-200 w-[100%] rounded-xl">
      <div className="flex items-start justify-start ">
        <img src={image} alt="" className=" p-2  flex items-start justify-start" loading="lazy" />
      </div>
      <div className="flex flex-col m-4 items-center justify-center ">
        <h2 className="text-3xl text-[--main-color] text-center font-bold m-4">
          {title}
        </h2>
        <h3 className="text-black text-xl font-[500] my-2 text-justify">{formatText}</h3>
        <h5 className="flex mt-2 mb-2 text-xl font-semibold">
          <FontAwesomeIcon icon={faMicrophoneAlt} className="mt-1" />
          &nbsp; Speaker: &nbsp; <span>{speaker} </span>{" "}
        </h5>
        <h3 className="flex mb-12 text-xl font-semibold">
          <FontAwesomeIcon icon={faClock} className="mt-1" />
          &nbsp; Time: &nbsp; <span>{date}</span>&nbsp; at {time} hrs
        </h3>
        <div className="flex flex-wrap items-center justify-center mt-auto gap-4">
          <button className="bg-[--main-color] text-white font-bold text-xl h-12 w-44">
            <Link to={`/webinar/${id}`} onClick={scrollToTop}>
              Play Now &nbsp;
              <FontAwesomeIcon icon={faChevronRight} className="mt-1" />
            </Link>
          </button>
          <button className={`bg-[--main-color] ${plan === "bronze" ? "hidden": "visible"} text-white font-bold text-xl h-12 w-44`}>
            Subscribe Now &nbsp;
            <FontAwesomeIcon icon={faChevronRight} className="mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebinarCard;
