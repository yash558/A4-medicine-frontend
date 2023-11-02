import React, { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";
import { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import API from "../api";
import "./Quiz.css";

const Quiz = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("AKT Revision");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API}quiz`);
        const dat = await response.json();
        const sortedData = [...dat?.data?.quizes].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        if (dat.status === "success") {
          setData(sortedData);
          setLoading(false);
        } else {
        }
      } catch (error) {
        console.error(error);
        // Handle the error, e.g., show an error message to the user
      }
    };

    getData();
  }, []);
  console.log(data);
  const formatQuestionCount = (count) => {
    return count === 1 ? "1 question" : `${count} questions`;
  };

  return (
    <div className="py-12 bg-[#E1E9FB] flex flex-col justify-center items-center text-center">
      <div className="container">
        <div className="my-16 section-title">
          <h2 className="flex text-5xl justify-center align-center font-bold text-center">
            <span className="text-[color]">{title}</span>
          </h2>
        </div>
        <div className="flex items-center flex-col justify-center px-12">
          <div class="table-container m-10">
            <h1 class="text-4xl font-bold mb-6">Quiz Index</h1>
            <table class="custom-table">
              <thead>
                <tr>
                  <th class="table-header">Name</th>
                  <th class="table-header">Count</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-y-12 md:gap-x-24">
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
                data.map((currElem) => {
                  return (
                    <div
                      className="flex w-72 bg-white flex-col justify-between rounded-lg shadow-xl p-2 justify-center items-center text-center"
                      key={currElem.id}
                    >
                      <img
                        src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${currElem.image}`}
                        alt={currElem.topic}
                        className="h-[200px] w-full"
                      />
                      <div className="p-5">
                        <h5 className="text-[1.2rem] font-semibold">
                          {currElem.name}
                        </h5>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        {formatQuestionCount(currElem.count)}
                      </div>
                      <Link
                        to={`/quiz/${currElem.id}`}
                        className="bg-[--main-color] h-11 w-40 text-xl text-bold  mb-6 text-center text-white rounded-md pt-2"
                        onClick={scrollToTop}
                      >
                        Start Questions
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

export default Quiz;
