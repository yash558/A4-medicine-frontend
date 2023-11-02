import React, { Fragment, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import ReadMore from "./ReadMore";
import axios from "axios";
import PopChart from "./PopChart";
import API from "../api";
import HTMLRenderer from "./InnerHtml";

const ChartMainDetail = () => {
  const id = window.location.href.split("section/latest/")[1];
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };

  const getData = async () => {
    setLoading(true);
    const { data } = await axios.post(`${API}section/latest`, {
      id: id,
    });
    console.log(id);

    setData(data.data);

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const formatText = data?.body?.split("\n").map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));

  const Loading = () => {
    return (
      <>
        <div className="cols-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="py-12 mt-40 flex flex-col justify-center items-center text-center">
          <div className="container">
            <div className="mt-16 mb-12 section-title">
              <h2 className="flex text-2xl md:text-5xl justify-center align-center font-bold text-center ">
                <span className="">{data.section}</span>
              </h2>
              {/* <hr /> */}
            </div>

            {data.image && 
            <div className="flex justify-center flex-col items-center">
              <img
                src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${data.image}`}
                alt={data.section}
                className="h-[20rem] md:h-[50rem] items-center"
                loading="lazy"
              />
              <button
                className=" items-center  mt-10  text-center h-10 px-6  text-white hover:bg-[#F17732] text-xl  bg-[--main-color] "
                onClick={handleClick}
              >
                Open the chart in full screen
              </button>

              {isOpen && (
                <PopChart
                  onClose={handleOnClose}
                  visible={isOpen}
                  image={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${data.image}`}
                  name={data.section}
                />
              )}
            </div>
}

           
            {data.isOld === true ? (
              <div>
                {formatText?.length > 0 && (
                  <div className="h-full p-3">
                    <h5 className="text-5xl font-bold mt-12 mb-8">
                      {formatText[0]}
                    </h5>
                    <p className="text-2xl font-semibold">{formatText[1]}</p>
                    <hr className="bg-black mt-6" />
                    <ReadMore longContent={formatText.slice(2)} />
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-8 mx-auto min-w-7xl p-4 rounded-lg">
                <div className="p-4">
                  
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: data.body }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChartMainDetail;
