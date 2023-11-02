import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";
const PlanCard = ({
  name,
  description,
  features,
  notRequired,
  color,
  price,
  onclick,
  btnText = "Start Trial",
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex min-h-[400px] w-[280px] flex-col rounded-3xl p-6  text-center shadow-lg"
    >
      <h2 className="mb-3 text-2xl font-medium">{name}</h2>
      <div className="mb-5 flex items-center justify-center text-center text-6xl font-black">
        <>
          <div>£ {price}</div>
        </>
      </div>
      <div className="mb-5 text-[1.2rem] font-[500]">{description}</div>
      <ul className="mb-10 flex flex-col gap-y-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-[16px] font-bold">
            <svg
              fill="#008000"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>tick-checkbox</title>
              <path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h20q2.464 0 4.224 1.76t1.76 4.256v20q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM4 26.016q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-20q-0.832 0-1.44 0.608t-0.576 1.408v20zM7.584 16q0-0.832 0.608-1.408t1.408-0.576 1.408 0.576l2.848 2.816 7.072-7.040q0.576-0.608 1.408-0.608t1.408 0.608 0.608 1.408-0.608 1.408l-8.48 8.48q-0.576 0.608-1.408 0.608t-1.408-0.608l-4.256-4.256q-0.608-0.576-0.608-1.408z"></path>
            </svg>
            &nbsp; {feature}
          </li>
        ))}
        {notRequired.map((feature, index) => (
          <li key={index} className="flex items-center text-[16px] font-bold">
            ❌&nbsp;{feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onclick}
        className="mt-auto rounded-xl bg-black h-12  text-xl font-bold text-white text-center"
      >
        <Link to="/signup" onClick={scrollToTop}>
          {btnText}
        </Link>
      </button>
    </div>
  );
};

export default PlanCard;
