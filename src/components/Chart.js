import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "./SkeletonCard";
import scrollToTop from "./scrollToTop";
import API from "../api";
const Chart = () => {
  const id = window.location.href.split("latest/")[1];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(
      `${API}section/latest`,
      {
        method: "POST",
      }
    );
    const dat = await response.json();   
    setData(dat.data);
    setLoading(false);
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="py-12  flex flex-col justify-center items-center text-center">
      <div className="container">
        <div className="my-16 section-title">
          <h2 className="flex text-5xl justify-center align-center font-bold text-center text-[]">
            View &nbsp;<span className="text-[]">Latest Charts</span>
          </h2>
          {/* <hr /> */}
        </div>
        <div className="flex items-center justify-center text-center md:pd-28">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-y-12 gap-x-12">
            {" "}
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              data.map((currElem) => {
                return (
                  <div
                    className="flex flex-col rounded-lg shadow-xl w-[100%]  p-4 justify-center items-center text-center"
                    key={currElem.id}
                  >
                    <img
                      src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${currElem.image}`}
                      alt={currElem.topic}
                      className="h-[250px]"
                      loading="lazy"
                    />
                    <div className="p-5">
                      <h5 className="text-[1.2rem] font-semibold">
                        {currElem.section}
                      </h5>
                      {/* <p className="card-title mb-0">{currElem.description}</p> */}
                    </div>
                    <Link
                      to={`/section/latest/${currElem.id}`}
                      className="bg-[--main-color] h-11 w-32  mb-6 text-center text-white rounded-md pt-2"
                      onClick={scrollToTop}
                    >
                      Read More
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
