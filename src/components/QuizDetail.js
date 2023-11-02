import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import API from "../api";

const QuizDetail = () => {
  const id = window.location.href.split("quiz/")[1];
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`${API}quiz/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const dat = await response.json();
      console.log(dat?.data?.embed);
      setData(dat?.data);
  
      setLoading(false);
    };
    getData();
  }, []);

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
        <div className="py-12 mt-12 flex flex-col justify-center items-center text-center">
          <div className="container">
            <iframe
              name="proprofs"
              id={data.id}
              className="w-[100%] h-[800px] mt-16"
              src={data.embed}
              frameborder="1"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizDetail;
