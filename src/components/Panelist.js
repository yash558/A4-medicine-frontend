import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { motion } from "framer-motion";
import scrollToTop from "./scrollToTop";
import toast, { Toaster } from "react-hot-toast";
import API from "../api";
const Panelist = () => {
  const [panel, setPanel] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPanelist = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API}pannellist`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data?.data?.pannellists);
        setPanel(data?.data?.pannellists);
        setLoading(false);
      } else {
        toast.error(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPanelist();
  }, []);

  return (
    <div className="my-12 min-h-screen">
      <Toaster />
      <h1 className="items-center justify-center text-5xl font-bold capitalize flex ">
        Our&nbsp;<span className="text-[--main-color-1]">Panelists</span>
      </h1>
      <hr className="mx-12 my-4" />
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Loading color="#0058AB" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 my-12">
          {panel.map((item, index) => (
            <Link to={`${item.id}`} onClick={scrollToTop}>
              <motion.div
                className="flex flex-col items-center justify-between border-2 rounded-md border-black bg-[#F4F4F4] p-8 shadow-lg h-full"
                key={index}
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${item.image}`}
                    alt=""
                    className="w-[200px] h-[200px] rounded-full"
                  />
                  <h1 className="text-3xl font-bold text-[--main-color] text-center mt-4">
                    {item.name}
                  </h1>
                  <h1 className="text-center">{item.degree}</h1>
                </div>
                <div className="flex justify-center">
                  <button className="border-2 border-[--main-color] text-[--main-color-1] h-12 w-40 text-xl mt-4">
                    <Link to={`${item.id}`} onClick={scrollToTop}>
                      View all Webinars
                    </Link>
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Panelist;
