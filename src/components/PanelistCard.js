import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PanelWebinars from "./PanelWebinars";
import toast from "react-hot-toast";
import API from "../api";

const PanelistCard = () => {
  const id = window.location.href.split("pannellist/")[1];
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API}pannellist/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const dat = await response.json();
      if (dat.status === "success") {
        setData(dat?.data);
        setLoading(false);
      } else {
        toast.error(dat.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatText = data.description
    ? data.description.split("<br>").map((item, index) => (
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
      <div className="flex items-center justify-center h-screen mt-44">
        <>
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-0  items-center mx-20">
              <div className="flex items-center justify-center">
                <img
                  src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${data.image}`}
                  alt=""
                  className="h-[500px] w-[500px]  outline"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[--main-color-1]">
                  {data.name}
                </h1>
                <h1 className="text-xl font-semibold text-[--main-color]">
                  {data.degree}
                </h1>
                <h1 className="text-xl font-semibold">{data.position}</h1>
                <hr />
                <h3 className="text-xl font-bold my-8 text-justify">
                  {formatText && formatText?.length > 0
                    ? formatText
                    : data.desc}
                </h3>
              </div>
            </div>
          )}
        </>
      </div>
      <PanelWebinars />
    </>
  );
};

export default PanelistCard;
