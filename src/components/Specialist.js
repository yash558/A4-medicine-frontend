import React, { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import API from "../api";

const Specialist = () => {
  const [panel, setPanel] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const getPanelist = async () => {
      try {
        const response = await fetch(
          `${API}pannellist`
        );
        if (response.ok) {
          const data = await response.json();
          setPanel(data?.data.pannellists);
        } else {
          throw new Error("Error retrieving panelists");
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle the error state or display an error message
      }
    };
    getPanelist();
  }, []);
  return (
    <div className="flex flex-col bg-white justify-center items-center py-8 mb-10">
      <div className="container">
        <div className="section-title py-16 ">
          <h2 className="text-5xl flex justify-center text-center uppercase text-[#1F2278] font-bold">
            Our <span>&nbsp;Specialist</span>{" "}
          </h2>
          <p className="text-2xl font-semibold mt-2 text-center ">
            A4Medicine -Learn from experts webinar panel.
          </p>
        </div>

        <div className="team-box-container">
          <div className="container">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={4000}
              autoPlay={true}
              autofocus={false}
              keyBoardControl={true}
              transitionDuration={500}
              arrows={true}
            >
              {panel.map((testimonial, id) => {
                return (
                  <Link to={`/pannellist/${testimonial.id}`} onClick={scrollToTop} key={id}>
                    <div className="mt-12" >
                      <div className="">
                        <img
                          src={`https://a4medicine-charts.s3.ap-southeast-2.amazonaws.com/${testimonial.image}`}
                          alt=""
                          className="w-64 h-64 ml-[4.5rem] rounded-full outline outline-[--main-color] object-cover text-center md:ml-14 "
                          loading="lazy"
                        />
                      </div>
                      <div className="text-[#295FDC] text-center p-16 md:p-8">
                        <strong className="text-xl text-bold">
                          {testimonial.name}
                        </strong>
                        <span>{testimonial.degree}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
