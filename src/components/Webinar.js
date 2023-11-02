import React, { useState, useEffect } from "react";
import WebinarCard from "./WebinarCard";
import Loading from "./Loading";
import API from "../api";

const Webinar = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(`${API}webinar`);
    const dat = await response.json();
    setData(dat?.data.webinars);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
 

  return (
    <div className="bg-[#E1E9FB]">
      <h1 className="text-3xl py-8 px-[20%] flex items-center justify-center font-bold text-center text-[--main-color]">
      Unlock the knowledge of renowned specialists at your fingertips with our Primary Care Webinars On Demand.
      </h1>
      <hr className="bg-gray-300 h-[1.2px] grid grid-cols-2  mx-24 border-dashed" />
      <div className="grid grid-cols-1 items-center justify-center">
        {loading ? (
          <>
            <Loading visible={true} color="#0058AB"  />           
          </>
        ) : (
          data?.map((web) => {
            return (
              <div className="flex items-center justify-center" key={web.id}>
                {" "}
                <WebinarCard
                  title={web.topic}
                  description={web.description}
                  image={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${web.image}`}
                  speaker={web.speaker.name}
                  date={web.date}
                  time={web.time}
                  id={web.id}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Webinar;
