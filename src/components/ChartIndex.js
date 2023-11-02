import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import scrollToTop from "./scrollToTop";
import { motion } from "framer-motion";
import Loading from "./Loading";
import toast, { Toaster } from "react-hot-toast";
import API from "../api";

const ChartIndex = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(`${API}chart`);
      const dat = await response.json();
      const sortedData = [...dat.data.charts].sort((a, b) =>
        a.topic.localeCompare(b.topic)
      );
      console.log(sortedData);
      if (dat.status === "success") {
        setLoading(false);
        setData(sortedData);
        
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
    <div className="py-24 mt-32 md:mt-0 bg-[--main-color] min-h-screen">
     <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto">
        <div className="my-8">
          <h3 className="text-4xl font-bold text-center text-white mb-6 mt-20">
            Medical Topics
          </h3>
          
        </div>
        <div className="flex items-center justify-center">
          {loading ? (
            <div className="flex items-center justify-center">
            <Loading color="#ffffff" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              {data.map((currElem) => (
                <Link
                  to={`/chart/${currElem.id}`}
                  onClick={scrollToTop}
                  key={currElem.id}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg p-4 shadow-md"
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
                      {currElem.topic}
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

export default ChartIndex;
