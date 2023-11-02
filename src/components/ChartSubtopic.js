import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import scrollToTop from "./scrollToTop";
import ChartSubTopicIndex from "./ChartSubTopicIndex";
import toast, { Toaster } from "react-hot-toast";
import API from "../api";

const ChartSubtopic = () => {
  const id = window.location.href.split("chart/")[1];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState([]);
  const token = localStorage.getItem("token");

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
    
    setLoading(true);
    try{
    const response = await fetch(
      `${API}chart/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const dat = await response.json();
    const sortedData = [...dat?.data.section].sort((a, b) =>
        a.topic.localeCompare(b.topic)
      );

    if (dat.status === "success") {
      setLoading(false);
      setData(sortedData);
      setTitle(dat?.data?.topic);
      setSearch(dat?.data?.section);
      
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

  return (
    <>
    <ChartSubTopicIndex/>
    <div className="py-12 bg-[#E1E9FB] pt-12 flex flex-col justify-center items-center text-center">
      <Toaster />
      <div className="container">
        <div className="my-16 section-title">
          <h2 className="flex text-5xl justify-center align-center font-bold text-center text-[]">
            <span className="">
              {loading ? <Skeleton height={50} width={300} /> : `${title}`}
            </span>
          </h2>
          {/* <div className="mt-8">
            {loading ? (
              <Skeleton height={60} width={700} />
            ) : (
              <input
                type="search"
                onChange={searchChange}
                placeholder="Search The Topic here ..."
                className="w-[50%] py-4 rounded outline-none text-2xl border-2 border-black"
              />
            )}
          </div> */}
          {/* <hr /> */}
        </div>
        <div className="flex items-center justify-center text-center">
          <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-y-12 gap-x-8">
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
              search?.map((currElem) => {
                return (
                  <div
                    className="ml-16 flex flex-col bg-white rounded-lg shadow-xl w-[70%] justify-center items-center text-center"
                    key={currElem.id}
                  >
                    <img
                      loading="lazy"
                      src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${currElem.image}`}
                      className=" w-[90%] h-[200px] p-2 rounded-t-lg object-contain"
                      alt={currElem.section}
                    />
                    <div className="p-5">
                      <h5 className="text-[1.2rem] font-semibold">
                        {currElem.section}
                      </h5>
                    </div>
                    <Link
                      to={`/chart/details/${currElem.id}`}
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
    </>
  );
};

export default ChartSubtopic;
