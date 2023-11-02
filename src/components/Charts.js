import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "./SkeletonCard";
import scrollToTop from "./scrollToTop";
import API from "../api";

const Charts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState([]);

  const searchChange = (e) => {
    const filterData = data.filter((post) => {
      const str = post.section.slice(0, 1);
      if (
        (post.section.toLowerCase().includes(e.target.value.toLowerCase()) &&
          str === e.target.value.slice(0, 1)) ||
        (post.section.toLowerCase().includes(e.target.value.toLowerCase()) &&
          str.toLowerCase() === e.target.value.toLowerCase().slice(0, 1))
      ) {
        return post.section
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      } else if (!e.target.value) {
        return post.section;
      }
    });
    setSearch(filterData);
  };

  const getData = async () => {
    const response = await fetch(`${API}chart`);
    const dat = await response.json();
    console.log(dat.data);
    setData(dat.data.charts);
    setSearch(dat.data.charts);
    setLoading(false);
  };

  const sortData = () => {
    const sortedData = [...data].sort((a, b) => a.localeCompare(b));
    setData(sortedData);
  };

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className="py-12 bg-[#E1E9FB] flex flex-col justify-center items-center text-center">
      <div className="container">
        <div className="my-16 section-title">
          {/* <h2 className="flex text-5xl justify-center align-center font-bold text-center ">
            View &nbsp;<span className="text-[]">Latest Charts</span>
          </h2> */}
          {/* <hr /> */}
          {/* <input
            type="search"
            onChange={searchChange}
            placeholder="Search The Topic here ..."
            className="w-[50%] mt-12 py-4 rounded outline-none text-2xl border-2 border-black"
          /> */}
        </div>
        <div className="flex items-center justify-center  md:pd-28 ">
          <div className="grid lg:grid-cols-3  gap-y-12 gap-x-20">
            <SkeletonTheme highlightColor="#e8ffd1">
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
                search?.map((currElem) => {
                  return (
                    <div
                      className="flex  bg-white flex-col rounded-lg shadow-xl mx-12 p-2 w-64 justify-center items-center text-center"
                      key={currElem.id}
                    >
                      <img
                        src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${currElem.image}`}
                        loading="lazy"
                        alt={currElem.topic}
                        className="h-[150px]"
                      />
                      <div className="p-5">
                        <h5 className="text-[1.2rem] font-semibold">
                          {currElem.topic}
                        </h5>
                        {/* <p className="card-title mb-0">{currElem.description}</p> */}
                      </div>
                      <Link
                        to={`/chart/${currElem.id}`}
                        className="bg-[--main-color] h-11 w-32  mb-6 text-center text-white rounded-md pt-2"
                        onClick={scrollToTop}
                      >
                        Read More
                      </Link>
                    </div>
                  );
                })
              )}
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
