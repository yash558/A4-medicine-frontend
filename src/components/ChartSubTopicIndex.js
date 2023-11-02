import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import scrollToTop from "./scrollToTop";
import { motion } from "framer-motion";
import Loading from "./Loading";
import toast, { Toaster } from "react-hot-toast";
import API from "../api";

const ChartSubTopicIndex = () => {
  const id = window.location.href.split("chart/")[1];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API}chart/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const dat = await response.json();
        const sortedData = [...dat?.data?.section].sort((a, b) =>
          a.topic.localeCompare(b.topic)
        );

        if (dat.status === "success") {
          setLoading(false);
          setData(sortedData);
          setTitle(dat?.data?.topic);
        } else {
          toast.error(dat.message);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="py-24 md:pt-0 pt-48 bg-[--main-color] h-full">
      <Toaster />
      <div className="container mx-auto">
        <div className="my-8">
          <h3 className="text-4xl font-bold text-center text-white mb-6 mt-20">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-center">
          {loading ? (
            <Loading color="#ffffff" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
              {data
                .slice() // Create a shallow copy of the data array
                .sort((a, b) => a.section.localeCompare(b.section)) // Sort the copy alphabetically by the 'topic' property
                .map((currElem) => (
                  <Link
                    to={`/chart/details/${currElem.id}`}
                    onClick={scrollToTop}
                    key={currElem.id}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-lg p-4 h-48 shadow-md"
                    >
                      <div className="mb-4">
                        <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center">
                          <img
                            loading="lazy"
                            src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${currElem.image}`}
                            className="rounded-full object-cover h-full w-full"
                            alt={currElem.section}
                          />
                        </div>
                      </div>
                      <h2 className="text-xl text-[--main-color-1] font-semibold hover:underline">
                        {currElem.section}
                      </h2>
                    </motion.div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartSubTopicIndex;
