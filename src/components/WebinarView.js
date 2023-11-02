import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import API from "../api";
import './webinarview.css'
const WebinarView = () => {
  const id = window.location.href.split("webinar/")[1];
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`${API}webinar/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const dat = await response.json();
      setData(dat?.data);
      setLoading(false);
    };
    getData();
  }, []);

  const formatText = data?.description
    ? data?.description.split("<br>").map((item, index) => (
        <React.Fragment key={index}>
          {item}
          <br />
          <br />
        </React.Fragment>
      ))
    : null;

  const Loading = () => {
    return (
      <>
        <div className="cols-md-3">
          <Skeleton height={450} />
        </div>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="py-12 mt-36 flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold text-center w-[70%]  text-[--main-color]">
            {data?.topic}
          </h2>
          <div className="iframe-container">
            <iframe
              name="proprofs"
              id={data?.id}
              className="webinar-iframe"
              src={data?.meetUrl}
              frame-Border="1"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly mt-20 h-full w-full">
            <div className="w-[60%]">
              <h2 className="text-[--main-color-1] capitalize text-5xl  text-start font-semibold">
                {data?.topic}
              </h2>
              <hr className="my-4 bg-black h-[2px]" />
              <h3 className="text-xl font-bold my-8 text-justify">
                {formatText && formatText?.length > 0 ? formatText : data.desc}
              </h3>
            </div>

            <div className="">
              <img
                src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${data?.speaker?.image}`}
                alt=""
                className="outline outline-[--main-color] rounded-md"
              />
              <h2 className="text-2xl font-bold text-[--main-color-1] mt-4">
                {data?.speaker?.name}
              </h2>
              {/* <h3 className="text-[--main-color]">{data?.speaker?.position}</h3> */}
              <h3>{data?.speaker?.degree}</h3>
              <h5 className="flex mt-2 mb-2 text-xl font-semibold">
                <FontAwesomeIcon icon={faCalendar} className="mt-1" />
                &nbsp; Speaker: &nbsp; <span>{data?.date} </span>{" "}
              </h5>
              <h3 className="flex mb-12 text-xl font-semibold">
                <FontAwesomeIcon icon={faClock} className="mt-1" />
                &nbsp; Time: &nbsp; <span>{data?.date}</span>&nbsp; at{" "}
                {data?.time} hrs
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WebinarView;
