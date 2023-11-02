import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import API from "../api";
const PanelWebinars = () => {
  const id = window.location.href.split("pannellist/")[1];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const getData = async () => {
    setLoading(true);
    const response = await fetch(
      `${API}pannellist/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const dat = await response.json();
    console.log("webinars", dat.data)
    setData(dat?.data.webinars);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <h1 className="text-5xl text-bold text-center my-12">Webinars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-24">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-white w-[90%] p-2 flex items-center justify-center flex-col "
            >
              <Link to={`/webinar/${item.id}`} onClick={scrollToTop}>
                <img
                  src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${item.image}`}
                  alt=""
                />
                <h1 className="text-center text-[--main-color-1] text-xl text-bold my-4 mb-6">
                  {item.topic}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PanelWebinars;
